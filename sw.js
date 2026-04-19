/* ============================================================
   INTRANOTAS — Service Worker
   Estrategia: Cache-First para assets estáticos
   ============================================================ */

const CACHE_NAME = 'intranotas-v8';

/* Todos los archivos que deben estar disponibles offline */
const ARCHIVOS_A_CACHEAR = [
    './intranotas.html',
    './intranotas.css',
    './intranotas.js',
    './cursos_db.js',
    './manifest.json',
    './icon-192.png',
    './icon-512.png',
    './Harry.png',
    './sistemas.png',
    './industrial.png',
    './software.png',
    /* Fuentes de Google — se cachean en el primer uso */
    'https://fonts.googleapis.com/css2?family=Montserrat:wght@600;700;800&family=Poppins:wght@400;500;600;700&display=swap'
];

/* ── INSTALL: precachear todos los archivos del proyecto ── */
self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => {
                console.log('[SW] Cacheando archivos de INTRANOTAS...');
                /*
                 * Usamos addAll para los archivos locales (fallan si no existen)
                 * y fetch manual para las fuentes externas (no bloquean la instalación)
                 */
                const archivosLocales = ARCHIVOS_A_CACHEAR.filter(url => !url.startsWith('http'));
                const archivosExternos = ARCHIVOS_A_CACHEAR.filter(url => url.startsWith('http'));

                return cache.addAll(archivosLocales).then(() => {
                    /* Cachear fuentes en best-effort (sin bloquear) */
                    archivosExternos.forEach(url => {
                        fetch(url)
                            .then(res => { if (res.ok) cache.put(url, res); })
                            .catch(() => { /* sin conexión al instalar — no pasa nada */ });
                    });
                });
            })
            .then(() => {
                console.log('[SW] Instalación completada.');
                return self.skipWaiting(); /* activa el SW inmediatamente */
            })
    );
});

/* ── ACTIVATE: limpiar cachés viejas ── */
self.addEventListener('activate', event => {
    event.waitUntil(
        caches.keys().then(claves => {
            return Promise.all(
                claves
                    .filter(clave => clave !== CACHE_NAME)
                    .map(clave => {
                        console.log('[SW] Eliminando caché vieja:', clave);
                        return caches.delete(clave);
                    })
            );
        }).then(() => {
            console.log('[SW] Activado. Tomando control de todas las pestañas.');
            return self.clients.claim();
        })
    );
});

/* ── FETCH: Cache-First con fallback a red ── */
self.addEventListener('fetch', event => {
    /* Solo manejamos GET */
    if (event.request.method !== 'GET') return;

    event.respondWith(
        caches.match(event.request).then(respuestaCacheada => {
            if (respuestaCacheada) {
                /* Encontrado en caché — responder inmediatamente */
                return respuestaCacheada;
            }

            /* No está en caché — ir a la red y guardar para la próxima */
            return fetch(event.request)
                .then(respuestaRed => {
                    /* Solo cachear respuestas válidas */
                    if (!respuestaRed || respuestaRed.status !== 200 || respuestaRed.type === 'opaque') {
                        return respuestaRed;
                    }

                    const respuestaParaGuardar = respuestaRed.clone();
                    caches.open(CACHE_NAME).then(cache => {
                        cache.put(event.request, respuestaParaGuardar);
                    });

                    return respuestaRed;
                })
                .catch(() => {
                    /*
                     * Sin red y sin caché.
                     * Para navegaciones HTML devolvemos la página principal
                     * (el usuario seguirá viendo la app aunque pida una URL rara)
                     */
                    if (event.request.destination === 'document') {
                        return caches.match('./intranotas.html');
                    }
                });
        })
    );
});
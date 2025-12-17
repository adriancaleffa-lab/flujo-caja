const CACHE = "flujo-caja-v1";
self.addEventListener("install",e=>{
 e.waitUntil(caches.open(CACHE).then(c=>c.addAll(["index.html","listado.html","resumen.html","resumen_mensual.html","grafico.html"])));
});
self.addEventListener("fetch",e=>{
 e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request)));
});
const ARCHIVOS = [
  "index.html",
  "listado.html",
  "resumen.html",
  "resumen_mensual.html",
  "grafico.html"
];

self.addEventListener("install", e => {
  e.waitUntil(
    caches.open(CACHE).then(c => c.addAll(ARCHIVOS))
  );
});

self.addEventListener("fetch", e => {
  e.respondWith(
    caches.match(e.request).then(r => r || fetch(e.request))
  );
});

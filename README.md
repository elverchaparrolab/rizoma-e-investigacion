# Rizoma e investigación

Laboratorio de investigación rizomática: cartografía, rizoanálisis y a/r/tografía, con un cuaderno de trabajo en el navegador y asistencia opcional de un modelo local de Hugging Face. La guía y sus plantillas se conservan junto a las lecturas publicadas con [Quartz](https://quartz.jzhao.xyz).

Desarrollado por Elver Chaparro Cardozo · © 2026 · Contenidos bajo licencia [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/deed.es). Quartz conserva su licencia MIT.

Sitio: https://elverchaparrolab.github.io/rizoma-e-investigacion/

## Trabajo con datos

El cuaderno usa almacenamiento local del navegador, sin cuentas ni servidor de análisis. No está cifrado: utiliza datos anonimizados y autorizados, evita equipos compartidos y exporta respaldos. El guardado no sustituye una copia de seguridad y depende del espacio y permisos del navegador. Borrar los datos del navegador elimina el cuaderno local.

La IA es opcional. Solo al solicitar su carga se descargan Transformers.js y los pesos del modelo desde jsDelivr y Hugging Face; esos proveedores reciben solicitudes de descarga y la dirección IP. Los fragmentos se procesan en el navegador, sin API de inferencia remota ni token. La primera carga necesita conexión y puede consumir varios cientos de MB. La disponibilidad posterior sin conexión depende de la caché: no se garantiza instalación ni funcionamiento offline completo.

Las propuestas de IA son borradores para revisión humana. No demuestran relaciones, causalidad ni validez metodológica. El laboratorio conserva la distinción entre datos, interpretación y decisiones del investigador.

## Desarrollo y verificación

Para probar la aplicación sin compilar Quartz:

```sh
python3 -m http.server 8791 --bind 127.0.0.1 --directory sitio
```

Abre `http://127.0.0.1:8791/`. No publiques archivos de cuadernos o datos de participantes en este repositorio.

Las pruebas del núcleo se ejecutan con `node tests/laboratorio.cjs`. El flujo de publicación construye primero las lecturas de Quartz y copia después una lista explícita de once archivos públicos de `sitio/` a la raíz de salida. Así la portada abre el laboratorio sin romper las direcciones de las lecturas existentes. Los tests, respaldos y documentos de trabajo no se copian al sitio.

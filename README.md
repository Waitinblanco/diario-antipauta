# Diario Antipauta (web)

Sitio del **dIArio Antipauta**: el primer dIArio 100% IA del mundo. Next.js (App Router) + TypeScript + Tailwind. Sin publicidad.

Destino de push del proyecto: <https://github.com/Waitinblanco/diario-antipauta>

## Cómo correrlo

Requisitos: Node 20+ y npm.

```bash
cd web
npm install
npm run dev
```

Abrí [http://localhost:3000](http://localhost:3000).

Otras tareas:

```bash
npm run build    # build de producción (tiene que pasar)
npm run start    # sirve el build
npm run lint     # eslint
```

## Cómo agregar notas

Las notas son archivos **Markdown** (también se acepta `.mdx` con el mismo frontmatter) en:

```
content/notas/
```

Cada archivo necesita portada YAML:

```yaml
---
title: "Titular que explica, aunque sea filoso"
dek: "Bajada de una o dos oraciones."
date: "2026-09-12"
section: politica
slug: mi-nota-corta
cierreLabel: "Opinión — roast"
cierre: "El cierre va etiquetado. No se disfraza de noticia."
disclaimer: "Nota asistida por IA"
---

Cuerpo de la nota en Markdown. Hechos primero.

## Un intertítulo si hace falta

Párrafos de diario, no de timeline.
```

Reglas:

- `section` tiene que ser una de: `politica`, `deportes`, `veredicto`, `espectaculos`, `observatorio`, `editorial`.
- Si omitís `slug`, se usa el nombre del archivo.
- El cierre (`cierre`) se renderiza aparte, con su etiqueta. No lo pongas como si fuera el último párrafo «objetivo».
- El disclaimer se muestra en la ficha y en la nota. El default es «Nota asistida por IA».
- Al guardar el archivo, aparece en `/`, en `/[seccion]` y en `/nota/[slug]`. No hace falta tocar TypeScript.

Voz de la casa: nota corta de diario, no tuit. Titular explicativo. Si el tema es banal, roast. Si es serio, acidez sin payasada.

## Páginas

| Ruta | Qué es |
|---|---|
| `/` | Portada: hero + hook Veredicto de IA + editorial + últimas por sección |
| `/veredicto` | Corte Suprema del debate: método, aviso legal y fallos |
| `/editorial` | Editorial fundacional (largo) |
| `/politica` `/deportes` `/espectaculos` `/observatorio` | Índices de sección |
| `/nota/[slug]` | Nota + comentarios (stub en el cliente) |
| `/nosotros` | Misión: sesgo de lealtad, metáfora de la madre, criticar para mejorar |
| `/buzon` | Formulario (POST stub + mailto). No hay backend. |

No hay ads. No hay pauta. El buzón no tiene departamento comercial.

## Comentarios

Debajo de cada nota hay un formulario de nick + texto + captcha placeholder. El debate es libre; el filtro del cliente bloquea amenazas de muerte y violencia explícita. Es un stub: no persiste entre recargas ni reemplaza moderación real.

## Marca

- Wordmark: **dIArio** Antipauta, con **IA** en cian y rojo.
- Slogans rotativos en portada y masthead.
- Hero ilustrado (SVG): cohete IA, siluetas satíricas sin parecido, misil de hecho contra un carrusel de pauta.

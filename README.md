# cifrasde.com

Hub público del proyecto **Cifras de España**: red de 7 webs verticales con datos públicos accesibles. Esta landing funciona como enlace en bio de TikTok, YouTube y X.

## Stack

- Next.js 15 (App Router)
- React 19
- TypeScript estricto
- Tailwind CSS 4
- Fuente `geist` (Sans + Mono)

Sin BBDD, sin backend, sin analítica, sin formularios. Todo SSG estático.

## Desarrollo local

```bash
npm install
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000).

## Build de producción

```bash
npm run build
npm run start
```

## Deploy en Vercel

1. Importa el repo `borjacifu/cifrasde.com` desde el dashboard de Vercel.
2. Framework preset: **Next.js** (autodetectado).
3. Build command: `next build` · Output: `.next` (por defecto). Sin variables de entorno.
4. Project name: `cifrasde-com`.
5. Pulsa **Deploy**.

## Apuntar `cifrasde.com` en Cloudflare DNS

El dominio está registrado en Namecheap y los DNS apuntan a Cloudflare.

En el panel DNS de Cloudflare, sobre la zona `cifrasde.com`:

| Tipo  | Nombre | Contenido            | Proxy        | TTL  |
|-------|--------|----------------------|--------------|------|
| A     | `@`    | `76.76.21.21`        | **DNS only (gris)** | Auto |
| CNAME | `www`  | `cname.vercel-dns.com` | **DNS only (gris)** | Auto |

> El proxy debe ir **en gris** (DNS only) para que Vercel pueda servir directamente y emitir el certificado TLS sin conflictos.

Después, en Vercel → Project → **Settings → Domains**, añade `cifrasde.com` y `www.cifrasde.com`. Vercel verificará el A record y emitirá el certificado automáticamente.

## Estructura

```
cifrasde.com/
├── app/
│   ├── layout.tsx           # metadatos SEO, OG, schema.org
│   ├── page.tsx             # landing completa
│   ├── data.ts              # 7 webs + 37 fuentes
│   ├── globals.css          # tokens y utilidades
│   ├── opengraph-image.tsx  # OG 1200x630 generada
│   ├── icon.tsx             # favicon dinámico
│   ├── sitemap.ts
│   ├── robots.ts
│   └── not-found.tsx
├── next.config.mjs
├── tailwind (v4 vía @import en globals.css)
└── package.json
```

## Las 7 webs de la red

| Dominio              | Tema                                                  |
|----------------------|-------------------------------------------------------|
| electricidadde.com   | Precio horario de la luz y mix energético             |
| gasolinade.com       | Precios diarios de carburantes y fiscalidad           |
| impuestosde.com      | Tipos, escalas y recaudación de tributos              |
| pensionde.com        | Cuantías y reformas del sistema de pensiones          |
| salariode.com        | Salarios por profesión, sector y CCAA                 |
| sueldode.com         | Retribuciones del sector público y cargos electos     |
| viviendade.com       | Precio m², alquiler, hipotecas y Euríbor              |

## Contacto

[hola@cifrasde.com](mailto:hola@cifrasde.com)

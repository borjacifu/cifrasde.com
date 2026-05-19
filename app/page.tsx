import Link from "next/link";
import { SITES, SOURCE_GROUPS, TOTAL_SOURCES } from "./data";

const SOCIAL = [
  {
    name: "X",
    handle: "@cifrasdees",
    href: "https://x.com/cifrasdees",
    blurb: "Datos del día, gráficos cortos y rectificaciones.",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="h-6 w-6">
        <path
          fill="currentColor"
          d="M18.244 2H21l-6.51 7.44L22 22h-6.844l-5.36-6.99L3.6 22H1l6.96-7.96L2 2h6.91l4.85 6.41L18.244 2Zm-1.2 18h1.86L7.04 4H5.07l11.974 16Z"
        />
      </svg>
    ),
  },
  {
    name: "TikTok",
    handle: "@cifrasdees",
    href: "https://www.tiktok.com/@cifrasdees",
    blurb: "Vídeos cortos con la cifra del día, en formato vertical.",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="h-6 w-6">
        <path
          fill="currentColor"
          d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5.8 20.1a6.34 6.34 0 0 0 10.86-4.43V8.96a8.16 8.16 0 0 0 4.77 1.52V7.04a4.85 4.85 0 0 1-1.84-.35Z"
        />
      </svg>
    ),
  },
  {
    name: "YouTube",
    handle: "@CifrasdeEspaña",
    href: "https://www.youtube.com/@CifrasdeEspaña",
    blurb: "Explicaciones largas, comparativas y series anuales.",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="h-6 w-6">
        <path
          fill="currentColor"
          d="M23.5 6.2a3 3 0 0 0-2.1-2.13C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.57A3 3 0 0 0 .5 6.2 31.4 31.4 0 0 0 0 12a31.4 31.4 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.13C4.5 20.5 12 20.5 12 20.5s7.5 0 9.4-.57a3 3 0 0 0 2.1-2.13A31.4 31.4 0 0 0 24 12a31.4 31.4 0 0 0-.5-5.8ZM9.6 15.6V8.4l6.3 3.6Z"
        />
      </svg>
    ),
  },
];

function ArrowOut() {
  return (
    <svg
      viewBox="0 0 16 16"
      aria-hidden="true"
      className="h-4 w-4 shrink-0 transition-transform duration-300 ease-out group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
    >
      <path
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="square"
        d="M4 12L12 4M5 4h7v7"
      />
    </svg>
  );
}

export default function Home() {
  const year = new Date().getFullYear();
  const marqueeItems = [
    "Datos públicos",
    "Metodología abierta",
    "Sin opinión",
    "Sin sesgo",
    "Trazabilidad por dato",
    "Actualización continua",
  ];

  return (
    <main className="mx-auto max-w-[1240px] px-5 sm:px-8 lg:px-12">
      {/* ─────────────────────────── Header ─────────────────────────── */}
      <header className="flex items-center justify-between border-b hairline pb-5 pt-6 sm:pt-8">
        <Link
          href="/"
          className="group inline-flex items-center gap-2.5"
          aria-label="Cifras de España"
        >
          <span
            aria-hidden="true"
            className="relative inline-flex h-2 w-2 items-center justify-center"
          >
            <span className="absolute inset-0 rounded-full bg-[var(--color-accent)] breathe" />
            <span className="relative h-2 w-2 rounded-full bg-[var(--color-accent)]" />
          </span>
          <span className="text-[15px] font-medium tracking-tight">
            Cifras de España
          </span>
        </Link>

        <span className="hidden text-[13px] text-[var(--color-mute)] sm:inline-flex">
          Hub editorial
        </span>
      </header>

      {/* ─────────────────────────── Kinetic strip ─────────────────────────── */}
      <div className="overflow-hidden border-b hairline">
        <div className="marquee-track flex whitespace-nowrap py-2 text-[11px] uppercase tracking-[0.2em] text-[var(--color-mute)]">
          {[...marqueeItems, ...marqueeItems, ...marqueeItems].map((t, i) => (
            <span key={i} className="px-6">
              · {t}
            </span>
          ))}
        </div>
      </div>

      {/* ─────────────────────────── Hero ─────────────────────────── */}
      <section
        aria-label="Presentación"
        className="grid grid-cols-1 gap-10 border-b hairline py-14 sm:py-20 lg:grid-cols-12 lg:gap-8 lg:py-28"
      >
        <div className="lg:col-span-7 rise" style={{ ["--i" as string]: 0 }}>
          <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-[var(--color-mute)]">
            Edición · 2026
          </p>
          <h1 className="mt-5 text-[40px] font-medium leading-[1.02] tracking-[-0.02em] sm:text-[58px] lg:text-[76px]">
            Las cifras que
            <br />
            <span className="italic font-normal text-[var(--color-ink-soft)]">
              explican
            </span>{" "}
            España.
          </h1>
          <p className="mt-7 max-w-[58ch] text-[17px] leading-relaxed text-[var(--color-ink-soft)] sm:text-[18px]">
            Una red de <strong className="font-medium text-[var(--color-ink)]">siete webs</strong>{" "}
            independientes que toma datos de organismos públicos oficiales —
            INE, Banco de España, ministerios, REE— y los publica de forma
            navegable, comparable y sin filtros editoriales.
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-4 text-[13px]">
            <a
              href="#webs"
              className="group inline-flex min-h-12 items-center gap-2.5 rounded-full bg-[var(--color-ink)] px-5 text-[var(--color-paper)] transition-transform active:translate-y-px"
            >
              <span>Ver las siete webs</span>
              <span
                aria-hidden="true"
                className="inline-flex h-1.5 w-1.5 rounded-full bg-[var(--color-paper)] transition-transform duration-300 ease-out group-hover:translate-x-0.5"
              />
            </a>
            <a
              href="#fuentes"
              className="group inline-flex min-h-12 items-center gap-2 px-1 text-[var(--color-ink-soft)] underline decoration-[var(--color-line)] decoration-1 underline-offset-[6px] transition-colors hover:text-[var(--color-ink)] hover:decoration-[var(--color-ink)]"
            >
              <span>Las {TOTAL_SOURCES} fuentes</span>
            </a>
          </div>
        </div>

        <aside
          className="lg:col-span-5 rise"
          style={{ ["--i" as string]: 1 }}
          aria-label="Indicadores del proyecto"
        >
          <dl className="grid grid-cols-2 gap-px overflow-hidden rounded-md border bg-[var(--color-line)] hairline lg:mt-1">
            <Stat label="Webs verticales" value="07" />
            <Stat label="Fuentes públicas" value={String(TOTAL_SOURCES).padStart(2, "0")} />
            <Stat label="Idioma" value="ES" />
            <Stat label="Sesgo editorial" value="·00·" />
          </dl>
          <p className="mt-5 text-[13px] leading-relaxed text-[var(--color-mute)]">
            Cada web mantiene su propia metodología, sus propios datos y
            su propio calendario de actualización. Esta página es solo
            el índice.
          </p>
        </aside>
      </section>

      {/* ─────────────────────────── Qué hacemos ─────────────────────────── */}
      <section
        aria-labelledby="manifiesto"
        className="grid grid-cols-1 gap-12 border-b hairline py-16 sm:py-24 lg:grid-cols-12 lg:gap-16"
      >
        <div className="lg:col-span-4">
          <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-[var(--color-mute)]">
            01 · Qué hacemos
          </p>
          <h2
            id="manifiesto"
            className="mt-5 text-[28px] font-medium leading-[1.1] tracking-tight sm:text-[34px]"
          >
            Datos brutos del Estado, leídos como prensa.
          </h2>
        </div>
        <div className="space-y-6 text-[16px] leading-relaxed text-[var(--color-ink-soft)] sm:text-[17px] lg:col-span-7 lg:col-start-6">
          <p>
            Cifras de España no inventa indicadores. Toma series ya
            publicadas por el INE, el Banco de España, la AEAT, la
            Seguridad Social, Eurostat y otros organismos, las normaliza,
            las contextualiza y las publica en webs especializadas por
            temática: una para la luz, otra para los carburantes, otra
            para los salarios, y así hasta siete.
          </p>
          <p>
            Cada web es independiente. Cada cifra cita su fuente, su
            fecha y su unidad. La metodología está visible en cada
            dominio, no escondida en notas al pie. Si una serie se
            actualiza, la web cambia; si una cifra estaba mal, se
            corrige a la vista.
          </p>
          <p>
            Sin opinión, sin titulares de impacto y sin pivotar el dato
            para sostener una tesis. Solo el dato bien servido.
          </p>
        </div>
      </section>

      {/* ─────────────────────────── Grid de webs ─────────────────────────── */}
      <section id="webs" aria-labelledby="webs-title" className="border-b hairline py-16 sm:py-24">
        <div className="mb-10 flex items-end justify-between gap-6 sm:mb-14">
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-[var(--color-mute)]">
              02 · La red
            </p>
            <h2
              id="webs-title"
              className="mt-5 text-[28px] font-medium leading-[1.1] tracking-tight sm:text-[34px]"
            >
              Siete webs, siete temas.
            </h2>
          </div>
          <span className="hidden font-mono text-[12px] text-[var(--color-mute)] sm:inline">
            01 — 07
          </span>
        </div>

        <ul className="grid grid-cols-1 gap-px overflow-hidden rounded-md border bg-[var(--color-line)] hairline sm:grid-cols-2 lg:grid-cols-3">
          {SITES.map((site, idx) => (
            <li key={site.domain} className="bg-[var(--color-paper)]">
              <a
                href={site.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex h-full min-h-[180px] flex-col justify-between gap-6 p-6 transition-colors hover:bg-[var(--color-cream)] sm:p-7"
                aria-label={`Ir a ${site.domain}`}
              >
                <div className="flex items-start justify-between">
                  <span className="font-mono text-[12px] tabular text-[var(--color-mute)]">
                    {String(idx + 1).padStart(2, "0")}
                  </span>
                  <span className="text-[11px] uppercase tracking-[0.18em] text-[var(--color-mute)]">
                    {site.tag}
                  </span>
                </div>

                <div>
                  <h3 className="flex items-baseline gap-0.5 text-[24px] font-medium leading-tight tracking-tight sm:text-[26px]">
                    <span>{site.display}</span>
                    <span className="text-[var(--color-mute)]">de.</span>
                  </h3>
                  <p className="mt-3 text-[14px] leading-relaxed text-[var(--color-ink-soft)]">
                    {site.topic}
                  </p>
                </div>

                <div className="flex items-center justify-between border-t hairline pt-4 text-[12px] text-[var(--color-mute)]">
                  <span className="font-mono">{site.domain}</span>
                  <ArrowOut />
                </div>
              </a>
            </li>
          ))}
          {/* Empty cell to round the 7-card grid on desktop */}
          <li
            aria-hidden="true"
            className="hidden bg-[var(--color-cream)] lg:flex lg:items-center lg:justify-center"
          >
            <span className="font-mono text-[11px] uppercase tracking-[0.25em] text-[var(--color-mute)]">
              fin de la red
            </span>
          </li>
          <li
            aria-hidden="true"
            className="hidden bg-[var(--color-cream)] sm:flex sm:items-center sm:justify-center sm:p-7 lg:hidden"
          >
            <span className="font-mono text-[11px] uppercase tracking-[0.25em] text-[var(--color-mute)]">
              fin de la red
            </span>
          </li>
        </ul>
      </section>

      {/* ─────────────────────────── Fuentes ─────────────────────────── */}
      <section
        id="fuentes"
        aria-labelledby="fuentes-title"
        className="border-b hairline py-16 sm:py-24"
      >
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-[var(--color-mute)]">
              03 · Fuentes
            </p>
            <h2
              id="fuentes-title"
              className="mt-5 text-[28px] font-medium leading-[1.1] tracking-tight sm:text-[34px]"
            >
              {TOTAL_SOURCES} organismos públicos.
            </h2>
            <p className="mt-6 max-w-[40ch] text-[16px] leading-relaxed text-[var(--color-ink-soft)]">
              Cifras de España agrega información de {TOTAL_SOURCES} fuentes
              oficiales españolas, europeas e internacionales. Cada web
              de la red declara exactamente las que utiliza en su propia
              página de metodología.
            </p>
          </div>

          <div className="space-y-10 lg:col-span-8">
            {SOURCE_GROUPS.map((group) => (
              <div key={group.label}>
                <div className="mb-4 flex items-center gap-4">
                  <h3 className="text-[13px] font-medium uppercase tracking-[0.14em] text-[var(--color-ink)]">
                    {group.label}
                  </h3>
                  <div className="h-px flex-1 bg-[var(--color-line)]" />
                  <span className="font-mono text-[12px] text-[var(--color-mute)]">
                    {String(group.items.length).padStart(2, "0")}
                  </span>
                </div>
                <ul className="flex flex-wrap gap-x-6 gap-y-2 text-[15px] text-[var(--color-ink-soft)]">
                  {group.items.map((item) => (
                    <li key={item} className="leading-snug">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────────────────── Síguenos ─────────────────────────── */}
      <section
        id="rrss"
        aria-labelledby="rrss-title"
        className="border-b hairline py-16 sm:py-24"
      >
        <div className="mb-10 sm:mb-14">
          <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-[var(--color-mute)]">
            04 · Redes
          </p>
          <h2
            id="rrss-title"
            className="mt-5 text-[28px] font-medium leading-[1.1] tracking-tight sm:text-[34px]"
          >
            La cifra del día,
            <br className="sm:hidden" /> donde tú lees.
          </h2>
        </div>

        <ul className="grid grid-cols-1 gap-px overflow-hidden rounded-md border bg-[var(--color-line)] hairline sm:grid-cols-3">
          {SOCIAL.map((s) => (
            <li key={s.name} className="bg-[var(--color-paper)]">
              <a
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex h-full min-h-[160px] flex-col justify-between gap-8 p-7 transition-colors hover:bg-[var(--color-cream)]"
              >
                <div className="flex items-start justify-between">
                  <span className="text-[var(--color-ink)]">{s.icon}</span>
                  <ArrowOut />
                </div>
                <div>
                  <div className="flex items-baseline gap-3">
                    <h3 className="text-[20px] font-medium tracking-tight">
                      {s.name}
                    </h3>
                    <span className="font-mono text-[12px] text-[var(--color-mute)]">
                      {s.handle}
                    </span>
                  </div>
                  <p className="mt-2 text-[13px] leading-relaxed text-[var(--color-ink-soft)]">
                    {s.blurb}
                  </p>
                </div>
              </a>
            </li>
          ))}
        </ul>
      </section>

      {/* ─────────────────────────── Footer ─────────────────────────── */}
      <footer className="grid grid-cols-1 gap-8 py-12 sm:grid-cols-3 sm:py-16">
        <div>
          <Link href="/" className="inline-flex items-center gap-2.5">
            <span className="h-2 w-2 rounded-full bg-[var(--color-accent)]" />
            <span className="text-[14px] font-medium tracking-tight">
              Cifras de España
            </span>
          </Link>
          <p className="mt-3 max-w-[34ch] text-[13px] leading-relaxed text-[var(--color-mute)]">
            Proyecto editorial independiente. Datos públicos, leídos
            despacio.
          </p>
        </div>

        <div className="sm:text-center">
          <p className="text-[12px] uppercase tracking-[0.2em] text-[var(--color-mute)]">
            Contacto
          </p>
          <a
            href="mailto:hola@cifrasde.com"
            className="mt-2 inline-block text-[14px] underline decoration-[var(--color-line)] decoration-1 underline-offset-[5px] transition-colors hover:decoration-[var(--color-ink)]"
          >
            hola@cifrasde.com
          </a>
        </div>

        <div className="flex flex-col gap-1 text-[12px] text-[var(--color-mute)] sm:items-end">
          <span className="font-mono">© {year} Cifras de España</span>
          <span>Hecho en Madrid · publicado en abierto</span>
        </div>
      </footer>
    </main>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="bg-[var(--color-paper)] p-5 sm:p-6">
      <dt className="text-[11px] uppercase tracking-[0.18em] text-[var(--color-mute)]">
        {label}
      </dt>
      <dd className="mt-2 font-mono text-[28px] tabular text-[var(--color-ink)] sm:text-[32px]">
        {value}
      </dd>
    </div>
  );
}

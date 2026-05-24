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
  {
    name: "Instagram",
    handle: "@cifrasde_es",
    href: "https://www.instagram.com/cifrasde_es",
    blurb: "Carruseles visuales con datos del día, semana y mes.",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="h-6 w-6">
        <path
          fill="currentColor"
          d="M12 2.2c3.2 0 3.6 0 4.85.07 1.17.05 1.8.25 2.22.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.05.41 2.22.07 1.25.07 1.65.07 4.85s0 3.6-.07 4.85c-.05 1.17-.25 1.8-.41 2.22-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.16-1.05.36-2.22.41-1.25.07-1.65.07-4.85.07s-3.6 0-4.85-.07c-1.17-.05-1.8-.25-2.22-.41a3.7 3.7 0 0 1-1.38-.9 3.7 3.7 0 0 1-.9-1.38c-.16-.42-.36-1.05-.41-2.22C2.2 15.6 2.2 15.2 2.2 12s0-3.6.07-4.85c.05-1.17.25-1.8.41-2.22.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.05-.36 2.22-.41C8.4 2.2 8.8 2.2 12 2.2Zm0 1.8c-3.15 0-3.52 0-4.76.06-1.07.05-1.65.23-2.04.38a3.4 3.4 0 0 0-1.27.83 3.4 3.4 0 0 0-.83 1.27c-.15.39-.33.97-.38 2.04C2.66 9.48 2.65 9.85 2.65 13s.01 3.52.06 4.76c.05 1.07.23 1.65.38 2.04.21.54.46.92.83 1.27.35.37.73.62 1.27.83.39.15.97.33 2.04.38 1.24.05 1.61.06 4.76.06s3.52-.01 4.76-.06c1.07-.05 1.65-.23 2.04-.38a3.4 3.4 0 0 0 1.27-.83c.37-.35.62-.73.83-1.27.15-.39.33-.97.38-2.04.05-1.24.06-1.61.06-4.76s-.01-3.52-.06-4.76c-.05-1.07-.23-1.65-.38-2.04a3.4 3.4 0 0 0-.83-1.27 3.4 3.4 0 0 0-1.27-.83c-.39-.15-.97-.33-2.04-.38C15.52 4 15.15 4 12 4Zm0 3.8a4.2 4.2 0 1 1 0 8.4 4.2 4.2 0 0 1 0-8.4Zm0 1.8a2.4 2.4 0 1 0 0 4.8 2.4 2.4 0 0 0 0-4.8Zm5.4-2.3a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"
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
          className="group inline-flex items-center gap-3"
          aria-label="Cifras de España"
        >
          <span
            aria-hidden="true"
            className="relative inline-flex h-10 w-10 overflow-hidden rounded-[8px] shadow-[0_2px_10px_-4px_rgba(15,14,12,0.3)] sm:h-7 sm:w-7 sm:rounded-[6px] sm:shadow-[0_2px_8px_-4px_rgba(15,14,12,0.25)]"
          >
            <svg viewBox="0 0 64 64" className="h-full w-full">
              <rect width="64" height="64" fill="#F5F1E8" />
              <text
                x="32"
                y="46"
                fontFamily="Georgia, 'Times New Roman', serif"
                fontSize="44"
                textAnchor="middle"
                fill="#0F0E0C"
              >
                C
              </text>
              <circle cx="49" cy="20" r="4" fill="#B4561F" />
            </svg>
          </span>
          <span
            className="text-[18px] tracking-tight sm:text-[16px]"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Cifras <span style={{ fontStyle: "italic", color: "var(--color-mute)" }}>de</span> España
          </span>
        </Link>

        <span className="hidden items-center gap-2.5 font-mono text-[11px] uppercase tracking-[0.2em] text-[var(--color-mute)] sm:inline-flex">
          <span className="ocre-dot" aria-hidden="true" />
          <span>Hub editorial · 2026</span>
        </span>
      </header>

      {/* ─────────────────────────── Kinetic strip ─────────────────────────── */}
      <div className="overflow-hidden border-b hairline">
        <div className="marquee-track flex whitespace-nowrap py-2 text-[11px] uppercase tracking-[0.2em] text-[var(--color-mute)]">
          {[...marqueeItems, ...marqueeItems, ...marqueeItems].map((t, i) => (
            <span key={i} className="px-6">
              <span className="eyebrow-sep">·</span> {t}
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
          <p className="inline-flex items-center gap-2.5 font-mono text-[11px] uppercase tracking-[0.25em] text-[var(--color-mute)]">
            <span className="ocre-dot" aria-hidden="true" />
            <span>Edición <span className="eyebrow-sep">·</span> 2026</span>
          </p>
          <h1
            className="mt-5 text-[42px] leading-[1.02] tracking-[-0.025em] sm:text-[62px] lg:text-[82px]"
            style={{ fontFamily: "var(--font-display)", fontWeight: 400 }}
          >
            Las cifras que
            <br />
            <span className="italic text-[var(--color-mute)]">
              explican
            </span>{" "}
            <span className="ocre-underline">España</span>.
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
              className="group inline-flex min-h-12 items-center gap-3 rounded-full bg-[var(--color-ink)] px-5 text-[var(--color-paper)] transition-transform active:translate-y-px"
            >
              <span>
                Las{" "}
                <span className="font-mono tabular text-[var(--color-accent)]">
                  7
                </span>{" "}
                webs
              </span>
              <svg
                viewBox="0 0 16 16"
                aria-hidden="true"
                className="nudge h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1"
              >
                <path
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="square"
                  d="M2 8h11M9 4l4 4-4 4"
                />
              </svg>
            </a>
            <a
              href="#fuentes"
              className="group inline-flex min-h-12 items-center gap-2 px-1 text-[var(--color-ink-soft)] underline decoration-[var(--color-line)] decoration-1 underline-offset-[6px] transition-colors hover:text-[var(--color-ink)] hover:decoration-[var(--color-accent)]"
            >
              <span>
                Las{" "}
                <span className="font-mono tabular text-[var(--color-accent)]">
                  {TOTAL_SOURCES}
                </span>{" "}
                fuentes
              </span>
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
            <span className="tabular">01</span> <span className="eyebrow-sep">·</span> Qué hacemos
          </p>
          <h2
            id="manifiesto"
            className="mt-5 text-[30px] leading-[1.08] tracking-[-0.015em] sm:text-[38px]"
            style={{ fontFamily: "var(--font-display)", fontWeight: 400 }}
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
              <span className="tabular">02</span> <span className="eyebrow-sep">·</span> La red
            </p>
            <h2
              id="webs-title"
              className="mt-5 text-[30px] leading-[1.08] tracking-[-0.015em] sm:text-[38px]"
              style={{ fontFamily: "var(--font-display)", fontWeight: 400 }}
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
                className="group lift-card flex h-full min-h-[180px] flex-col justify-between gap-6 p-6 hover:bg-[var(--color-cream)] sm:p-7"
                aria-label={`Ir a ${site.domain}`}
              >
                <div className="flex items-start justify-between">
                  <span className="font-mono text-[12px] tabular text-[var(--color-mute)] transition-colors duration-300 group-hover:text-[var(--color-accent)]">
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
                  <span className="text-[var(--color-mute)] transition-colors duration-300 group-hover:text-[var(--color-accent)]">
                    <ArrowOut />
                  </span>
                </div>
              </a>
            </li>
          ))}
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
              <span className="tabular">03</span> <span className="eyebrow-sep">·</span> Fuentes
            </p>
            <h2
              id="fuentes-title"
              className="mt-5 text-[30px] leading-[1.08] tracking-[-0.015em] sm:text-[38px]"
              style={{ fontFamily: "var(--font-display)", fontWeight: 400 }}
            >
              <span className="shimmer-accent tabular">{TOTAL_SOURCES}</span> organismos públicos.
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
                  <span className="font-mono text-[12px] tabular text-[var(--color-accent)]">
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
            <span className="tabular">04</span> <span className="eyebrow-sep">·</span> Redes
          </p>
          <h2
            id="rrss-title"
            className="mt-5 text-[30px] leading-[1.08] tracking-[-0.015em] sm:text-[38px]"
            style={{ fontFamily: "var(--font-display)", fontWeight: 400 }}
          >
            La cifra del día,
            <br className="sm:hidden" /> donde tú lees.
          </h2>
        </div>

        <ul className="grid grid-cols-1 gap-px overflow-hidden rounded-md border bg-[var(--color-line)] hairline sm:grid-cols-2 lg:grid-cols-4">
          {SOCIAL.map((s) => (
            <li key={s.name} className="bg-[var(--color-paper)]">
              <a
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group lift-card flex h-full min-h-[160px] flex-col justify-between gap-8 p-7 hover:bg-[var(--color-cream)]"
                aria-label={`Abrir ${s.name} de Cifras de España`}
              >
                <div className="flex items-start justify-between">
                  <span className="text-[var(--color-ink)] transition-colors duration-300 group-hover:text-[var(--color-accent)]">
                    {s.icon}
                  </span>
                  <span className="text-[var(--color-mute)] transition-colors duration-300 group-hover:text-[var(--color-accent)]">
                    <ArrowOut />
                  </span>
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
      <footer className="py-12 sm:py-16">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
          <div>
            <Link href="/" className="inline-flex items-center gap-2.5">
              <span className="relative inline-flex h-5 w-5 overflow-hidden rounded-[4px]">
                <svg viewBox="0 0 64 64" className="h-full w-full">
                  <rect width="64" height="64" fill="#F5F1E8" />
                  <text
                    x="32"
                    y="46"
                    fontFamily="Georgia, 'Times New Roman', serif"
                    fontSize="44"
                    textAnchor="middle"
                    fill="#0F0E0C"
                  >
                    C
                  </text>
                  <circle cx="49" cy="20" r="4" fill="#B4561F" />
                </svg>
              </span>
              <span
                className="text-[15px] tracking-tight"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Cifras <span style={{ fontStyle: "italic", color: "var(--color-mute)" }}>de</span> España
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
        </div>

        <div className="mt-10 flex flex-wrap items-center gap-x-5 gap-y-2 border-t hairline pt-6 text-[12px] text-[var(--color-mute)]">
          <Link
            href="/aviso-legal"
            className="underline decoration-[var(--color-line)] decoration-1 underline-offset-[5px] transition-colors hover:decoration-[var(--color-ink)] hover:text-[var(--color-ink)]"
          >
            Aviso legal
          </Link>
          <Link
            href="/privacidad"
            className="underline decoration-[var(--color-line)] decoration-1 underline-offset-[5px] transition-colors hover:decoration-[var(--color-ink)] hover:text-[var(--color-ink)]"
          >
            Privacidad
          </Link>
          <Link
            href="/cookies"
            className="underline decoration-[var(--color-line)] decoration-1 underline-offset-[5px] transition-colors hover:decoration-[var(--color-ink)] hover:text-[var(--color-ink)]"
          >
            Cookies
          </Link>
          <Link
            href="/terminos"
            className="underline decoration-[var(--color-line)] decoration-1 underline-offset-[5px] transition-colors hover:decoration-[var(--color-ink)] hover:text-[var(--color-ink)]"
          >
            Términos
          </Link>
        </div>
      </footer>
    </main>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="group relative bg-[var(--color-paper)] p-5 transition-colors duration-300 hover:bg-[var(--color-cream)] sm:p-6">
      <dt className="text-[11px] uppercase tracking-[0.18em] text-[var(--color-mute)]">
        {label}
      </dt>
      <dd className="mt-2 inline-block font-mono text-[28px] tabular text-[var(--color-ink)] sm:text-[32px]">
        <span className="relative">
          {value}
          <span
            aria-hidden="true"
            className="absolute -bottom-1 left-0 h-[2px] w-0 bg-[var(--color-accent)] transition-[width] duration-500 ease-out group-hover:w-full"
          />
        </span>
      </dd>
    </div>
  );
}

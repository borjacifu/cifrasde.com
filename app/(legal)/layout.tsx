import Link from "next/link";

const LEGAL_LINKS = [
  { href: "/aviso-legal", label: "Aviso legal" },
  { href: "/privacidad", label: "Privacidad" },
  { href: "/cookies", label: "Cookies" },
  { href: "/terminos", label: "Términos" },
];

export default function LegalLayout({ children }: { children: React.ReactNode }) {
  const year = new Date().getFullYear();

  return (
    <main className="mx-auto max-w-[860px] px-5 sm:px-8 lg:px-12">
      <header className="flex items-center justify-between border-b hairline pb-5 pt-6 sm:pt-8">
        <Link
          href="/"
          className="group inline-flex items-center gap-3"
          aria-label="Cifras de España"
        >
          <span
            aria-hidden="true"
            className="relative inline-flex h-9 w-9 overflow-hidden rounded-[7px] shadow-[0_2px_10px_-4px_rgba(15,14,12,0.3)] sm:h-7 sm:w-7 sm:rounded-[6px] sm:shadow-[0_2px_8px_-4px_rgba(15,14,12,0.25)]"
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
            className="text-[16px] tracking-tight"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Cifras <span style={{ fontStyle: "italic", color: "var(--color-mute)" }}>de</span> España
          </span>
        </Link>

        <Link
          href="/"
          className="group inline-flex items-center gap-2 text-[12px] uppercase tracking-[0.18em] text-[var(--color-mute)] transition-colors hover:text-[var(--color-ink)]"
        >
          <svg
            viewBox="0 0 16 16"
            aria-hidden="true"
            className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-x-1"
          >
            <path
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="square"
              d="M14 8H3M7 4l-4 4 4 4"
            />
          </svg>
          <span className="hidden sm:inline">Volver al índice</span>
        </Link>
      </header>

      <article className="py-14 sm:py-20">{children}</article>

      <footer className="grid grid-cols-1 gap-8 border-t hairline py-12 sm:grid-cols-3 sm:py-14">
        <div>
          <Link href="/" className="inline-flex items-center gap-2.5">
            <span
              aria-hidden="true"
              className="relative inline-flex h-5 w-5 overflow-hidden rounded-[4px]"
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
              className="text-[15px] tracking-tight"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Cifras <span style={{ fontStyle: "italic", color: "var(--color-mute)" }}>de</span> España
            </span>
          </Link>
          <p className="mt-3 max-w-[34ch] text-[13px] leading-relaxed text-[var(--color-mute)]">
            Proyecto editorial independiente. Datos públicos, leídos despacio.
          </p>
        </div>

        <nav aria-label="Documentos legales" className="sm:text-center">
          <p className="text-[12px] uppercase tracking-[0.2em] text-[var(--color-mute)]">
            Documentos
          </p>
          <ul className="mt-2 flex flex-col gap-1.5 text-[13px] sm:items-center">
            {LEGAL_LINKS.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className="underline decoration-[var(--color-line)] decoration-1 underline-offset-[5px] transition-colors hover:decoration-[var(--color-ink)]"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex flex-col gap-1 text-[12px] text-[var(--color-mute)] sm:items-end">
          <a
            href="mailto:hola@cifrasde.com"
            className="text-[14px] text-[var(--color-ink)] underline decoration-[var(--color-line)] decoration-1 underline-offset-[5px] transition-colors hover:decoration-[var(--color-ink)]"
          >
            hola@cifrasde.com
          </a>
          <span className="font-mono mt-2">© {year} Cifras de España</span>
        </div>
      </footer>
    </main>
  );
}

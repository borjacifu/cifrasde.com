import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Instagram OAuth · callback",
  description: "Página técnica de callback para el flujo OAuth de Instagram.",
  robots: { index: false, follow: false },
};

type SearchParams = Promise<{
  code?: string;
  state?: string;
  error?: string;
  error_reason?: string;
  error_description?: string;
}>;

export default async function InstagramCallback({
  searchParams,
}: {
  searchParams: SearchParams;
}) {
  const params = await searchParams;
  const { code, state, error, error_reason, error_description } = params;

  return (
    <main className="mx-auto flex min-h-[100dvh] max-w-[720px] flex-col items-start justify-center px-5 py-20 sm:px-8">
      <Link href="/" className="inline-flex items-center gap-2.5" aria-label="Cifras de España">
        <span
          aria-hidden="true"
          className="relative inline-flex h-6 w-6 overflow-hidden rounded-[5px]"
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

      <p className="mt-10 font-mono text-[11px] uppercase tracking-[0.25em] text-[var(--color-mute)]">
        Instagram OAuth <span className="eyebrow-sep">·</span> callback técnico
      </p>

      {error ? (
        <>
          <h1
            className="mt-5 text-[36px] leading-[1.05] tracking-[-0.02em] sm:text-[48px]"
            style={{ fontFamily: "var(--font-display)", fontWeight: 400 }}
          >
            Algo ha fallado en <span className="italic text-[var(--color-mute)]">la autorización</span>.
          </h1>
          <p className="mt-6 text-[15px] leading-relaxed text-[var(--color-ink-soft)]">
            Instagram ha devuelto un error en lugar del código.
          </p>
          <div className="mt-8 w-full overflow-hidden rounded-md border hairline bg-[var(--color-cream)] p-4 font-mono text-[12px] leading-relaxed text-[var(--color-ink)]">
            <div>error: {error}</div>
            {error_reason ? <div className="mt-1">error_reason: {error_reason}</div> : null}
            {error_description ? <div className="mt-1">description: {error_description}</div> : null}
          </div>
        </>
      ) : code ? (
        <>
          <h1
            className="mt-5 text-[36px] leading-[1.05] tracking-[-0.02em] sm:text-[48px]"
            style={{ fontFamily: "var(--font-display)", fontWeight: 400 }}
          >
            Código <span className="italic text-[var(--color-mute)]">capturado</span>.
          </h1>
          <p className="mt-6 max-w-[58ch] text-[15px] leading-relaxed text-[var(--color-ink-soft)]">
            Copia el bloque entero de abajo y pégalo en la terminal donde estás ejecutando
            el script de OAuth de Instagram.
          </p>

          <div className="mt-8 w-full">
            <p className="mb-2 font-mono text-[11px] uppercase tracking-[0.2em] text-[var(--color-mute)]">
              code
            </p>
            <pre className="overflow-x-auto rounded-md border hairline bg-[var(--color-cream)] p-4 font-mono text-[13px] leading-relaxed text-[var(--color-ink)]">
              {code}
            </pre>
          </div>

          {state ? (
            <div className="mt-6 w-full">
              <p className="mb-2 font-mono text-[11px] uppercase tracking-[0.2em] text-[var(--color-mute)]">
                state
              </p>
              <pre className="overflow-x-auto rounded-md border hairline bg-[var(--color-cream)] p-4 font-mono text-[12px] leading-relaxed text-[var(--color-ink-soft)]">
                {state}
              </pre>
            </div>
          ) : null}

          <p className="mt-10 text-[13px] leading-relaxed text-[var(--color-mute)]">
            El <span className="font-mono text-[var(--color-ink-soft)]">code</span> caduca en
            unos minutos. Si tardas, vuelve a ejecutar el script para generar uno nuevo.
          </p>
        </>
      ) : (
        <>
          <h1
            className="mt-5 text-[36px] leading-[1.05] tracking-[-0.02em] sm:text-[48px]"
            style={{ fontFamily: "var(--font-display)", fontWeight: 400 }}
          >
            Sin parámetros <span className="italic text-[var(--color-mute)]">de OAuth</span>.
          </h1>
          <p className="mt-6 max-w-[58ch] text-[15px] leading-relaxed text-[var(--color-ink-soft)]">
            Esta página solo se usa como redirect interno del flujo OAuth de Instagram. Si has
            llegado aquí por error, vuelve al{" "}
            <Link
              href="/"
              className="underline decoration-[var(--color-line)] underline-offset-[5px] hover:decoration-[var(--color-ink)]"
            >
              índice principal
            </Link>
            .
          </p>
        </>
      )}
    </main>
  );
}

import Link from "next/link";

export default function NotFound() {
  return (
    <main className="mx-auto flex min-h-[100dvh] max-w-[1240px] flex-col items-start justify-center px-5 sm:px-8 lg:px-12">
      <p className="font-mono text-[12px] uppercase tracking-[0.25em] text-[var(--color-mute)]">
        Error · 404
      </p>
      <h1 className="mt-5 text-[44px] font-medium leading-[1.05] tracking-tight sm:text-[64px]">
        Esta cifra
        <br />
        no existe.
      </h1>
      <p className="mt-6 max-w-[44ch] text-[16px] leading-relaxed text-[var(--color-ink-soft)]">
        La página que buscas no está publicada. Vuelve al índice y elige
        una de las siete webs de la red.
      </p>
      <Link
        href="/"
        className="mt-9 inline-flex min-h-12 items-center gap-2 rounded-full bg-[var(--color-ink)] px-5 text-[14px] text-[var(--color-paper)] transition-transform active:translate-y-px"
      >
        Volver al índice
      </Link>
    </main>
  );
}

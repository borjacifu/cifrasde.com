import type { Metadata } from "next";

const LAST_UPDATED = "22 de mayo de 2026";

export const metadata: Metadata = {
  title: "Política de cookies",
  description:
    "Información sobre el uso de cookies y tecnologías similares en cifrasde.com.",
  alternates: { canonical: "/cookies" },
};

export default function Cookies() {
  return (
    <>
      <header>
        <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-[var(--color-mute)]">
          <span className="tabular">03</span> <span className="eyebrow-sep">·</span> Documento legal
        </p>
        <h1
          className="mt-5 text-[40px] leading-[1.05] tracking-[-0.02em] sm:text-[56px]"
          style={{ fontFamily: "var(--font-display)", fontWeight: 400 }}
        >
          Política de <span className="italic text-[var(--color-mute)]">cookies</span>.
        </h1>
        <p className="mt-6 max-w-[60ch] text-[15px] leading-relaxed text-[var(--color-mute)]">
          Información sobre el uso de cookies y tecnologías similares en este sitio,
          conforme al artículo 22 de la LSSI-CE y al RGPD.
        </p>
      </header>

      <div className="mt-12 space-y-10 text-[15.5px] leading-[1.75] text-[var(--color-ink-soft)] sm:text-[16px]">
        <section>
          <H2 num="01">¿Qué son las cookies?</H2>
          <p className="mt-4">
            Las cookies son pequeños archivos de texto que un sitio web puede almacenar en tu
            dispositivo cuando lo visitas. Permiten que el sitio recuerde información sobre tu
            sesión —idioma, preferencias, datos técnicos de navegación— y, en algunos casos,
            generan estadísticas agregadas de uso.
          </p>
        </section>

        <section>
          <H2 num="02">Cookies que utiliza este sitio</H2>
          <p className="mt-4">
            En el momento de la última actualización, cifrasde.com es un sitio estático que{" "}
            <strong className="font-medium text-[var(--color-ink)]">no instala cookies de
            terceros</strong> en tu navegador con fines publicitarios, de seguimiento ni de
            elaboración de perfiles.
          </p>
          <p className="mt-4">
            Si en el futuro se incorporan herramientas de analítica o servicios externos que
            empleen cookies no estrictamente necesarias, esta política se actualizará y, cuando
            la normativa lo exija, se solicitará tu consentimiento previo mediante un mecanismo
            visible (banner de cookies).
          </p>
        </section>

        <section>
          <H2 num="03">Cookies técnicas estrictamente necesarias</H2>
          <p className="mt-4">
            Para el funcionamiento básico del sitio —entregar las páginas, mantener el
            rendimiento, prevenir fraude— pueden utilizarse cookies o tecnologías similares
            estrictamente técnicas. Estas cookies están{" "}
            <strong className="font-medium text-[var(--color-ink)]">exentas del deber de
            consentimiento</strong> conforme al artículo 22.2 de la LSSI-CE, por ser
            imprescindibles para la prestación del servicio expresamente solicitado por el
            usuario.
          </p>
        </section>

        <section>
          <H2 num="04">Cómo gestionar o desactivar las cookies</H2>
          <p className="mt-4">
            Puedes configurar tu navegador para bloquear o eliminar las cookies en cualquier
            momento. Cada navegador ofrece su propio panel de configuración:
          </p>
          <ul className="mt-4 list-disc space-y-2 pl-6">
            <li>
              <strong className="font-medium text-[var(--color-ink)]">Chrome:</strong> Ajustes →
              Privacidad y seguridad → Cookies y otros datos del sitio.
            </li>
            <li>
              <strong className="font-medium text-[var(--color-ink)]">Firefox:</strong>{" "}
              Preferencias → Privacidad y seguridad → Cookies y datos del sitio.
            </li>
            <li>
              <strong className="font-medium text-[var(--color-ink)]">Safari:</strong>{" "}
              Preferencias → Privacidad → Gestionar datos del sitio web.
            </li>
            <li>
              <strong className="font-medium text-[var(--color-ink)]">Edge:</strong>{" "}
              Configuración → Cookies y permisos del sitio.
            </li>
          </ul>
          <p className="mt-4">
            Desactivar cookies estrictamente técnicas puede impedir el correcto funcionamiento
            de algunas partes del sitio.
          </p>
        </section>

        <section>
          <H2 num="05">Cambios en esta política</H2>
          <p className="mt-4">
            Cualquier modificación se reflejará en esta misma página, indicando la fecha de
            última actualización. Se recomienda consultar este documento periódicamente.
          </p>
        </section>
      </div>

      <p className="mt-14 border-t hairline pt-6 font-mono text-[12px] uppercase tracking-[0.18em] text-[var(--color-mute)]">
        Última actualización: <span className="text-[var(--color-ink)]">{LAST_UPDATED}</span>
      </p>
    </>
  );
}

function H2({ num, children }: { num: string; children: React.ReactNode }) {
  return (
    <h2
      id={`s${num}`}
      className="flex items-baseline gap-3 text-[22px] tracking-tight text-[var(--color-ink)] sm:text-[24px]"
      style={{ fontFamily: "var(--font-display)", fontWeight: 400 }}
    >
      <span className="font-mono text-[12px] tabular text-[var(--color-accent)]">{num}</span>
      <span>{children}</span>
    </h2>
  );
}

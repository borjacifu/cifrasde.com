import type { Metadata } from "next";

const LAST_UPDATED = "22 de mayo de 2026";

export const metadata: Metadata = {
  title: "Política de privacidad",
  description:
    "Información sobre el tratamiento de datos personales en cifrasde.com conforme al RGPD y la LOPDGDD.",
  alternates: { canonical: "/privacidad" },
};

export default function Privacidad() {
  return (
    <>
      <header>
        <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-[var(--color-mute)]">
          <span className="tabular">02</span> <span className="eyebrow-sep">·</span> Documento legal
        </p>
        <h1
          className="mt-5 text-[40px] leading-[1.05] tracking-[-0.02em] sm:text-[56px]"
          style={{ fontFamily: "var(--font-display)", fontWeight: 400 }}
        >
          Política de <span className="italic text-[var(--color-mute)]">privacidad</span>.
        </h1>
        <p className="mt-6 max-w-[60ch] text-[15px] leading-relaxed text-[var(--color-mute)]">
          Información sobre el tratamiento de datos personales en cumplimiento del
          Reglamento (UE) 2016/679 (RGPD) y la Ley Orgánica 3/2018 (LOPDGDD).
        </p>
      </header>

      <div className="mt-12 space-y-10 text-[15.5px] leading-[1.75] text-[var(--color-ink-soft)] sm:text-[16px]">
        <section>
          <H2 num="01">Responsable del tratamiento</H2>
          <ul className="mt-4 space-y-2">
            <li>
              <strong className="font-medium text-[var(--color-ink)]">Identidad:</strong> Borja Cifuentes.
            </li>
            <li>
              <strong className="font-medium text-[var(--color-ink)]">Contacto:</strong>{" "}
              <a className="underline decoration-[var(--color-line)] underline-offset-[5px] hover:decoration-[var(--color-ink)]" href="mailto:hola@cifrasde.com">
                hola@cifrasde.com
              </a>
              .
            </li>
            <li>
              <strong className="font-medium text-[var(--color-ink)]">Sitio web:</strong> https://cifrasde.com.
            </li>
          </ul>
        </section>

        <section>
          <H2 num="02">Datos que tratamos</H2>
          <p className="mt-4">
            Cifras de España solo trata los datos personales que el usuario facilita activamente:
          </p>
          <ul className="mt-4 list-disc space-y-2 pl-6">
            <li>
              <strong className="font-medium text-[var(--color-ink)]">Correo electrónico</strong> y,
              en su caso, nombre proporcionado al contactarnos por email.
            </li>
            <li>
              <strong className="font-medium text-[var(--color-ink)]">Datos técnicos
              anonimizados</strong> de navegación —tipo de dispositivo, navegador, página
              visitada, país aproximado— recogidos, en su caso, por proveedores estándar de
              analítica web.
            </li>
          </ul>
          <p className="mt-4">
            No se recogen automáticamente datos de categorías especiales (origen racial, ideología,
            religión, salud, orientación sexual u otros previstos en el artículo 9 del RGPD).
          </p>
        </section>

        <section>
          <H2 num="03">Finalidades</H2>
          <ul className="mt-4 list-disc space-y-2 pl-6">
            <li>Responder a tus consultas, sugerencias o solicitudes enviadas por correo.</li>
            <li>
              Analizar el funcionamiento técnico y editorial del sitio mediante estadísticas
              agregadas y no individualizables.
            </li>
            <li>Cumplir obligaciones legales aplicables.</li>
          </ul>
        </section>

        <section>
          <H2 num="04">Base jurídica</H2>
          <ul className="mt-4 list-disc space-y-2 pl-6">
            <li>
              <strong className="font-medium text-[var(--color-ink)]">Consentimiento del
              interesado</strong> (art. 6.1.a RGPD) cuando nos escribes voluntariamente o aceptas
              cookies no estrictamente necesarias.
            </li>
            <li>
              <strong className="font-medium text-[var(--color-ink)]">Interés legítimo</strong>
              {" "}(art. 6.1.f RGPD) para la analítica agregada del sitio, debidamente ponderado
              frente a tus derechos y libertades.
            </li>
          </ul>
        </section>

        <section>
          <H2 num="05">Plazo de conservación</H2>
          <ul className="mt-4 list-disc space-y-2 pl-6">
            <li>
              Comunicaciones por correo: hasta 12 meses después de finalizada la conversación,
              salvo obligación legal de conservación superior.
            </li>
            <li>
              Datos analíticos: lo establecido por el proveedor utilizado, en formato agregado.
            </li>
          </ul>
        </section>

        <section>
          <H2 num="06">Destinatarios</H2>
          <p className="mt-4">No cedemos tus datos a terceros, salvo en estos casos:</p>
          <ul className="mt-4 list-disc space-y-2 pl-6">
            <li>
              <strong className="font-medium text-[var(--color-ink)]">Proveedores de
              servicios</strong> estrictamente necesarios para el funcionamiento del sitio
              (alojamiento en Vercel Inc., proveedor de correo electrónico, en su caso analítica
              web), bajo contrato de encargo de tratamiento conforme al artículo 28 del RGPD.
            </li>
            <li>
              <strong className="font-medium text-[var(--color-ink)]">Obligación legal:</strong>{" "}
              cuando una autoridad competente lo requiera en el ejercicio de sus funciones.
            </li>
          </ul>
        </section>

        <section>
          <H2 num="07">Transferencias internacionales</H2>
          <p className="mt-4">
            El proveedor de alojamiento (Vercel Inc.) procesa datos en infraestructura situada,
            entre otros lugares, en Estados Unidos. Las transferencias se realizan bajo Cláusulas
            Contractuales Tipo aprobadas por la Comisión Europea o, en su caso, el marco
            <em> EU-U.S. Data Privacy Framework</em> en vigor.
          </p>
        </section>

        <section>
          <H2 num="08">Derechos del interesado</H2>
          <p className="mt-4">
            Puedes ejercer en cualquier momento los siguientes derechos escribiéndonos a{" "}
            <a className="underline decoration-[var(--color-line)] underline-offset-[5px] hover:decoration-[var(--color-ink)]" href="mailto:hola@cifrasde.com">
              hola@cifrasde.com
            </a>:
          </p>
          <ul className="mt-4 list-disc space-y-2 pl-6">
            <li>Acceso a tus datos personales.</li>
            <li>Rectificación de datos inexactos o incompletos.</li>
            <li>Supresión («derecho al olvido») cuando proceda.</li>
            <li>Limitación u oposición al tratamiento.</li>
            <li>Portabilidad de los datos en formato estructurado.</li>
            <li>Revocación del consentimiento previamente prestado.</li>
          </ul>
          <p className="mt-4">
            Si consideras que tus derechos no han sido debidamente atendidos, puedes presentar una
            reclamación ante la <strong className="font-medium text-[var(--color-ink)]">Agencia
            Española de Protección de Datos</strong> a través de{" "}
            <a className="underline decoration-[var(--color-line)] underline-offset-[5px] hover:decoration-[var(--color-ink)]" href="https://www.aepd.es" target="_blank" rel="noopener noreferrer">
              www.aepd.es
            </a>
            .
          </p>
        </section>

        <section>
          <H2 num="09">Decisiones automatizadas y perfilado</H2>
          <p className="mt-4">
            No se realizan decisiones automatizadas ni elaboración de perfiles que produzcan
            efectos jurídicos o afecten significativamente al interesado.
          </p>
        </section>

        <section>
          <H2 num="10">Cambios en esta política</H2>
          <p className="mt-4">
            Esta política puede actualizarse para reflejar cambios legales o de funcionamiento del
            sitio. La versión vigente será siempre la publicada en esta página, con indicación de
            la fecha de última actualización.
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

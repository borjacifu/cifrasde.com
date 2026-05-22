import type { Metadata } from "next";

const LAST_UPDATED = "22 de mayo de 2026";

export const metadata: Metadata = {
  title: "Términos y condiciones de uso",
  description:
    "Condiciones generales que regulan el acceso y uso del sitio cifrasde.com y los dominios temáticos de la red Cifras de España.",
  alternates: { canonical: "/terminos" },
};

export default function Terminos() {
  return (
    <>
      <header>
        <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-[var(--color-mute)]">
          <span className="tabular">04</span> <span className="eyebrow-sep">·</span> Documento legal
        </p>
        <h1
          className="mt-5 text-[40px] leading-[1.05] tracking-[-0.02em] sm:text-[56px]"
          style={{ fontFamily: "var(--font-display)", fontWeight: 400 }}
        >
          Términos <span className="italic text-[var(--color-mute)]">y condiciones</span>.
        </h1>
        <p className="mt-6 max-w-[60ch] text-[15px] leading-relaxed text-[var(--color-mute)]">
          Condiciones generales que regulan el acceso y uso del sitio cifrasde.com y
          los dominios temáticos asociados a la red editorial Cifras de España.
        </p>
      </header>

      <div className="mt-12 space-y-10 text-[15.5px] leading-[1.75] text-[var(--color-ink-soft)] sm:text-[16px]">
        <section>
          <H2 num="01">Objeto y aceptación</H2>
          <p className="mt-4">
            Las presentes condiciones regulan el acceso y uso del sitio cifrasde.com (en adelante,
            «el Sitio») y los dominios temáticos asociados a la red editorial Cifras de España,
            cuyo responsable es Borja Cifuentes (en adelante, «el Editor»). El acceso al Sitio
            implica la aceptación plena y sin reservas de estas condiciones en la versión vigente
            en el momento del acceso.
          </p>
        </section>

        <section>
          <H2 num="02">Naturaleza del contenido</H2>
          <p className="mt-4">
            El Sitio publica datos procedentes de fuentes públicas oficiales —INE, AEAT, Banco de
            España, Eurostat, OCDE y otros organismos citados en cada apartado— normalizados y
            presentados con fines{" "}
            <strong className="font-medium text-[var(--color-ink)]">exclusivamente informativos y
            divulgativos</strong>. El contenido no constituye en ningún caso asesoramiento
            profesional, jurídico, fiscal, financiero, energético, médico ni de cualquier otra
            naturaleza.
          </p>
        </section>

        <section>
          <H2 num="03">Exactitud de la información</H2>
          <p className="mt-4">
            El Editor pone su mejor diligencia en reproducir fielmente los datos publicados por
            las fuentes originales. No obstante:
          </p>
          <ul className="mt-4 list-disc space-y-2 pl-6">
            <li>Los datos pueden estar sujetos a revisiones por parte del organismo emisor.</li>
            <li>
              Puede existir un desfase temporal entre la publicación oficial y su incorporación
              al Sitio.
            </li>
            <li>Puede haber errores de transcripción, agregación o representación.</li>
          </ul>
          <p className="mt-4">
            Antes de adoptar cualquier decisión relevante, el usuario debe consultar la fuente
            oficial primaria citada en cada apartado.
          </p>
        </section>

        <section>
          <H2 num="04">Uso permitido</H2>
          <p className="mt-4">
            El Usuario puede consultar libremente, citar y enlazar a las páginas del Sitio. Está
            permitido el uso académico, periodístico, informativo o divulgativo del contenido
            editorial siempre que se cite expresamente la fuente («Cifras de España,
            cifrasde.com») y, cuando se publique en línea, se enlace al original.
          </p>
        </section>

        <section>
          <H2 num="05">Uso no permitido</H2>
          <p className="mt-4">No está autorizado:</p>
          <ul className="mt-4 list-disc space-y-2 pl-6">
            <li>La reproducción íntegra del contenido editorial sin permiso expreso del Editor.</li>
            <li>
              El uso del Sitio o de su contenido para fines ilícitos, contrarios a la buena fe o
              lesivos para los derechos de terceros.
            </li>
            <li>
              La extracción automatizada y masiva (<em>scraping</em>) de las bases de datos del
              Sitio sin autorización previa por escrito.
            </li>
            <li>
              El uso de las marcas, logotipos y nombres comerciales asociados al proyecto sin
              consentimiento.
            </li>
            <li>
              Cualquier intento de comprometer la integridad técnica, seguridad o disponibilidad
              del Sitio.
            </li>
          </ul>
        </section>

        <section>
          <H2 num="06">Redes sociales y enlaces a terceros</H2>
          <p className="mt-4">
            El Sitio puede contener enlaces a perfiles propios en redes sociales (X, TikTok,
            YouTube, Instagram) y a las páginas web de las fuentes oficiales citadas. El Editor
            no se responsabiliza del contenido, las políticas de privacidad ni las prácticas
            comerciales de esos terceros, ni de los cambios que puedan introducir en sus propios
            servicios.
          </p>
        </section>

        <section>
          <H2 num="07">Disponibilidad del servicio</H2>
          <p className="mt-4">
            El Editor se reserva el derecho de modificar, suspender o interrumpir total o
            parcialmente el Sitio sin previo aviso. No se garantiza la disponibilidad continua
            ni la ausencia absoluta de errores técnicos.
          </p>
        </section>

        <section>
          <H2 num="08">Limitación de responsabilidad</H2>
          <p className="mt-4">
            En la máxima medida permitida por la legislación aplicable, el Editor no será
            responsable de los daños, directos o indirectos, derivados del uso o de la
            imposibilidad de uso del Sitio, ni de las decisiones que el Usuario adopte con base
            exclusiva en la información aquí publicada.
          </p>
        </section>

        <section>
          <H2 num="09">Modificaciones</H2>
          <p className="mt-4">
            El Editor puede modificar estos Términos en cualquier momento. La versión vigente
            será siempre la publicada en esta misma página, con indicación de la fecha de última
            actualización. El uso continuado del Sitio tras la publicación de cambios implica la
            aceptación de la versión actualizada.
          </p>
        </section>

        <section>
          <H2 num="10">Legislación aplicable y jurisdicción</H2>
          <p className="mt-4">
            Las presentes condiciones se rigen por la legislación española. Para cualquier
            controversia, las partes se someten a los Juzgados y Tribunales del domicilio del
            Editor, salvo que la normativa imperativa de consumo o protección de datos disponga
            otro fuero.
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

import type { Metadata } from "next";

const LAST_UPDATED = "22 de mayo de 2026";

export const metadata: Metadata = {
  title: "Aviso legal",
  description:
    "Información del responsable del sitio cifrasde.com en cumplimiento del artículo 10 de la LSSI-CE.",
  alternates: { canonical: "/aviso-legal" },
};

export default function AvisoLegal() {
  return (
    <>
      <header>
        <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-[var(--color-mute)]">
          <span className="tabular">01</span> <span className="eyebrow-sep">·</span> Documento legal
        </p>
        <h1
          className="mt-5 text-[40px] leading-[1.05] tracking-[-0.02em] sm:text-[56px]"
          style={{ fontFamily: "var(--font-display)", fontWeight: 400 }}
        >
          Aviso <span className="italic text-[var(--color-mute)]">legal</span>.
        </h1>
        <p className="mt-6 max-w-[60ch] text-[15px] leading-relaxed text-[var(--color-mute)]">
          Información del responsable del sitio en cumplimiento del artículo 10 de la
          Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y
          de Comercio Electrónico (LSSI-CE).
        </p>
      </header>

      <div className="mt-12 space-y-10 text-[15.5px] leading-[1.75] text-[var(--color-ink-soft)] sm:text-[16px]">
        <section>
          <H2 num="01">Información general</H2>
          <ul className="mt-4 space-y-2">
            <li>
              <strong className="font-medium text-[var(--color-ink)]">Responsable:</strong> Borja Cifuentes.
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
            <li>
              <strong className="font-medium text-[var(--color-ink)]">Actividad:</strong> proyecto editorial
              independiente que publica datos procedentes de fuentes públicas oficiales españolas,
              europeas e internacionales.
            </li>
          </ul>
        </section>

        <section>
          <H2 num="02">Naturaleza del proyecto</H2>
          <p className="mt-4">
            Cifras de España es un proyecto editorial personal sin fines comerciales en el
            momento de la última actualización de este Aviso. No presta servicios profesionales
            remunerados, no realiza ventas en línea, no aloja publicidad de terceros ni gestiona
            pagos a través del sitio. Su objeto es divulgar de forma accesible información ya
            publicada por organismos públicos —INE, AEAT, Banco de España, Eurostat, OCDE y
            otros— citando expresamente la fuente en cada caso.
          </p>
        </section>

        <section>
          <H2 num="03">Propiedad intelectual e industrial</H2>
          <p className="mt-4">
            Los textos editoriales, el diseño, el código fuente, las imágenes propias y los
            logotipos de cifrasde.com y de los dominios temáticos asociados son propiedad de
            Borja Cifuentes, salvo indicación expresa en contrario. Los datos numéricos y series
            estadísticas reproducidos pertenecen a sus respectivas fuentes oficiales: Cifras de
            España se limita a normalizar, agregar y contextualizar dichos datos para su lectura.
          </p>
          <p className="mt-4">
            Está permitido el uso, cita y reproducción parcial del contenido editorial siempre
            que se cite expresamente la fuente («Cifras de España, cifrasde.com») y, cuando se
            publique en línea, se enlace al original.
          </p>
        </section>

        <section>
          <H2 num="04">Enlaces externos</H2>
          <p className="mt-4">
            El sitio contiene enlaces a páginas web de terceros: organismos públicos citados como
            fuente, perfiles propios en redes sociales y otros recursos divulgativos. Cifras de
            España no se responsabiliza del contenido, las políticas de privacidad ni las
            prácticas comerciales de esos terceros.
          </p>
        </section>

        <section>
          <H2 num="05">Limitación de responsabilidad</H2>
          <p className="mt-4">
            Los datos publicados se ofrecen con la mejor diligencia posible, pero pueden contener
            errores de transcripción, retrasos respecto a la fuente original o discrepancias por
            revisiones posteriores del organismo emisor. Ante cualquier decisión relevante
            —jurídica, fiscal, económica, energética— debe consultarse siempre la fuente oficial
            primaria.
          </p>
          <p className="mt-4">
            En la máxima medida permitida por la legislación aplicable, el responsable no asume
            responsabilidad por las decisiones tomadas únicamente con base en los datos aquí
            publicados.
          </p>
        </section>

        <section>
          <H2 num="06">Modificaciones</H2>
          <p className="mt-4">
            Este Aviso Legal puede ser actualizado en cualquier momento. La versión vigente será
            siempre la publicada en esta misma página, con indicación de la fecha de última
            actualización.
          </p>
        </section>

        <section>
          <H2 num="07">Legislación aplicable y jurisdicción</H2>
          <p className="mt-4">
            Las presentes condiciones se rigen por la legislación española. Para cualquier
            controversia derivada del uso del sitio, las partes se someten a los Juzgados y
            Tribunales del domicilio del responsable, salvo que la normativa imperativa de
            consumo o protección de datos disponga otro fuero.
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

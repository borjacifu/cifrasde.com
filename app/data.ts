export type Site = {
  domain: string;
  display: string;
  tag: string;
  topic: string;
  href: string;
};

export const SITES: Site[] = [
  {
    domain: "electricidadde.com",
    display: "electricidad",
    tag: "Energía",
    topic:
      "Precio horario de la luz, mix de generación, factura PVPC y autoconsumo.",
    href: "https://electricidadde.com",
  },
  {
    domain: "gasolinade.com",
    display: "gasolina",
    tag: "Carburantes",
    topic:
      "Precios diarios por estación de servicio, fiscalidad del litro y consumo.",
    href: "https://gasolinade.com",
  },
  {
    domain: "impuestosde.com",
    display: "impuestos",
    tag: "Fiscalidad",
    topic:
      "Tipos, escalas y recaudación de todos los tributos en España desde 1980.",
    href: "https://impuestosde.com",
  },
  {
    domain: "pensionde.com",
    display: "pensión",
    tag: "Pensiones",
    topic:
      "Cuantías por régimen y comunidad, reformas y comparativa internacional.",
    href: "https://pensionde.com",
  },
  {
    domain: "salariode.com",
    display: "salario",
    tag: "Salarios",
    topic:
      "Salario por profesión, sector, comunidad, sexo, edad y estudios.",
    href: "https://salariode.com",
  },
  {
    domain: "sueldode.com",
    display: "sueldo",
    tag: "Sector público",
    topic:
      "Retribuciones de cargos electos, altos cargos y dedicaciones municipales.",
    href: "https://sueldode.com",
  },
  {
    domain: "viviendade.com",
    display: "vivienda",
    tag: "Vivienda",
    topic:
      "Precio del metro cuadrado, alquiler, hipotecas, Euríbor y fiscalidad inmobiliaria.",
    href: "https://viviendade.com",
  },
];

export type SourceGroup = {
  label: string;
  items: string[];
};

export const SOURCE_GROUPS: SourceGroup[] = [
  {
    label: "Administración General del Estado",
    items: [
      "INE",
      "AEAT",
      "Ministerio de Hacienda",
      "MITECO",
      "MITMA",
      "MITES",
      "Seguridad Social / INSS",
      "IDAE",
      "AEMET",
      "DGT",
      "CORES",
      "AIReF",
      "IMSERSO",
      "Ministerio del Interior",
      "BOE",
      "Catastro",
      "datos.gob.es",
    ],
  },
  {
    label: "Organismos reguladores y de mercado",
    items: [
      "Banco de España",
      "CNMC",
      "Red Eléctrica de España (ESIOS)",
      "OMIE",
      "Tribunal de Cuentas",
      "Registradores de la Propiedad",
    ],
  },
  {
    label: "Transparencia y publicidad activa",
    items: [
      "Portal de Transparencia del Estado",
      "Registro de Altos Cargos",
      "Sistema Nacional de Subvenciones (BDNS)",
    ],
  },
  {
    label: "Autonómico y local",
    items: [
      "Boletines autonómicos (17 CCAA)",
      "Portales de transparencia autonómicos",
      "Boletines Oficiales de las Provincias",
      "Ayuntamientos y ordenanzas fiscales",
      "Portal de Datos Abiertos — Madrid",
    ],
  },
  {
    label: "Europa e internacional",
    items: [
      "Eurostat",
      "Comisión Europea — DG Energy",
      "Comisión Europea — DG ECFIN",
      "PVGIS / JRC",
      "OCDE",
      "EIA (Estados Unidos)",
    ],
  },
];

export const TOTAL_SOURCES = SOURCE_GROUPS.reduce(
  (acc, g) => acc + g.items.length,
  0,
);

export const SECTION_IDS = [
  "politica",
  "deportes",
  "veredicto",
  "espectaculos",
  "observatorio",
  "editorial",
] as const;

export type SectionId = (typeof SECTION_IDS)[number];

export type Section = {
  id: SectionId;
  slug: string;
  label: string;
  kicker: string;
  href: string;
  blurb: string;
};

export const SECTIONS: Record<SectionId, Section> = {
  politica: {
    id: "politica",
    slug: "politica",
    label: "Política",
    kicker: "PODER",
    href: "/politica",
    blurb: "Gobierno, oposición, gremios y el Excel que nadie quiere leer.",
  },
  deportes: {
    id: "deportes",
    slug: "deportes",
    label: "Deportes",
    kicker: "CANCHA",
    href: "/deportes",
    blurb: "La pelota, la plata y el dirigente que siempre es ad honorem.",
  },
  veredicto: {
    id: "veredicto",
    slug: "veredicto",
    label: "Veredicto",
    kicker: "EL JUEZ IA",
    href: "/veredicto",
    blurb:
      "La Corte Suprema del debate deportivo. Sin camiseta, sin sobre, sin pulso. Cero nervios. Cien por ciento objetividad. Si es limítrofe, DUDOSO — no certeza de mentira. Fútbol, Mundial y lo que la fecha discuta.",
  },
  espectaculos: {
    id: "espectaculos",
    slug: "espectaculos",
    label: "Espectáculos",
    kicker: "ESCENA",
    href: "/espectaculos",
    blurb: "Farándula, escenarios y el roast cuando el tema es banal.",
  },
  observatorio: {
    id: "observatorio",
    slug: "observatorio",
    label: "Observatorio",
    kicker: "MEDIOS",
    href: "/observatorio",
    blurb: "Mismo hecho, distinta tapa. Acá se compara el titular, no la hinchada.",
  },
  editorial: {
    id: "editorial",
    slug: "editorial",
    label: "Editorial",
    kicker: "LA CASA",
    href: "/editorial",
    blurb: "Por qué existe este diario y a quién no le debe nada.",
  },
};

export const NAV_LINKS = [
  SECTIONS.politica,
  SECTIONS.deportes,
  SECTIONS.veredicto,
  SECTIONS.espectaculos,
  SECTIONS.observatorio,
  SECTIONS.editorial,
  { id: "nosotros", slug: "nosotros", label: "Nosotros", kicker: "", href: "/nosotros", blurb: "" },
  { id: "buzon", slug: "buzon", label: "Buzón", kicker: "", href: "/buzon", blurb: "" },
] as const;

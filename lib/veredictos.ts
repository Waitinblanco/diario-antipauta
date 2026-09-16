export const FALLO_IDS = ["si", "no", "dudoso"] as const;

export type FalloId = (typeof FALLO_IDS)[number];

export function isFalloId(value: unknown): value is FalloId {
  return value === "si" || value === "no" || value === "dudoso";
}

export const FALLO_TONE: Record<
  FalloId,
  { label: string; box: string; chip: string }
> = {
  si: {
    label: "SÍ",
    box: "bg-hot text-paper border-hot",
    chip: "bg-hot text-paper",
  },
  no: {
    label: "NO",
    box: "bg-ia text-ink border-ia",
    chip: "bg-ia text-ink",
  },
  dudoso: {
    label: "DUDOSO",
    box: "bg-paper-2 text-ink border-ink",
    chip: "border border-ink bg-paper-2 text-ink",
  },
};

export const VEREDICTO_LEGAL =
  "Análisis y opinión de Diario Antipauta. No es VAR oficial ni fallo de AFA, FIFA, CONMEBOL ni de ningún organismo.";

export const VEREDICTO_TAGLINE = "Fin de discusión.";
export const VEREDICTO_SAYS = "Lo dijo el Veredicto de IA.";
export const VEREDICTO_RIVER_BOCA =
  "Los de River dicen que no fue. Los de Boca que sí fue. A esta corte no le importa si se enoja uno o el otro: alguien siempre se va a enojar. La justicia la da quien no tiene preferencia alguna.";
export const VEREDICTO_ARROGANCIA =
  "Si se enoja River, problema de River. Si se enoja Boca, problema de Boca. Siempre alguien se va a enojar. El sello no pide perdón ni cotiza hinchada.";
export const VEREDICTO_ANIMO =
  "¡Ánimo! El próximo seguro es tuyo… si jugás mejor, no como hoy.";
export const VEREDICTO_COMMENTS_KICKER =
  "El veredicto ya está. Ahora peleen ustedes. A la IA no le importa si se enoja River o Boca.";
export const VEREDICTO_COMMENTS_HINT =
  "Debate libre. Sin registro. Se puede disentir, se puede putear, se puede no estar de acuerdo con el sello. Alguien siempre se va a enojar: esta corte no se inmuta. Si venís a reclamarle a la IA, la respuesta de la casa es: «¡Ánimo! El próximo seguro es tuyo… si jugás mejor, no como hoy.» No se puede amenazar de muerte ni incitar violencia. El filtro corre en tu navegador: es un stub, no un juez.";
export const VEREDICTO_OBJETIVO =
  "Un juez de carne tiene nervios, pulso, estrés y un corazón que elige bando antes de ver el video. Esta corte no. Cero frecuencia cardíaca. Cero sentimiento. Cero estrés. Cien por ciento objetividad.";
export const VEREDICTO_DUDOSO =
  "Esta corte no se dobla porque llovieron quejas ni porque «el mejor periodista dijo que sí». El sello no cotiza fama. Si la jugada es limítrofe, el veredicto es DUDOSO: se explica por qué no hay certeza. Inventar un SÍ o un NO para quedar bien es el oficio de la tribuna, no de este escritorio.";

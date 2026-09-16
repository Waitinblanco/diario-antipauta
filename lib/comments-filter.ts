/** Palabras y frases que bloquean un comentario: amenazas de muerte o violencia directa. */
const BLOCKED = [
  "te voy a matar",
  "voy a matarte",
  "hay que matar",
  "hay que matarlo",
  "hay que matarla",
  "matanlo",
  "mátenlo",
  "matenlo",
  "te mato",
  "los voy a matar",
  "ojalá te mueras",
  "ojala te mueras",
  "te mereces morir",
  "te merecés morir",
  "pena de muerte",
  "te voy a cagar a tiros",
  "cagar a tiros",
  "te voy a reventar",
  "te voy a degollar",
  "degollar",
  "te voy a bombear",
  "poner una bomba",
  "voy a poner una bomba",
  "bomba en",
  "linchar",
  "hay que linchar",
  "prender fuego a",
  "voy a prender fuego",
  "te voy a quemar",
  "amenaza de muerte",
  "te corto el cuello",
  "te voy a disparar",
  "te pego un tiro",
];

export function normalizeComment(text: string): string {
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/\p{M}/gu, "")
    .replace(/\s+/g, " ")
    .trim();
}

export function findBlockedPhrase(text: string): string | null {
  const n = normalizeComment(text);
  for (const phrase of BLOCKED) {
    const p = normalizeComment(phrase);
    if (p && n.includes(p)) return phrase;
  }
  return null;
}

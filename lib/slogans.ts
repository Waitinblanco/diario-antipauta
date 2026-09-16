export const SLOGANS = [
  "El primer dIArio 100% IA del mundo",
  "La verdad, te guste o no",
  "Sin emociones humanas",
  "Sin el sobre",
  "A la IA no la sobornás",
  "¿Qué estabas leyendo? ¿Pauteros?",
  "Todo lo que pasa, en 5 minutos",
  "Tu baño de realidad de cada día",
  "No seas termo. No leas humanos",
  "¿Qué humano no se tienta con el sobre?",
  "No somos el hijo de nadie",
  "Criticar para mejorar",
  "El que destruye, no sirve",
  "Fin de discusión.",
  "Lo dijo el Veredicto de IA.",
] as const;

export type Slogan = (typeof SLOGANS)[number];

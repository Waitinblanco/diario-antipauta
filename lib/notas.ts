import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { SECTIONS, type SectionId } from "@/lib/sections";
import { isFalloId, type FalloId } from "@/lib/veredictos";

const CONTENT_DIR = path.join(process.cwd(), "content", "notas");

export type Nota = {
  slug: string;
  title: string;
  dek: string;
  date: string;
  section: SectionId;
  body: string;
  cierre: string;
  cierreLabel: string;
  disclaimer: string;
  fallo?: FalloId;
  veredicto?: string;
  competencia?: string;
};

function isSectionId(value: unknown): value is SectionId {
  return typeof value === "string" && value in SECTIONS;
}

function readFile(filePath: string): Nota {
  const raw = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(raw);
  const slugFromFile = path.basename(filePath).replace(/\.(md|mdx)$/i, "");
  const slug = typeof data.slug === "string" ? data.slug : slugFromFile;
  if (!isSectionId(data.section)) {
    throw new Error(`Nota "${slug}": sección inválida (${String(data.section)})`);
  }
  if (typeof data.title !== "string" || typeof data.dek !== "string" || typeof data.date !== "string") {
    throw new Error(`Nota "${slug}": faltan title, dek o date`);
  }
  const fallo = isFalloId(data.fallo) ? data.fallo : undefined;
  return {
    slug,
    title: data.title,
    dek: data.dek,
    date: data.date,
    section: data.section,
    body: content.trim(),
    cierre: typeof data.cierre === "string" ? data.cierre.trim() : "",
    cierreLabel:
      typeof data.cierreLabel === "string" ? data.cierreLabel : "Opinión de cierre",
    disclaimer:
      typeof data.disclaimer === "string"
        ? data.disclaimer
        : data.section === "veredicto"
          ? "Análisis asistido por IA · No es VAR oficial"
          : "Nota asistida por IA",
    fallo,
    veredicto: typeof data.veredicto === "string" ? data.veredicto : undefined,
    competencia: typeof data.competencia === "string" ? data.competencia : undefined,
  };
}

export function getAllNotas(): Nota[] {
  if (!fs.existsSync(CONTENT_DIR)) return [];
  return fs
    .readdirSync(CONTENT_DIR)
    .filter((name) => /\.(md|mdx)$/i.test(name))
    .map((name) => readFile(path.join(CONTENT_DIR, name)))
    .sort((a, b) => (a.date < b.date ? 1 : a.date > b.date ? -1 : a.title.localeCompare(b.title, "es")));
}

export function getNota(slug: string): Nota | undefined {
  return getAllNotas().find((n) => n.slug === slug);
}

export function getNotasBySection(section: SectionId): Nota[] {
  return getAllNotas().filter((n) => n.section === section);
}

export function latestBySection(): Partial<Record<SectionId, Nota[]>> {
  const grouped: Partial<Record<SectionId, Nota[]>> = {};
  for (const nota of getAllNotas()) {
    const list = grouped[nota.section] ?? [];
    list.push(nota);
    grouped[nota.section] = list;
  }
  return grouped;
}

export function formatFecha(iso: string): string {
  const [y, m, d] = iso.split("-").map(Number);
  const date = new Date(Date.UTC(y, (m ?? 1) - 1, d ?? 1));
  return new Intl.DateTimeFormat("es-AR", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  }).format(date);
}

export function isVeredictoNota(nota: Nota): boolean {
  return nota.section === "veredicto" && Boolean(nota.veredicto);
}

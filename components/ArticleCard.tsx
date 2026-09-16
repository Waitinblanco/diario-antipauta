import Link from "next/link";
import { formatFecha, type Nota } from "@/lib/notas";
import { SECTIONS } from "@/lib/sections";
import { FALLO_TONE } from "@/lib/veredictos";

export function ArticleCard({
  nota,
  variant = "default",
}: {
  nota: Nota;
  variant?: "default" | "compact" | "featured";
}) {
  const section = SECTIONS[nota.section];
  const featured = variant === "featured";
  const tone = nota.fallo ? FALLO_TONE[nota.fallo] : null;

  return (
    <article className={featured ? "flex flex-col gap-3" : "flex flex-col gap-2"}>
      <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-ia">
        {section.kicker} · {section.label}
      </p>
      {nota.veredicto && tone ? (
        <p className={`w-fit px-2 py-0.5 text-[10px] font-semibold uppercase tracking-[0.16em] ${tone.chip}`}>
          {nota.veredicto}
        </p>
      ) : null}
      <h3 className={`font-display leading-tight ${featured ? "text-3xl sm:text-4xl" : variant === "compact" ? "text-xl" : "text-2xl"}`}>
        <Link href={`/nota/${nota.slug}`} className="hover:text-hot">
          {nota.title}
        </Link>
      </h3>
      {variant !== "compact" ? (
        <p className="text-[15px] leading-relaxed text-ink-soft">{nota.dek}</p>
      ) : null}
      <p className="text-xs uppercase tracking-[0.14em] text-muted">
        {formatFecha(nota.date)} · {nota.disclaimer}
      </p>
    </article>
  );
}

import { ArticleCard } from "@/components/ArticleCard";
import { getNotasBySection } from "@/lib/notas";
import { SECTIONS, type SectionId } from "@/lib/sections";

export function SectionIndex({ sectionId }: { sectionId: SectionId }) {
  const section = SECTIONS[sectionId];
  const notas = getNotasBySection(sectionId);

  return (
    <div className="mx-auto max-w-6xl px-4 py-10">
      <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-ia">
        {section.kicker}
      </p>
      <h1 className="mt-2 font-display text-5xl leading-none">{section.label}</h1>
      <p className="mt-4 max-w-2xl text-lg text-ink-soft">{section.blurb}</p>
      <hr className="my-8 border-ink" />
      {notas.length === 0 ? (
        <p className="text-ink-soft">Todavía no hay notas en esta sección.</p>
      ) : (
        <div className="grid gap-10 md:grid-cols-2">
          {notas.map((nota) => (
            <ArticleCard key={nota.slug} nota={nota} />
          ))}
        </div>
      )}
    </div>
  );
}

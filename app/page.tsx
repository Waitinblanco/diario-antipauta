import { ArticleCard } from "@/components/ArticleCard";
import { Hero } from "@/components/Hero";
import { VeredictoHook } from "@/components/VeredictoHook";
import { latestBySection } from "@/lib/notas";
import { SECTIONS, type SectionId } from "@/lib/sections";
import Link from "next/link";

const HOME_SECTIONS: SectionId[] = [
  "politica",
  "deportes",
  "espectaculos",
  "observatorio",
];

export default function HomePage() {
  const grouped = latestBySection();
  const editorial = grouped.editorial?.[0];
  const veredictos = grouped.veredicto ?? [];

  return (
    <>
      <Hero />
      <VeredictoHook notas={veredictos} />
      {editorial ? (
        <section className="border-b border-ink bg-paper">
          <div className="mx-auto max-w-6xl px-4 py-10">
            <ArticleCard nota={editorial} variant="featured" />
          </div>
        </section>
      ) : null}
      <section className="mx-auto max-w-6xl px-4 py-12">
        <div className="mb-8 flex items-end justify-between gap-4">
          <h2 className="font-display text-3xl">Últimas notas por sección</h2>
          <p className="hidden text-[11px] uppercase tracking-[0.18em] text-muted sm:block">
            Sin pauta · Sin carousel de anunciantes
          </p>
        </div>
        <div className="grid gap-0 border-t border-ink md:grid-cols-2 lg:grid-cols-4">
          {HOME_SECTIONS.map((id) => {
            const section = SECTIONS[id];
            const notas = grouped[id] ?? [];
            return (
              <div key={id} className="border-b border-ink px-0 py-6 md:border-b-0 md:px-4 md:even:border-l lg:border-l lg:first:border-l-0">
                <div className="mb-4 flex items-baseline justify-between gap-2">
                  <h3 className="text-[11px] font-semibold uppercase tracking-[0.22em] text-hot">
                    {section.label}
                  </h3>
                  <Link href={section.href} className="text-[11px] uppercase tracking-[0.14em] text-ia hover:underline">
                    Ver sección
                  </Link>
                </div>
                {notas.length === 0 ? (
                  <p className="text-sm text-muted">Sin notas todavía.</p>
                ) : (
                  <div className="grid gap-8">
                    {notas.map((nota) => (
                      <ArticleCard key={nota.slug} nota={nota} variant="compact" />
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}

import { Comments } from "@/components/Comments";
import { Disclaimer } from "@/components/Disclaimer";
import { MarkdownBody } from "@/components/MarkdownBody";
import { OpinionBox } from "@/components/OpinionBox";
import { formatFecha, getNotasBySection } from "@/lib/notas";
import Link from "next/link";
import { notFound } from "next/navigation";

export const metadata = {
  title: "Editorial de lanzamiento",
  description: "¿Quién te paga para que pienses eso? El editorial fundacional de Diario Antipauta.",
};

export default function EditorialPage() {
  const notas = getNotasBySection("editorial");
  const fundacional = notas.find((n) => n.slug === "editorial-lanzamiento") ?? notas[0];
  if (!fundacional) notFound();

  const others = notas.filter((n) => n.slug !== fundacional.slug);

  return (
    <article className="mx-auto max-w-3xl px-4 py-12">
      <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-hot">
        Editorial fundacional
      </p>
      <h1 className="mt-3 font-display text-4xl leading-tight sm:text-5xl">
        {fundacional.title}
      </h1>
      <p className="mt-4 text-xl leading-snug text-ink-soft">{fundacional.dek}</p>
      <div className="mt-5 flex flex-wrap items-center gap-3 text-xs uppercase tracking-[0.14em] text-muted">
        <span>{formatFecha(fundacional.date)}</span>
        <Disclaimer text={fundacional.disclaimer} />
      </div>
      <hr className="my-8 border-ink" />
      <MarkdownBody source={fundacional.body} />
      {fundacional.cierre ? (
        <OpinionBox label={fundacional.cierreLabel}>{fundacional.cierre}</OpinionBox>
      ) : null}

      <aside className="mt-12 border border-ia/40 bg-paper-2 px-5 py-6">
        <p className="font-display text-2xl leading-snug">
          ¿En serio leés diarios de izquierda? ¿En serio leés diarios de derecha?
        </p>
        <p className="mt-3 text-ink-soft">
          Uno de los dos te miente. O los dos. ¿No preferís la verdad? Sumate.
          No te pedimos fe. Te pedimos cinco minutos.
        </p>
        <div className="mt-4 flex flex-wrap gap-3">
          <Link href="/nosotros" className="bg-ink px-4 py-2 text-sm font-semibold uppercase tracking-[0.14em] text-paper hover:bg-hot">
            Cómo pensamos
          </Link>
          <Link href="/buzon" className="border border-ink px-4 py-2 text-sm font-semibold uppercase tracking-[0.14em] hover:border-ia hover:text-ia">
            Escribir al buzón
          </Link>
        </div>
      </aside>

      {others.length > 0 ? (
        <section className="mt-12 border-t border-ink pt-6">
          <h2 className="font-display text-2xl">Más editoriales</h2>
          <ul className="mt-3 space-y-2">
            {others.map((nota) => (
              <li key={nota.slug}>
                <Link href={`/nota/${nota.slug}`} className="hover:text-hot">
                  {nota.title}
                </Link>
              </li>
            ))}
          </ul>
        </section>
      ) : null}

      <Comments />
    </article>
  );
}

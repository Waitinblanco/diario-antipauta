import { Comments } from "@/components/Comments";
import { Disclaimer } from "@/components/Disclaimer";
import { MarkdownBody } from "@/components/MarkdownBody";
import { OpinionBox } from "@/components/OpinionBox";
import { VerdictStamp } from "@/components/VerdictStamp";
import { formatFecha, getAllNotas, getNota } from "@/lib/notas";
import { SECTIONS } from "@/lib/sections";
import {
  VEREDICTO_COMMENTS_HINT,
  VEREDICTO_COMMENTS_KICKER,
} from "@/lib/veredictos";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return getAllNotas().map((nota) => ({ slug: nota.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const nota = getNota(slug);
  if (!nota) return { title: "Nota no encontrada" };
  return { title: nota.title, description: nota.dek };
}

export default async function NotaPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const nota = getNota(slug);
  if (!nota) notFound();

  const section = SECTIONS[nota.section];
  const isVeredicto = nota.section === "veredicto";

  return (
    <article className="mx-auto max-w-3xl px-4 py-12">
      <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-ia">
        <Link href={section.href} className="hover:text-hot">
          {section.kicker} · {section.label}
        </Link>
        {nota.competencia ? <span className="text-muted"> · {nota.competencia}</span> : null}
      </p>
      <h1 className="mt-3 font-display text-4xl leading-tight sm:text-5xl">{nota.title}</h1>
      <p className="mt-4 text-xl leading-snug text-ink-soft">{nota.dek}</p>
      <div className="mt-5 flex flex-wrap items-center gap-3 text-xs uppercase tracking-[0.14em] text-muted">
        <span>Redacción Antipauta</span>
        <span>·</span>
        <span>{formatFecha(nota.date)}</span>
        <Disclaimer text={nota.disclaimer} />
      </div>
      {nota.fallo && nota.veredicto ? (
        <div className="mt-8">
          <VerdictStamp fallo={nota.fallo} label={nota.veredicto} size="hero" />
        </div>
      ) : null}
      <hr className="my-8 border-ink" />
      <MarkdownBody source={nota.body} />
      {nota.cierre ? <OpinionBox label={nota.cierreLabel}>{nota.cierre}</OpinionBox> : null}
      <Comments
        kicker={isVeredicto ? VEREDICTO_COMMENTS_KICKER : undefined}
        hint={isVeredicto ? VEREDICTO_COMMENTS_HINT : undefined}
      />
    </article>
  );
}

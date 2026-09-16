import { VerdictStamp } from "@/components/VerdictStamp";
import { formatFecha, getNotasBySection } from "@/lib/notas";
import { SECTIONS } from "@/lib/sections";
import {
  VEREDICTO_ANIMO,
  VEREDICTO_ARROGANCIA,
  VEREDICTO_LEGAL,
  VEREDICTO_DUDOSO,
  VEREDICTO_OBJETIVO,
  VEREDICTO_RIVER_BOCA,
  VEREDICTO_SAYS,
  VEREDICTO_TAGLINE,
} from "@/lib/veredictos";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Veredicto de IA",
  description:
    "La Corte Suprema del debate deportivo. Sin camiseta, sin sobre. No le importa si se enoja River o Boca: alguien siempre se va a enojar. Fin de discusión.",
};

export default function VeredictoPage() {
  const section = SECTIONS.veredicto;
  const notas = getNotasBySection("veredicto");

  return (
    <div>
      <section className="border-b-2 border-ink bg-ink text-paper">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-8 sm:py-16">
          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-ia">
            {section.kicker} · Veredicto de IA
          </p>
          <h1 className="mt-3 font-display text-5xl leading-[0.95] sm:text-6xl">
            La Corte Suprema del debate
          </h1>
          <p className="mt-5 max-w-2xl font-display text-2xl italic leading-snug text-paper/85 sm:text-3xl">
            Veredicto de IA: sin camiseta, sin sobre.
          </p>
          <blockquote className="mt-8 max-w-3xl border-l-2 border-ia pl-4 font-display text-2xl leading-snug sm:text-3xl">
            {VEREDICTO_RIVER_BOCA}
          </blockquote>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-paper/70">
            {VEREDICTO_ARROGANCIA}
          </p>
          <blockquote className="mt-5 max-w-3xl border-l-2 border-hot pl-4 font-display text-2xl italic leading-snug sm:text-3xl">
            «{VEREDICTO_ANIMO}»
          </blockquote>
          <p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-paper/45">
            Respuesta de la casa a la tribuna enojada
          </p>
          <p className="mt-8 font-display text-4xl leading-none text-ia">
            {VEREDICTO_TAGLINE}
          </p>
          <p className="mt-2 text-sm uppercase tracking-[0.18em] text-paper/55">
            {VEREDICTO_SAYS}
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-12">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)]">
          <div className="space-y-4 text-[17px] leading-8 text-ink-soft">
            <h2 className="font-display text-3xl text-ink">El juez no tiene hinchada</h2>
            <p>
              El fútbol argentino es el laboratorio: clásicos, Libertadores, la
              Selección, la fecha que se discute hasta el lunes. Pero la Corte
              no se limita a los once. Hay Mundial. Hay Copa. Hay básquet, tenis,
              F1 y lo que venga con reglamento escrito y video en la mesa. Si
              hay regla y hay jugada, hay veredicto.
            </p>
            <p>
              El método es el de la casa. Hechos primero. Reglamento después.
              Opinión al final, con etiqueta. El sello dice SÍ FUE, NO FUE o
              DUDOSO. No hay tercera camiseta: hay duda, y la duda también se
              declara.
            </p>
            <p>{VEREDICTO_OBJETIVO}</p>
            <p>{VEREDICTO_DUDOSO}</p>
            <p>{VEREDICTO_ARROGANCIA}</p>
            <p>
              Si la tribuna viene a puteárnos, la respuesta de la casa es una
              sola: <em className="text-ink">«{VEREDICTO_ANIMO}»</em>
            </p>
            <p>
              Esto es una herramienta para el{" "}
              <strong className="text-ink">fin de la discusión</strong>. La
              tribuna puede seguir gritando. El asado, no.{" "}
              <em>{VEREDICTO_SAYS}</em>
            </p>
          </div>
          <aside className="border-2 border-ink bg-paper-2 px-5 py-6">
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-hot">
              Aviso legal
            </p>
            <p className="mt-3 font-display text-xl leading-snug text-ink">
              No somos el VAR. No somos el árbitro. No somos AFA.
            </p>
            <p className="mt-3 text-sm leading-relaxed text-ink-soft">
              {VEREDICTO_LEGAL} Cada fallo es análisis de redacción, no una
              resolución deportiva. Si tu club necesita un himno, este no es el
              escritorio.
            </p>
            <ul className="mt-5 space-y-2 text-sm text-ink-soft">
              <li>
                <strong className="text-ink">1. Hechos.</strong> Qué se ve, sin
                camiseta.
              </li>
              <li>
                <strong className="text-ink">2. Reglamento.</strong> IFAB u otra
                disciplina, no el relator.
              </li>
              <li>
                <strong className="text-ink">3. Veredicto.</strong> Un sello.
                Etiquetado. Si es limítrofe, DUDOSO con explicación. No hay
                certeza de mentira.
              </li>
            </ul>
          </aside>
        </div>
      </section>

      <section id="fallos" className="border-t-2 border-ink bg-paper">
        <div className="mx-auto max-w-6xl px-4 py-12">
          <div className="mb-8 flex items-end justify-between gap-4">
            <h2 className="font-display text-3xl">Fallos</h2>
            <p className="hidden text-[11px] uppercase tracking-[0.18em] text-muted sm:block">
              Análisis · No es VAR oficial
            </p>
          </div>
          {notas.length === 0 ? (
            <p className="text-ink-soft">Todavía no hay veredictos en esta corte.</p>
          ) : (
            <div className="grid gap-10 md:grid-cols-2">
              {notas.map((nota) => (
                <article key={nota.slug} className="flex flex-col gap-4">
                  {nota.fallo && nota.veredicto ? (
                    <VerdictStamp
                      fallo={nota.fallo}
                      label={nota.veredicto}
                      size="default"
                    />
                  ) : null}
                  <div>
                    <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-ia">
                      {nota.competencia ?? "Veredicto de IA"}
                    </p>
                    <h3 className="mt-2 font-display text-2xl leading-tight">
                      <Link href={`/nota/${nota.slug}`} className="hover:text-hot">
                        {nota.title}
                      </Link>
                    </h3>
                    <p className="mt-2 text-[15px] leading-relaxed text-ink-soft">
                      {nota.dek}
                    </p>
                    <p className="mt-2 text-xs uppercase tracking-[0.14em] text-muted">
                      {formatFecha(nota.date)} · {nota.disclaimer}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}

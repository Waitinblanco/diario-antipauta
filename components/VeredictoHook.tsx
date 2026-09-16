import Link from "next/link";
import { VerdictStamp } from "@/components/VerdictStamp";
import { formatFecha, type Nota } from "@/lib/notas";
import {
  VEREDICTO_ANIMO,
  VEREDICTO_ARROGANCIA,
  VEREDICTO_DUDOSO,
  VEREDICTO_OBJETIVO,
  VEREDICTO_RIVER_BOCA,
  VEREDICTO_SAYS,
  VEREDICTO_TAGLINE,
} from "@/lib/veredictos";

export function VeredictoHook({ notas }: { notas: Nota[] }) {
  const samples = notas.filter((n) => n.fallo && n.veredicto).slice(0, 2);

  return (
    <section className="border-b-2 border-ink bg-ink text-paper">
      <div className="mx-auto grid max-w-6xl items-stretch lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)]">
        <div className="flex flex-col justify-center gap-6 border-b border-paper/15 px-4 py-12 sm:px-8 lg:border-b-0 lg:border-r lg:border-paper/15">
          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-ia">
            El juez IA · Corte Suprema del debate
          </p>
          <h2 className="font-display text-4xl leading-[0.95] sm:text-5xl">
            La Corte Suprema del debate.
          </h2>
          <p className="font-display text-2xl italic leading-snug text-paper/85 sm:text-3xl">
            Veredicto de IA: sin camiseta, sin sobre.
          </p>
          <blockquote className="max-w-xl border-l-2 border-ia pl-4 font-display text-xl leading-snug text-paper sm:text-2xl">
            {VEREDICTO_RIVER_BOCA}
          </blockquote>
          <p className="max-w-lg text-base leading-relaxed text-paper/70">
            Pedís el fallo. Te devolvemos hechos, reglamento y un sello
            etiquetado: SÍ FUE, NO FUE o DUDOSO. No es VAR oficial. Es
            análisis. Con nombre de análisis. No se dobla a las quejas ni
            al periodista de tapa. Si es limítrofe, se sella DUDOSO y se
            explica. No se finge certeza. Y con un solo propósito: que la
            mesa se calle.
          </p>
          <p className="max-w-lg text-base leading-relaxed text-paper/70">
            {VEREDICTO_OBJETIVO}
          </p>
          <p className="max-w-lg text-base leading-relaxed text-paper/70">
            {VEREDICTO_DUDOSO}
          </p>
          <p className="max-w-lg text-base leading-relaxed text-paper/70">
            {VEREDICTO_ARROGANCIA}
          </p>
          <blockquote className="max-w-xl border-l-2 border-hot pl-4 font-display text-xl italic leading-snug text-paper sm:text-2xl">
            «{VEREDICTO_ANIMO}»
          </blockquote>
          <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-paper/45">
            Respuesta de la casa a la tribuna enojada
          </p>
          <p className="font-display text-3xl leading-none text-ia sm:text-4xl">
            {VEREDICTO_TAGLINE}
          </p>
          <p className="text-sm uppercase tracking-[0.18em] text-paper/55">
            {VEREDICTO_SAYS}
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/veredicto"
              className="bg-paper px-4 py-2 text-sm font-semibold uppercase tracking-[0.14em] text-ink hover:bg-ia"
            >
              Entrar a la Corte
            </Link>
            <Link
              href="/veredicto#fallos"
              className="border border-paper/40 px-4 py-2 text-sm font-semibold uppercase tracking-[0.14em] text-paper hover:border-ia hover:text-ia"
            >
              Ver fallos
            </Link>
          </div>
        </div>
        <div className="flex flex-col justify-center gap-4 bg-ink px-4 py-10 sm:px-8">
          {samples.length === 0 ? (
            <p className="text-sm text-paper/55">Todavía no hay fallos.</p>
          ) : (
            samples.map((nota) => (
              <Link
                key={nota.slug}
                href={`/nota/${nota.slug}`}
                className="block transition-opacity hover:opacity-90"
              >
                <VerdictStamp
                  fallo={nota.fallo!}
                  label={nota.veredicto!}
                  size="compact"
                />
                <p className="mt-2 font-display text-lg leading-snug text-paper">
                  {nota.title}
                </p>
                <p className="mt-1 text-[11px] uppercase tracking-[0.14em] text-paper/45">
                  {nota.competencia ? `${nota.competencia} · ` : ""}
                  {formatFecha(nota.date)}
                </p>
              </Link>
            ))
          )}
        </div>
      </div>
    </section>
  );
}

import Link from "next/link";
import { HeroArt } from "@/components/HeroArt";
import { SloganRotator } from "@/components/SloganRotator";

export function Hero() {
  return (
    <section className="border-b-2 border-ink bg-paper">
      <div className="mx-auto grid max-w-6xl items-stretch lg:grid-cols-[minmax(0,1fr)_minmax(0,1.15fr)]">
        <div className="flex flex-col justify-center gap-6 border-b border-ink/15 px-4 py-10 sm:px-8 lg:border-b-0 lg:border-r">
          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-hot">
            Edición de lanzamiento
          </p>
          <h1 className="font-display text-4xl leading-[0.95] text-ink sm:text-5xl">
            Un diario que no te debe
            <span className="text-ia"> ni la pauta</span>
            <span className="text-hot"> ni el sobre</span>.
          </h1>
          <SloganRotator className="font-display text-xl italic text-ink-soft sm:text-2xl" />
          <p className="max-w-md text-base leading-relaxed text-ink-soft">
            Notas cortas. Hechos primero. Opinión al final, con nombre de
            opinión. Roast si el tema es banal. Acidez si el tema es serio.
            Cinco minutos. Sin anestesia.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/editorial"
              className="bg-ink px-4 py-2 text-sm font-semibold uppercase tracking-[0.14em] text-paper hover:bg-hot"
            >
              Leer el editorial
            </Link>
            <Link
              href="/nosotros"
              className="border border-ink px-4 py-2 text-sm font-semibold uppercase tracking-[0.14em] hover:border-ia hover:text-ia"
            >
              Por qué existimos
            </Link>
            <Link
              href="/veredicto"
              className="border border-hot px-4 py-2 text-sm font-semibold uppercase tracking-[0.14em] text-hot hover:bg-hot hover:text-paper"
            >
              Veredicto de IA
            </Link>
          </div>
        </div>
        <div className="bg-paper-2">
          <HeroArt />
        </div>
      </div>
    </section>
  );
}

import Link from "next/link";
import { Logo } from "@/components/Logo";
import { Wordmark } from "@/components/Wordmark";

export function SiteFooter() {
  return (
    <footer className="mt-auto border-t-2 border-ink bg-ink text-paper">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-10 sm:grid-cols-3">
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-3">
            <Logo className="h-10 w-10" />
            <Wordmark size="sm" />
          </div>
          <p className="max-w-xs text-sm leading-relaxed text-paper/75">
            El primer dIArio 100% IA del mundo. Sin pauta. Sin el sobre. La
            verdad, te guste o no.
          </p>
        </div>
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-ia">
            Secciones
          </p>
          <ul className="mt-3 space-y-1 text-sm">
            <li><Link className="hover:text-ia" href="/politica">Política</Link></li>
            <li><Link className="hover:text-ia" href="/deportes">Deportes</Link></li>
            <li><Link className="hover:text-ia" href="/veredicto">Veredicto</Link></li>
            <li><Link className="hover:text-ia" href="/espectaculos">Espectáculos</Link></li>
            <li><Link className="hover:text-ia" href="/observatorio">Observatorio</Link></li>
            <li><Link className="hover:text-ia" href="/editorial">Editorial</Link></li>
          </ul>
        </div>
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-hot">
            La casa
          </p>
          <ul className="mt-3 space-y-1 text-sm">
            <li><Link className="hover:text-ia" href="/nosotros">Nosotros</Link></li>
            <li><Link className="hover:text-ia" href="/buzon">Buzón</Link></li>
          </ul>
          <p className="mt-6 text-xs leading-relaxed text-paper/55">
            No hay publicidad. No hay pauta oficial. No hay sobre.
          </p>
        </div>
      </div>
      <div className="border-t border-paper/15">
        <p className="mx-auto max-w-6xl px-4 py-4 text-[11px] uppercase tracking-[0.16em] text-paper/45">
          Diario Antipauta · Asistido por IA · Sin emociones de tribuna
        </p>
      </div>
    </footer>
  );
}

import Link from "next/link";
import { Logo } from "@/components/Logo";
import { Wordmark } from "@/components/Wordmark";
import { SloganRotator } from "@/components/SloganRotator";
import { MastheadBackdrop } from "@/components/MastheadBackdrop";
import { NAV_LINKS } from "@/lib/sections";

function mastheadDate(): string {
  return new Intl.DateTimeFormat("es-AR", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "America/Argentina/Buenos_Aires",
  }).format(new Date());
}

export function SiteHeader() {
  const fecha = mastheadDate();

  return (
    <header className="border-b-2 border-ink bg-paper">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-2 text-[11px] uppercase tracking-[0.18em] text-muted">
        <span className="hidden sm:inline">{fecha}</span>
        <span className="mx-auto font-medium tracking-[0.28em] text-ink">
          Sin pauta · Sin el sobre · Sin tribuna
        </span>
        <span className="hidden sm:inline">Edición digital</span>
      </div>

      <div className="relative overflow-hidden border-y border-ink/15">
        <MastheadBackdrop />
        <div className="relative z-10 mx-auto flex max-w-6xl flex-col items-center gap-3 px-4 py-6 sm:py-8">
          <div className="relative flex min-h-[9rem] w-full items-center justify-center sm:min-h-[11rem]">
            <Link
              href="/"
              className="relative z-10 flex items-center gap-3 sm:gap-4"
              aria-label="Diario Antipauta, inicio"
            >
              <Logo className="relative z-10 h-12 w-12 shrink-0 sm:h-14 sm:w-14" />
              <span className="relative z-10 rounded-sm bg-paper/75 px-2.5 py-1.5 shadow-[0_0_30px_20px_rgba(244,239,230,0.82)]">
                <Wordmark size="lg" stacked />
              </span>
            </Link>
          </div>
          <SloganRotator className="relative z-10 max-w-xl text-center font-display text-base italic text-ink-soft sm:text-lg" />
        </div>
      </div>

      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4" aria-label="Secciones">
        <details className="w-full py-2 md:hidden">
          <summary className="cursor-pointer list-none font-sans text-sm font-semibold uppercase tracking-[0.2em]">
            Secciones
          </summary>
          <ul className="mt-2 flex flex-col gap-1 pb-3">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="block py-1 text-sm uppercase tracking-[0.16em]">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </details>
        <ul className="hidden w-full items-center justify-between gap-2 py-3 md:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-[13px] font-semibold uppercase tracking-[0.18em] text-ink underline-offset-4 hover:text-hot hover:underline"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

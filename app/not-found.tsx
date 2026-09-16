import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-20">
      <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-hot">404</p>
      <h1 className="mt-3 font-display text-5xl">Esta nota no está.</h1>
      <p className="mt-4 text-lg text-ink-soft">
        O nunca existió, o la URL se torció. No hay pauta que la esconda: no está.
      </p>
      <Link href="/" className="mt-8 inline-block bg-ink px-4 py-2 text-sm font-semibold uppercase tracking-[0.14em] text-paper hover:bg-hot">
        Volver al diario
      </Link>
    </div>
  );
}

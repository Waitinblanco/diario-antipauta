import { FALLO_TONE, VEREDICTO_LEGAL, type FalloId } from "@/lib/veredictos";

export function VerdictStamp({
  fallo,
  label,
  size = "default",
}: {
  fallo: FalloId;
  label: string;
  size?: "default" | "compact" | "hero";
}) {
  const tone = FALLO_TONE[fallo];
  const hero = size === "hero";
  const compact = size === "compact";

  return (
    <aside
      className={`border-2 ${tone.box} ${
        hero ? "px-6 py-7 sm:px-8 sm:py-8" : compact ? "px-3 py-3" : "px-5 py-5"
      }`}
    >
      <p
        className={`font-semibold uppercase tracking-[0.22em] ${
          compact ? "text-[10px] opacity-80" : "text-[11px] opacity-90"
        }`}
      >
        Veredicto
      </p>
      <p
        className={`font-display font-semibold leading-none tracking-tight ${
          hero ? "mt-3 text-4xl sm:text-5xl" : compact ? "mt-1 text-xl" : "mt-2 text-3xl"
        }`}
      >
        {label}
      </p>
      {compact ? null : (
        <p className={`mt-4 max-w-xl leading-relaxed ${hero ? "text-sm opacity-90" : "text-xs opacity-85"}`}>
          {VEREDICTO_LEGAL}
        </p>
      )}
    </aside>
  );
}

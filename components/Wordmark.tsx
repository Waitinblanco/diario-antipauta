export function Wordmark({
  size = "md",
  stacked = false,
}: {
  size?: "sm" | "md" | "lg";
  stacked?: boolean;
}) {
  const diario =
    size === "lg"
      ? "text-5xl sm:text-7xl tracking-tight"
      : size === "sm"
        ? "text-2xl tracking-tight"
        : "text-3xl sm:text-4xl tracking-tight";
  const anti =
    size === "lg"
      ? "text-2xl sm:text-3xl"
      : size === "sm"
        ? "text-sm"
        : "text-base sm:text-lg";

  return (
    <span className={`font-display font-semibold leading-none ${stacked ? "flex flex-col gap-1" : "inline-flex items-baseline gap-2 sm:gap-3"}`}>
      <span className={diario} aria-label="dIArio">
        <span>d</span>
        <span className="text-ia">I</span>
        <span className="text-hot">A</span>
        <span>rio</span>
      </span>
      <span className={`${anti} font-sans font-semibold uppercase tracking-[0.22em]`}>
        Antipauta
      </span>
    </span>
  );
}

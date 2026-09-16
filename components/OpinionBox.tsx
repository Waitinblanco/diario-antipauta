export function OpinionBox({
  label,
  children,
}: {
  label: string;
  children: string;
}) {
  return (
    <aside className="mt-10 border-2 border-ink bg-paper-2 px-5 py-6">
      <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-hot">
        {label}
      </p>
      <p className="mt-3 font-display text-xl leading-snug text-ink">{children}</p>
    </aside>
  );
}

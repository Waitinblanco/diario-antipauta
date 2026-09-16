export function Disclaimer({ text }: { text: string }) {
  return (
    <p className="inline-block border border-ink/20 bg-paper-2 px-2 py-1 text-[11px] uppercase tracking-[0.16em] text-muted">
      {text}
    </p>
  );
}

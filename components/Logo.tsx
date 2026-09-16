export function Logo({ className = "h-10 w-10" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 64 64"
      className={className}
      role="img"
      aria-label="Diario Antipauta"
    >
      <rect width="64" height="64" rx="4" fill="#141310" />
      <rect x="3" y="3" width="58" height="58" rx="2" fill="none" stroke="#f4efe6" strokeWidth="1.2" />
      <text
        x="32"
        y="40"
        textAnchor="middle"
        fontFamily="Georgia, Times New Roman, serif"
        fontSize="28"
        fontWeight="700"
        letterSpacing="-1"
      >
        <tspan fill="#00c4c8">I</tspan>
        <tspan fill="#e10600">A</tspan>
      </text>
      <rect x="14" y="48" width="36" height="1" fill="#f4efe6" opacity="0.45" />
    </svg>
  );
}

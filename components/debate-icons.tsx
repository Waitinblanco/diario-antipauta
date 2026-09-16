import type { ReactNode } from "react";

export type Pose = {
  x?: number;
  y?: number;
  s?: number;
  r?: number;
  o?: number;
};

function G({
  x = 0,
  y = 0,
  s = 1,
  r = 0,
  o = 1,
  children,
}: Pose & { children: ReactNode }) {
  return (
    <g transform={`translate(${x} ${y}) rotate(${r}) scale(${s})`} opacity={o}>
      {children}
    </g>
  );
}

/** Oil derrick + hanging drop. Origin at tower center. */
export function OilDerrick(p: Pose) {
  return (
    <G {...p}>
      <path
        d="M-14 22 L0 -20 L14 22"
        fill="none"
        stroke="#141310"
        strokeWidth="1.7"
        strokeLinejoin="round"
      />
      <path d="M-10 10 H10 M-7 0 H7 M-4 -10 H4" stroke="#141310" strokeWidth="1.15" />
      <rect x="-2.2" y="-26" width="4.4" height="8" fill="#141310" />
      <line x1="0" y1="22" x2="0" y2="30" stroke="#141310" strokeWidth="1" />
      <path d="M0 30 C-3.4 35 -3.4 40 0 40 C3.4 40 3.4 35 0 30 Z" fill="#141310" />
    </G>
  );
}

export function OilDrop(p: Pose) {
  return (
    <G {...p}>
      <path d="M0 -10 C-7 -1 -7 8 0 10 C7 8 7 -1 0 -10 Z" fill="#141310" />
      <path d="M-2 -2 C-1 -6 1 -6 1 -1" fill="none" stroke="#f4efe6" strokeWidth="1.1" />
    </G>
  );
}

/** Small Palestine flag motif: black / white / green + red triangle. */
export function PalestineFlag(p: Pose) {
  return (
    <G {...p}>
      <rect x="-18" y="-12" width="36" height="24" fill="#f4efe6" stroke="#141310" strokeWidth="0.8" />
      <rect x="-18" y="-12" width="36" height="8" fill="#141310" />
      <rect x="-18" y="-4" width="36" height="8" fill="#f4efe6" />
      <rect x="-18" y="4" width="36" height="8" fill="#007a3d" />
      <path d="M-18 -12 L-4 0 L-18 12 Z" fill="#ce1126" />
    </G>
  );
}

/** Tiny keffiyeh fishnet diamond — decorative, not a portrait. */
export function Keffiyeh({ pid = "keff", ...p }: Pose & { pid?: string }) {
  return (
    <G {...p}>
      <defs>
        <pattern id={pid} width="6" height="6" patternUnits="userSpaceOnUse">
          <rect width="6" height="6" fill="#f4efe6" />
          <path d="M0 6 L6 0 M-1 2 L2 -1 M4 7 L7 4" stroke="#141310" strokeWidth="0.7" />
        </pattern>
      </defs>
      <rect x="-13" y="-13" width="26" height="26" transform="rotate(45)" fill={`url(#${pid})`} stroke="#141310" strokeWidth="0.8" />
    </G>
  );
}

export function StarOfDavid(p: Pose) {
  return (
    <G {...p}>
      <path d="M0 -12 L10.4 6 H-10.4 Z" fill="none" stroke="#0038b8" strokeWidth="1.55" />
      <path d="M0 12 L10.4 -6 H-10.4 Z" fill="none" stroke="#0038b8" strokeWidth="1.55" />
    </G>
  );
}

export function CartoonBomb(p: Pose) {
  return (
    <G {...p}>
      <circle cx="0" cy="4" r="12" fill="#141310" />
      <ellipse cx="-4" cy="0" rx="3" ry="2" fill="#3a3630" opacity="0.5" />
      <rect x="-3" y="-12" width="6" height="5" rx="0.8" fill="#5c564c" />
      <path d="M3 -12 Q10 -18 14 -12" fill="none" stroke="#141310" strokeWidth="1.35" />
      <circle cx="15" cy="-12" r="2.6" fill="#ffe56b" />
      <circle cx="16.4" cy="-13.4" r="1.1" fill="#ff6a00" />
    </G>
  );
}

/** Clean IA rocket — respectful, not clownish. Origin at body center. */
export function IaRocket(p: Pose) {
  return (
    <G {...p}>
      <path d="M0 -26 L8 0 V22 H-8 V0 Z" fill="#141310" />
      <path d="M0 -18 L5.2 0 V18 H-5.2 V0 Z" fill="#f4efe6" />
      <text
        x="0"
        y="8"
        textAnchor="middle"
        fontFamily="Georgia, serif"
        fontSize="9"
        fontWeight="700"
      >
        <tspan fill="#00c4c8">I</tspan>
        <tspan fill="#e10600">A</tspan>
      </text>
      <path d="M-8 16 L-14 28 L-8 22 Z" fill="#e10600" />
      <path d="M8 16 L14 28 L8 22 Z" fill="#009ea3" />
      <circle cx="0" cy="-10" r="3.2" fill="#141310" />
      <circle cx="0" cy="-10" r="1.7" fill="#b8ffff" />
      <ellipse cx="0" cy="28" rx="4.5" ry="7" fill="#ff6a00" />
      <ellipse cx="0" cy="31" rx="2.4" ry="4.5" fill="#ffe56b" />
    </G>
  );
}

export function CrescentMoon(p: Pose) {
  return (
    <G {...p}>
      <path
        d="M6 -12 A14 14 0 1 0 6 12 A10 10 0 1 1 6 -12 Z"
        fill="#f4efe6"
        stroke="#141310"
        strokeWidth="0.9"
      />
    </G>
  );
}

/** Progress-pride stripe banner (chevron + rainbow). */
export function PrideBanner(p: Pose) {
  const stripes = ["#e40303", "#ff8c00", "#ffed00", "#008026", "#24408e", "#732982"];
  return (
    <G {...p}>
      {stripes.map((c, i) => (
        <rect key={c} x="-22" y={-12 + i * 4} width="46" height="4" fill={c} />
      ))}
      <path d="M-22 -12 L-4 0 L-22 12 Z" fill="#141310" />
      <path d="M-22 -12 L-8 0 L-22 12 Z" fill="#613915" />
      <path d="M-22 -12 L-11.5 0 L-22 12 Z" fill="#74d7ee" />
      <path d="M-22 -12 L-15 0 L-22 12 Z" fill="#ffafc8" />
      <path d="M-22 -12 L-18.5 0 L-22 12 Z" fill="#f4efe6" />
      <rect x="-22" y="-12" width="46" height="24" fill="none" stroke="#141310" strokeWidth="0.7" />
    </G>
  );
}

export function SovietEmblem(p: Pose) {
  return (
    <G {...p}>
      <circle r="16" fill="#c8102e" />
      <circle r="16" fill="none" stroke="#ffd700" strokeWidth="1.15" />
      <path
        d="M1 7 A9.5 9.5 0 1 1 8 -5 A7.4 7.4 0 1 0 1 7 Z"
        fill="#ffd700"
      />
      <g transform="rotate(-38)">
        <rect x="-1.5" y="-11" width="3" height="20" rx="0.4" fill="#ffd700" />
        <rect x="-6.5" y="-13" width="12" height="4.4" rx="0.5" fill="#ffd700" />
      </g>
      <path
        d="M0 -15.2 L1.15 -11.6 L4.9 -11.6 L1.9 -9.4 L3.05 -5.8 L0 -8 L-3.05 -5.8 L-1.9 -9.4 L-4.9 -11.6 L-1.15 -11.6 Z"
        fill="#ffd700"
      />
    </G>
  );
}

export function Bitcoin(p: Pose) {
  return (
    <G {...p}>
      <circle r="13" fill="#f7931a" stroke="#141310" strokeWidth="1" />
      <text
        x="0"
        y="5.2"
        textAnchor="middle"
        fontFamily="Georgia, Times New Roman, serif"
        fontSize="16"
        fontWeight="700"
        fill="#141310"
      >
        ₿
      </text>
    </G>
  );
}

export function DollarBill(p: Pose) {
  return (
    <G {...p}>
      <rect x="-20" y="-11" width="40" height="22" rx="1.6" fill="#d7e4cc" stroke="#141310" strokeWidth="0.85" />
      <rect x="-17" y="-8" width="34" height="16" rx="1" fill="none" stroke="#2d6a4f" strokeWidth="0.55" />
      <circle r="5.5" fill="none" stroke="#2d6a4f" strokeWidth="0.7" />
      <text
        x="0"
        y="3.6"
        textAnchor="middle"
        fontFamily="Georgia, serif"
        fontSize="11"
        fontWeight="700"
        fill="#1b4332"
      >
        $
      </text>
    </G>
  );
}

export function DollarSign(p: Pose) {
  return (
    <G {...p}>
      <text
        x="0"
        y="6"
        textAnchor="middle"
        fontFamily="Georgia, serif"
        fontSize="22"
        fontWeight="700"
        fill="#1b4332"
      >
        $
      </text>
    </G>
  );
}

/** Argentine peso: celeste disc, Sol de Mayo, $ ARS. */
export function PesoARS(p: Pose) {
  return (
    <G {...p}>
      <circle r="15" fill="#74acdf" stroke="#141310" strokeWidth="0.85" />
      <circle r="5.2" fill="#f6b40e" />
      {Array.from({ length: 12 }, (_, i) => {
        const a = (i * Math.PI) / 6;
        const x1 = Math.cos(a) * 6.4;
        const y1 = Math.sin(a) * 6.4;
        const x2 = Math.cos(a) * 9.4;
        const y2 = Math.sin(a) * 9.4;
        return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="#f6b40e" strokeWidth="1.15" />;
      })}
      <text
        x="0"
        y="3.2"
        textAnchor="middle"
        fontFamily="Georgia, serif"
        fontSize="9"
        fontWeight="700"
        fill="#141310"
      >
        $
      </text>
      <text
        x="0"
        y="19.5"
        textAnchor="middle"
        fontFamily="ui-sans-serif, system-ui, sans-serif"
        fontSize="5.5"
        fontWeight="700"
        fill="#141310"
        letterSpacing="0.6"
      >
        ARS
      </text>
    </G>
  );
}

/** Blonde swept wig only — no head, no face. */
export function TrumpWig(p: Pose) {
  return (
    <G {...p}>
      <path
        d="M-20 8
           C-22 -6 -10 -16 2 -16
           C16 -16 22 -7 20 2
           C26 0 26 10 18 12
           C10 6 2 14 -12 10
           C-18 16 -22 12 -20 8 Z"
        fill="#e8c04a"
        stroke="#141310"
        strokeWidth="0.7"
      />
      <path
        d="M-8 4 C-2 -8 14 -6 16 4 C8 0 -2 8 -8 4 Z"
        fill="#c9a017"
      />
      <path
        d="M-10 -6 C0 -12 12 -6 10 0"
        fill="none"
        stroke="#f6e7a2"
        strokeWidth="1.35"
        strokeLinecap="round"
      />
    </G>
  );
}

/** Wild unkempt wig only — no head, no face. */
export function MileiWig(p: Pose) {
  return (
    <G {...p}>
      <path
        d="M-6 12
           L-18 2 L-12 8
           L-22 -8 L-10 4
           L-16 -20 L-2 2
           L-8 -26 L4 0
           L6 -28 L12 0
           L20 -20 L14 4
           L26 -6 L16 8
           L24 2 L10 14
           L-8 14 Z"
        fill="#3d2914"
        stroke="#141310"
        strokeWidth="0.65"
        strokeLinejoin="round"
      />
      <path
        d="M-4 10 L-10 -10 L0 6 L4 -14 L8 6 L14 -8 L8 12 Z"
        fill="#5c4030"
      />
    </G>
  );
}

/** Sobre / envelope with $ — corruption cue. */
export function Sobre(p: Pose) {
  return (
    <G {...p}>
      <rect x="-16" y="-10" width="32" height="22" fill="#f4efe6" stroke="#141310" strokeWidth="1" />
      <path d="M-16 -10 L0 4 L16 -10" fill="none" stroke="#141310" strokeWidth="1" />
      <path d="M-16 12 L0 -2 L16 12" fill="none" stroke="#141310" strokeWidth="0.55" opacity="0.45" />
      <circle cx="0" cy="4" r="6.2" fill="#ffe56b" stroke="#141310" strokeWidth="0.7" />
      <text
        x="0"
        y="7.2"
        textAnchor="middle"
        fontFamily="Georgia, serif"
        fontSize="9"
        fontWeight="700"
        fill="#141310"
      >
        $
      </text>
    </G>
  );
}

export function Football(p: Pose) {
  return (
    <G {...p}>
      <circle r="13" fill="#f4efe6" stroke="#141310" strokeWidth="1.05" />
      <polygon points="0,-5 4.8,-1.6 2.9,4  -2.9,4 -4.8,-1.6" fill="#141310" />
      <path
        d="M-4.8 -1.6 L-11 -4 M4.8 -1.6 L11 -4 M2.9 4 L7 11 M-2.9 4 L-7 11 M0 -5 L0 -13"
        stroke="#141310"
        strokeWidth="0.85"
        fill="none"
      />
      <path
        d="M-11 -4 Q-13 0 -11 6 M11 -4 Q13 0 11 6"
        stroke="#141310"
        strokeWidth="0.7"
        fill="none"
      />
    </G>
  );
}

export function TennisRacket(p: Pose) {
  return (
    <G {...p}>
      <ellipse cx="0" cy="-8" rx="8" ry="11" fill="#c8e6c9" stroke="#141310" strokeWidth="1.4" />
      <g stroke="#141310" strokeWidth="0.35" opacity="0.7">
        <line x1="-6" y1="-14" x2="-6" y2="-2" />
        <line x1="-2" y1="-16" x2="-2" y2="0" />
        <line x1="2" y1="-16" x2="2" y2="0" />
        <line x1="6" y1="-14" x2="6" y2="-2" />
        <line x1="-7" y1="-12" x2="7" y2="-12" />
        <line x1="-7.4" y1="-8" x2="7.4" y2="-8" />
        <line x1="-7" y1="-4" x2="7" y2="-4" />
      </g>
      <rect x="-1.4" y="2" width="2.8" height="16" rx="0.6" fill="#8d6e4a" stroke="#141310" strokeWidth="0.6" />
      <rect x="-3.2" y="16" width="6.4" height="4" rx="1" fill="#141310" />
    </G>
  );
}

/** Oscar-like statue silhouette — generic knight, no likeness. */
export function OscarStatue(p: Pose) {
  return (
    <G {...p}>
      <circle cy="-18" r="4.2" fill="#d4af37" />
      <path d="M-6 -13 L6 -13 L7 8 L-7 8 Z" fill="#d4af37" />
      <path d="M-7 8 L7 8 L5 20 H-5 Z" fill="#c9a227" />
      <rect x="-1.2" y="-16" width="2.4" height="18" fill="#b8860b" />
      <path d="M-8 -8 H8 V-5 H-8 Z" fill="#b8860b" />
      <ellipse cy="22" rx="8" ry="2.4" fill="#d4af37" />
    </G>
  );
}

export function TheaterMasks(p: Pose) {
  return (
    <G {...p}>
      {/* comedy */}
      <g transform="translate(-11 0) rotate(-8)">
        <ellipse rx="10" ry="11" fill="#f4efe6" stroke="#141310" strokeWidth="0.9" />
        <ellipse cx="-3.2" cy="-2" rx="1.6" ry="2" fill="#141310" />
        <ellipse cx="3.2" cy="-2" rx="1.6" ry="2" fill="#141310" />
        <path d="M-4 5 Q0 9 4 5" fill="none" stroke="#141310" strokeWidth="1.15" strokeLinecap="round" />
      </g>
      {/* tragedy */}
      <g transform="translate(11 1) rotate(10)">
        <ellipse rx="10" ry="11" fill="#141310" />
        <ellipse cx="-3.2" cy="-2" rx="1.6" ry="2" fill="#f4efe6" />
        <ellipse cx="3.2" cy="-2" rx="1.6" ry="2" fill="#f4efe6" />
        <path d="M-4 8 Q0 4 4 8" fill="none" stroke="#f4efe6" strokeWidth="1.15" strokeLinecap="round" />
      </g>
    </G>
  );
}

/** Broadcast / glitter mic — Argentine show-biz. */
export function GlitterMic(p: Pose) {
  return (
    <G {...p}>
      <rect x="-3.2" y="4" width="6.4" height="16" rx="1" fill="#141310" />
      <rect x="-6" y="18" width="12" height="3" rx="0.6" fill="#5c564c" />
      <ellipse cy="-4" rx="8" ry="10" fill="#c9a227" stroke="#141310" strokeWidth="0.85" />
      <ellipse cy="-4" rx="5.2" ry="7" fill="none" stroke="#141310" strokeWidth="0.7" />
      <path d="M-4 -8 H4 M-4.4 -4 H4.4 M-4 0 H4" stroke="#141310" strokeWidth="0.55" />
      <circle cx="10" cy="-14" r="1.2" fill="#ffe56b" />
      <circle cx="13" cy="-8" r="0.8" fill="#ffe56b" />
      <circle cx="-11" cy="-12" r="0.9" fill="#ffe56b" />
    </G>
  );
}

export function FactMissile(p: Pose) {
  return (
    <G {...p}>
      <rect x="-28" y="-5" width="42" height="10" rx="4" fill="#141310" />
      <path d="M14 -8 L30 0 L14 8 Z" fill="#e10600" />
      <rect x="-22" y="-6.5" width="16" height="13" fill="#00c4c8" />
      <text
        x="-14"
        y="3.2"
        textAnchor="middle"
        fontSize="6.2"
        fontFamily="ui-monospace, monospace"
        fill="#141310"
      >
        HECHO
      </text>
      <path d="M-28 -5 L-38 -10 L-32 0 L-38 10 L-28 5 Z" fill="#ff6a00" />
    </G>
  );
}

export function MiniCarousel(p: Pose) {
  return (
    <G {...p}>
      <path d="M-16 6 L16 6 L13 22 H-13 Z" fill="#2a2722" />
      <ellipse cy="6" rx="17" ry="4" fill="#141310" />
      <path d="M-18 6 Q0 -12 18 6" fill="#e10600" />
      <path d="M-15 6 Q0 -6 15 6" fill="#f4efe6" />
      <text
        x="0"
        y="2"
        textAnchor="middle"
        fontFamily="ui-monospace, monospace"
        fontSize="5"
        fill="#141310"
      >
        PAUTA
      </text>
    </G>
  );
}

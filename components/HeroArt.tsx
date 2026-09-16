import {
  Bitcoin,
  CartoonBomb,
  CrescentMoon,
  DollarBill,
  DollarSign,
  Football,
  GlitterMic,
  Keffiyeh,
  MileiWig,
  OilDerrick,
  OilDrop,
  OscarStatue,
  PalestineFlag,
  PesoARS,
  PrideBanner,
  Sobre,
  SovietEmblem,
  StarOfDavid,
  TennisRacket,
  TheaterMasks,
  TrumpWig,
} from "@/components/debate-icons";

export function HeroArt() {
  return (
    <svg
      viewBox="0 0 760 460"
      className="h-auto w-full"
      role="img"
      aria-labelledby="hero-art-title hero-art-desc"
    >
      <title id="hero-art-title">Lanzamiento Antipauta</title>
      <desc id="hero-art-desc">
        Ilustración satírica: un cohete con las letras IA despega hacia la
        luna. Íconos simbólicos del debate público — petróleo, banderas,
        bombas de historieta, dinero, cripto, pelucas sin rostro, el sobre,
        deporte y espectáculo — flotan en el cielo. Un misil de hecho
        impacta un carrusel de medios. La muchedumbre es de siluetas
        abstractas, sin caras ni parecido.
      </desc>
      <defs>
        <linearGradient id="hero-sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#c5d5d7" />
          <stop offset="55%" stopColor="#e2d6c0" />
          <stop offset="100%" stopColor="#d4c4a8" />
        </linearGradient>
        <linearGradient id="hero-flame" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#ffe56b" />
          <stop offset="45%" stopColor="#ff6a00" />
          <stop offset="100%" stopColor="#e10600" />
        </linearGradient>
        <linearGradient id="hero-iaflame" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#b8ffff" />
          <stop offset="100%" stopColor="#009ea3" />
        </linearGradient>
        <pattern id="hero-grain" width="6" height="6" patternUnits="userSpaceOnUse">
          <circle cx="1" cy="1" r="0.4" fill="#141310" opacity="0.08" />
        </pattern>
      </defs>

      <rect width="760" height="460" fill="url(#hero-sky)" />
      <rect width="760" height="460" fill="url(#hero-grain)" />

      {/* distant rules like newsprint columns */}
      <g stroke="#141310" strokeOpacity="0.06" strokeWidth="1">
        <line x1="190" y1="20" x2="190" y2="360" />
        <line x1="380" y1="20" x2="380" y2="360" />
        <line x1="570" y1="20" x2="570" y2="360" />
      </g>

      {/* debate collage — behind the launch, symbolic only */}
      <g>
        <OilDerrick x={48} y={92} s={1.15} r={-4} o={0.5} />
        <OilDrop x={86} y={152} s={1} o={0.42} />
        <CrescentMoon x={128} y={46} s={1.35} r={-18} o={0.72} />
        <PalestineFlag x={252} y={34} s={0.72} r={-14} o={0.55} />
        <Keffiyeh x={296} y={80} s={0.55} r={22} o={0.38} pid="hero-keff" />
        <StarOfDavid x={322} y={34} s={0.88} r={10} o={0.52} />
        <CartoonBomb x={368} y={96} s={0.82} r={-18} o={0.58} />
        <CartoonBomb x={92} y={214} s={0.62} r={24} o={0.4} />
        <PrideBanner x={404} y={54} s={0.92} r={8} o={0.6} />
        <SovietEmblem x={462} y={122} s={0.62} r={-12} o={0.48} />
        <Bitcoin x={220} y={122} s={0.75} r={14} o={0.62} />
        <DollarBill x={352} y={154} s={0.78} r={-16} o={0.52} />
        <DollarSign x={270} y={172} s={0.9} o={0.36} />
        <PesoARS x={504} y={34} s={0.68} r={8} o={0.55} />
        <TrumpWig x={436} y={176} s={0.82} r={-10} o={0.55} />
        <MileiWig x={148} y={176} s={0.72} r={16} o={0.52} />
        <Sobre x={552} y={126} s={0.8} r={-8} o={0.58} />
        <Football x={68} y={272} s={0.75} r={-22} o={0.5} />
        <TennisRacket x={304} y={214} s={0.62} r={32} o={0.42} />
        <OscarStatue x={714} y={86} s={0.88} r={4} o={0.55} />
        <TheaterMasks x={668} y={40} s={0.75} r={-6} o={0.58} />
        <GlitterMic x={732} y={172} s={0.72} r={10} o={0.5} />
        <DollarBill x={86} y={36} s={0.58} r={22} o={0.36} />
        <OilDrop x={474} y={80} s={0.55} o={0.32} />
      </g>

      {/* ground */}
      <rect x="0" y="368" width="760" height="92" fill="#141310" />
      <rect x="0" y="368" width="760" height="4" fill="#00c4c8" />

      {/* flying papers */}
      <g fill="#f4efe6" stroke="#141310" strokeWidth="0.8">
        <rect x="90" y="46" width="26" height="16" transform="rotate(-18 90 46)" />
        <rect x="300" y="28" width="22" height="14" transform="rotate(12 300 28)" />
        <rect x="430" y="64" width="20" height="13" transform="rotate(-8 430 64)" />
      </g>

      {/* rocket — IA, respectful, aimed at the moon */}
      <g transform="translate(168 78) rotate(-22)">
        <ellipse cx="40" cy="196" rx="16" ry="28" fill="url(#hero-flame)" />
        <ellipse cx="40" cy="210" rx="9" ry="18" fill="url(#hero-iaflame)" />
        <path d="M40 8 L62 78 L62 168 L18 168 L18 78 Z" fill="#141310" />
        <path d="M40 20 L54 78 L54 160 L26 160 L26 78 Z" fill="#f4efe6" />
        <text x="40" y="118" textAnchor="middle" fontFamily="Georgia, serif" fontSize="28" fontWeight="700">
          <tspan fill="#00c4c8">I</tspan>
          <tspan fill="#e10600">A</tspan>
        </text>
        <path d="M18 150 L4 186 L18 168 Z" fill="#e10600" />
        <path d="M62 150 L76 186 L62 168 Z" fill="#009ea3" />
        <circle cx="40" cy="56" r="8" fill="#141310" />
        <circle cx="40" cy="56" r="4.5" fill="#b8ffff" />
      </g>

      {/* missile hitting carousel */}
      <g transform="translate(498 52) rotate(28)">
        <rect x="0" y="10" width="92" height="10" rx="5" fill="#141310" />
        <path d="M92 6 L118 15 L92 24 Z" fill="#e10600" />
        <rect x="8" y="8" width="28" height="14" fill="#00c4c8" />
        <text x="22" y="19" textAnchor="middle" fontSize="7" fontFamily="monospace" fill="#141310">
          HECHO
        </text>
        <path d="M0 10 L-14 4 L-6 15 L-14 26 L0 20 Z" fill="#ff6a00" />
      </g>

      {/* impact burst */}
      <g transform="translate(620 168)" fill="#e10600">
        <polygon points="0,-28 6,-8 26,-18 10,-2 30,8 8,8 12,28 0,12 -12,28 -8,8 -30,8 -10,-2 -26,-18 -6,-8" />
      </g>
      <g transform="translate(620 168)" fill="#ffe56b">
        <polygon points="0,-14 3,-4 13,-8 5,0 14,5 4,4 6,14 0,6 -6,14 -4,4 -14,5 -5,0 -13,-8 -3,-4" />
      </g>

      {/* carousel */}
      <g transform="translate(528 188)">
        <path d="M20 86 L160 86 L150 188 L30 188 Z" fill="#2a2722" />
        <ellipse cx="90" cy="86" rx="86" ry="16" fill="#141310" />
        <path d="M8 86 Q90 8 172 86" fill="#e10600" />
        <path d="M20 86 Q90 28 160 86" fill="#f4efe6" />
        <g stroke="#141310" strokeWidth="3">
          <line x1="44" y1="86" x2="40" y2="176" />
          <line x1="90" y1="70" x2="90" y2="176" />
          <line x1="136" y1="86" x2="140" y2="176" />
        </g>
        <g fill="#00c4c8">
          <rect x="30" y="132" width="22" height="14" rx="3" />
          <rect x="79" y="124" width="22" height="14" rx="3" />
          <rect x="128" y="134" width="22" height="14" rx="3" />
        </g>
        <g fill="#141310" fontFamily="monospace" fontSize="8" letterSpacing="1">
          <text x="26" y="80">PAUTA</text>
          <text x="78" y="62">PAUTA</text>
          <text x="124" y="80">PAUTA</text>
        </g>
        <circle cx="90" cy="86" r="7" fill="#ffe56b" stroke="#141310" />
      </g>

      {/* crowd silhouettes — satirical types, no faces / no likeness */}
      <g fill="#141310" transform="translate(0 8)">
        <g transform="translate(36 292)">
          <rect x="8" y="0" width="36" height="24" />
          <rect x="14" y="6" width="24" height="12" fill="#00c4c8" />
          <rect x="18" y="24" width="16" height="10" />
          <path d="M10 34 L40 34 L46 76 L4 76 Z" />
          <rect x="40" y="40" width="18" height="6" />
        </g>
        <g transform="translate(92 308)">
          <circle cx="18" cy="10" r="10" />
          <path d="M8 20 L30 20 L34 68 L4 68 Z" />
          <path d="M30 28 L58 16 L58 44 L30 38 Z" fill="#e10600" />
        </g>
        <g transform="translate(158 318)">
          <circle cx="16" cy="8" r="8" />
          <path d="M6 16 L28 16 L30 62 L4 62 Z" />
          <rect x="28" y="30" width="18" height="12" />
          <circle cx="40" cy="54" r="3" fill="#ffe56b" />
          <circle cx="46" cy="62" r="2.4" fill="#ffe56b" />
        </g>
        <g transform="translate(214 300)">
          <circle cx="14" cy="8" r="8" />
          <path d="M4 16 L26 16 L28 70 L2 70 Z" />
          <rect x="24" y="8" width="10" height="18" fill="#00c4c8" />
        </g>
        <g transform="translate(262 314)">
          <circle cx="14" cy="8" r="8" />
          <path d="M4 16 L26 16 L28 64 L2 64 Z" />
          <rect x="20" y="6" width="28" height="16" fill="#f4efe6" stroke="#141310" />
        </g>
        <g transform="translate(328 322)">
          <path d="M14 0 L24 14 L4 14 Z" fill="#e10600" />
          <circle cx="14" cy="18" r="8" />
          <path d="M4 26 L26 26 L28 64 L2 64 Z" />
        </g>
        <g transform="translate(378 336)">
          <circle cx="12" cy="8" r="7" />
          <path d="M2 16 L24 20 L22 60 L0 56 Z" />
        </g>
        <g transform="translate(420 288)">
          <circle cx="16" cy="10" r="10" />
          <path d="M4 20 L30 20 L34 80 L2 80 Z" />
          <ellipse cx="48" cy="8" rx="16" ry="10" fill="#f4efe6" stroke="#141310" />
        </g>
        <g transform="translate(478 348)">
          <circle cx="8" cy="6" r="6" />
          <path d="M2 12 L16 12 L17 42 L1 42 Z" />
        </g>
        <g transform="translate(700 318)">
          <rect x="0" y="0" width="26" height="16" />
          <circle cx="13" cy="8" r="5" fill="#00c4c8" />
          <path d="M4 16 L22 16 L24 58 L2 58 Z" />
        </g>
      </g>

      <text
        x="24"
        y="430"
        fill="#f4efe6"
        fontFamily="Georgia, serif"
        fontSize="13"
        fontStyle="italic"
      >
        El cohete despega. El carrusel de la pauta, no.
      </text>
    </svg>
  );
}

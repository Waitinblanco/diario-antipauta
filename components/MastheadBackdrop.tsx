import {
  Bitcoin,
  CartoonBomb,
  CrescentMoon,
  DollarBill,
  DollarSign,
  FactMissile,
  Football,
  GlitterMic,
  IaRocket,
  Keffiyeh,
  MileiWig,
  MiniCarousel,
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

/**
 * Wide, shallow decorative collage behind the masthead wordmark.
 * Symbolic debate icons only — no faces, no likeness.
 */
export function MastheadBackdrop() {
  return (
    <svg
      viewBox="0 0 1200 200"
      className="pointer-events-none absolute inset-0 z-0 h-full w-full"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
      focusable="false"
    >
      <defs>
        <pattern id="mh-grain" width="7" height="7" patternUnits="userSpaceOnUse">
          <circle cx="1" cy="1" r="0.4" fill="#141310" opacity="0.09" />
        </pattern>
      </defs>
      <rect width="1200" height="200" fill="url(#mh-grain)" />

      {/* packed frieze — two overlapping rows */}
      <OilDerrick x={36} y={70} s={2.05} r={-8} o={0.55} />
      <OilDrop x={88} y={168} s={1.7} o={0.5} />
      <PalestineFlag x={132} y={38} s={1.45} r={-12} o={0.62} />
      <FactMissile x={150} y={118} s={1.25} r={18} o={0.5} />
      <Keffiyeh x={210} y={162} s={1.25} r={18} o={0.42} pid="mh-keff" />
      <StarOfDavid x={232} y={40} s={1.7} r={8} o={0.55} />
      <CartoonBomb x={278} y={128} s={1.65} r={-16} o={0.62} />
      <CartoonBomb x={318} y={28} s={1.1} r={22} o={0.44} />
      <CrescentMoon x={360} y={58} s={1.55} r={-16} o={0.52} />
      <IaRocket x={418} y={112} s={1.55} r={-24} o={0.7} />
      <PrideBanner x={500} y={32} s={1.55} r={-6} o={0.66} />
      <SovietEmblem x={488} y={158} s={1.3} r={-10} o={0.52} />
      <Bitcoin x={568} y={108} s={1.55} r={8} o={0.66} />
      <DollarBill x={620} y={30} s={1.5} r={-10} o={0.58} />
      <Sobre x={668} y={150} s={1.6} r={-6} o={0.66} />
      <PesoARS x={728} y={44} s={1.4} r={8} o={0.6} />
      <DollarSign x={770} y={150} s={1.9} r={6} o={0.38} />
      <TrumpWig x={838} y={82} s={1.65} r={-8} o={0.64} />
      <MileiWig x={918} y={40} s={1.4} r={10} o={0.6} />
      <Football x={910} y={164} s={1.45} r={-16} o={0.6} />
      <TennisRacket x={992} y={42} s={1.25} r={24} o={0.5} />
      <OscarStatue x={1044} y={124} s={1.5} r={-3} o={0.58} />
      <TheaterMasks x={1124} y={42} s={1.4} r={6} o={0.64} />
      <GlitterMic x={1160} y={150} s={1.3} r={-8} o={0.55} />
      <MiniCarousel x={800} y={176} s={1.35} r={-4} o={0.4} />

      {/* second-pass overlaps for density */}
      <OilDrop x={540} y={78} s={1} o={0.34} />
      <StarOfDavid x={792} y={18} s={0.95} r={-12} o={0.34} />
      <Bitcoin x={1032} y={176} s={0.9} r={-16} o={0.36} />
      <CartoonBomb x={1076} y={82} s={0.95} r={26} o={0.36} />
      <DollarBill x={348} y={170} s={0.95} r={12} o={0.32} />
      <Football x={58} y={22} s={0.85} r={26} o={0.32} />
      <DollarSign x={452} y={24} s={1.15} o={0.3} />
      <Sobre x={168} y={78} s={0.95} r={10} o={0.3} />
      <PrideBanner x={1088} y={118} s={0.75} r={14} o={0.3} />
      <MileiWig x={600} y={168} s={0.85} r={-14} o={0.28} />
      <TrumpWig x={280} y={70} s={0.75} r={16} o={0.26} />
      <GlitterMic x={640} y={88} s={0.7} r={18} o={0.26} />
    </svg>
  );
}

import { ContactForm } from "@/components/ContactForm";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Buzón",
  description: "Escribile a Diario Antipauta. Pistas, correcciones, quejas. Sin sobre.",
};

export default function BuzonPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-12">
      <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-ia">
        Contacto
      </p>
      <h1 className="mt-3 font-display text-5xl leading-none">Buzón</h1>
      <p className="mt-4 max-w-2xl text-lg text-ink-soft">
        ¿Una corrección? ¿Una pista? ¿Una bronca con fundamento? Este es el
        único mostrador. No hay departamento comercial. No hay pauta que
        compre una tapa.
      </p>
      <hr className="my-8 border-ink" />
      <ContactForm />
    </div>
  );
}

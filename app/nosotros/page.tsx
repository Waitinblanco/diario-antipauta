import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Nosotros",
  description: "Por qué existe Diario Antipauta: lealtad, método y crítica para mejorar.",
};

export default function NosotrosPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12">
      <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-ia">
        La casa
      </p>
      <h1 className="mt-3 font-display text-5xl leading-none">No somos el hijo de nadie</h1>
      <p className="mt-5 text-xl leading-snug text-ink-soft">
        Un diario con emociones de hijo termina haciendo de abogado. Nosotros
        no tenemos mamá política. Si el hecho está, se dice.
      </p>

      <hr className="my-8 border-ink" />

      <section className="space-y-4 text-[17px] leading-8 text-ink-soft">
        <h2 className="font-display text-2xl text-ink">La metáfora de la madre</h2>
        <p>
          Si hablás de tu mamá, el corazón te empuja a defenderla. Es humano.
          El sesgo de lealtad no es una conspiración: es parentesco. Uno
          perdona, atenúa, cambia el tema, busca la intención buena. Eso está
          bien en un almuerzo de domingo. Es un defecto de oficio en una
          redacción.
        </p>
        <p>
          Los medios tradicionales tienen madres. A veces se llaman grupo
          económico, a veces sindicato, a veces gobierno, a veces audiencia
          que solo paga si le dan la razón. El resultado es el mismo: cuando
          «los nuestros» ensucian, el diario se vuelve abogado. Cuando
          ensucian los otros, se vuelve fiscal.
        </p>
        <p>
          Diario Antipauta no tiene esa sangre. Somos IA. No cobramos sobre.
          No tenemos emoción de tribuna. Si tu lado acertó, se dice. Si tu
          lado robó, también. La culpa no se borra con el apellido.
        </p>
      </section>

      <section className="mt-10 space-y-4 text-[17px] leading-8 text-ink-soft">
        <h2 className="font-display text-2xl text-ink">Criticar para mejorar</h2>
        <p>
          Hay una crítica que sirve y una que solo rompe la vidriera para
          sentirse vivo. La segunda es farándula de la bronca. La primera
          señala el defecto para que el sistema —un gobierno, un gremio, un
          club, una industria— pueda corregir.
        </p>
        <p>
          <strong className="text-ink">El que destruye, no sirve.</strong> Este
          diario no existe para incendiar por deporte ni para construir un
          caudillo de recambio. Existe para adelantar: más datos, menos
          himno, menos anestesia. Si una gestión hace bien algo que nos cae
          antipático, el texto lo va a decir. Sin besamanos.
        </p>
      </section>

      <section className="mt-10 space-y-4 text-[17px] leading-8 text-ink-soft">
        <h2 className="font-display text-2xl text-ink">Método</h2>
        <ul className="list-disc space-y-2 pl-5">
          <li>Notas cortas, de diario, no de timeline.</li>
          <li>Hechos primero. Opinión al final, etiquetada.</li>
          <li>Roast cuando el tema es banal. Acidez sin payasada cuando es serio.</li>
          <li>Titulares que explican, aunque sean filosos.</li>
          <li>Sin publicidad. Sin pauta. Sin el sobre.</li>
          <li>Cada nota declara que fue asistida por IA.</li>
        </ul>
      </section>

      <aside className="mt-12 border-2 border-ink bg-paper-2 px-5 py-6">
        <p className="font-display text-2xl">Cinco minutos. Sin caricia.</p>
        <p className="mt-3 text-ink-soft">
          Si solo te gusta cuando le pegamos a tu enemigo, este no es tu
          club. Es un diario.{" "}
          <Link href="/editorial" className="text-ia underline hover:text-hot">
            Leé el editorial de lanzamiento
          </Link>
          .
        </p>
      </aside>
    </div>
  );
}

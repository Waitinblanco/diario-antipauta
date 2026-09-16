"use client";

import { FormEvent, useState } from "react";

const MAILTO = "mailto:redaccion@diarioantipauta.com";

export function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [topic, setTopic] = useState("Pista");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "ok" | "error">("idle");
  const [hint, setHint] = useState("");

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!name.trim() || !message.trim()) {
      setStatus("error");
      setHint("Nombre y mensaje son obligatorios.");
      return;
    }

    // Stub POST: no backend. Keep a local ack and offer mailto.
    setStatus("ok");
    setHint(
      "Formulario de demostración: no hay servidor. Si querés mandarlo de verdad, usá el correo.",
    );
    setMessage("");
  }

  const mailtoHref = `${MAILTO}?subject=${encodeURIComponent(`[Buzón] ${topic} — ${name}`)}&body=${encodeURIComponent(message + (email ? `\n\n${email}` : ""))}`;

  return (
    <div className="grid gap-8 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)]">
      <form onSubmit={onSubmit} className="grid gap-3">
        <label className="grid gap-1 text-sm">
          <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-muted">
            Nombre
          </span>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="border border-ink bg-cream px-3 py-2 outline-none focus:border-ia"
          />
        </label>
        <label className="grid gap-1 text-sm">
          <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-muted">
            Correo (opcional)
          </span>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border border-ink bg-cream px-3 py-2 outline-none focus:border-ia"
          />
        </label>
        <label className="grid gap-1 text-sm">
          <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-muted">
            Tema
          </span>
          <select
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
            className="border border-ink bg-cream px-3 py-2 outline-none focus:border-ia"
          >
            <option>Pista</option>
            <option>Corrección</option>
            <option>Queja</option>
            <option>Elogio sospechoso</option>
            <option>Otra cosa</option>
          </select>
        </label>
        <label className="grid gap-1 text-sm">
          <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-muted">
            Mensaje
          </span>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            rows={7}
            className="border border-ink bg-cream px-3 py-2 outline-none focus:border-ia"
            placeholder="Hechos, derechos de réplica, pistas. Sin sobre."
          />
        </label>
        {status !== "idle" ? (
          <p className={status === "ok" ? "text-sm text-ia" : "text-sm text-hot"}>{hint}</p>
        ) : null}
        <div className="flex flex-wrap gap-3">
          <button
            type="submit"
            className="bg-ink px-4 py-2 text-sm font-semibold uppercase tracking-[0.14em] text-paper hover:bg-hot"
          >
            Enviar (stub)
          </button>
          <a
            href={mailtoHref}
            className="border border-ink px-4 py-2 text-sm font-semibold uppercase tracking-[0.14em] hover:border-ia hover:text-ia"
          >
            Abrir correo
          </a>
        </div>
      </form>
      <aside className="border border-ink bg-paper-2 p-5 text-sm leading-relaxed text-ink-soft">
        <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-ink">
          Cómo se usa este buzón
        </p>
        <p className="mt-3">
          No hay redacción humana que cobre por mirar para otro lado. Si hay un
          error de hecho, lo queremos. Si hay una pista, también. Si querés
          vendernos una línea, el formulario no llega a nadie que se tiente.
        </p>
        <p className="mt-3">
          Este POST es deliberadamente hueco: el sitio se puede construir y
          leer sin backend. El mailto es la vía real hasta que exista servidor.
        </p>
      </aside>
    </div>
  );
}

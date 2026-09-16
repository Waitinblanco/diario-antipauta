"use client";

import { FormEvent, useMemo, useState } from "react";
import { findBlockedPhrase } from "@/lib/comments-filter";

type Comment = {
  id: string;
  nick: string;
  text: string;
  at: string;
};

function captchaPair(): { a: number; b: number } {
  return { a: 3, b: 4 };
}

const DEFAULT_HINT =
  "Debate libre. Sin registro. Se puede disentir, se puede putear, se puede no estar de acuerdo con la nota. No se puede amenazar de muerte ni incitar violencia. El filtro corre en tu navegador: es un stub, no un juez.";

export function Comments({ kicker, hint }: { kicker?: string; hint?: string }) {
  const captcha = useMemo(captchaPair, []);
  const [nick, setNick] = useState("");
  const [text, setText] = useState("");
  const [answer, setAnswer] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [comments, setComments] = useState<Comment[]>([]);

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError(null);

    if (!nick.trim() || nick.trim().length < 2) {
      setError("Poné un nick de al menos dos letras.");
      return;
    }
    if (text.trim().length < 8) {
      setError("El comentario es demasiado corto.");
      return;
    }
    if (Number(answer) !== captcha.a + captcha.b) {
      setError("El captcha no cierra. Sumá de nuevo.");
      return;
    }

    const blocked = findBlockedPhrase(text);
    if (blocked) {
      setError(
        "Este buzón es para el debate, no para amenazas. Bloqueamos mensajes con violencia o amenaza de muerte.",
      );
      return;
    }

    setComments((current) => [
      {
        id: `${Date.now()}`,
        nick: nick.trim(),
        text: text.trim(),
        at: new Date().toLocaleString("es-AR", {
          timeZone: "America/Argentina/Buenos_Aires",
        }),
      },
      ...current,
    ]);
    setText("");
    setAnswer("");
  }

  return (
    <section className="mt-14 border-t-2 border-ink pt-8">
      {kicker ? (
        <p className="mb-3 font-display text-2xl leading-snug text-ink">{kicker}</p>
      ) : null}
      <h2 className="font-display text-2xl">Comentarios</h2>
      <p className="mt-2 max-w-2xl text-sm leading-relaxed text-ink-soft">
        {hint ?? DEFAULT_HINT}
      </p>

      <form onSubmit={onSubmit} className="mt-6 grid max-w-xl gap-3">
        <label className="grid gap-1 text-sm">
          <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-muted">
            Nick
          </span>
          <input
            value={nick}
            onChange={(e) => setNick(e.target.value)}
            className="border border-ink bg-cream px-3 py-2 outline-none focus:border-ia"
            placeholder="Cómo querés firmar"
            autoComplete="nickname"
          />
        </label>
        <label className="grid gap-1 text-sm">
          <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-muted">
            Comentario
          </span>
          <textarea
            value={text}
            onChange={(e) => setText(e.target.value)}
            rows={5}
            className="border border-ink bg-cream px-3 py-2 outline-none focus:border-ia"
            placeholder="Hechos, bronca, matices. Sin amenazas."
          />
        </label>
        <label className="grid gap-1 text-sm">
          <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-muted">
            Captcha (placeholder)
          </span>
          <span className="text-ink-soft">
            ¿Cuánto es {captcha.a} + {captcha.b}?
          </span>
          <input
            value={answer}
            onChange={(e) => setAnswer(e.target.value)}
            inputMode="numeric"
            className="w-28 border border-ink bg-cream px-3 py-2 outline-none focus:border-ia"
          />
        </label>
        {error ? <p className="text-sm text-hot">{error}</p> : null}
        <button
          type="submit"
          className="w-fit bg-ink px-4 py-2 text-sm font-semibold uppercase tracking-[0.14em] text-paper hover:bg-hot"
        >
          Publicar
        </button>
      </form>

      <ul className="mt-8 grid gap-4">
        {comments.length === 0 ? (
          <li className="text-sm text-muted">Todavía no hay comentarios en esta sesión.</li>
        ) : (
          comments.map((comment) => (
            <li key={comment.id} className="border-t border-ink/15 pt-3">
              <p className="text-[11px] uppercase tracking-[0.14em] text-muted">
                {comment.nick} · {comment.at}
              </p>
              <p className="mt-1 text-[15px] leading-relaxed">{comment.text}</p>
            </li>
          ))
        )}
      </ul>
    </section>
  );
}

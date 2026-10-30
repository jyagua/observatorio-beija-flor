"use client";

import { useState } from "react";
import { useLang } from "./LanguageProvider";
import { ArrowIcon, InfoIcon, PinIcon } from "./Icons";
import { contatoContent } from "@/lib/contato-content";

export default function ContatoPage() {
  const { lang } = useLang();
  const c = contatoContent[lang];

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState(null); // null | "error" | "sent"

  function handleSubmit(e) {
    e.preventDefault();
    const valid = name.trim().length > 1 && /^\S+@\S+\.\S+$/.test(email) && message.trim().length > 0;
    if (!valid) {
      setStatus("error");
      return;
    }
    // TODO: enviar para uma rota de API (ex.: app/api/contato/route.js) quando existir um serviço de envio.
    setStatus("sent");
  }

  return (
    <>
      <section className="obs-hero">
        <div className="obs-hero__inner">
          <p className="eyebrow eyebrow--green eyebrow--noline obs-hero__eyebrow">{c.hero.eyebrow}</p>
          <h1>{c.hero.title}</h1>
          <p className="obs-hero__text">{c.hero.text}</p>
        </div>
      </section>

      <section className="ct-body">
        <div className="container ct-body__grid">
          <div className="ct-aside">
            <h2>{c.aside.title}</h2>
            <p className="ct-aside__text">{c.aside.text}</p>

            <div className="ct-aside__loc">
              <span className="ct-aside__icon">
                <PinIcon size={16} />
              </span>
              <div>
                <h3>{c.aside.location.title}</h3>
                <p>{c.aside.location.value}</p>
              </div>
            </div>

            <p className="bd-notice">
              <InfoIcon />
              <span>{c.aside.note}</span>
            </p>
          </div>

          <form className="ct-card" onSubmit={handleSubmit} noValidate>
            <span className="ct-card__badge">{c.form.badge}</span>

            <label>
              <span>{c.form.name}</span>
              <input type="text" value={name} onChange={(e) => { setName(e.target.value); setStatus(null); }} autoComplete="name" required />
            </label>
            <label>
              <span>{c.form.email}</span>
              <input type="email" value={email} onChange={(e) => { setEmail(e.target.value); setStatus(null); }} autoComplete="email" required />
            </label>
            <label>
              <span>{c.form.message}</span>
              <textarea rows={5} value={message} onChange={(e) => { setMessage(e.target.value); setStatus(null); }} required />
            </label>

            <button type="submit" className="btn btn--solid ct-card__submit">
              {c.form.submit} <ArrowIcon />
            </button>

            {status === "error" && <p role="alert" className="ct-card__msg ct-card__msg--error">{c.form.error}</p>}
            {status === "sent" && <p role="status" className="ct-card__msg">{c.form.sent}</p>}
          </form>
        </div>
      </section>
    </>
  );
}

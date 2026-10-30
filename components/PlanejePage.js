"use client";

import { useMemo, useState, useSyncExternalStore } from "react";
import { useLang } from "./LanguageProvider";
import { ChevronIcon, FeatherIcon, InfoIcon, PinIcon } from "./Icons";
import { planejeContent, demoSlots, maxVisitors } from "@/lib/planeje-content";

const startOfDay = (d) => new Date(d.getFullYear(), d.getMonth(), d.getDate());

// "Hoje" só existe no navegador: no servidor o snapshot é null (evita erro de hydration).
const subscribeNoop = () => () => {};
const getTodayMs = () => startOfDay(new Date()).getTime();
const getServerToday = () => null;

function Step({ n, active, title, text, children }) {
  return (
    <section className="pl-step">
      <div className="pl-step__head">
        <span className={`pl-step__num ${active ? "is-active" : ""}`}>{n}</span>
        <div className={active ? "" : "is-muted"}>
          <h2>{title}</h2>
          <p>{text}</p>
        </div>
      </div>
      {children}
    </section>
  );
}

function Calendar({ c, locale, selected, onSelect }) {
  const todayMs = useSyncExternalStore(subscribeNoop, getTodayMs, getServerToday);
  const [offset, setOffset] = useState(0); // meses a partir do mês atual

  const weekdays = useMemo(
    () =>
      Array.from({ length: 7 }, (_, i) =>
        new Intl.DateTimeFormat(locale, { weekday: "narrow" }).format(new Date(2026, 0, 4 + i)) // 04/01/2026 é domingo
      ),
    [locale]
  );

  if (todayMs === null) return <div className="pl-cal pl-cal--loading" aria-busy="true" />;

  const today = new Date(todayMs);
  const view = new Date(today.getFullYear(), today.getMonth() + offset, 1);
  const year = view.getFullYear();
  const month = view.getMonth();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const blanks = new Date(year, month, 1).getDay();
  const title = new Intl.DateTimeFormat(locale, { month: "long", year: "numeric" }).format(view);
  const atCurrentMonth = offset === 0;

  return (
    <div className="pl-cal">
      <div className="pl-cal__bar">
        <button type="button" className="pl-cal__nav" aria-label={c.prev} disabled={atCurrentMonth} onClick={() => setOffset((o) => o - 1)}>
          <ChevronIcon dir="left" />
        </button>
        <h3 aria-live="polite">{title}</h3>
        <button type="button" className="pl-cal__nav" aria-label={c.next} onClick={() => setOffset((o) => o + 1)}>
          <ChevronIcon dir="right" />
        </button>
      </div>

      <div className="pl-cal__weekdays" aria-hidden="true">
        {weekdays.map((d, i) => (
          <span key={i}>{d}</span>
        ))}
      </div>

      <div className="pl-cal__grid">
        {Array.from({ length: blanks }, (_, i) => (
          <span key={`b${i}`} />
        ))}
        {Array.from({ length: daysInMonth }, (_, i) => {
          const date = new Date(year, month, i + 1);
          // Regra demonstrativa: hoje e datas passadas ficam indisponíveis.
          const off = date.getTime() <= today.getTime();
          const isSelected = !!selected && selected.getTime() === date.getTime();
          return (
            <div key={i} className="pl-cal__cell">
              <button
                type="button"
                disabled={off}
                aria-pressed={isSelected}
                aria-label={new Intl.DateTimeFormat(locale, { dateStyle: "full" }).format(date)}
                className={`pl-cal__day ${isSelected ? "is-selected" : ""}`}
                onClick={() => onSelect(date)}
              >
                {i + 1}
              </button>
            </div>
          );
        })}
      </div>

      <ul className="pl-cal__legend">
        <li><i className="pl-dot pl-dot--available" />{c.available}</li>
        <li><i className="pl-dot pl-dot--off" />{c.unavailable}</li>
        <li><i className="pl-dot pl-dot--selected" />{c.selected}</li>
      </ul>
    </div>
  );
}

export default function PlanejePage() {
  const { lang } = useLang();
  const c = planejeContent[lang];

  const [date, setDate] = useState(null);
  const [slot, setSlot] = useState(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [visitors, setVisitors] = useState("1");
  const [sent, setSent] = useState(false);

  const canSubmit = !!date && !!slot && name.trim().length > 1 && /^\S+@\S+\.\S+$/.test(email);

  function handleSubmit(e) {
    e.preventDefault();
    if (!canSubmit) return;
    // TODO: enviar para uma rota de API (ex.: app/api/reservas/route.js) quando o backend existir.
    setSent(true);
  }

  return (
    <>
      <section className="pl-hero">
        <div className="pl-hero__inner">
          <p className="eyebrow eyebrow--green eyebrow--noline pl-hero__eyebrow">{c.hero.eyebrow}</p>
          <h1>
            {c.hero.title[0]}
            <br />
            {c.hero.title[1]}
          </h1>
          <p className="pl-hero__text">{c.hero.text}</p>
        </div>
      </section>

      <section className="pl-body">
        <div className="container pl-body__grid">
          {/* Coluna fixa: acompanha o scroll enquanto o formulário rola (position: sticky em .pl-aside) */}
          <aside className="pl-aside">
            <p className="eyebrow eyebrow--gold">{c.aside.eyebrow}</p>
            <h2>{c.aside.title}</h2>

            <ul className="pl-aside__list">
              <li>
                <span className="pl-aside__icon"><PinIcon /></span>
                <div>
                  <h3>{c.aside.location.title}</h3>
                  <p>{c.aside.location.value}</p>
                  <small>{c.aside.location.note}</small>
                </div>
              </li>
              <li>
                <span className="pl-aside__icon"><FeatherIcon /></span>
                <div>
                  <h3>{c.aside.tips.title}</h3>
                  <p>{c.aside.tips.text}</p>
                </div>
              </li>
            </ul>

            <p className="bd-notice pl-aside__note">
              <InfoIcon />
              <span>{c.aside.note}</span>
            </p>
          </aside>

          <div className="pl-flow">
            <Step n={1} active title={c.steps.date.title} text={c.steps.date.text}>
              <Calendar
                c={c.calendar}
                locale={c.locale}
                selected={date}
                onSelect={(d) => {
                  setDate(d);
                  setSlot(null);
                  setSent(false);
                }}
              />
            </Step>

            <Step n={2} active={!!date} title={c.steps.time.title} text={date ? c.steps.time.ready : c.steps.time.text}>
              {date && (
                <div className="pl-slots" role="radiogroup" aria-label={c.steps.time.title}>
                  {demoSlots.map((s) => (
                    <button key={s} type="button" role="radio" aria-checked={slot === s} className={`pl-slot ${slot === s ? "is-selected" : ""}`} onClick={() => setSlot(s)}>
                      {s}
                    </button>
                  ))}
                </div>
              )}
            </Step>

            <Step n={3} active={!!slot} title={c.steps.details.title} text={c.steps.details.text}>
              <form className="pl-form" onSubmit={handleSubmit} noValidate>
                <label>
                  <span>{c.form.name}</span>
                  <input type="text" value={name} onChange={(e) => setName(e.target.value)} autoComplete="name" required />
                </label>
                <label>
                  <span>{c.form.email}</span>
                  <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} autoComplete="email" required />
                </label>
                <label>
                  <span>{c.form.visitors}</span>
                  <div className="pl-select">
                    <select value={visitors} onChange={(e) => setVisitors(e.target.value)}>
                      {Array.from({ length: maxVisitors }, (_, i) => (
                        <option key={i + 1} value={i + 1}>{i + 1}</option>
                      ))}
                    </select>
                    <ChevronIcon dir="down" />
                  </div>
                </label>

                <button type="submit" className="btn btn--solid pl-form__submit" disabled={!canSubmit}>
                  {c.form.submit}
                </button>
                <p className="pl-form__note">{c.form.note}</p>
                {sent && <p role="status" className="pl-form__sent">{c.form.sent}</p>}
              </form>
            </Step>
          </div>
        </div>
      </section>
    </>
  );
}

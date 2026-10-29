"use client";

import { useEffect, useRef, useState } from "react";
import { useLang } from "./LanguageProvider";
import { ArrowIcon } from "./Icons";
import { biodiversidadeContent } from "@/lib/biodiversidade-content";
import { images } from "@/lib/images";

function InfoIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.6" />
      <path d="M12 11v5M12 7.8v.4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

export default function BiodiversidadePage() {
  const { lang } = useLang();
  const c = biodiversidadeContent[lang];

  const [filter, setFilter] = useState("all");
  const [selectedId, setSelectedId] = useState(null);
  const closeRef = useRef(null);
  const lastFocus = useRef(null);

  const items = c.items.filter((item) => {
    if (filter === "all") return true;
    if (filter === "aves") return item.category === "ave";
    return item.category !== "ave";
  });

  const current = c.items.find((item) => item.id === selectedId) ?? null;

  const openItem = (id, event) => {
    lastFocus.current = event.currentTarget;
    setSelectedId(id);
  };

  const closeItem = () => setSelectedId(null);

  useEffect(() => {
    if (selectedId === null) return;

    const onKey = (e) => {
      if (e.key === "Escape") setSelectedId(null);
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    closeRef.current?.focus();
    const returnTo = lastFocus.current;

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKey);
      returnTo?.focus?.();
    };
  }, [selectedId]);

  return (
    <>
      <section className="bd-hero">
        <div className="bd-hero__inner">
          <p className="eyebrow eyebrow--green bd-hero__eyebrow">{c.hero.eyebrow}</p>
          <h1>
            {c.hero.title[0]}
            <br />
            {c.hero.title[1]}
          </h1>
          <p className="bd-hero__text">{c.hero.text}</p>
        </div>
      </section>

      <section className="bd-catalog">
        <div className="container">
          <p className="bd-notice">
            <InfoIcon />
            <span>
              <strong>{c.notice.strong}</strong>
              {c.notice.text}
            </span>
          </p>

          <div className="bd-toolbar">
            <p className="bd-toolbar__count">
              {items.length} {c.count}
            </p>
            <div className="bd-filters" role="group">
              {["all", "aves", "plantas"].map((key) => (
                <button
                  key={key}
                  type="button"
                  className={filter === key ? "is-active" : ""}
                  aria-pressed={filter === key}
                  onClick={() => setFilter(key)}
                >
                  {c.filters[key]}
                </button>
              ))}
            </div>
          </div>

          <ul className="bd-grid">
            {items.map((item) => (
              <li key={item.id} className="bd-card">
                <button
                  type="button"
                  className="bd-card__media"
                  aria-label={`${c.open}: ${item.title}`}
                  onClick={(e) => openItem(item.id, e)}
                >
                  <span
                    className="bd-card__img"
                    aria-hidden="true"
                    style={{ backgroundImage: `url("${images.biodiversidade[item.id]}")` }}
                  />
                  <span className="bd-badge">{c.badge}</span>
                </button>

                <p className="bd-card__kind">{c.kinds[item.category]}</p>
                <h3>{item.title}</h3>
                <p className="bd-card__text">{item.text}</p>
                <button type="button" className="bd-card__more" onClick={(e) => openItem(item.id, e)}>
                  {c.more} <ArrowIcon size={14} />
                </button>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {current && (
        <div className="bd-modal" onClick={closeItem}>
          <div
            className="bd-modal__panel"
            role="dialog"
            aria-modal="true"
            aria-label={current.title}
            onClick={(e) => e.stopPropagation()}
          >
            <button type="button" ref={closeRef} className="bd-modal__close" aria-label={c.close} onClick={closeItem}>
              <CloseIcon />
            </button>

            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={images.biodiversidade[current.id]} alt={current.alt} className="bd-modal__img" />

            <div className="bd-modal__body">
              <p className="eyebrow eyebrow--green eyebrow--noline">{c.kinds[current.category]}</p>
              <h2>{current.title}</h2>
              {current.category !== "habitat" && <p className="bd-modal__sci">{c.scientific}</p>}
              <p className="bd-modal__text">{current.text}</p>
              <p className="bd-notice bd-notice--small">
                <InfoIcon />
                <span>{c.modalNote}</span>
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
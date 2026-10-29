"use client";

import Link from "next/link";
import { useLang } from "./LanguageProvider";
import { ArrowIcon, CalendarIcon } from "./Icons";

export default function Plan() {
  const { t } = useLang();
  const p = t.plan;

  return (
    <section className="plan">
      <div className="container">
        <div className="plan__box">
          <div className="plan__text">
            <p className="eyebrow eyebrow--green">{p.eyebrow}</p>
            <h2>{p.title}</h2>
            <p className="lead">{p.text}</p>
            <Link href="/planeje" className="btn btn--solid">
              {p.cta} <ArrowIcon />
            </Link>
          </div>

          <div className="plan__arch" aria-hidden="true">
            <small>{p.city}</small>
            <strong>{p.state}</strong>
            <CalendarIcon />
          </div>
        </div>
      </div>
    </section>
  );
}
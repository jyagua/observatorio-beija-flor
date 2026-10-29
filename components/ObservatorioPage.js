"use client";

import Link from "next/link";
import { useLang } from "./LanguageProvider";
import Photo from "./Photo";
import { ArrowIcon } from "./Icons";
import { observatorioContent } from "@/lib/observatorio-content";
import { images } from "@/lib/images";

export default function ObservatorioPage() {
  const { lang } = useLang();
  const c = observatorioContent[lang];

  return (
    <>
      <section className="obs-hero">
        <div className="obs-hero__inner">
          <p className="eyebrow eyebrow--green obs-hero__eyebrow">{c.hero.eyebrow}</p>
          <h1>
            {c.hero.title[0]}
            <br />
            {c.hero.title[1]}
          </h1>
          <p className="obs-hero__text">{c.hero.text}</p>
        </div>
      </section>

      <section className="obs-refuge section">
        <div className="container obs-refuge__grid">
          <Photo src={images.observatorio} alt={c.refuge.imageAlt} className="obs-refuge__photo" />
          <div>
            <p className="eyebrow eyebrow--green">{c.refuge.eyebrow}</p>
            <h2>{c.refuge.title}</h2>
            {c.refuge.paragraphs.map((p) => (
              <p key={p} className="lead">
                {p}
              </p>
            ))}
          </div>
        </div>
      </section>

      <section className="obs-serra">
        <div className="container">
          <p className="eyebrow eyebrow--light eyebrow--gold-on-dark">{c.serra.eyebrow}</p>
          <h2>{c.serra.title}</h2>
          <div className="obs-serra__cols">
            {c.serra.columns.map((text) => (
              <p key={text}>{text}</p>
            ))}
          </div>
        </div>
      </section>

      <section className="obs-pillars section">
        <div className="container">
          <ol className="obs-pillars__grid">
            {c.pillars.map((p, i) => (
              <li key={p.title}>
                <span className="obs-pillars__num">{String(i + 1).padStart(2, "0")}</span>
                <h3>{p.title}</h3>
                <p>{p.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="obs-cta">
        <div className="container">
          <div className="obs-cta__box">
            <div>
              <p className="eyebrow eyebrow--gold-on-dark">{c.cta.eyebrow}</p>
              <h2>
                {c.cta.title[0]}
                <br />
                {c.cta.title[1]}
              </h2>
            </div>
            <Link href="/planeje" className="btn btn--white">
              {c.cta.button} <ArrowIcon />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
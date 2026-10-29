"use client";

import Link from "next/link";
import { useLang } from "./LanguageProvider";
import { ArrowIcon } from "./Icons";
import { images } from "@/lib/images";

export default function Hero() {
  const { t } = useLang();
  const h = t.hero;

  const heroStyle = images.hero
    ? {
        backgroundImage: `linear-gradient(90deg, rgba(20,45,32,.78) 0%, rgba(20,45,32,.35) 55%, rgba(20,45,32,.05) 100%), linear-gradient(0deg, rgba(20,45,32,.4), transparent 40%), url("${images.hero}")`,
      }
    : undefined;

  return (
    <section className="hero" style={heroStyle}>
      <div className="hero__content">
        <p className="eyebrow eyebrow--light">{h.eyebrow}</p>
        <h1>
          {h.title[0]}
          <br />
          {h.title[1]}
        </h1>
        <p className="hero__text">{h.text}</p>
        <div className="hero__actions">
          <Link href="/planeje" className="btn btn--solid">
            {h.cta1} <ArrowIcon />
          </Link>
          <Link href="/observatorio" className="btn btn--outline-light">
            {h.cta2} <ArrowIcon />
          </Link>
        </div>
      </div>

      <a href="#jardim" className="hero__scroll" aria-label={h.scroll}>
        <span>{h.scroll}</span>
        <i />
      </a>
      <p className="hero__credit">{h.credit}</p>
    </section>
  );
}
"use client";

import Link from "next/link";
import { useLang } from "./LanguageProvider";
import { ArrowIcon } from "./Icons";
import { images } from "@/lib/images";

export default function Biodiversity() {
  const { t } = useLang();
  const b = t.biodiversity;

  return (
    <section id="biodiversidade" className="bio section">
      <div className="container">
        <div className="bio__head">
          <div>
            <p className="eyebrow eyebrow--green eyebrow--noline">{b.eyebrow}</p>
            <h2>{b.title}</h2>
          </div>
          <div className="bio__aside">
            <p className="lead">{b.text}</p>
            <Link href="/biodiversidade" className="link">
              {b.link} <ArrowIcon />
            </Link>
          </div>
        </div>

        <div className="bio__grid">
          {b.cards.map((card, i) => (
            <figure key={i} className="bio__card">
              <span
                className="bio__img"
                role="img"
                aria-label={card.alt}
                style={{ backgroundImage: `url("${images.bio[i]}")` }}
              />
              <figcaption className="bio__caption">
                <span className="bio__title">{card.caption}</span>
                <small>{b.demo}</small>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
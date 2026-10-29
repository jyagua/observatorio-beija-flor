"use client";

import Link from "next/link";
import { useLang } from "./LanguageProvider";
import Photo from "./Photo";
import { ArrowIcon } from "./Icons";
import { images } from "@/lib/images";

export default function Garden() {
  const { t } = useLang();
  const g = t.garden;

  return (
    <section id="jardim" className="garden section">
      <div className="container garden__grid">
        <div className="garden__media">
          <Photo src={images.garden} alt={g.imageAlt} className="arch" />
          <div className="badge">
            <strong>{g.badgeValue}</strong>
            <span>{g.badgeLabel}</span>
          </div>
        </div>

        <div className="garden__text">
          <p className="eyebrow eyebrow--gold">{g.eyebrow}</p>
          <h2>{g.title}</h2>
          <p className="lead">{g.text}</p>
          <Link href="/observatorio" className="link">
            {g.link} <ArrowIcon />
          </Link>
        </div>
      </div>
    </section>
  );
}
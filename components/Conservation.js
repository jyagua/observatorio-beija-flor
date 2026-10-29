"use client";

import { useLang } from "./LanguageProvider";
import Photo from "./Photo";
import { CheckIcon } from "./Icons";
import { images } from "@/lib/images";

export default function Conservation() {
  const { t } = useLang();
  const c = t.conservation;

  return (
    <section id="conservacao" className="conservation section">
      <div className="container conservation__grid">
        <div>
          <p className="eyebrow eyebrow--green">{c.eyebrow}</p>
          <h2>{c.title}</h2>
          <p className="lead">{c.text}</p>
          <ul className="checks">
            {c.items.map((item) => (
              <li key={item}>
                <span className="checks__icon">
                  <CheckIcon />
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        <Photo src={images.conservation} alt={c.imageAlt} className="arch arch--tall" />
      </div>
    </section>
  );
}
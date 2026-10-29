"use client";

import { useLang } from "./LanguageProvider";

export default function Experience() {
  const { t } = useLang();
  const e = t.experience;

  return (
    <section id="como-funciona" className="experience section">
      <div className="container">
        <div className="experience__head">
          <div>
            <p className="eyebrow eyebrow--light eyebrow--gold-on-dark">{e.eyebrow}</p>
            <h2>{e.title}</h2>
          </div>
          <p className="experience__lead">{e.text}</p>
        </div>

        <ol className="steps">
          {e.steps.map((step, i) => (
            <li key={step.title} className="steps__item">
              <span className="steps__num">{String(i + 1).padStart(2, "0")}</span>
              <div>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
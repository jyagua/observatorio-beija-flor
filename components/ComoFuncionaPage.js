"use client";

import Link from "next/link";
import { useLang } from "./LanguageProvider";
import { ArrowIcon, CalendarIcon, CheckIcon } from "./Icons";
import { ClockIcon, MailIcon } from "./StepIcons";
import { comoFuncionaContent } from "@/lib/como-funciona-content";

const stepIcons = {
  calendar: <CalendarIcon size={20} />,
  clock: <ClockIcon />,
  mail: <MailIcon />,
  check: <CheckIcon size={20} />,
};

export default function ComoFuncionaPage() {
  const { lang } = useLang();
  const c = comoFuncionaContent[lang];

  return (
    <>
      <section className="obs-hero">
        <div className="obs-hero__inner">
          <p className="eyebrow eyebrow--green eyebrow--noline obs-hero__eyebrow">{c.hero.eyebrow}</p>
          <h1>
            {c.hero.title[0]}
            <br />
            {c.hero.title[1]}
          </h1>
          <p className="obs-hero__text">{c.hero.text}</p>
        </div>
      </section>

      <section className="cf-steps">
        <div className="container">
          <ol className="cf-steps__list">
            {c.steps.map((step, i) => (
              <li key={step.title} className="cf-steps__item">
                <span className="cf-steps__num">{String(i + 1).padStart(2, "0")}</span>
                <div>
                  <h2>{step.title}</h2>
                  <p>{step.text}</p>
                </div>
                <span className="cf-steps__icon">{stepIcons[step.icon]}</span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="cf-tips">
        <div className="container">
          <div className="cf-tips__box">
            <div>
              <p className="eyebrow eyebrow--gold">{c.tips.eyebrow}</p>
              <h2>{c.tips.title}</h2>
            </div>
            <ul className="cf-tips__list">
              {c.tips.items.map((item) => (
                <li key={item}>
                  <CheckIcon size={14} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
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

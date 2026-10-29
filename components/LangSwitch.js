"use client";

import { useLang } from "./LanguageProvider";

export default function LangSwitch() {
  const { lang, setLang } = useLang();

  return (
    <div className="lang" role="group" aria-label="Idioma / Language">
      <button type="button" className={lang === "pt" ? "is-active" : ""} aria-pressed={lang === "pt"} onClick={() => setLang("pt")}>
        PT
      </button>
      <span aria-hidden="true">/</span>
      <button type="button" className={lang === "en" ? "is-active" : ""} aria-pressed={lang === "en"} onClick={() => setLang("en")}>
        EN
      </button>
    </div>
  );
}
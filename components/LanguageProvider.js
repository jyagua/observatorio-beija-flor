"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { content } from "@/lib/content";

const LanguageContext = createContext({ lang: "pt", setLang: () => {}, t: content.pt });

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(() => {
    if (typeof window === "undefined") return "pt";
    const saved = window.localStorage.getItem("lang");
    if (saved === "pt" || saved === "en") return saved;
    return "pt";
  });

  useEffect(() => {
    document.documentElement.lang = lang === "pt" ? "pt-BR" : "en";
    window.localStorage.setItem("lang", lang);
  }, [lang]);

  return (
    <LanguageContext.Provider value={{ lang, setLang, t: content[lang] }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLang() {
  return useContext(LanguageContext);
}
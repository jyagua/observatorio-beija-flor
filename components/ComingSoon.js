"use client";

import Link from "next/link";
import { useLang } from "./LanguageProvider";
import { ArrowIcon } from "./Icons";

export default function ComingSoon({ id }) {
  const { t, lang } = useLang();
  const title = t.nav.find((n) => n.id === id)?.label ?? "";

  return (
    <section className="soon">
      <div className="soon__inner">
        <p className="eyebrow eyebrow--green">{lang === "pt" ? "Em breve" : "Coming soon"}</p>
        <h1>{title}</h1>
        <p className="lead">
          {lang === "pt" ? "Esta página está sendo preparada." : "This page is being prepared."}
        </p>
        <Link href="/" className="btn btn--solid">
          {lang === "pt" ? "Voltar ao início" : "Back to home"} <ArrowIcon />
        </Link>
      </div>
    </section>
  );
}
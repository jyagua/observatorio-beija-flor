"use client";

import Link from "next/link";
import { useLang } from "./LanguageProvider";
import LangSwitch from "./LangSwitch";
import { LogoMark } from "./Icons";
import { routes } from "@/lib/routes";

export default function Footer() {
  const { t } = useLang();
  const f = t.footer;
  const nav = Object.fromEntries(t.nav.map((n) => [n.id, n]));

  const explore = ["inicio", "observatorio", "biodiversidade", "planeje"];
  const info = ["como-funciona", "contato"];

  return (
    <footer className="footer">
      <div className="container footer__grid">
        <div className="footer__brand">
          <LogoMark size={34} />
          <p className="footer__name">
            <strong>{t.brand.name}</strong>
            <small>{t.brand.sub}</small>
          </p>
          <p className="footer__about">{f.about}</p>
          <p className="footer__place">{f.place}</p>
        </div>

        <div>
          <h4>{f.explore}</h4>
          <ul>
            {explore.map((id) => (
              <li key={id}>
                <Link href={routes[id]}>{nav[id].label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4>{f.info}</h4>
          <ul>
            {info.map((id) => (
              <li key={id}>
                <Link href={routes[id]}>{nav[id].label}</Link>
              </li>
            ))}
            <li className="footer__soon">{f.soon}</li>
          </ul>
        </div>

        <div>
          <h4>{f.language}</h4>
          <LangSwitch />
        </div>
      </div>

      <div className="container footer__bottom">
        <p>{f.rights}</p>
        <p>{f.tagline}</p>
      </div>
    </footer>
  );
}
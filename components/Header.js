"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLang } from "./LanguageProvider";
import LangSwitch from "./LangSwitch";
import { LogoMark } from "./Icons";
import { routes } from "@/lib/routes";

export default function Header() {
  const { t } = useLang();
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const close = () => setOpen(false);

  return (
    <header className={`header ${scrolled ? "is-scrolled" : ""} ${open ? "is-open" : ""}`}>
      <div className="header__inner">
        <Link href="/" className="brand" onClick={close}>
          <LogoMark />
          <span className="brand__text">
            <strong>{t.brand.name}</strong>
            <small>{t.brand.sub}</small>
          </span>
        </Link>

        <nav className="nav" aria-label="Principal">
          {t.nav.map((item) => {
            const href = routes[item.id];
            const isActive = href === "/" ? pathname === "/" : pathname.startsWith(href);

            return (
              <Link
                key={item.id}
                href={href}
                className={isActive ? "is-active" : ""}
                aria-current={isActive ? "page" : undefined}
                onClick={close}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="header__actions">
          <LangSwitch />
          <Link href="/planeje" className="btn btn--solid btn--sm" onClick={close}>
            {t.book}
          </Link>
        </div>

        <button
          type="button"
          className="burger"
          aria-label={t.menu}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
        </button>
      </div>
    </header>
  );
}
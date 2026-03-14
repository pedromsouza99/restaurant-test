"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { Link, usePathname } from "@/i18n/navigation";

export default function Header() {
  const t = useTranslations("nav");
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  const navLinks = [
    { href: "/", label: t("home") },
    { href: "/menu", label: t("menu") },
    { href: "/find-us", label: t("findUs") },
  ] as const;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white-pure/95 backdrop-blur-sm border-b border-gray-100 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <span className="font-[family-name:var(--font-playfair)] text-2xl font-bold tracking-tight text-black group-hover:text-red transition-colors duration-300">
              Boa Massa
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-10" id="desktop-nav">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`
                    relative text-sm font-medium uppercase tracking-widest transition-colors duration-300
                    ${isActive ? "text-black" : "text-gray-500 hover:text-black"}
                  `}
                >
                  {link.label}
                  {/* Active indicator — subtle red bottom line */}
                  <span
                    className={`
                      absolute -bottom-1 left-0 h-[2px] bg-red transition-all duration-300
                      ${isActive ? "w-full" : "w-0 group-hover:w-full"}
                    `}
                  />
                </Link>
              );
            })}
          </nav>

          {/* Language Switcher (placeholder for future languages) */}
          <div className="hidden md:flex items-center">
            <span className="text-xs uppercase tracking-widest text-gray-400 border border-gray-200 px-3 py-1.5 rounded-sm">
              EN
            </span>
          </div>

          {/* Mobile hamburger */}
          <button
            type="button"
            className="md:hidden flex flex-col justify-center items-center w-10 h-10 gap-1.5"
            onClick={() => { setMobileOpen(!mobileOpen); }}
            aria-label="Toggle navigation menu"
            id="mobile-menu-toggle"
          >
            <span
              className={`block h-[1.5px] w-6 bg-black transition-all duration-300 ${mobileOpen ? "rotate-45 translate-y-[4.5px]" : ""}`}
            />
            <span
              className={`block h-[1.5px] w-6 bg-black transition-all duration-300 ${mobileOpen ? "opacity-0" : ""}`}
            />
            <span
              className={`block h-[1.5px] w-6 bg-black transition-all duration-300 ${mobileOpen ? "-rotate-45 -translate-y-[4.5px]" : ""}`}
            />
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      <div
        className={`
          md:hidden overflow-hidden transition-all duration-300 bg-white-pure border-t border-gray-100
          ${mobileOpen ? "max-h-80" : "max-h-0"}
        `}
        id="mobile-menu"
      >
        <nav className="flex flex-col px-6 py-6 gap-6">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => { setMobileOpen(false); }}
                className={`
                  text-sm uppercase tracking-widest font-medium transition-colors duration-300
                  ${isActive ? "text-red" : "text-black hover:text-red"}
                `}
              >
                {link.label}
              </Link>
            );
          })}
          <span className="text-xs uppercase tracking-widest text-gray-400 border border-gray-200 px-3 py-1.5 rounded-sm w-fit">
            EN
          </span>
        </nav>
      </div>
    </header>
  );
}

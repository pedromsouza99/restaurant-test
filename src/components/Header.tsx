"use client";

import { useState } from "react";
import { Link } from "@/i18n/navigation";
import NavLinks from "@/components/NavLinks";
import LanguageSwitcher from "@/components/LanguageSwitcher";

const MOBILE_MENU_ID = "mobile-menu";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

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
          <NavLinks variant="desktop" />

          {/* Language Switcher */}
          <div className="hidden md:flex items-center">
            <LanguageSwitcher />
          </div>

          {/* Mobile hamburger */}
          <button
            type="button"
            className="md:hidden flex flex-col justify-center items-center w-10 h-10 gap-1.5"
            onClick={() => {
              setMobileOpen(!mobileOpen);
            }}
            aria-label="Toggle navigation menu"
            aria-expanded={mobileOpen}
            aria-controls={MOBILE_MENU_ID}
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
        id={MOBILE_MENU_ID}
        className={`
          md:hidden overflow-hidden transition-all duration-300 bg-white-pure border-t border-gray-100
          ${mobileOpen ? "max-h-80" : "max-h-0"}
        `}
        role="region"
        aria-label="Mobile navigation"
      >
        <NavLinks
          variant="mobile"
          onMobileLinkClick={() => setMobileOpen(false)}
          mobileFooter={<LanguageSwitcher />}
        />
      </div>
    </header>
  );
}

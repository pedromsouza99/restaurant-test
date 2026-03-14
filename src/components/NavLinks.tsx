"use client";

import type { ReactNode } from "react";
import { useTranslations } from "next-intl";
import { Link, usePathname } from "@/i18n/navigation";

interface NavLinksProps {
  variant: "desktop" | "mobile";
  onMobileLinkClick?: () => void;
  /** Rendered at the end of the mobile nav (e.g. LanguageSwitcher) */
  mobileFooter?: ReactNode;
}

export default function NavLinks({
  variant,
  onMobileLinkClick,
  mobileFooter,
}: NavLinksProps) {
  const t = useTranslations("nav");
  const pathname = usePathname();

  const links = [
    { href: "/", label: t("home") },
    { href: "/menu", label: t("menu") },
    { href: "/find-us", label: t("findUs") },
  ] as const;

  if (variant === "desktop") {
    return (
      <nav className="hidden md:flex items-center gap-10" id="desktop-nav">
        {links.map((link) => {
          const isActive = pathname === link.href;
          return (
            <Link
              key={link.href}
              href={link.href}
              className={`
                group relative text-sm font-medium uppercase tracking-widest transition-colors duration-300
                ${isActive ? "text-black" : "text-gray-500 hover:text-black"}
              `}
            >
              {link.label}
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
    );
  }

  return (
    <nav className="flex flex-col px-6 py-6 gap-6">
      {links.map((link) => {
        const isActive = pathname === link.href;
        return (
          <Link
            key={link.href}
            href={link.href}
            onClick={onMobileLinkClick}
            className={`
              text-sm uppercase tracking-widest font-medium transition-colors duration-300
              ${isActive ? "text-red" : "text-black hover:text-red"}
            `}
          >
            {link.label}
          </Link>
        );
      })}
      {mobileFooter}
    </nav>
  );
}

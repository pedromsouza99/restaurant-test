"use client";

import { useTranslations } from "next-intl";

export default function LanguageSwitcher() {
  const t = useTranslations("language");

  return (
    <span
      className="text-xs uppercase tracking-widest text-gray-400 border border-gray-200 px-3 py-1.5 rounded-sm"
      title={t("label")}
    >
      {t("en")}
    </span>
  );
}

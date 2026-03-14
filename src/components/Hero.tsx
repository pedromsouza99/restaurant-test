import Image from "next/image";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

export default function Hero() {
  const t = useTranslations("hero");

  return (
    <section className="relative w-full h-screen min-h-[600px] max-h-[900px] flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-bakery.webp"
          alt="Freshly baked croissants on a rustic wooden table"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        {/* Dark overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-black-deep/60 via-black-deep/40 to-black-deep/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-3xl animate-fade-in-up">
        {/* Decorative line */}
        <div className="oak-line-short mx-auto mb-8" />

        <p className="text-oak-light text-xs uppercase tracking-[0.3em] mb-4 font-medium">
          {t("subtitle")}
        </p>

        <h1 className="font-[family-name:var(--font-playfair)] text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white-pure mb-6 leading-tight">
          {t("title")}
        </h1>

        <p className="text-gray-300 text-base sm:text-lg max-w-xl mx-auto mb-10 leading-relaxed">
          {t("description")}
        </p>

        <Link
          href="/menu"
          className="btn-primary-filled !border-white-pure/30 !bg-white-pure/10 backdrop-blur-sm !text-white-pure hover:!bg-red hover:!border-red"
        >
          {t("cta")}
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </Link>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-fade-in delay-700">
        <div className="w-[1px] h-12 bg-gradient-to-b from-oak/0 via-oak to-oak/0" />
      </div>
    </section>
  );
}

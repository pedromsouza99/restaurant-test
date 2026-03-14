import Image from "next/image";
import { useTranslations } from "next-intl";
import Hero from "@/components/Hero";
import LocationSection from "@/components/LocationSection";
import { Link } from "@/i18n/navigation";

export default function HomePage() {
  const t = useTranslations("about");
  const featured = useTranslations("featured");

  const featuredItems = [
    {
      key: "croissant",
      image: "/images/croissant.webp",
    },
    {
      key: "churro",
      image: "/images/churros.webp",
    },
    {
      key: "latte",
      image: "/images/latte.webp",
    },
    {
      key: "pastry",
      image: "/images/almond-pastry.webp",
    },
  ] as const;

  return (
    <>
      {/* Hero Section */}
      <Hero />

      {/* About Section */}
      <section className="section-padding bg-white-pure">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Text */}
            <div className="animate-fade-in">
              <p className="text-oak text-xs uppercase tracking-[0.3em] mb-3 font-medium">
                {t("tagline")}
              </p>
              <h2 className="font-[family-name:var(--font-playfair)] text-3xl sm:text-4xl md:text-5xl font-bold text-black mb-6 leading-tight">
                {t("title")}
              </h2>
              <p className="text-gray-500 leading-relaxed mb-6 text-base">
                {t("description")}
              </p>
              <div className="flex items-center gap-3 mb-8">
                <div className="oak-line-short" />
                <span className="text-oak-dark text-sm font-medium italic">
                  {t("highlight")}
                </span>
              </div>
              <Link href="/menu" className="btn-primary">
                View Our Menu
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
            </div>

            {/* Image */}
            <div className="relative animate-fade-in-up delay-200">
              <div className="relative aspect-[4/5] rounded-sm overflow-hidden">
                <Image
                  src="/images/churros.webp"
                  alt="Freshly made churros with chocolate dipping sauce"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              {/* Decorative oak border offset */}
              <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-oak/30 rounded-sm -z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Items */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-14 animate-fade-in">
            <p className="text-oak text-xs uppercase tracking-[0.3em] mb-3 font-medium">
              {featured("tagline")}
            </p>
            <h2 className="font-[family-name:var(--font-playfair)] text-3xl sm:text-4xl md:text-5xl font-bold text-black">
              {featured("title")}
            </h2>
          </div>

          {/* Items grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredItems.map((item, index) => (
              <div
                key={item.key}
                className={`group bg-white-pure rounded-sm border border-gray-100 overflow-hidden transition-all duration-500 hover:border-oak/40 hover:shadow-lg hover:shadow-oak/5 animate-fade-in-up delay-${(index + 1) * 100}`}
              >
                <div className="relative h-56 overflow-hidden">
                  <Image
                    src={item.image}
                    alt={featured(`items.${item.key}.name`)}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                </div>
                <div className="p-5 text-center">
                  <h3 className="font-[family-name:var(--font-playfair)] text-lg font-semibold text-black mb-1">
                    {featured(`items.${item.key}.name`)}
                  </h3>
                  <p className="text-gray-500 text-sm">
                    {featured(`items.${item.key}.description`)}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Where to Find Us */}
      <LocationSection />
    </>
  );
}

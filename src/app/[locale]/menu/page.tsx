import { useTranslations } from "next-intl";
import type { Metadata } from "next";
import MenuCard from "@/components/MenuCard";

export const metadata: Metadata = {
  title: "Menu — Boa Massa",
  description:
    "Explore our menu of handcrafted pastries, artisan breads, and specialty coffee.",
};

interface MenuItemData {
  key: string;
  image: string;
  price: string;
}

const menuData: Record<string, MenuItemData[]> = {
  pastries: [
    { key: "butterCroissant", image: "/images/croissant.webp", price: "€2.80" },
    {
      key: "chocolateCroissant",
      image: "/images/chocolate-croissant.webp",
      price: "€3.20",
    },
    {
      key: "almondPastry",
      image: "/images/almond-pastry.webp",
      price: "€3.50",
    },
    {
      key: "classicChurros",
      image: "/images/churros.webp",
      price: "€4.00",
    },
  ],
  breads: [
    {
      key: "sourdoughLoaf",
      image: "/images/sourdough.webp",
      price: "€4.50",
    },
    { key: "baguette", image: "/images/baguette.webp", price: "€2.50" },
    {
      key: "wholeWheat",
      image: "/images/whole-wheat.webp",
      price: "€3.80",
    },
  ],
  coffee: [
    { key: "espresso", image: "/images/espresso.webp", price: "€1.80" },
    { key: "latte", image: "/images/latte.webp", price: "€3.50" },
    { key: "cappuccino", image: "/images/cappuccino.webp", price: "€3.20" },
    {
      key: "hotChocolate",
      image: "/images/hot-chocolate.webp",
      price: "€3.80",
    },
    {
      key: "orangeJuice",
      image: "/images/orange-juice.webp",
      price: "€3.00",
    },
  ],
  specials: [
    {
      key: "seasonalTart",
      image: "/images/seasonal-tart.webp",
      price: "€5.50",
    },
    {
      key: "croqueMadame",
      image: "/images/croque-madame.webp",
      price: "€7.50",
    },
    {
      key: "granolaBowl",
      image: "/images/granola-bowl.webp",
      price: "€6.00",
    },
  ],
};

const categoryOrder = ["pastries", "breads", "coffee", "specials"] as const;

export default function MenuPage() {
  const t = useTranslations("menu");

  return (
    <>
      {/* Page Header */}
      <section className="relative pt-32 pb-20 bg-black-deep overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/hero-bakery.webp')] bg-cover bg-center opacity-20" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <div className="oak-line-short mx-auto mb-6" />
          <h1 className="font-[family-name:var(--font-playfair)] text-4xl sm:text-5xl md:text-6xl font-bold text-white-pure mb-4 animate-fade-in">
            {t("title")}
          </h1>
          <p className="text-gray-400 max-w-md mx-auto animate-fade-in delay-100">
            {t("subtitle")}
          </p>
        </div>
      </section>

      {/* Menu Categories */}
      <section className="section-padding bg-white-pure">
        <div className="max-w-7xl mx-auto">
          {categoryOrder.map((categoryKey, catIndex) => (
            <div
              key={categoryKey}
              className={`${catIndex > 0 ? "mt-20" : ""}`}
              id={`menu-${categoryKey}`}
            >
              {/* Category header */}
              <div className="flex items-center gap-4 mb-10 animate-fade-in">
                <h2 className="font-[family-name:var(--font-playfair)] text-2xl sm:text-3xl font-bold text-black whitespace-nowrap">
                  {t(`categories.${categoryKey}`)}
                </h2>
                <div className="oak-line flex-1" />
              </div>

              {/* Items grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {menuData[categoryKey].map((item) => (
                  <MenuCard
                    key={item.key}
                    name={t(`items.${item.key}.name`)}
                    description={t(`items.${item.key}.description`)}
                    price={item.price}
                    image={item.image}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

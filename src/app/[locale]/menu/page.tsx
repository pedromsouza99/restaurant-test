import { useTranslations } from "next-intl";
import type { Metadata } from "next";
import MenuCard from "@/components/MenuCard";
import PageHeader from "@/components/PageHeader";
import { menuData, categoryOrder } from "@/data/menu";

export const metadata: Metadata = {
  title: "Menu — Boa Massa",
  description:
    "Explore our menu of handcrafted pastries, artisan breads, and specialty coffee.",
};

export default function MenuPage() {
  const t = useTranslations("menu");

  return (
    <>
      <PageHeader title={t("title")} subtitle={t("subtitle")} />

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

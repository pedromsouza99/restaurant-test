import { useTranslations } from "next-intl";

export default function LocationSection() {
  const t = useTranslations("findUs");

  return (
    <section className="section-padding bg-gray-50" id="find-us-section">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14 animate-fade-in">
          <p className="text-oak text-xs uppercase tracking-[0.3em] mb-3 font-medium">
            {t("tagline")}
          </p>
          <h2 className="font-[family-name:var(--font-playfair)] text-3xl sm:text-4xl md:text-5xl font-bold text-black mb-4">
            {t("title")}
          </h2>
          <p className="text-gray-500 max-w-md mx-auto">{t("subtitle")}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 animate-fade-in-up">
          {/* Map */}
          <div className="lg:col-span-3 rounded-sm overflow-hidden border border-gray-200 h-[400px] lg:h-auto">
            <iframe
              title="Boa Massa Location on OpenStreetMap"
              src="https://www.openstreetmap.org/export/embed.html?bbox=-3.7100%2C40.4550%2C-3.6900%2C40.4650&layer=mapnik&marker=40.4600%2C-3.7000"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: "400px" }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          {/* Info cards */}
          <div className="lg:col-span-2 flex flex-col gap-6">
            {/* Address card */}
            <div className="bg-white-pure border border-gray-100 rounded-sm p-6">
              <h3 className="text-xs uppercase tracking-widest text-oak font-semibold mb-4">
                {t("addressLabel")}
              </h3>
              <p className="text-black font-medium mb-1">{t("address")}</p>
              <p className="text-gray-500 text-sm">{t("city")}</p>
            </div>

            {/* Hours card */}
            <div className="bg-white-pure border border-gray-100 rounded-sm p-6">
              <h3 className="text-xs uppercase tracking-widest text-oak font-semibold mb-4">
                {t("hoursLabel")}
              </h3>
              <p className="text-black text-sm">{t("hours")}</p>
            </div>

            {/* Contact card */}
            <div className="bg-white-pure border border-gray-100 rounded-sm p-6">
              <h3 className="text-xs uppercase tracking-widest text-oak font-semibold mb-4">
                {t("contactLabel")}
              </h3>
              <p className="text-black text-sm mb-1">{t("phone")}</p>
              <p className="text-black text-sm">{t("email")}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

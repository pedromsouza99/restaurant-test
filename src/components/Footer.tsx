import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

export default function Footer() {
  const t = useTranslations("footer");
  const nav = useTranslations("nav");
  const findUs = useTranslations("findUs");

  return (
    <footer className="bg-black-deep text-gray-300">
      {/* Oak decorative line */}
      <div className="oak-line w-full" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* About column */}
          <div>
            <h3 className="font-[family-name:var(--font-playfair)] text-2xl font-bold text-white-pure mb-4">
              Boa Massa
            </h3>
            <p className="text-sm leading-relaxed text-gray-400">
              {t("about")}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs uppercase tracking-widest text-oak mb-6 font-semibold">
              {t("quickLinks")}
            </h4>
            <nav className="flex flex-col gap-3">
              <Link
                href="/"
                className="text-sm text-gray-400 hover:text-white-pure transition-colors duration-300"
              >
                {nav("home")}
              </Link>
              <Link
                href="/menu"
                className="text-sm text-gray-400 hover:text-white-pure transition-colors duration-300"
              >
                {nav("menu")}
              </Link>
              <Link
                href="/find-us"
                className="text-sm text-gray-400 hover:text-white-pure transition-colors duration-300"
              >
                {nav("findUs")}
              </Link>
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs uppercase tracking-widest text-oak mb-6 font-semibold">
              {t("contact")}
            </h4>
            <div className="flex flex-col gap-3 text-sm text-gray-400">
              <p>{findUs("address")}</p>
              <p>{findUs("city")}</p>
              <p>{findUs("phone")}</p>
              <p>{findUs("email")}</p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-gray-800 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-gray-500">
            © {new Date().getFullYear()} Boa Massa. {t("rights")}
          </p>
        </div>
      </div>
    </footer>
  );
}

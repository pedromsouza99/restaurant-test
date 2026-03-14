import type { Metadata } from "next";
import LocationSection from "@/components/LocationSection";

export const metadata: Metadata = {
  title: "Where to Find Us — Boa Massa",
  description:
    "Visit Boa Massa at Calle de la Infanta Mercedes, 56, Madrid. Open daily 9:00–18:00.",
};

export default function FindUsPage() {
  return (
    <>
      {/* Page Header */}
      <section className="relative pt-32 pb-20 bg-black-deep overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/hero-bakery.webp')] bg-cover bg-center opacity-20" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <div className="oak-line-short mx-auto mb-6" />
          <h1 className="font-[family-name:var(--font-playfair)] text-4xl sm:text-5xl md:text-6xl font-bold text-white-pure mb-4 animate-fade-in">
            Where to Find Us
          </h1>
          <p className="text-gray-400 max-w-md mx-auto animate-fade-in delay-100">
            We&apos;d love to see you. Stop by for a coffee and a pastry.
          </p>
        </div>
      </section>

      {/* Location Section (shared component) */}
      <LocationSection />
    </>
  );
}

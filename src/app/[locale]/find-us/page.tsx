import { getTranslations } from "next-intl/server";
import type { Metadata } from "next";
import LocationSection from "@/components/LocationSection";
import PageHeader from "@/components/PageHeader";

export const metadata: Metadata = {
  title: "Where to Find Us — Boa Massa",
  description:
    "Visit Boa Massa at Calle de la Infanta Mercedes, 56, Madrid. Open daily 9:00–18:00.",
};

export default async function FindUsPage() {
  const t = await getTranslations("findUs");

  return (
    <>
      <PageHeader title={t("title")} subtitle={t("subtitle")} />
      <LocationSection />
    </>
  );
}

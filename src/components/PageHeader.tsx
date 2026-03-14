interface PageHeaderProps {
  title: string;
  subtitle: string;
}

export default function PageHeader({ title, subtitle }: PageHeaderProps) {
  return (
    <section className="relative pt-32 pb-20 bg-black-deep overflow-hidden">
      <div className="absolute inset-0 bg-[url('/images/hero-bakery.webp')] bg-cover bg-center opacity-20" />
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center">
        <div className="oak-line-short mx-auto mb-6" />
        <h1 className="font-[family-name:var(--font-playfair)] text-4xl sm:text-5xl md:text-6xl font-bold text-white-pure mb-4 animate-fade-in">
          {title}
        </h1>
        <p className="text-gray-400 max-w-md mx-auto animate-fade-in delay-100">
          {subtitle}
        </p>
      </div>
    </section>
  );
}

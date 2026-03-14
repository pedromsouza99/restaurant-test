import Image from "next/image";

interface MenuCardProps {
  name: string;
  description: string;
  price: string;
  image: string;
}

export default function MenuCard({
  name,
  description,
  price,
  image,
}: MenuCardProps) {
  return (
    <div className="group bg-white-pure rounded-sm border border-gray-100 overflow-hidden transition-all duration-500 hover:border-oak/40 hover:shadow-lg hover:shadow-oak/5">
      {/* Image */}
      <div className="relative h-52 overflow-hidden">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
        />
      </div>

      {/* Content */}
      <div className="p-5">
        <div className="flex items-start justify-between gap-3 mb-2">
          <h3 className="font-[family-name:var(--font-playfair)] text-lg font-semibold text-black leading-tight">
            {name}
          </h3>
          <span className="text-red font-semibold text-sm whitespace-nowrap mt-0.5">
            {price}
          </span>
        </div>
        <p className="text-gray-500 text-sm leading-relaxed">{description}</p>
      </div>
    </div>
  );
}

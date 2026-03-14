export interface MenuItemData {
  key: string;
  image: string;
  price: string;
}

export const menuData: Record<string, MenuItemData[]> = {
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

export const categoryOrder = [
  "pastries",
  "breads",
  "coffee",
  "specials",
] as const;

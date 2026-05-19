import {
  Beef,
  Dumbbell,
  Flame,
  Leaf,
  ShieldCheck,
  Snowflake,
  Sparkles,
  WheatOff,
} from "lucide-react";

export const benefits = [
  { title: "1 solo ingrediente", icon: Leaf },
  { title: "Alto en proteina", icon: Beef },
  { title: "Sin gluten", icon: WheatOff },
  { title: "Sin azucar", icon: Flame },
  { title: "Sin conservantes", icon: ShieldCheck },
  { title: "100% natural", icon: Sparkles },
  { title: "Ideal para gimnasio", icon: Dumbbell },
  { title: "Snack saludable", icon: Leaf },
];

export const freezeDryingSteps = [
  {
    title: "Congelado",
    description:
      "Se congela el huevo a baja temperatura para mantener su estructura y sabor natural.",
  },
  {
    title: "Extraccion de agua",
    description:
      "Se elimina el agua por sublimacion al vacio, sin usar calor agresivo.",
  },
  {
    title: "Conservacion de nutrientes",
    description:
      "Se conserva el perfil nutricional y se obtiene una textura crocante y liviana.",
  },
];

export const products = [
  {
    name: "Clara de huevo liofilizada",
    subtitle: "85% proteina",
    image: "/images/clara-encab2.png",
    heroImage: "/images/clara-encab2.png",
    points: ["Baja en grasas", "Ideal fitness", "Perfecta para post entrenamiento"],
    nutrition: [
      { label: "Proteina", value: "85%" },
      { label: "Grasas", value: "Bajas" },
      { label: "Carbohidratos", value: "Muy bajos" },
    ],
    accent: "green" as const,
  },
  {
    name: "Yema de huevo liofilizada",
    subtitle: "Energia natural",
    image: "/images/yema-encab2.png",
    heroImage: "/images/yema-encab2.png",
    points: [
      "Grasas saludables",
      "Snack keto",
      "Sabor intenso para recetas",
    ],
    nutrition: [
      { label: "Grasas", value: "Saludables" },
      { label: "Energia", value: "Alta" },
      { label: "Textura", value: "Extra crocante" },
    ],
    accent: "orange" as const,
  },
];

export const recipeIdeas = [
  "Snack post entrenamiento",
  "Topping para ensaladas",
  "Ramen",
  "Hamburguesas",
  "Snacks keto",
  "Versiones picantes",
];

export const socialLinks = {
  whatsapp:
    "https://wa.me/5491168400661?text=Hola%2C%20quiero%20comprar%20Pop-eggs.%20Me%20compartis%20info%20y%20precios%3F",
  instagram: "https://www.instagram.com/popeggsarg",
  buy: "#productos",
};

export const brandStory = {
  title: "De una maquina en casa a una marca que innova",
  text: "Pop-eggs nacio como un experimento artesanal y hoy busca transformar la forma de consumir proteina en Argentina. Combinamos produccion artesanal, tecnologia de liofilizacion e innovacion alimenticia para crear un snack premium.",
  badges: ["Hecho en Argentina", "Produccion artesanal", "Innovacion alimenticia"],
};

export const sectionText = {
  heroTitle: "Snack de huevo liofilizado",
  heroSubtitle: "Crocante, natural y alto en proteina",
  freezeDryingSummary:
    "La liofilizacion conserva nutrientes, sabor y textura sin necesidad de conservantes.",
  finalCta: "Proba el snack mas innovador del momento",
};

export const visualTokens = {
  green: "#0B7A33",
  orange: "#FF6A00",
  ice: "#F6FCF8",
  warm: "#FFF7F1",
  ink: "#0B1420",
};

export const heroHighlights = [
  "Protein first",
  "Crunch premium",
  "Hecho en Argentina",
  "Tecnologia de liofilizacion",
];

export const freezeIcon = Snowflake;

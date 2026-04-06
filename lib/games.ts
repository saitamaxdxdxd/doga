export type Game = {
  name: string;
  descEs: string;
  descEn: string;
  gradient: string;
  icon: string | null;
  appStoreUrl: string | null;
  googlePlayUrl: string | null;
  comingSoon: boolean;
};

export const GAMES: Game[] = [
  {
    name: "Zynk",
    descEs: "Esquiva obstáculos. No pares. Sobrevive.",
    descEn: "Dodge obstacles. Don't stop. Survive.",
    gradient: "from-fuchsia-600 to-orange-500",
    icon: "/ZynkIcon.png",
    appStoreUrl: "https://apps.apple.com/sk/app/zynk-game/id6746389411",
    googlePlayUrl: null,
    comingSoon: false,
  },
  {
    name: "Skyp",
    descEs: "Salta más alto. Llega al cielo.",
    descEn: "Jump higher. Reach the sky.",
    gradient: "from-sky-500 to-cyan-400",
    icon: "/SkypIcon.png",
    appStoreUrl: "https://apps.apple.com/mx/app/skyp/id6756292781",
    googlePlayUrl: null,
    comingSoon: false,
  },
  {
    name: "Shrink",
    descEs: "Encógete para escapar. Pronto.",
    descEn: "Shrink to escape. Soon.",
    gradient: "from-violet-600 to-cyan-500",
    icon: null,
    appStoreUrl: null,
    googlePlayUrl: null,
    comingSoon: true,
  },
];

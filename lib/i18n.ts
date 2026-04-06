import { createContext, useContext } from "react";

export type Lang = "es" | "en";

export const LangContext = createContext<Lang>("es");

export function useLang(): Lang {
  return useContext(LangContext);
}

export const T = {
  es: {
    nav: {
      games: "Juegos",
      about: "Sobre nosotros",
      contact: "Contacto",
    },
    hero: {
      badge: "Estudio independiente · México",
      h1a: "Juegos que",
      h1b: "no puedes",
      h1c: "soltar",
      sub: "Estudio independiente. Juegos que se clavan en tu cabeza.",
      cta1: "Ver juegos",
      cta2: "Contacto",
      scroll: "Scroll",
    },
    games: {
      label: "Nuestro catálogo",
      title: "Nuestros juegos",
      comingSoon: "Próximamente",
      appStore: "App Store",
      googlePlay: "Google Play",
      platforms: "iOS · Android",
    },
    about: {
      label: "El estudio",
      title: "¿Qué es Doga?",
      p1: "Doga nació con una idea incómoda: que los mejores juegos no se explican, se sienten.",
      p2: "No perseguimos géneros. No copiamos lo que ya funciona. Cada proyecto arranca desde cero — con toda la libertad y toda la responsabilidad que eso implica — movido por una sola pregunta que no nos deja tranquilos:",
      p2highlight: "¿qué hace que un juego sea imposible de soltar?",
      p3: "Lo que nos obsesiona no es hacer juegos 'bonitos' ni juegos 'exitosos'. Es encontrar esa mecánica invisible — la que no puedes describir pero que te regresa una y otra vez. Eso es lo que perseguimos. Eso es lo que somos.",
    },
    pillars: [
      {
        title: "Minimalista",
        desc: "Menos es más en cada decisión de diseño. Sin ruido, sin relleno.",
      },
      {
        title: "Adictivo",
        desc: "Cada mecánica construida para el loop perfecto.",
      },
      {
        title: "100% indie",
        desc: "Sin publishers, sin compromisos. Hacemos los juegos que queremos hacer.",
      },
    ],
    contact: {
      label: "Hablemos",
      title: "¿Hablamos?",
      sub: "Para publishers, prensa o colaboraciones",
      btn: "Enviar email",
    },
    footer: {
      tagline: "Hecho con obsesión desde México",
      copy: "© 2025 Doga. Todos los derechos reservados.",
    },
  },
  en: {
    nav: {
      games: "Games",
      about: "About",
      contact: "Contact",
    },
    hero: {
      badge: "Independent studio · Mexico",
      h1a: "Games you",
      h1b: "can't put",
      h1c: "down",
      sub: "Independent studio. Games that get stuck in your head.",
      cta1: "See games",
      cta2: "Contact",
      scroll: "Scroll",
    },
    games: {
      label: "Our catalog",
      title: "Our games",
      comingSoon: "Coming soon",
      appStore: "App Store",
      googlePlay: "Google Play",
      platforms: "iOS · Android",
    },
    about: {
      label: "The studio",
      title: "What is Doga?",
      p1: "Doga was built on an uncomfortable idea: that the best games aren't explained — they're felt.",
      p2: "We don't chase genres. We don't copy what already works. Every project starts from zero — with all the freedom and all the responsibility that comes with it — driven by a single question that keeps us up at night:",
      p2highlight: "what makes a game impossible to put down?",
      p3: 'We\'re not obsessed with making "beautiful" games or "successful" games. We\'re obsessed with finding that invisible mechanic — the one you can\'t describe but that keeps pulling you back. That\'s what we chase. That\'s what we are.',
    },
    pillars: [
      {
        title: "Minimalist",
        desc: "Less is more in every design decision. No noise, no filler.",
      },
      {
        title: "Addictive",
        desc: "Every mechanic built for the perfect loop.",
      },
      {
        title: "100% indie",
        desc: "No publishers, no compromises. We make the games we want to make.",
      },
    ],
    contact: {
      label: "Let's talk",
      title: "Let's talk?",
      sub: "For publishers, press or collaborations",
      btn: "Send email",
    },
    footer: {
      tagline: "Made with obsession from Mexico",
      copy: "© 2025 Doga. All rights reserved.",
    },
  },
} as const;

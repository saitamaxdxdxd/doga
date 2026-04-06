"use client";

import { useState } from "react";
import { LangContext, type Lang } from "@/lib/i18n";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import GamesSection from "@/components/GamesSection";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  const [lang, setLang] = useState<Lang>("es");

  return (
    <LangContext.Provider value={lang}>
      <Navbar lang={lang} setLang={setLang} />
      <main>
        <Hero />
        <GamesSection />
        <AboutSection />
        <ContactSection />
      </main>
      <Footer />
    </LangContext.Provider>
  );
}

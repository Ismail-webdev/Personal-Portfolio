import React, { useEffect } from "react";
import Header from "./components/Header";
import { useTranslation } from "react-i18next";
import Hero from "./sections/Hero";
import Footer from "./components/Footer";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Experience from "./sections/Experience";
import Contact from "./sections/Contact";

const App = () => {
  const { i18n } = useTranslation();

  useEffect(() => {
    document.documentElement.setAttribute(
      "dir",
      i18n.language === "ar" ? "rtl" : "ltr",
    );
    document.documentElement.setAttribute("lang", i18n.language);
  }, [i18n.language]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-900 to-primary-800">
      {/* Skip link */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 bg-white text-black px-4 py-2 rounded"
      >
        Skip to main content
      </a>

      <Header />

      <main id="main-content">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>

      <Footer />
    </div>
  );
};

export default App;

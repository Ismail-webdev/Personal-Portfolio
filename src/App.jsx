import React, { useEffect } from "react";
import Header from "./components/Header";
import { useTranslation } from "react-i18next";
import Hero from "./sections/Hero";
import Footer from "./components/Footer";

const App = () => {
  const { t, i18n } = useTranslation();
  useEffect(() => {
    document.documentElement.setAttribute(
      "dir",
      i18n.language === "ar" ? "rtl" : "ltr"
    );

    document.documentElement.setAttribute("lang", i18n.language);
  }, [i18n.language]);
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-900 to-primary-800">
      <Header />
      <Hero />
      <Footer />
    </div>
  );
};

export default App;

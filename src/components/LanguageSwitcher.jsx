import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Globe } from "lucide-react";

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const [isMobile, setIsMobile] = useState(false);
  const [open, setOpen] = useState(false);

  const languages = [
    { code: "en", name: "English", flag: "🇺🇸" },
    { code: "ar", name: "العربية", flag: "🇸🇦" },
  ];

  const currentLanguage =
    languages.find((lang) => lang.code === i18n.language) || languages[0];

  useEffect(() => {
    // Detect screen size (mobile = width < 1024px)
    const handleResize = () => setIsMobile(window.innerWidth < 1024);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleLanguageChange = (langCode) => {
    i18n.changeLanguage(langCode);

    if (langCode === "ar") {
      document.documentElement.setAttribute("dir", "rtl");
      document.documentElement.setAttribute("lang", "ar");
    } else {
      document.documentElement.setAttribute("dir", "ltr");
      document.documentElement.setAttribute("lang", "en");
    }

    setOpen(false);
  };

  return (
    <div className={`relative ${isMobile ? "" : "group"}`}>
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => isMobile && setOpen((prev) => !prev)} // only toggle on mobile/tablet
        className="flex items-center space-x-2 p-2 rounded-lg bg-primary-800 text-primary-300 hover:bg-accent-600 hover:text-white transition-colors duration-300"
      >
        <Globe size={18} />
        <span className="text-sm font-medium">{currentLanguage.flag}</span>
      </motion.button>

      {/* Dropdown Menu */}
      <AnimatePresence>
        {(open || !isMobile) && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            className={`absolute top-full right-0 mt-2 w-40 bg-primary-800 rounded-lg shadow-lg border border-primary-700 z-50 
              ${
                !isMobile
                  ? "opacity-0 group-hover:opacity-100 group-hover:visible"
                  : ""
              }`}
          >
            <div className="py-2">
              {languages.map((language) => (
                <motion.button
                  key={language.code}
                  whileHover={{ backgroundColor: "rgba(139, 92, 246, 0.1)" }}
                  onClick={() => handleLanguageChange(language.code)}
                  className={`w-full flex items-center space-x-3 px-4 py-2 text-sm transition-colors duration-200 ${
                    i18n.language === language.code
                      ? "text-accent-400 bg-accent-900/20"
                      : "text-primary-300 hover:text-white"
                  }`}
                >
                  <span className="text-lg">{language.flag}</span>
                  <span className="font-medium">{language.name}</span>
                  {i18n.language === language.code && (
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className="w-2 h-2 bg-accent-400 rounded-full ml-auto"
                    />
                  )}
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default LanguageSwitcher;

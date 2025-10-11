import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Globe } from "lucide-react";
import { code } from "framer-motion/client";
const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const languages = [
    { code: "en", name: "English", flag: "🇺🇸" },
    { code: "ar", name: "العربية", flag: "🇸🇦" },
  ];

  const currentLanguage =
    languages.find((lang) => lang.code === i18n.language) || languages[0];

  const handleLanguageChange = (langCode) => {
    i18n.changeLanguage(langCode);
    // Update document direction for Arabic
    if (languageCode === "ar") {
      document.documentElement.setAttribute("dir", "rtl");
      document.documentElement.setAttribute("lang", "ar");
    } else {
      document.documentElement.setAttribute("dir", "ltr");
      document.documentElement.setAttribute("lang", "en");
    }
  };
  return (
    <div className="relative group">
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="flex items-center space-x-2 p-2 rounded-lg bg-primary-800 text-primary-300  hover:bg-accent-600 hover:text-white transition-colors duration-300"
      >
        <Globe size={18} />
        <span className="text-sm font-medium">{currentLanguage.flag}</span>
      </motion.button>
      {/* Dropdown Menu */}
      <motion.div
        initial={{ opacity: 0, y: -10, scale: 0.95 }}
        whileHover={{ opacity: 1, y: 0, scale: 1 }}
        className="absolute top-full right-0 mt-2 w-40 bg-primary-800 rounded-lg shadow-lg border border-primary-700 opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-50 rtl-dropdown"
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
    </div>
  );
};

export default LanguageSwitcher;

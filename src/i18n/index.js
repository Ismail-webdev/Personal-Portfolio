// src/i18n.js
import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import I18nextBrowserLanguageDetector from "i18next-browser-languagedetector";

import en from "./locales/en.json";
import ar from "./locales/ar.json";
import de from "./locales/de.json";
import es from "./locales/es.json";
import fr from "./locales/fr.json";

const resources = {
  en: {
    translation: en,
  },
  de: {
    translation: de,
  },
  fr: {
    translation: fr,
  },
  es: {
    translation: es,
  },
  ar: {
    translation: ar,
  },
};

i18next
  .use(I18nextBrowserLanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: "en",
    debug: false, // ✅ boolean
    interpolation: {
      escapeValue: false,
    },
    detection: {
      order: ["localStorage", "navigator", "htmlTag"],
      caches: ["localStorage"],
    },
  });

export default i18next;

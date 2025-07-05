import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import enLang from "./locales/en.json"
import taLang from "./locales/ta.json"

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: enLang
    },
    ta: {
      translation: taLang
    }
  },
  lng: "en", // Default language
  fallbackLng: "en",
  interpolation: {
    escapeValue: false
  }
});

export default i18n;

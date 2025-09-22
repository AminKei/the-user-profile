import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "../config/locales/en.json";
import es from "../config/locales/es.json";
import fa from "../config/locales/fa.json";

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: en },
    es: { translation: es },
    fa: { translation: fa },
  },
  lng: localStorage.getItem("language") || "en",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;

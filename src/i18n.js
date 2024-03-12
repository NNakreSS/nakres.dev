import i18n from "i18next";
import BackEnd from "i18next-http-backend";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

i18n.use(initReactI18next).use(BackEnd).use(LanguageDetector).init({
  fallbackLng: "en",
  debug: false,
});

export default i18n;

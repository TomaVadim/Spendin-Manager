import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import translations from './translations/translations.json';
import LanguageDetector from 'i18next-browser-languagedetector';

const detectorOption = {
  order: ['localStorage', 'htmlTag'],
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: translations,
    lng: "ua",
    detection: detectorOption,
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;

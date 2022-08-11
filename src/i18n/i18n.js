import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import pt from '../locales/pt/common.json';
import en from '../locales/en/common.json';


const options = {
  order: ['navigator'],
};

const resources = {
  en: {
    translation: {
      ...en,
    },
  },
  pt: {
    translation: {
      ...pt,
    },
  },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    detection: options,
    resources,
    fallbackLng: 'pt',
    // lng: "pt", // language to use, more information here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
    // you can use the i18n.changeLanguage function to change the language manually: https://www.i18next.com/overview/api#changelanguage
    // if you're using a language detector, do not define the lng option

    interpolation: {
      escapeValue: false, // react already safes from xss
    },
    react: {
      wait: true,
    },
  });

export default i18n;

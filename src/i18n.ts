import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";
import {
    DEFAULT_LOCALE,
    NAMESPACES,
    SUPPORTED_LOCALES,
} from "@/constants/i18nConfig";
import { resources } from "@/translations/resources";

i18n.use(initReactI18next) // passes i18n down to react-i18next
    .use(LanguageDetector)
    .init({
        resources,
        ns: NAMESPACES,
        defaultNS: NAMESPACES[0],
        fallbackNS: NAMESPACES[0],
        fallbackLng: DEFAULT_LOCALE,
        supportedLngs: SUPPORTED_LOCALES,

        interpolation: {
            escapeValue: false, // react already safes from xss
        },
    });

export default i18n;

import { enTranslations } from "./languages/en";
import { viTranslations } from "./languages/vi";

export type SupportedLanguage = "English" | "Vietnamese";

export const translations = {
  English: enTranslations,
  Vietnamese: viTranslations,
};

export type TranslationComponent = keyof typeof enTranslations;

export const createTranslator =
  (language: SupportedLanguage) =>
  (component: TranslationComponent) =>
  (key: string) => {
    const componentTranslations = translations[language][component];
    return (
      componentTranslations[key as keyof typeof componentTranslations] ?? key
    );
  };

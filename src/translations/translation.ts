import { enTranslations } from "./languages/en";
import { viTranslations } from "./languages/vi";

export type SupportedLanguage = "English" | "Vietnamese";

export const translations = {
  English: enTranslations,
  Vietnamese: viTranslations,
};

export type TranslationComponent = keyof typeof enTranslations;

export const getTranslation = (
  language: SupportedLanguage,
  component: TranslationComponent,
  key: string
): string => {
  const componentTranslations = translations[language][component];
  if (key in componentTranslations) {
    return componentTranslations[key as keyof typeof componentTranslations];
  } else {
    return key;
  }
};

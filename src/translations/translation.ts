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
  // Get translations for the specified component in the selected language
  const componentTranslations = translations[language][component];

  // Return the translated value or fall back to the key if not found
  return (
    componentTranslations[key as keyof typeof componentTranslations] ?? key
  );
};

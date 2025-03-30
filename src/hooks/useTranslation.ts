import {
  getTranslation,
  SupportedLanguage,
  TranslationComponent,
} from "../translations/translation";

export function useTranslation(language: SupportedLanguage = "English") {
  const translate = (component: TranslationComponent, key: string) => {
    return getTranslation(language, component, key);
  };
  return { translate };
}

import {
  createTranslator,
  SupportedLanguage,
  TranslationComponent,
} from "../translations/translation";

export function useTranslation(language: SupportedLanguage = "English") {
  const translate = (component: TranslationComponent, key: string) => {
    return createTranslator(language)(component)(key);
  };

  const translator = createTranslator(language);
  return { translate, translator };
}

import { createContext } from "react";

import { localeOptions, type Locale, type Messages } from "./messages";

export type I18nContextValue = {
  locale: Locale;
  locales: typeof localeOptions;
  messages: Messages;
  setLocale: (locale: Locale) => void;
};

export const I18nContext = createContext<I18nContextValue | null>(null);

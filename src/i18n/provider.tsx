import {
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";

import { I18nContext } from "./context";
import { localeOptions, messages, type Locale } from "./messages";

const STORAGE_KEY = "portfolio-locale";

function getInitialLocale(): Locale {
  if (typeof window === "undefined") {
    return "pt";
  }

  const savedLocale = window.localStorage.getItem(STORAGE_KEY);
  if (savedLocale === "pt" || savedLocale === "en") {
    return savedLocale;
  }

  const browserLocale = window.navigator.language.toLowerCase();
  return browserLocale.startsWith("pt") ? "pt" : "en";
}

export function I18nProvider({ children }: { children: ReactNode }) {
  const [locale, setLocale] = useState<Locale>(getInitialLocale);

  useEffect(() => {
    document.documentElement.lang = locale;
    document.title = messages[locale].metadata.title;
    window.localStorage.setItem(STORAGE_KEY, locale);
  }, [locale]);

  const value = useMemo(
    () => ({
      locale,
      locales: localeOptions,
      messages: messages[locale],
      setLocale,
    }),
    [locale],
  );

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

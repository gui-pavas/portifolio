import { CheckIcon, ChevronDownIcon, LanguagesIcon } from "lucide-react";

import { localeOptions, type Locale } from "@/i18n/messages";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Button } from "./ui/button";

type LanguageSwitcherProps = {
  locale: Locale;
  locales: typeof localeOptions;
  languageLabel: string;
  languageAriaLabel: string;
  onLocaleChange: (locale: Locale) => void;
  className?: string;
};

export default function LanguageSwitcher({
  locale,
  locales,
  languageLabel,
  languageAriaLabel,
  onLocaleChange,
  className,
}: LanguageSwitcherProps) {
  const currentLocale = locales.find((item) => item.code === locale) ?? locales[0];

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          type="button"
          className={`rounded-full border-white/10 bg-white/5 px-4 py-6 text-white backdrop-blur-md hover:bg-white/10 hover:text-white ${className ?? ""}`}
          aria-label={languageAriaLabel}
        >
          <span className="flex items-center gap-2">
            <LanguagesIcon className="size-4 text-cyan-300" />
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-white/60">
              {languageLabel}
            </span>
            <span className="rounded-full bg-cyan-500 px-2.5 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-slate-950">
              {currentLocale.label}
            </span>
            <ChevronDownIcon className="size-4 text-white/70" />
          </span>
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent
        align="end"
        sideOffset={8}
        className="w-48 rounded-2xl border border-white/10 bg-gray-950 p-1 text-white shadow-xl"
      >
        {locales.map((item) => {
          const isActive = item.code === locale;

          return (
            <DropdownMenuItem
              key={item.code}
              onClick={() => onLocaleChange(item.code)}
              className="rounded-xl px-3 py-2.5 focus:bg-white/5 focus:text-white"
            >
              <div className="flex w-full items-center justify-between gap-3">
                <div className="flex flex-col">
                  <span className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300">
                    {item.label}
                  </span>
                  <span className="text-sm text-white/75">{item.nativeLabel}</span>
                </div>

                {isActive ? <CheckIcon className="size-4 text-cyan-300" /> : null}
              </div>
            </DropdownMenuItem>
          );
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

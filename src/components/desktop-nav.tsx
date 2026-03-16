import { localeOptions, type Locale } from "@/i18n/messages"
import LanguageSwitcher from "./language-switcher"

type NavItem = {
  href: string
  text: string
}

type DesktopNavProps = {
  navlist: readonly NavItem[]
  locale: Locale
  locales: typeof localeOptions
  languageLabel: string
  languageAriaLabel: string
  onLocaleChange: (locale: Locale) => void
}

export default function DesktopNav({
  navlist,
  locale,
  locales,
  languageLabel,
  languageAriaLabel,
  onLocaleChange,
}: DesktopNavProps) {
  return (
    <nav className="mx-auto hidden w-full max-w-7xl items-center justify-between px-4 py-4 md:flex md:px-8 md:py-6">
      <ul className="flex items-center gap-8 lg:gap-12">
        {navlist.map((navItem, index) => (
          <li
            key={`${navItem.text}-${index}`}
            className="text-base font-open-sans text-white transition-colors hover:text-cyan-500 lg:text-lg"
          >
            <a href={navItem.href} className="flex items-center gap-2">
              {navItem.text}
            </a>
          </li>
        ))}
      </ul>

      <LanguageSwitcher
        locale={locale}
        locales={locales}
        languageLabel={languageLabel}
        languageAriaLabel={languageAriaLabel}
        onLocaleChange={onLocaleChange}
      />
    </nav>
  )
}

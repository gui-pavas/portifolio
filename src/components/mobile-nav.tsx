import { Menu, X } from 'lucide-react'
import { localeOptions, type Locale } from '@/i18n/messages'
import LanguageSwitcher from './language-switcher'

type NavItem = {
  href: string
  text: string
}

type MobileNavProps = {
  isMenuOpen: boolean
  navlist: readonly NavItem[]
  locale: Locale
  locales: typeof localeOptions
  languageLabel: string
  languageAriaLabel: string
  openMenuLabel: string
  closeMenuLabel: string
  onLocaleChange: (locale: Locale) => void
  onToggleMenu: () => void
  onCloseMenu: () => void
}

export default function MobileNav({
  isMenuOpen,
  navlist,
  locale,
  locales,
  languageLabel,
  languageAriaLabel,
  openMenuLabel,
  closeMenuLabel,
  onLocaleChange,
  onToggleMenu,
  onCloseMenu,
}: MobileNavProps) {
  return (
    <>
      <nav className="flex w-full max-w-7xl items-center justify-start px-4 py-4 md:hidden">
        <button
          type="button"
          aria-label={isMenuOpen ? closeMenuLabel : openMenuLabel}
          onClick={onToggleMenu}
          className="flex items-center justify-center rounded-lg p-2 text-white transition-colors hover:bg-white/10"
        >
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      <div
        className={`overflow-hidden transition-all duration-300 md:hidden ${isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
      >
        <div className="border-t border-white/10 bg-black/90 px-4 py-4 backdrop-blur-md">
          <LanguageSwitcher
            locale={locale}
            locales={locales}
            languageLabel={languageLabel}
            languageAriaLabel={languageAriaLabel}
            onLocaleChange={onLocaleChange}
            className="mb-4 w-full justify-between"
          />

          <ul className="flex flex-col gap-2">
            {navlist.map((navItem, index) => (
              <li key={`${navItem.text}-${index}`}>
                <a
                  href={navItem.href}
                  onClick={onCloseMenu}
                  className="block rounded-lg px-3 py-3 text-base text-white transition-colors hover:bg-white/10 hover:text-cyan-500"
                >
                  {navItem.text}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  )
}

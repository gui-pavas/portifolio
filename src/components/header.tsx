import { useEffect, useRef, useState } from 'react'
import DesktopNav from './desktop-nav'
import MobileNav from './mobile-nav'
import { useI18n } from '@/i18n/use-i18n'

export default function Header() {
    const [isVisible, setIsVisible] = useState(true)
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const lastScrollY = useRef(0)
    const { messages, locale, locales, setLocale } = useI18n()

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY

            if (currentScrollY <= 24) {
                setIsVisible(true)
            } else if (currentScrollY > lastScrollY.current) {
                setIsVisible(false)
                setIsMenuOpen(false)
            } else {
                setIsVisible(true)
            }

            lastScrollY.current = currentScrollY
        }

        const handleResize = () => {
            if (window.innerWidth >= 768) {
                setIsMenuOpen(false)
            }
        }

        lastScrollY.current = window.scrollY

        window.addEventListener('scroll', handleScroll, { passive: true })
        window.addEventListener('resize', handleResize)

        return () => {
            window.removeEventListener('scroll', handleScroll)
            window.removeEventListener('resize', handleResize)
        }
    }, [])

    const navlist = messages.nav.items

    return (
        <header
            className={`fixed top-0 left-0 z-50 w-full bg-linear-to-b from-black/90 to-transparent backdrop-blur-sm transition-transform duration-300 ease-out ${isVisible ? 'translate-y-0' : '-translate-y-full'
                }`}
        >
            <DesktopNav
                navlist={navlist}
                locale={locale}
                locales={locales}
                languageLabel={messages.languageSwitcher.label}
                languageAriaLabel={messages.languageSwitcher.ariaLabel}
                onLocaleChange={setLocale}
            />
            <MobileNav
                isMenuOpen={isMenuOpen}
                navlist={navlist}
                locale={locale}
                locales={locales}
                languageLabel={messages.languageSwitcher.label}
                languageAriaLabel={messages.languageSwitcher.ariaLabel}
                openMenuLabel={messages.nav.openMenu}
                closeMenuLabel={messages.nav.closeMenu}
                onLocaleChange={setLocale}
                onToggleMenu={() => setIsMenuOpen((prev) => !prev)}
                onCloseMenu={() => setIsMenuOpen(false)}
            />
        </header>
    )
}

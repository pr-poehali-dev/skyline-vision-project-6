import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"

interface NavigationProps {
  language: "en" | "de" | "ru"
  onLanguageChange: (lang: "en" | "de" | "ru") => void
}

const translations = {
  en: {
    about: "About",
    why: "Why",
    works: "Works",
    services: "Services",
    contact: "Contact",
  },
  de: {
    about: "Über mich",
    why: "Warum",
    works: "Werke",
    services: "Leistungen",
    contact: "Kontakt",
  },
  ru: {
    about: "О себе",
    why: "Преимущества",
    works: "Работы",
    services: "Услуги",
    contact: "Контакт",
  },
}

export default function Navigation({ language, onLanguageChange }: NavigationProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [isHeroSection, setIsHeroSection] = useState(true)
  const t = translations[language]

  useEffect(() => {
    const handleScroll = () => {
      const heroSection = document.getElementById("hero")
      if (heroSection) {
        const heroBottom = heroSection.getBoundingClientRect().bottom
        setIsHeroSection(heroBottom > 100)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navLinkColor = isHeroSection ? "text-white" : "text-charcoal"
  const navLinkHoverColor = "hover:text-gold"
  const logoColor = isHeroSection ? "text-white" : "text-charcoal"
  const menuButtonColor = isHeroSection ? "text-white" : "text-charcoal"
  const languageButtonActiveColor = "text-gold"
  const languageButtonInactiveColor = isHeroSection
    ? "text-white/60 hover:text-white"
    : "text-charcoal/60 hover:text-charcoal"
  const navBgColor = isHeroSection ? "bg-transparent" : "bg-cream/95"
  const borderColor = isHeroSection ? "border-white/10" : "border-taupe/20"
  const mobileMenuBg = isHeroSection ? "bg-charcoal/95 backdrop-blur-sm" : "bg-cream/95"
  const mobileLinkColor = isHeroSection ? "text-white" : "text-charcoal"

  const links = [
    { href: "#biography", label: t.about },
    { href: "#why", label: t.why },
    { href: "#gallery", label: t.works },
    { href: "#services", label: t.services },
    { href: "#contact", label: t.contact },
  ]

  return (
    <nav
      className={`fixed w-full ${navBgColor} backdrop-blur-sm z-50 border-b ${borderColor} transition-all duration-300`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className={`${logoColor} font-serif text-xl font-normal tracking-widest transition-colors duration-300 uppercase`}>
            А. Нестерова
          </div>

          <div className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`text-sm ${navLinkColor} ${navLinkHoverColor} transition-colors duration-300`}
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <div className="flex gap-2">
              {(["ru", "en", "de"] as const).map((lang) => (
                <button
                  key={lang}
                  onClick={() => onLanguageChange(lang)}
                  className={`text-xs font-medium transition-colors duration-300 ${
                    language === lang ? languageButtonActiveColor : languageButtonInactiveColor
                  }`}
                >
                  {lang.toUpperCase()}
                </button>
              ))}
            </div>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`md:hidden ${menuButtonColor} transition-colors duration-300`}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {isOpen && (
          <div
            className={`md:hidden pb-4 space-y-3 border-t ${borderColor} ${mobileMenuBg} transition-all duration-300`}
          >
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`block text-sm ${mobileLinkColor} hover:text-gold transition-colors duration-300 py-2`}
              >
                {link.label}
              </a>
            ))}
          </div>
        )}
      </div>
    </nav>
  )
}

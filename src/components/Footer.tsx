interface FooterProps {
  language: "en" | "de" | "ru"
}

const translations = {
  en: {
    copyright: "All rights reserved.",
    subtitle: "Artist. Designer.",
    quickLinks: "Navigation",
    about: "About",
    why: "Why",
    works: "Works",
    services: "Services",
    contact: "Contact",
    follow: "Social",
  },
  de: {
    copyright: "Alle Rechte vorbehalten.",
    subtitle: "Künstlerin. Designerin.",
    quickLinks: "Navigation",
    about: "Über mich",
    why: "Warum",
    works: "Werke",
    services: "Leistungen",
    contact: "Kontakt",
    follow: "Soziale Medien",
  },
  ru: {
    copyright: "Все права защищены.",
    subtitle: "Художник. Дизайнер.",
    quickLinks: "Навигация",
    about: "О себе",
    why: "Преимущества",
    works: "Работы",
    services: "Услуги",
    contact: "Контакт",
    follow: "Соцсети",
  },
}

export default function Footer({ language }: FooterProps) {
  const t = translations[language]

  return (
    <footer className="bg-charcoal text-warm-white py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
          <div>
            <h3 className="text-warm-white mb-2 font-serif text-xl tracking-widest uppercase">А. Нестерова</h3>
            <small className="text-warm-white/50">{t.subtitle}</small>
          </div>

          <div>
            <small className="font-medium text-warm-white/40 uppercase tracking-widest block mb-4">{t.quickLinks}</small>
            <ul className="space-y-2">
              {[
                { href: "#biography", label: t.about },
                { href: "#why", label: t.why },
                { href: "#gallery", label: t.works },
                { href: "#services", label: t.services },
                { href: "#contact", label: t.contact },
              ].map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-sm text-warm-white/60 hover:text-gold transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <small className="font-medium text-warm-white/40 uppercase tracking-widest block mb-4">{t.follow}</small>
            <div className="flex flex-col gap-3">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-sm text-warm-white/60 hover:text-gold transition-colors">
                Instagram
              </a>
              <a href="https://t.me" target="_blank" rel="noopener noreferrer" className="text-sm text-warm-white/60 hover:text-gold transition-colors">
                Telegram
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-warm-white/10 pt-8">
          <small className="text-warm-white/40">&copy; 2025 Анна Нестерова. {t.copyright}</small>
        </div>
      </div>
    </footer>
  )
}

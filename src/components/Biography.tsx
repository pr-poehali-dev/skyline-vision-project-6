interface BiographyProps {
  language: "en" | "de" | "ru"
}

const translations = {
  en: {
    heading: "Empathy as a Tool.",
    paragraphs: [
      "I create interior paintings that bring spaces to life. I work with textures, wood, and gypsum, turning natural materials into living volumes.",
      "Nature is my main source of inspiration — its forms, layering, and silence. Each work carries a unique relief that cannot be repeated or replicated by a machine.",
      "If a work resonates — it is yours.",
    ],
    education: "Education",
    educationText: "Moscow Institute of Fashion Industry, 2009. Specialty: Environmental Designer.",
  },
  de: {
    heading: "Empathie als Werkzeug.",
    paragraphs: [
      "Ich schaffe Interieurgemälde, die Räume zum Leben erwecken. Ich arbeite mit Texturen, Holz und Gips und verwandle natürliche Materialien in lebendige Volumina.",
      "Die Natur ist meine Hauptinspirationsquelle — ihre Formen, Schichtungen und Stille. Jede Arbeit trägt ein einzigartiges Relief, das nicht wiederholt oder maschinell reproduziert werden kann.",
      "Wenn ein Werk anspricht — gehört es Ihnen.",
    ],
    education: "Ausbildung",
    educationText: "Moskauer Institut für Modeindustrie, 2009. Fachrichtung: Umweltdesigner.",
  },
  ru: {
    heading: "Эмпатия как инструмент.",
    paragraphs: [
      "Создаю интерьерные картины, которые оживляют пространство. Работаю с фактурами, деревом, гипсом — превращаю природные материалы в живые объёмы.",
      "Природа — главный источник вдохновения: её формы, слоистость и тишина. Каждая работа несёт неповторимый рельеф, который невозможно повторить или создать машинным способом.",
      "Если работа откликается — значит, она ваша.",
    ],
    education: "Образование",
    educationText: "Московский Институт Индустрии Моды, 2009. Специальность: дизайнер окружающей среды.",
  },
}

export default function Biography({ language }: BiographyProps) {
  const t = translations[language]

  return (
    <section id="biography" className="py-24 md:py-36 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-charcoal mb-12 text-pretty">
          {t.heading}
        </h2>
        <div className="space-y-6 mb-16">
          {t.paragraphs.map((paragraph, index) => (
            <p
              key={index}
              className={`text-lg leading-relaxed animate-fade-in-up ${index === t.paragraphs.length - 1 ? "text-charcoal font-medium italic" : "text-charcoal/80"}`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {paragraph}
            </p>
          ))}
        </div>

        <div className="border-t border-taupe/20 pt-10 animate-fade-in-up">
          <small className="font-medium text-taupe uppercase tracking-widest block mb-3">{t.education}</small>
          <p className="text-charcoal/80">{t.educationText}</p>
        </div>
      </div>
    </section>
  )
}

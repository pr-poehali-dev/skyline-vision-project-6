interface ConcertsProps {
  language: "en" | "de" | "ru"
}

const translations = {
  en: {
    whyHeading: "Why My Works Come Alive.",
    features: [
      { title: "Texture Uniqueness", desc: "Every work has its own unrepeatable relief." },
      { title: "Exclusivity", desc: "No copies. Only a single original." },
      { title: "Interior Integration", desc: "Precisely aligned with your style and space." },
      { title: "Eco Materials", desc: "Natural compositions, wood, gypsum." },
      { title: "Handcraft Only", desc: "Handmade cannot be imitated by machines." },
      { title: "Style Guarantee", desc: "Preliminary sketch and full approval." },
      { title: "Perfectionism", desc: "Every millimeter refined to ideal." },
      { title: "Spatial Thinking", desc: "I see the painting as part of the room's volume." },
      { title: "Complex Layouts", desc: "Solutions for non-standard walls and niches." },
      { title: "Longevity", desc: "Works retain their look for decades." },
    ],
    servicesHeading: "Directions.",
    custom: "Custom Paintings",
    customDesc: "Creating a work for your interior and request.",
    stock: "Paintings in Stock",
    stockDesc: "Ready works available to take home now.",
    workshopHeading: "Learn to Feel Textures.",
    workshopDesc: "I host workshops in my studio. I introduce participants to materials and help create their first work.",
    workshopCta: "Sign Up",
  },
  de: {
    whyHeading: "Warum meine Werke lebendig werden.",
    features: [
      { title: "Texturunikalität", desc: "Jedes Werk hat sein eigenes unwiederholbares Relief." },
      { title: "Exklusivität", desc: "Keine Wiederholungen. Nur ein einziges Exemplar." },
      { title: "Interieurintegration", desc: "Trifft genau Ihren Stil und Raum." },
      { title: "Öko-Materialien", desc: "Natürliche Kompositionen, Holz, Gips." },
      { title: "Nur Handarbeit", desc: "Handarbeit kann nicht maschinell imitiert werden." },
      { title: "Stilgarantie", desc: "Vorab-Skizze und Abstimmung." },
      { title: "Perfektionismus", desc: "Jeden Millimeter zur Perfektion gebracht." },
      { title: "Raumdenken", desc: "Das Bild als Teil des Raumvolumens." },
      { title: "Komplexe Grundrisse", desc: "Lösungen für nicht standardmäßige Wände." },
      { title: "Langlebigkeit", desc: "Werke behalten ihr Aussehen Jahrzehnte lang." },
    ],
    servicesHeading: "Richtungen.",
    custom: "Auftragsgemälde",
    customDesc: "Schaffung eines Werkes für Ihr Interieur.",
    stock: "Gemälde auf Lager",
    stockDesc: "Fertige Werke, die sofort mitgenommen werden können.",
    workshopHeading: "Texturen fühlen lernen.",
    workshopDesc: "Ich veranstalte Workshops in meinem Atelier. Ich stelle Materialien vor und helfe beim ersten Werk.",
    workshopCta: "Anmelden",
  },
  ru: {
    whyHeading: "Почему мои работы оживают.",
    features: [
      { title: "Уникальность текстуры", desc: "Каждая работа имеет свой неповторимый рельеф." },
      { title: "Эксклюзивность", desc: "Никаких повторов. Только единственный экземпляр." },
      { title: "Интеграция в интерьер", desc: "Точно попадаю в ваш стиль и пространство." },
      { title: "Экологичность материалов", desc: "Натуральные составы, дерево, гипс." },
      { title: "Невозможно создать искусственно", desc: "Ручная работа не имитируется машинным производством." },
      { title: "Гарантия стилевого попадания", desc: "Предварительный эскиз и согласование." },
      { title: "Перфекционизм в деталях", desc: "Довожу до идеала каждый миллиметр." },
      { title: "Мыслю пространством", desc: "Вижу картину частью общего объёма комнаты." },
      { title: "Работа со сложными планировками", desc: "Разрабатываю решения для нестандартных стен и ниш." },
      { title: "Долговечность", desc: "Работы сохраняют вид десятилетиями." },
    ],
    servicesHeading: "Направления.",
    custom: "Картины под заказ",
    customDesc: "Создание работы под ваш интерьер и запрос.",
    stock: "Картины в наличии",
    stockDesc: "Готовые работы, которые можно забрать сейчас.",
    workshopHeading: "Научиться чувствовать фактуры.",
    workshopDesc: "Провожу мастер-классы в мастерской. Знакомлю с материалами, помогаю создать первую работу.",
    workshopCta: "Записаться",
  },
}

export default function Concerts({ language }: ConcertsProps) {
  const t = translations[language]

  return (
    <>
      {/* Why section */}
      <section id="why" className="py-24 md:py-36 bg-warm-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-14">
            <h2 className="text-charcoal mb-6">{t.whyHeading}</h2>
            <div className="line-accent"></div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-taupe/20">
            {t.features.map((f, idx) => (
              <div key={idx} className="bg-warm-white p-8 animate-fade-in-up" style={{ animationDelay: `${idx * 60}ms` }}>
                <h3 className="text-charcoal mb-3 text-base font-medium">{f.title}</h3>
                <p className="text-charcoal/60 text-sm leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services section */}
      <section id="services" className="py-24 md:py-36 bg-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-14">
            <h2 className="text-charcoal mb-6">{t.servicesHeading}</h2>
            <div className="line-accent"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-taupe/20 mb-24">
            <div className="bg-background p-12 animate-fade-in-up">
              <small className="text-taupe uppercase tracking-widest block mb-4">01</small>
              <h3 className="text-charcoal text-2xl mb-4">{t.custom}</h3>
              <p className="text-charcoal/70">{t.customDesc}</p>
            </div>
            <div className="bg-charcoal p-12 animate-fade-in-up animation-delay-100">
              <small className="text-gold uppercase tracking-widest block mb-4">02</small>
              <h3 className="text-warm-white text-2xl mb-4">{t.stock}</h3>
              <p className="text-warm-white/70">{t.stockDesc}</p>
            </div>
          </div>

          {/* Workshop */}
          <div className="border-t border-taupe/20 pt-16">
            <div className="max-w-2xl">
              <h2 className="text-charcoal mb-6">{t.workshopHeading}</h2>
              <div className="line-accent mb-8"></div>
              <p className="text-charcoal/80 text-lg leading-relaxed mb-10">{t.workshopDesc}</p>
              <a
                href="#contact"
                className="inline-block border border-charcoal text-charcoal px-8 py-3 text-sm font-medium tracking-widest uppercase hover:bg-charcoal hover:text-warm-white transition-all duration-300"
              >
                {t.workshopCta}
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

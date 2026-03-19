import { useState } from "react"

interface GalleryProps {
  language: "en" | "de" | "ru"
}

const translations = {
  en: { heading: "Works." },
  de: { heading: "Werke." },
  ru: { heading: "Работы." },
}

const galleryItems = [
  {
    id: 1,
    image: "https://cdn.poehali.dev/projects/df5a5e78-057d-443d-8a9e-788ce7236a64/bucket/6963c56f-1d25-4483-b96f-2e69bda7aa0d.jpg",
    title: "Развитие",
    material: "Гипс, дерево",
    size: "120×120",
    year: "2025",
  },
  {
    id: 2,
    image: "/images/dscf3805.jpeg",
    title: "Фактура земли",
    material: "Акрил, гипс",
    size: "50×70",
    year: "2023",
  },
  {
    id: 3,
    image: "https://cdn.poehali.dev/projects/df5a5e78-057d-443d-8a9e-788ce7236a64/bucket/0e3a539a-6cfc-4562-be3b-cba4a860f3d8.jpg",
    title: "Рельеф",
    material: "Смешанная техника",
    size: "80×100",
    year: "2024",
  },
  {
    id: 4,
    image: "/images/dscf3768.jpeg",
    title: "Природный слой",
    material: "Дерево, гипс",
    size: "40×60",
    year: "2022",
  },
  {
    id: 5,
    image: "/images/dscf3917.jpeg",
    title: "Объём",
    material: "Акрил, текстура",
    size: "70×90",
    year: "2024",
  },
]

export default function Gallery({ language }: GalleryProps) {
  const t = translations[language]
  const [selectedId, setSelectedId] = useState<number | null>(null)
  const selectedItem = galleryItems.find((item) => item.id === selectedId)
  const selectedIndex = galleryItems.findIndex((item) => item.id === selectedId)

  const goToNext = () => {
    if (selectedId !== null) {
      const nextIndex = (selectedIndex + 1) % galleryItems.length
      setSelectedId(galleryItems[nextIndex].id)
    }
  }

  const goToPrev = () => {
    if (selectedId !== null) {
      const prevIndex = (selectedIndex - 1 + galleryItems.length) % galleryItems.length
      setSelectedId(galleryItems[prevIndex].id)
    }
  }

  return (
    <section id="gallery" className="py-24 md:py-36 bg-warm-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h2 className="text-charcoal mb-4">{t.heading}</h2>
          <div className="line-accent"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedId(item.id)}
              className="group overflow-hidden bg-charcoal/5 cursor-pointer animate-fade-in-up"
            >
              <div className="relative h-80 overflow-hidden">
                <img
                  src={item.image || "/placeholder.svg"}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-5 border-t border-taupe/20">
                <p className="text-charcoal font-medium mb-1">{item.title}</p>
                <small className="text-taupe">{item.material} · {item.size} · {item.year}</small>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedItem && (
        <div
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center"
          onClick={() => setSelectedId(null)}
        >
          <div
            className="relative w-full h-full flex items-center justify-center p-4"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedItem.image || "/placeholder.svg"}
              alt={selectedItem.title}
              className="max-w-full max-h-[80vh] object-contain"
            />

            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-center">
              <p className="text-white font-medium mb-1">{selectedItem.title}</p>
              <small className="text-white/60">{selectedItem.material} · {selectedItem.size} · {selectedItem.year}</small>
            </div>

            <button
              onClick={() => setSelectedId(null)}
              className="absolute top-6 right-6 text-white hover:text-gold transition-colors"
              aria-label="Close"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <button
              onClick={goToPrev}
              className="absolute left-6 top-1/2 -translate-y-1/2 text-white hover:text-gold transition-colors"
              aria-label="Previous"
            >
              <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <button
              onClick={goToNext}
              className="absolute right-6 top-1/2 -translate-y-1/2 text-white hover:text-gold transition-colors"
              aria-label="Next"
            >
              <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            <div className="absolute top-6 left-6 text-white/50 text-sm">
              {selectedIndex + 1} / {galleryItems.length}
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
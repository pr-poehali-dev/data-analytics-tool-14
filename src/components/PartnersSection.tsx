import Icon from "@/components/ui/icon"

const platforms = [
  { name: "Яндекс.Карты" },
  { name: "2ГИС" },
  { name: "Google Maps" },
  { name: "Zoon" },
  { name: "Tripadvisor" },
  { name: "Otzovik" },
  { name: "Flamp" },
]

export function PartnersSection() {
  return (
    <section className="py-8 px-4 border-y border-[#1a1a1a]">
      <p className="text-center text-xs text-gray-600 uppercase tracking-widest mb-6">Работаем с платформами</p>
      <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10">
        {platforms.map((p) => (
          <div key={p.name} className="flex items-center gap-2 text-gray-500 hover:text-gray-300 transition-colors">
            <Icon name="MapPin" size={14} />
            <span className="text-sm font-medium">{p.name}</span>
          </div>
        ))}
      </div>
    </section>
  )
}

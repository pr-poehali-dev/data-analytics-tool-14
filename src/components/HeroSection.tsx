import { ArrowUpRight, TrendingUp } from "lucide-react"
import { Button } from "@/components/ui/button"
import Icon from "@/components/ui/icon"

export function HeroSection() {
  return (
    <section className="flex flex-col items-center justify-center px-4 pt-20 pb-12 text-center">
      <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-[#1a1a1a] py-2 text-sm px-3 border border-[#2a2a2a]">
        <span className="rounded-full bg-violet-500/20 px-2 py-0.5 text-xs font-medium text-violet-400">МОЛОДЫЕ</span>
        <span className="text-gray-300">Нам 15 лет — и мы уже делаем результат</span>
        <TrendingUp className="h-4 w-4 text-violet-400" />
      </div>

      <h1 className="mb-4 max-w-3xl text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white text-balance leading-tight">
        Ваша карточка на Яндекс.Картах{" "}
        <span className="text-violet-400">продаёт</span>
      </h1>

      <p className="mb-8 max-w-xl text-gray-400 text-lg">
        Повышаем кликабельность и конверсию карточки на Яндекс.Картах и других платформах. Гарантируем результат.
      </p>

      <div className="flex flex-col sm:flex-row items-center gap-4">
        <Button
          className="rounded-full bg-violet-600 px-8 py-6 text-base hover:bg-violet-700 text-white"
          onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
        >
          Получить консультацию <ArrowUpRight className="ml-2 h-5 w-5" />
        </Button>
        <Button
          variant="outline"
          className="rounded-full border-gray-700 bg-transparent text-white hover:bg-gray-800 px-8 py-6 text-base"
          onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
        >
          <Icon name="ListChecks" className="mr-2 h-5 w-5 text-violet-400" /> Смотреть услуги
        </Button>
      </div>

      <div className="mt-16 grid grid-cols-3 gap-8 max-w-lg">
        <div className="text-center">
          <p className="text-2xl font-bold text-white">+30%</p>
          <p className="text-xs text-gray-500 mt-1">к конверсии</p>
        </div>
        <div className="text-center border-x border-[#2a2a2a]">
          <p className="text-2xl font-bold text-white">100%</p>
          <p className="text-xs text-gray-500 mt-1">гарантия качества</p>
        </div>
        <div className="text-center">
          <p className="text-2xl font-bold text-white">24ч</p>
          <p className="text-xs text-gray-500 mt-1">время отклика</p>
        </div>
      </div>
    </section>
  )
}

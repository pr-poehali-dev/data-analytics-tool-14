import { ArrowUpRight, LayoutDashboard, Image, Megaphone, MessageSquare } from "lucide-react"
import { Button } from "@/components/ui/button"

const features = [
  { icon: LayoutDashboard, label: "Оформление карточки" },
  { icon: Image, label: "Дизайн витрины" },
  { icon: Megaphone, label: "Публикация акций и новостей" },
  { icon: MessageSquare, label: "Ответы на отзывы" },
]

export function PaymentRolesCard() {
  return (
    <div className="rounded-2xl bg-[#141414] border border-[#262626] p-6 flex flex-col">
      <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-violet-500/10 border border-violet-500/20">
        <LayoutDashboard className="h-5 w-5 text-violet-400" />
      </div>

      <h3 className="mb-2 text-lg font-semibold text-white">Ведение под ключ</h3>
      <p className="mb-4 text-sm text-gray-400">Берём вашу карточку и полностью занимаемся ей — от современного оформления до публикации новостей</p>

      <a href="#services" className="mb-6 inline-flex items-center text-sm text-violet-400 hover:text-violet-300 transition-colors">
        15 000 ₽/мес <ArrowUpRight className="ml-1 h-4 w-4" />
      </a>

      <div className="mt-auto space-y-2 rounded-xl bg-[#1a1a1a] border border-[#262626] p-4">
        {features.map((feat, i) => (
          <div key={i} className="flex items-center gap-3 rounded-lg bg-[#0f0f0f] px-3 py-2.5">
            <div className="flex h-7 w-7 items-center justify-center rounded-md bg-violet-500/10">
              <feat.icon className="h-4 w-4 text-violet-400" />
            </div>
            <span className="text-sm text-white">{feat.label}</span>
            <div className="ml-auto h-2 w-2 rounded-full bg-green-500" />
          </div>
        ))}

        <Button
          className="w-full mt-2 bg-violet-600 hover:bg-violet-700 text-white rounded-lg"
          onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
        >
          Заказать
        </Button>
      </div>
    </div>
  )
}

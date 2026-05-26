import { ArrowUpRight, PenLine, CheckCircle2 } from "lucide-react"
import { Switch } from "@/components/ui/switch"

export function SendFundsCard() {
  return (
    <div className="rounded-2xl bg-[#141414] border border-[#262626] p-6 flex flex-col">
      <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-violet-500/10 border border-violet-500/20">
        <PenLine className="h-5 w-5 text-violet-400" />
      </div>

      <h3 className="mb-2 text-lg font-semibold text-white">Написание отзывов</h3>
      <p className="mb-4 text-sm text-gray-400">Живые положительные отзывы с согласованием текста, фото и лайками — всё повышает доверие новых клиентов</p>

      <a href="#services" className="mb-6 inline-flex items-center text-sm text-violet-400 hover:text-violet-300 transition-colors">
        от 800 ₽/отзыв <ArrowUpRight className="ml-1 h-4 w-4" />
      </a>

      <div className="mt-auto space-y-4 rounded-xl bg-[#1a1a1a] border border-[#262626] p-4">
        <div className="rounded-lg bg-[#0f0f0f] border border-[#262626] px-3 py-3">
          <div className="flex items-center gap-2 mb-2">
            <div className="h-6 w-6 rounded-full bg-violet-500/20 flex items-center justify-center text-xs text-violet-300 font-bold">А</div>
            <span className="text-sm text-white font-medium">Алексей В.</span>
            <div className="ml-auto flex gap-0.5">
              {[1,2,3,4,5].map(i => <span key={i} className="text-amber-400 text-xs">★</span>)}
            </div>
          </div>
          <p className="text-xs text-gray-400">"Отличное заведение! Персонал очень внимательный, всё чисто и уютно. Обязательно вернусь снова!"</p>
          <div className="flex items-center gap-3 mt-2">
            <CheckCircle2 className="h-3.5 w-3.5 text-green-500" />
            <span className="text-xs text-gray-500">Текст согласован</span>
            <span className="ml-auto text-xs text-gray-600">👍 24</span>
          </div>
        </div>

        <div>
          <label className="mb-2 flex items-center gap-1 text-xs text-gray-400">
            Добавить фото к отзыву
          </label>
          <div className="flex items-center justify-between pt-1">
            <span className="text-sm text-gray-400">С фотографией</span>
            <Switch className="data-[state=checked]:bg-violet-600" defaultChecked />
          </div>
        </div>

        <div className="flex items-center justify-between rounded-lg bg-[#0f0f0f] px-3 py-2">
          <span className="text-sm text-gray-400">Лайки на отзывы</span>
          <span className="text-sm text-violet-400 font-medium">3 ₽/лайк</span>
        </div>
      </div>
    </div>
  )
}

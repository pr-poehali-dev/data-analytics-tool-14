import { ArrowUpRight, Star, ThumbsUp } from "lucide-react"

const reviews = [
  { author: "Иван К.", rating: 5, text: "Отличное место, рекомендую!", likes: 12 },
  { author: "Мария С.", rating: 5, text: "Лучший сервис в городе!", likes: 8 },
  { author: "Андрей П.", rating: 5, text: "Очень доволен качеством.", likes: 15 },
  { author: "Ольга М.", rating: 5, text: "Буду возвращаться снова!", likes: 6 },
]

export function LinkAccountsCard() {
  return (
    <div className="rounded-2xl bg-[#141414] border border-[#262626] p-6 flex flex-col">
      <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-violet-500/10 border border-violet-500/20">
        <Star className="h-5 w-5 text-violet-400" />
      </div>

      <h3 className="mb-2 text-lg font-semibold text-white">Ответы на отзывы</h3>
      <p className="mb-4 text-sm text-gray-400">Персональный ответ на каждый отзыв повышает лояльность клиентов и кликабельность карточки</p>

      <a href="#services" className="mb-6 inline-flex items-center text-sm text-violet-400 hover:text-violet-300 transition-colors">
        8 000 ₽/мес <ArrowUpRight className="ml-1 h-4 w-4" />
      </a>

      <div className="mt-auto space-y-2 rounded-xl bg-[#1a1a1a] border border-[#262626] p-3">
        {reviews.map((review, index) => (
          <div key={index} className="flex items-center justify-between rounded-lg bg-[#0f0f0f] px-3 py-2">
            <div className="flex items-center gap-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-violet-500/20 text-xs font-bold text-violet-300">
                {review.author.split(" ").map(n => n[0]).join("")}
              </div>
              <div>
                <p className="text-sm font-medium text-white">{review.author}</p>
                <div className="flex gap-0.5">
                  {Array.from({ length: review.rating }).map((_, i) => (
                    <Star key={i} className="h-3 w-3 fill-amber-400 text-amber-400" />
                  ))}
                </div>
              </div>
            </div>
            <div className="flex items-center gap-1 text-xs text-gray-500">
              <ThumbsUp className="h-3 w-3" />
              <span>{review.likes}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

import { Header } from "@/components/Header"
import { HeroSection } from "@/components/HeroSection"
import { PartnersSection } from "@/components/PartnersSection"
import { FeaturesSection } from "@/components/FeaturesSection"
import { Button } from "@/components/ui/button"
import Icon from "@/components/ui/icon"
import { useState } from "react"

const services = [
  {
    icon: "MessageSquare",
    title: "Управление отзывами",
    price: "8 000 ₽/мес",
    tag: "Подписка",
    tagColor: "bg-violet-500/20 text-violet-400",
    description: "Персональный ответ на каждый отзыв вашего заведения. Повышает лояльность клиентов и кликабельность карточки на платформах.",
    features: ["Ответ на каждый отзыв в течение 24ч", "Индивидуальный подход к тексту", "Работа на всех платформах", "Ежемесячный отчёт"],
  },
  {
    icon: "LayoutDashboard",
    title: "Ведение карточки под ключ",
    price: "15 000 ₽/мес",
    tag: "Популярное",
    tagColor: "bg-green-500/20 text-green-400",
    description: "Полное ведение вашей карточки с нуля — современное оформление, витрина, публикация новостей и акций, ответы на отзывы.",
    features: ["Современное оформление карточки", "Продающий дизайн витрины", "Публикация новостей и акций", "Ответы на все отзывы"],
  },
  {
    icon: "Image",
    title: "Оформление карточки",
    price: "8 000 ₽/мес",
    tag: "Подписка",
    tagColor: "bg-violet-500/20 text-violet-400",
    description: "Полное оформление витрины и карточки товара в современном продающем дизайне. Выглядеть лучше конкурентов — просто.",
    features: ["Дизайн обложки и фото", "Оформление витрины товаров", "Продающие описания", "Адаптация под платформу"],
  },
  {
    icon: "Star",
    title: "Написание отзывов",
    price: "от 800 ₽/отзыв",
    tag: "Доп. услуга",
    tagColor: "bg-amber-500/20 text-amber-400",
    description: "Живые положительные отзывы с полным согласованием текста. Можно добавить фото. Лайки на отзывы — 3 ₽/лайк.",
    features: ["Согласование текста перед публикацией", "Возможность добавить фото", "Лайки на отзывы от 3 ₽", "+30% к конверсии по нашей статистике"],
  },
]

const testimonials = [
  {
    name: "Кирилл Романов",
    business: "Кафе «Уют», Москва",
    text: "За первый месяц кликабельность нашей карточки выросла в 2 раза. Ребята реально знают своё дело, несмотря на возраст!",
    rating: 5,
  },
  {
    name: "Анна Белова",
    business: "Салон красоты «Glamour»",
    text: "Заказала ведение под ключ — результат превзошёл ожидания. Новые клиенты говорят, что нашли нас именно через Яндекс.Карты.",
    rating: 5,
  },
  {
    name: "Дмитрий Орлов",
    business: "Автосервис «Механик»",
    text: "Сначала скептически отнёсся, но цифры говорят сами за себя. Конверсия выросла на 35% за два месяца работы с ORSERM.",
    rating: 5,
  },
]

export default function Index() {
  const [formData, setFormData] = useState({ name: "", phone: "", business: "" })
  const [sent, setSent] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSent(true)
  }

  return (
    <main className="min-h-screen bg-[#0a0a0a]">
      <Header />

      {/* Contact form — top of page */}
      <section id="contact-top" className="px-4 py-6 bg-[#0d0d0d] border-b border-[#1a1a1a]">
        <div className="max-w-2xl mx-auto">
          <div className="rounded-2xl bg-[#141414] border border-violet-500/20 p-6 flex flex-col md:flex-row gap-6 items-center">
            <div className="flex-1">
              <p className="text-violet-400 text-sm font-medium mb-1">Бесплатная консультация</p>
              <h2 className="text-white text-xl font-bold">Хотите больше клиентов с Яндекс.Карт?</h2>
              <p className="text-gray-400 text-sm mt-1">Оставьте контакт — свяжемся в течение часа</p>
            </div>
            {!sent ? (
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 flex-1 w-full">
                <input
                  type="text"
                  placeholder="Ваше имя"
                  required
                  value={formData.name}
                  onChange={e => setFormData({ ...formData, name: e.target.value })}
                  className="flex-1 rounded-lg bg-[#0f0f0f] border border-[#2a2a2a] px-4 py-2.5 text-sm text-white placeholder-gray-600 outline-none focus:border-violet-500 transition-colors"
                />
                <input
                  type="tel"
                  placeholder="Телефон"
                  required
                  value={formData.phone}
                  onChange={e => setFormData({ ...formData, phone: e.target.value })}
                  className="flex-1 rounded-lg bg-[#0f0f0f] border border-[#2a2a2a] px-4 py-2.5 text-sm text-white placeholder-gray-600 outline-none focus:border-violet-500 transition-colors"
                />
                <Button type="submit" className="rounded-lg bg-violet-600 hover:bg-violet-700 text-white px-6 whitespace-nowrap">
                  Отправить
                </Button>
              </form>
            ) : (
              <div className="flex items-center gap-3 text-green-400 flex-1">
                <Icon name="CheckCircle2" size={24} />
                <div>
                  <p className="font-medium">Заявка принята!</p>
                  <p className="text-sm text-gray-400">Свяжемся в течение часа</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      <HeroSection />
      <PartnersSection />

      {/* About section */}
      <section id="about" className="px-4 py-20">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-violet-400 text-sm font-medium uppercase tracking-wider">Наша история</span>
              <h2 className="text-3xl md:text-4xl font-bold text-white mt-3 mb-6">
                Нам по 15 лет — и мы уже строим бизнес
              </h2>
              <p className="text-gray-400 mb-4 leading-relaxed">
                Мы — Артём и Дима, основатели агентства ORSERM. Нам по 15 лет, но мы уже поняли главное: большинство малых бизнесов теряют клиентов просто потому, что их карточка на Яндекс.Картах выглядит непривлекательно и не работает.
              </p>
              <p className="text-gray-400 mb-6 leading-relaxed">
                Мы изучили, как работают алгоритмы платформ, что заставляет людей кликать и возвращаться — и создали агентство, которое решает эту задачу под ключ. Молодость — это не недостаток. Это скорость, честность и желание доказать результат.
              </p>
              <div className="flex gap-6">
                <div>
                  <p className="text-2xl font-bold text-violet-400">2024</p>
                  <p className="text-xs text-gray-500">год основания</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-violet-400">15+</p>
                  <p className="text-xs text-gray-500">клиентов</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-violet-400">100%</p>
                  <p className="text-xs text-gray-500">честный подход</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="rounded-2xl bg-[#141414] border border-[#262626] p-8 text-center">
                <div className="flex justify-center gap-4 mb-6">
                  <div className="flex flex-col items-center gap-2">
                    <div className="h-16 w-16 rounded-2xl bg-violet-500/20 flex items-center justify-center text-2xl font-bold text-violet-300">А</div>
                    <p className="text-white text-sm font-medium">Артём</p>
                    <p className="text-gray-500 text-xs">Co-founder</p>
                  </div>
                  <div className="flex flex-col items-center gap-2">
                    <div className="h-16 w-16 rounded-2xl bg-violet-500/10 flex items-center justify-center text-2xl font-bold text-violet-300">Д</div>
                    <p className="text-white text-sm font-medium">Дима</p>
                    <p className="text-gray-500 text-xs">Co-founder</p>
                  </div>
                </div>
                <div className="rounded-xl bg-[#1a1a1a] p-4 text-left">
                  <p className="text-gray-400 text-sm italic">"Мы не просто школьники — мы предприниматели, которые делают реальный результат для бизнеса."</p>
                </div>
              </div>
              <div className="absolute -top-3 -right-3 rounded-full bg-violet-600 px-3 py-1.5 text-xs text-white font-medium">
                💡 Молодо — не значит плохо
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why us */}
      <section className="px-4 py-16 bg-[#0d0d0d] border-y border-[#1a1a1a]">
        <div className="max-w-5xl mx-auto text-center">
          <span className="text-violet-400 text-sm font-medium uppercase tracking-wider">Почему ORSERM</span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mt-3 mb-12">
            Гарантируем рост кликабельности
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: "TrendingUp", title: "Гарантия результата", desc: "Мы гарантируем повышение кликабельности вашей карточки на Яндекс.Картах и других платформах. Никакой воды — только цифры." },
              { icon: "User", title: "Личный подход", desc: "Каждый ответ на отзыв пишется индивидуально под ваш бизнес. Никаких шаблонов — клиенты это чувствуют." },
              { icon: "ShieldCheck", title: "Честно и прозрачно", desc: "Весь контент согласовывается с вами до публикации. Вы всегда знаете, что и когда публикуется от вашего имени." },
            ].map((item, i) => (
              <div key={i} className="rounded-2xl bg-[#141414] border border-[#262626] p-6 text-left hover:border-violet-500/30 transition-colors">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-violet-500/10 border border-violet-500/20">
                  <Icon name={item.icon} size={20} className="text-violet-400" />
                </div>
                <h3 className="text-white font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features / Services preview */}
      <section id="services" className="px-4 py-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-violet-400 text-sm font-medium uppercase tracking-wider">Наши услуги</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mt-3">
              Всё для роста вашей карточки
            </h2>
          </div>
          <FeaturesSection />

          {/* Full services grid */}
          <div className="grid md:grid-cols-2 gap-6 mt-8">
            {services.map((svc, i) => (
              <div key={i} className="rounded-2xl bg-[#141414] border border-[#262626] p-6 hover:border-violet-500/30 transition-all duration-300 group">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-violet-500/10 border border-violet-500/20">
                    <Icon name={svc.icon} size={20} className="text-violet-400" />
                  </div>
                  <span className={`text-xs font-medium px-2.5 py-1 rounded-full ${svc.tagColor}`}>{svc.tag}</span>
                </div>
                <h3 className="text-white text-lg font-semibold mb-2">{svc.title}</h3>
                <p className="text-gray-400 text-sm mb-4 leading-relaxed">{svc.description}</p>
                <ul className="space-y-2 mb-6">
                  {svc.features.map((f, fi) => (
                    <li key={fi} className="flex items-center gap-2 text-sm text-gray-300">
                      <Icon name="Check" size={14} className="text-violet-400 flex-shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
                <div className="flex items-center justify-between pt-4 border-t border-[#2a2a2a]">
                  <span className="text-white font-bold text-lg">{svc.price}</span>
                  <Button
                    className="rounded-lg bg-violet-600 hover:bg-violet-700 text-white text-sm px-4"
                    onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  >
                    Заказать
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section id="reviews" className="px-4 py-20 bg-[#0d0d0d] border-y border-[#1a1a1a]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-violet-400 text-sm font-medium uppercase tracking-wider">Отзывы клиентов</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mt-3">
              Нам доверяют бизнесы
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <div key={i} className="rounded-2xl bg-[#141414] border border-[#262626] p-6 hover:border-violet-500/20 transition-colors">
                <div className="flex gap-0.5 mb-4">
                  {Array.from({ length: t.rating }).map((_, ri) => (
                    <Icon key={ri} name="Star" size={14} className="text-amber-400 fill-amber-400" />
                  ))}
                </div>
                <p className="text-gray-300 text-sm leading-relaxed mb-6 italic">"{t.text}"</p>
                <div className="flex items-center gap-3">
                  <div className="h-9 w-9 rounded-full bg-violet-500/20 flex items-center justify-center text-sm font-bold text-violet-300">
                    {t.name[0]}
                  </div>
                  <div>
                    <p className="text-white text-sm font-medium">{t.name}</p>
                    <p className="text-gray-500 text-xs">{t.business}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact form */}
      <section id="contact" className="px-4 py-20">
        <div className="max-w-2xl mx-auto text-center">
          <span className="text-violet-400 text-sm font-medium uppercase tracking-wider">Связаться с нами</span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mt-3 mb-4">
            Готовы начать?
          </h2>
          <p className="text-gray-400 mb-10">Оставьте заявку — и мы свяжемся с вами в течение часа, разберём вашу карточку и предложим план роста</p>

          {!sent ? (
            <form onSubmit={handleSubmit} className="space-y-4 text-left">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs text-gray-400 mb-1.5 block">Ваше имя</label>
                  <input
                    type="text"
                    placeholder="Алексей"
                    required
                    value={formData.name}
                    onChange={e => setFormData({ ...formData, name: e.target.value })}
                    className="w-full rounded-lg bg-[#141414] border border-[#2a2a2a] px-4 py-3 text-sm text-white placeholder-gray-600 outline-none focus:border-violet-500 transition-colors"
                  />
                </div>
                <div>
                  <label className="text-xs text-gray-400 mb-1.5 block">Телефон</label>
                  <input
                    type="tel"
                    placeholder="+7 (999) 000-00-00"
                    required
                    value={formData.phone}
                    onChange={e => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full rounded-lg bg-[#141414] border border-[#2a2a2a] px-4 py-3 text-sm text-white placeholder-gray-600 outline-none focus:border-violet-500 transition-colors"
                  />
                </div>
              </div>
              <div>
                <label className="text-xs text-gray-400 mb-1.5 block">Название бизнеса / платформа</label>
                <input
                  type="text"
                  placeholder="Кафе «Уют», Яндекс.Карты"
                  value={formData.business}
                  onChange={e => setFormData({ ...formData, business: e.target.value })}
                  className="w-full rounded-lg bg-[#141414] border border-[#2a2a2a] px-4 py-3 text-sm text-white placeholder-gray-600 outline-none focus:border-violet-500 transition-colors"
                />
              </div>
              <Button type="submit" className="w-full rounded-lg bg-violet-600 hover:bg-violet-700 text-white py-6 text-base font-medium">
                Отправить заявку <Icon name="ArrowUpRight" size={18} className="ml-2" />
              </Button>
              <p className="text-center text-xs text-gray-600">Нажимая кнопку, вы соглашаетесь на обработку персональных данных</p>
            </form>
          ) : (
            <div className="rounded-2xl bg-[#141414] border border-green-500/20 p-10 text-center">
              <Icon name="CheckCircle2" size={48} className="text-green-400 mx-auto mb-4" />
              <h3 className="text-white text-xl font-semibold mb-2">Заявка принята!</h3>
              <p className="text-gray-400">Свяжемся с вами в течение часа</p>
            </div>
          )}
        </div>
      </section>

      {/* Contacts */}
      <section className="px-4 py-12 bg-[#0d0d0d] border-t border-[#1a1a1a]">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div className="flex flex-col items-center gap-2">
              <div className="h-10 w-10 rounded-xl bg-violet-500/10 flex items-center justify-center">
                <Icon name="MessageCircle" size={18} className="text-violet-400" />
              </div>
              <p className="text-gray-400 text-sm">Telegram</p>
              <p className="text-white text-sm font-medium">@orserm_agency</p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="h-10 w-10 rounded-xl bg-violet-500/10 flex items-center justify-center">
                <Icon name="Mail" size={18} className="text-violet-400" />
              </div>
              <p className="text-gray-400 text-sm">Email</p>
              <p className="text-white text-sm font-medium">hello@orserm.ru</p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="h-10 w-10 rounded-xl bg-violet-500/10 flex items-center justify-center">
                <Icon name="Clock" size={18} className="text-violet-400" />
              </div>
              <p className="text-gray-400 text-sm">Время ответа</p>
              <p className="text-white text-sm font-medium">до 1 часа</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 text-center border-t border-[#1a1a1a]">
        <div className="flex items-center justify-center gap-2 mb-3">
          <span className="text-lg font-bold text-white tracking-widest">ORSERM</span>
        </div>
        <p className="text-sm text-gray-500">
          Маркетинговое агентство Артёма и Димы —{" "}
          <span className="text-violet-400">ваши карточки продают лучше</span>
        </p>
        <p className="text-xs text-gray-700 mt-3">© 2024 ORSERM. Все права защищены.</p>
      </footer>
    </main>
  )
}

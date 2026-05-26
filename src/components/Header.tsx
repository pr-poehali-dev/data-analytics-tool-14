import { Button } from "@/components/ui/button"

export function Header() {
  return (
    <header className="flex items-center justify-between px-8 py-4 sticky top-0 z-50 bg-[#0a0a0a]/90 backdrop-blur border-b border-[#1a1a1a]">
      <div className="flex items-center gap-2">
        <ORSERMLogo />
        <span className="text-lg font-bold text-white tracking-widest">
          ORSERM
        </span>
      </div>

      <nav className="hidden md:flex items-center gap-8">
        <a href="#about" className="text-sm text-gray-300 hover:text-white transition-colors">
          О нас
        </a>
        <a href="#services" className="text-sm text-gray-300 hover:text-white transition-colors">
          Услуги
        </a>
        <a href="#reviews" className="text-sm text-gray-300 hover:text-white transition-colors">
          Отзывы
        </a>
        <a href="#contact" className="text-sm text-gray-300 hover:text-white transition-colors">
          Контакты
        </a>
      </nav>

      <Button
        className="rounded-full bg-violet-600 hover:bg-violet-700 text-white px-5"
        onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
      >
        Оставить заявку
      </Button>
    </header>
  )
}

function ORSERMLogo() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="2" y="2" width="10" height="10" rx="3" fill="#8B5CF6" />
      <rect x="16" y="2" width="10" height="10" rx="3" fill="#8B5CF6" opacity="0.6" />
      <rect x="2" y="16" width="10" height="10" rx="3" fill="#8B5CF6" opacity="0.6" />
      <rect x="16" y="16" width="10" height="10" rx="3" fill="#8B5CF6" opacity="0.3" />
    </svg>
  )
}

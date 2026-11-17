import { useState } from 'react'
import { Menu, X, ArrowUpRight } from 'lucide-react'

const navigation = [
  { label: 'Начало', href: '#home' },
  { label: 'За нас', href: '#about' },
  { label: 'Услуги', href: '#services' },
  { label: 'Нашата работа', href: '#projects' },
  { label: 'Контакти', href: '#contact' },
]

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const closeMenu = () => setIsMenuOpen(false)

  return (
    <header className="absolute top-0 left-0 z-50 w-full border-b border-white/10">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-10">

        {/* Logo */}
        <a
          href="#home"
          onClick={closeMenu}
          className="group flex items-center gap-3"
        >
          <div className="flex h-11 w-11 items-center justify-center bg-[#F5B82E] text-xl font-black text-[#202326]">
            ММ
          </div>

          <div className="flex flex-col">
            <span className="text-lg font-extrabold tracking-wider text-white">
              ММ ГРУП
            </span>
            <span className="text-[9px] font-semibold uppercase tracking-[0.25em] text-white/50">
              Construction & Services
            </span>
          </div>
        </a>

        {/* Desktop navigation */}
        <div className="hidden items-center gap-8 lg:flex">
          {navigation.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-white/70 transition-colors hover:text-[#F5B82E]"
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Contact button */}
        <a
          href="#contact"
          className="hidden items-center gap-2 bg-[#F5B82E] px-5 py-3 text-sm font-bold text-[#202326] transition-colors hover:bg-white lg:flex"
        >
          Свържете се с нас
          <ArrowUpRight size={17} />
        </a>

        {/* Mobile menu button */}
        <button
          type="button"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? 'Затвори менюто' : 'Отвори менюто'}
          aria-expanded={isMenuOpen}
          className="flex h-11 w-11 items-center justify-center border border-white/15 text-white lg:hidden"
        >
          {isMenuOpen ? <X size={23} /> : <Menu size={23} />}
        </button>
      </nav>

      {/* Mobile navigation */}
      <div
        className={`overflow-hidden border-t border-white/10 bg-[#202326] transition-all duration-300 lg:hidden ${
          isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 border-t-0 opacity-0'
        }`}
      >
        <div className="flex flex-col px-6 py-4">
          {navigation.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={closeMenu}
              className="border-b border-white/10 py-4 text-sm font-medium text-white/80 transition-colors hover:text-[#F5B82E]"
            >
              {item.label}
            </a>
          ))}

          <a
            href="#contact"
            onClick={closeMenu}
            className="mt-4 flex items-center justify-center gap-2 bg-[#F5B82E] px-5 py-3 font-bold text-[#202326]"
          >
            Свържете се с нас
            <ArrowUpRight size={17} />
          </a>
        </div>
      </div>
    </header>
  )
}

export default Navbar

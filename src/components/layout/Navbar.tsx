import { useEffect, useState } from 'react'
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

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        closeMenu()
      }
    }

    window.addEventListener('keydown', handleKeyDown)

    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [])

  return (
    <header className="absolute top-0 left-0 z-50 w-full border-b border-white/10">
      <nav
        aria-label="Основна навигация"
        className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-10"
      >
        {/* Logo */}
        <a
          href="#home"
          onClick={closeMenu}
          aria-label="ММ Груп – Начало"
          className="group flex items-center gap-3 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#F5B82E]"
        >
          <img
            src="/logo/mm-group.svg"
            alt="ММ Груп – Construction & Services"
            className="h-18 w-auto"
            width="340"
            height="80"
          />
        </a>

        {/* Desktop navigation */}
        <div className="hidden items-center gap-8 lg:flex">
          {navigation.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-white/70 transition-colors hover:text-[#F5B82E] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#F5B82E]"
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Contact button */}
        <a
          href="#contact"
          className="hidden items-center gap-2 bg-[#F5B82E] px-5 py-3 text-sm font-bold text-[#202326] transition-colors hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white lg:flex"
        >
          Свържете се с нас
          <ArrowUpRight size={17} aria-hidden="true" />
        </a>

        {/* Mobile menu button */}
        <button
          type="button"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? 'Затвори менюто' : 'Отвори менюто'}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-navigation"
          className="flex h-11 w-11 items-center justify-center border border-white/15 text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#F5B82E] lg:hidden"
        >
          {isMenuOpen ? (
            <X size={23} aria-hidden="true" />
          ) : (
            <Menu size={23} aria-hidden="true" />
          )}
        </button>
      </nav>

      {/* Mobile navigation */}
      <div
        id="mobile-navigation"
        aria-hidden={!isMenuOpen}
        className={`overflow-hidden border-t border-white/10 bg-[#202326] transition-all duration-300 lg:hidden ${
          isMenuOpen
            ? 'max-h-96 opacity-100'
            : 'pointer-events-none max-h-0 border-t-0 opacity-0'
        }`}
      >
        <div className="flex flex-col px-6 py-4">
          {navigation.map((item) => (
            <a
              key={item.href}
              href={item.href}
              tabIndex={isMenuOpen ? 0 : -1}
              onClick={closeMenu}
              className="border-b border-white/10 py-4 text-sm font-medium text-white/80 transition-colors hover:text-[#F5B82E] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F5B82E]"
            >
              {item.label}
            </a>
          ))}

          <a
            href="#contact"
            tabIndex={isMenuOpen ? 0 : -1}
            onClick={closeMenu}
            className="mt-4 flex items-center justify-center gap-2 bg-[#F5B82E] px-5 py-3 font-bold text-[#202326] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
          >
            Свържете се с нас
            <ArrowUpRight size={17} aria-hidden="true" />
          </a>
        </div>
      </div>
    </header>
  )
}

export default Navbar
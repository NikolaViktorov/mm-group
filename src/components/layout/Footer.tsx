import { ArrowUp } from 'lucide-react'

const footerLinks = [
  { label: 'Начало', href: '#home' },
  { label: 'За нас', href: '#about' },
  { label: 'Услуги', href: '#services' },
  { label: 'Проекти', href: '#projects' },
  { label: 'Контакти', href: '#contact' },
]

function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#17191c] px-6 py-10 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col justify-between gap-10 md:flex-row md:items-center">

          {/* Logo */}
          <a
            href="#home"
            aria-label="ММ Груп – Начало"
            className="flex items-center gap-3 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#F5B82E]"
          >
            <img
              src="/logo/mm-group.svg"
              alt="ММ Груп – Construction & Services"
              className="h-18 w-auto"
              width="340"
              height="80"
            />
          </a>

          {/* Navigation */}
          <nav
            aria-label="Навигация във футъра"
            className="flex flex-wrap gap-x-7 gap-y-4"
          >
            {footerLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-white/75 transition-colors hover:text-[#F5B82E] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#F5B82E] motion-reduce:transition-none"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Back to top */}
          <a
            href="#home"
            aria-label="Върни се в началото"
            className="flex h-11 w-11 items-center justify-center border border-white/15 text-white transition-colors hover:border-[#F5B82E] hover:bg-[#F5B82E] hover:text-[#202326] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#F5B82E] motion-reduce:transition-none"
          >
            <ArrowUp size={19} aria-hidden="true" />
          </a>
        </div>

        <div className="mt-10 flex flex-col justify-between gap-4 border-t border-white/10 pt-7 sm:flex-row sm:items-center">
          <p className="text-xs text-white/65">
            © {new Date().getFullYear()} ММ Груп. Всички права запазени.
          </p>

          <p className="text-xs text-white/65">
            Строителство · Ремонти · Услуги
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
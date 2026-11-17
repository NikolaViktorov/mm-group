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
          <a href="#home" className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center bg-[#F5B82E] text-xl font-black text-[#202326]">
              ММ
            </div>

            <div>
              <p className="text-lg font-extrabold tracking-wider text-white">
                ММ ГРУП
              </p>
              <p className="text-[9px] font-semibold uppercase tracking-[0.25em] text-white/40">
                Construction & Services
              </p>
            </div>
          </a>

          {/* Navigation */}
          <nav className="flex flex-wrap gap-x-7 gap-y-4">
            {footerLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-white/50 transition-colors hover:text-[#F5B82E]"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Back to top */}
          <a
            href="#home"
            aria-label="Върни се в началото"
            className="flex h-11 w-11 items-center justify-center border border-white/15 text-white transition-colors hover:border-[#F5B82E] hover:bg-[#F5B82E] hover:text-[#202326]"
          >
            <ArrowUp size={19} />
          </a>
        </div>

        <div className="mt-10 flex flex-col justify-between gap-4 border-t border-white/10 pt-7 sm:flex-row sm:items-center">
          <p className="text-xs text-white/35">
            © {new Date().getFullYear()} ММ Груп. Всички права запазени.
          </p>

          <p className="text-xs text-white/35">
            Строителство · Ремонти · Услуги
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

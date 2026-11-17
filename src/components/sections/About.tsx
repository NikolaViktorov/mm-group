import { ArrowUpRight, Check } from 'lucide-react'

function About() {
  const advantages = [
    'Разнообразие от строителни и ремонтни услуги',
    'Комплексни решения на едно място',
    'Работа в София и областта',
    'Индивидуален подход към всеки проект',
  ]

  return (
    <section id="about" className="bg-[#F5F5F2] px-6 py-24 lg:px-10 lg:py-32">
      <div className="mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-2 lg:gap-20">

        {/* Image */}
        <div className="relative">
          <div className="relative h-[420px] overflow-hidden sm:h-[520px]">
            <img
              src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=85"
              alt="Демонстративна снимка на строителни дейности"
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </div>

          <div
            aria-hidden="true"
            className="absolute -bottom-7 -right-4 hidden h-40 w-40 border-b-8 border-r-8 border-[#F5B82E] sm:block"
          />

          <div
            aria-hidden="true"
            className="absolute bottom-6 left-6 bg-[#202326] px-7 py-6 text-white sm:-right-8 sm:bottom-10 sm:left-auto"
          >
            <p className="text-3xl font-black text-[#F5B82E]">ММ</p>
            <p className="mt-1 text-xs font-semibold uppercase tracking-widest text-white/70">
              Груп
            </p>
          </div>
        </div>

        {/* Content */}
        <div>
          <div className="mb-6 flex items-center gap-3">
            <span
              aria-hidden="true"
              className="h-[2px] w-10 bg-[#D99E19]"
            />
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#8A6200]">
              За нас
            </span>
          </div>

          <h2 className="text-4xl leading-tight font-black tracking-tight text-[#202326] sm:text-5xl">
            Вашият партньор
            <br />
            <span className="text-[#8A6200]">в строителството</span>
          </h2>

          <p className="mt-7 text-base leading-8 text-[#202326]/80">
            ММ Груп предлага разнообразие от строителни, ремонтни,
            озеленителни и транспортни услуги в София и областта.
            Нашата цел е да осигурим практични решения за различни
            проекти, съобразени с нуждите на всеки клиент.
          </p>

          <p className="mt-4 text-base leading-8 text-[#202326]/80">
            От вътрешни ремонти и грубо строителство до услуги с
            механизация, транспорт и озеленяване – съчетаваме
            различни дейности на едно място.
          </p>

          <ul className="mt-8 grid gap-4 sm:grid-cols-2">
            {advantages.map((advantage) => (
              <li key={advantage} className="flex items-start gap-3">
                <span
                  aria-hidden="true"
                  className="flex h-6 w-6 shrink-0 items-center justify-center bg-[#F5B82E] text-[#202326]"
                >
                  <Check size={15} strokeWidth={3} />
                </span>

                <span className="text-sm leading-6 font-semibold text-[#202326]/80">
                  {advantage}
                </span>
              </li>
            ))}
          </ul>

          <a
            href="#services"
            className="mt-10 inline-flex items-center gap-3 bg-[#202326] px-7 py-4 text-sm font-bold text-white transition-colors hover:bg-[#8A6200] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#202326] motion-reduce:transition-none"
          >
            Разгледайте услугите
            <ArrowUpRight size={18} aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  )
}

export default About
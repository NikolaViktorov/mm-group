import { ArrowDown, ArrowRight, CheckCircle2 } from 'lucide-react'

function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[760px] items-center overflow-hidden bg-[#202326] pt-28 sm:min-h-[820px]"
    >
      {/* Background image */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=2400&q=85')",
        }}
      />

      {/* Dark overlay */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-r from-[#17191c] via-[#17191c]/90 to-[#17191c]/40"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-t from-[#202326] via-transparent to-black/20"
      />

      {/* Decorative accent */}
      <div
        aria-hidden="true"
        className="absolute right-0 top-0 hidden h-full w-[8px] bg-[#F5B82E] lg:block"
      />

      {/* Content */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 py-24 lg:px-10">
        <div className="max-w-3xl">
          {/* Eyebrow */}
          <div className="mb-8 flex items-center gap-3">
            <span
              aria-hidden="true"
              className="h-[2px] w-10 bg-[#F5B82E]"
            />
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#F5B82E]">
              ММ Груп · София и областта
            </span>
          </div>

          {/* Heading */}
          <h1 className="text-4xl leading-[1.08] font-black tracking-tight text-white sm:text-6xl lg:text-7xl xl:text-8xl">
            Строим.
            <br />
            Ремонтираме.
            <br />
            <span className="text-[#F5B82E]">Създаваме.</span>
          </h1>

          {/* Description */}
          <p className="mt-8 max-w-xl text-base leading-8 text-white/65 sm:text-lg">
            Комплексни строителни, ремонтни, озеленителни и транспортни
            услуги. От първоначалната подготовка до завършването на
            проекта – ММ Груп е до вас на всяка стъпка.
          </p>

          {/* Buttons */}
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a
              href="#services"
              className="group flex items-center justify-center gap-3 bg-[#F5B82E] px-7 py-4 text-sm font-bold text-[#202326] transition-all hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white motion-reduce:transition-none"
            >
              Разгледайте услугите
              <ArrowRight
                size={18}
                aria-hidden="true"
                className="transition-transform group-hover:translate-x-1 motion-reduce:transition-none"
              />
            </a>

            <a
              href="#contact"
              className="flex items-center justify-center gap-3 border border-white/30 px-7 py-4 text-sm font-bold text-white transition-all hover:border-[#F5B82E] hover:text-[#F5B82E] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#F5B82E] motion-reduce:transition-none"
            >
              Свържете се с нас
            </a>
          </div>

          {/* Trust points */}
          <div className="mt-14 flex flex-wrap gap-x-8 gap-y-4 border-t border-white/15 pt-7">
            <div className="flex items-center gap-2 text-sm text-white/65">
              <CheckCircle2
                size={17}
                aria-hidden="true"
                className="text-[#F5B82E]"
              />
              Разнообразие от услуги
            </div>

            <div className="flex items-center gap-2 text-sm text-white/65">
              <CheckCircle2
                size={17}
                aria-hidden="true"
                className="text-[#F5B82E]"
              />
              София и областта
            </div>

            <div className="flex items-center gap-2 text-sm text-white/65">
              <CheckCircle2
                size={17}
                aria-hidden="true"
                className="text-[#F5B82E]"
              />
              Комплексни решения
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#about"
        aria-label="Превърти надолу към секцията За нас"
        className="absolute bottom-8 right-10 hidden items-center gap-3 text-xs font-semibold uppercase tracking-widest text-white/70 transition-colors hover:text-[#F5B82E] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#F5B82E] lg:flex motion-reduce:transition-none"
      >
        Разгледайте
        <span
          aria-hidden="true"
          className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20"
        >
          <ArrowDown size={16} />
        </span>
      </a>
    </section>
  )
}

export default Hero
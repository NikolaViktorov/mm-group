import {
  Layers3,
  BriefcaseBusiness,
  MapPin,
  Handshake,
  ArrowUpRight,
} from 'lucide-react'

const advantages = [
  {
    number: '01',
    icon: Layers3,
    title: 'Разнообразие от услуги',
    description:
      'Строителство, ремонти, озеленяване и транспорт – различни дейности, събрани на едно място.',
  },
  {
    number: '02',
    icon: BriefcaseBusiness,
    title: 'Комплексни решения',
    description:
      'Възможност за съчетаване на различни строителни и специализирани дейности според проекта.',
  },
  {
    number: '03',
    icon: MapPin,
    title: 'Локално присъствие',
    description:
      'Обслужване на клиенти в София и областта.',
  },
  {
    number: '04',
    icon: Handshake,
    title: 'Индивидуален подход',
    description:
      'Съобразяване на предлаганите решения с конкретните нужди и изисквания на клиента.',
  },
]

function WhyUs() {
  return (
    <section className="bg-[#202326] px-6 py-24 lg:px-10 lg:py-32">
      <div className="mx-auto max-w-7xl">

        <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">

          {/* Introduction */}
          <div>
            <div className="mb-6 flex items-center gap-3">
              <span className="h-[2px] w-10 bg-[#F5B82E]" />
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#F5B82E]">
                Защо ММ Груп
              </span>
            </div>

            <h2 className="text-4xl leading-tight font-black tracking-tight text-white sm:text-5xl">
              Един партньор.
              <br />
              <span className="text-[#F5B82E]">Много решения.</span>
            </h2>

            <p className="mt-7 max-w-lg text-base leading-8 text-white/60">
              Всеки проект има своите особености. ММ Груп предлага
              разнообразие от услуги, които позволяват да намерите
              подходящо решение за различни строителни и ремонтни
              дейности.
            </p>

            <a
              href="#contact"
              className="mt-9 inline-flex items-center gap-3 border-b-2 border-[#F5B82E] pb-2 text-sm font-bold text-white transition-colors hover:text-[#F5B82E]"
            >
              Обсъдете вашия проект
              <ArrowUpRight size={18} />
            </a>
          </div>

          {/* Advantages */}
          <div className="grid gap-0 sm:grid-cols-2">
            {advantages.map((advantage) => {
              const Icon = advantage.icon

              return (
                <article
                  key={advantage.number}
                  className="border-b border-white/10 p-7 transition-colors hover:bg-white/[0.03] sm:even:border-l sm:even:border-white/10"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex h-12 w-12 items-center justify-center bg-[#F5B82E] text-[#202326]">
                      <Icon size={23} />
                    </div>

                    <span className="text-sm font-bold text-white/25">
                      {advantage.number}
                    </span>
                  </div>

                  <h3 className="mt-7 text-xl font-extrabold text-white">
                    {advantage.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-white/50">
                    {advantage.description}
                  </p>
                </article>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhyUs

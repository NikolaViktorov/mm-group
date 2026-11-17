import { ArrowUpRight } from 'lucide-react'
import { services } from '../../data/services'
import ServiceCard from '../ui/ServiceCard'

function Services() {
  return (
    <section
      id="services"
      className="bg-white px-6 py-24 lg:px-10 lg:py-32"
    >
      <div className="mx-auto max-w-7xl">

        {/* Section heading */}
        <div className="mb-16 flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <div className="max-w-2xl">
            <div className="mb-6 flex items-center gap-3">
              <span className="h-[2px] w-10 bg-[#D99E19]" />
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#B78312]">
                Какво предлагаме
              </span>
            </div>

            <h2 className="text-4xl leading-tight font-black tracking-tight text-[#202326] sm:text-5xl">
              Нашите
              <span className="text-[#B78312]"> услуги</span>
            </h2>

            <p className="mt-6 max-w-xl text-base leading-8 text-[#202326]/60">
              Широка гама от строителни, ремонтни и специализирани
              услуги, събрани на едно място. Разгледайте с какво
              можем да ви бъдем полезни.
            </p>
          </div>

          <a
            href="#contact"
            className="group inline-flex shrink-0 items-center gap-3 self-start border-b-2 border-[#F5B82E] pb-2 text-sm font-bold text-[#202326] transition-colors hover:text-[#B78312] lg:self-auto"
          >
            Свържете се с нас
            <ArrowUpRight
              size={19}
              className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
            />
          </a>
        </div>

        {/* Services grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>

        {/* Bottom banner */}
        <div className="mt-16 flex flex-col items-center justify-between gap-6 bg-[#202326] p-8 sm:flex-row sm:p-10">
          <div>
            <h3 className="text-2xl font-black text-white">
              Имате проект пред себе си?
            </h3>
            <p className="mt-2 text-sm leading-6 text-white/55">
              Свържете се с нас и обсъдете вашите нужди.
            </p>
          </div>

          <a
            href="#contact"
            className="inline-flex shrink-0 items-center gap-3 bg-[#F5B82E] px-7 py-4 text-sm font-bold text-[#202326] transition-colors hover:bg-white"
          >
            Изпратете запитване
            <ArrowUpRight size={18} />
          </a>
        </div>
      </div>
    </section>
  )
}

export default Services

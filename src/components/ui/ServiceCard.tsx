import { ArrowUpRight } from 'lucide-react'
import type { Service } from '../../types'

interface ServiceCardProps {
  service: Service
}

function ServiceCard({ service }: ServiceCardProps) {
  const Icon = service.icon

  return (
    <article className="group flex flex-col overflow-hidden border border-[#202326]/10 bg-white transition-all duration-300 hover:-translate-y-1 hover:border-[#F5B82E] hover:shadow-xl motion-reduce:transform-none motion-reduce:transition-none">
      {/* Image */}
      <div className="relative h-56 overflow-hidden">
        <img
          src={service.image}
          alt={`Илюстративна снимка за ${service.title}`}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105 motion-reduce:transform-none motion-reduce:transition-none"
        />

        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-t from-[#17191c]/70 to-transparent"
        />

        <div
          aria-hidden="true"
          className="absolute bottom-4 left-5 flex h-12 w-12 items-center justify-center bg-[#F5B82E] text-[#202326]"
        >
          <Icon size={23} strokeWidth={1.8} />
        </div>

        <span
          aria-hidden="true"
          className="absolute right-5 top-5 text-sm font-bold text-white/90"
        >
          {String(service.id).padStart(2, '0')}
        </span>
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-xl font-extrabold text-[#202326] transition-colors group-hover:text-[#B78312]">
          {service.title}
        </h3>

        <p className="mt-3 text-sm leading-7 text-[#202326]/80">
          {service.description}
        </p>

        <ul className="mt-5 flex flex-col gap-2">
          {service.items.map((item) => (
            <li
              key={item}
              className="flex items-start gap-2 text-sm text-[#202326]/80"
            >
              <span
                aria-hidden="true"
                className="mt-1.5 h-1.5 w-1.5 shrink-0 bg-[#F5B82E]"
              />
              {item}
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          aria-label={`Запитване за услугата: ${service.title}`}
          className="mt-7 flex items-center justify-between border-t border-[#202326]/10 pt-5 text-sm font-bold text-[#202326] transition-colors group-hover:text-[#B78312] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#202326] motion-reduce:transition-none"
        >
          Запитване за услугата
          <ArrowUpRight size={19} aria-hidden="true" />
        </a>
      </div>
    </article>
  )
}

export default ServiceCard
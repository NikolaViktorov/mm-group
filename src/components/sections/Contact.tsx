import {
  ArrowUpRight,
  Mail,
  Phone,
  MapPin,
  Clock,
} from 'lucide-react'

const contactDetails = [
  {
    icon: Phone,
    label: 'Телефон',
    value: '+359 88 000 0000',
    href: 'tel:+359880000000',
  },
  {
    icon: Mail,
    label: 'Имейл',
    value: 'info@example.com',
    href: 'mailto:info@example.com',
  },
]

function Contact() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="relative overflow-hidden bg-[#202326] px-6 py-24 lg:px-10 lg:py-32"
    >
      {/* Decorative background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full border border-white/[0.04]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-20 -top-20 h-[350px] w-[350px] rounded-full border border-white/[0.04]"
      />

      <div className="relative mx-auto max-w-7xl">
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-24">

          {/* Introduction */}
          <div>
            <div className="mb-6 flex items-center gap-3">
              <span
                aria-hidden="true"
                className="h-[2px] w-10 bg-[#F5B82E]"
              />
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#F5B82E]">
                Контакти
              </span>
            </div>

            <h2
              id="contact-heading"
              className="text-4xl leading-tight font-black tracking-tight text-white sm:text-5xl lg:text-6xl"
            >
              Нека обсъдим
              <br />
              <span className="text-[#F5B82E]">вашия проект.</span>
            </h2>

            <p className="mt-7 max-w-lg text-base leading-8 text-white/80">
              Имате нужда от строителни, ремонтни или транспортни
              услуги? Свържете се с ММ Груп, за да обсъдим вашите
              изисквания и възможностите за реализация.
            </p>

            <div className="mt-10 flex items-center gap-3 text-sm text-white/80">
              <MapPin
                size={19}
                aria-hidden="true"
                className="shrink-0 text-[#F5B82E]"
              />
              София и областта
            </div>

            <div className="mt-4 flex items-center gap-3 text-sm text-white/80">
              <Clock
                size={19}
                aria-hidden="true"
                className="shrink-0 text-[#F5B82E]"
              />
              Свържете се с нас за допълнителна информация
            </div>
          </div>

          {/* Contact details */}
          <div className="flex flex-col justify-center gap-5">
            {contactDetails.map((detail) => {
              const Icon = detail.icon

              return (
                <a
                  key={detail.label}
                  href={detail.href}
                  className="group flex items-center justify-between border border-white/10 bg-white/[0.03] p-6 transition-all hover:border-[#F5B82E]/50 hover:bg-white/[0.06] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#F5B82E] sm:p-8 motion-reduce:transition-none"
                >
                  <div className="flex items-center gap-5">
                    <div
                      aria-hidden="true"
                      className="flex h-12 w-12 shrink-0 items-center justify-center bg-[#F5B82E] text-[#202326]"
                    >
                      <Icon size={22} />
                    </div>

                    <div>
                      <p className="text-xs font-semibold uppercase tracking-widest text-white/65">
                        {detail.label}
                      </p>

                      <p className="mt-2 text-lg font-bold text-white sm:text-xl">
                        {detail.value}
                      </p>
                    </div>
                  </div>

                  <ArrowUpRight
                    size={22}
                    aria-hidden="true"
                    className="shrink-0 text-white/60 transition-all group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[#F5B82E] motion-reduce:transition-none"
                  />
                </a>
              )
            })}

            <div className="mt-3 border-l-2 border-[#F5B82E] bg-white/[0.03] p-6">
              <p className="text-sm leading-7 text-white/75">
                Ще се радваме да научим повече за вашия проект и
                да обсъдим подходящите решения.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
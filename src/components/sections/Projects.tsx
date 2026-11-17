import { ArrowUpRight } from 'lucide-react'

const projects = [
  {
    id: 1,
    title: 'Интериорни ремонти',
    category: 'Вътрешни ремонти',
    image:
      'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=85',
    size: 'large',
  },
  {
    id: 2,
    title: 'Строителни дейности',
    category: 'Грубо строителство',
    image:
      'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1000&q=85',
    size: 'small',
  },
  {
    id: 3,
    title: 'Озеленяване и външни пространства',
    category: 'Озеленяване',
    image:
      'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1000&q=85',
    size: 'small',
  },
]

function Projects() {
  return (
    <section
      id="projects"
      className="bg-[#F5F5F2] px-6 py-24 lg:px-10 lg:py-32"
    >
      <div className="mx-auto max-w-7xl">

        {/* Heading */}
        <div className="mb-14 flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <div className="mb-6 flex items-center gap-3">
              <span className="h-[2px] w-10 bg-[#D99E19]" />
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#B78312]">
                Нашата работа
              </span>
            </div>

            <h2 className="text-4xl font-black tracking-tight text-[#202326] sm:text-5xl">
              Проекти и дейности
            </h2>

            <p className="mt-5 max-w-xl text-base leading-8 text-[#202326]/60">
              Различни направления, разнообразни задачи и решения
              според спецификата на всеки проект.
            </p>
          </div>

          <span className="text-xs font-bold uppercase tracking-widest text-[#202326]/40">
            Примерна галерия
          </span>
        </div>

        {/* Project gallery */}
        <div className="grid gap-6 md:grid-cols-2">

          {projects.map((project) => (
            <article
              key={project.id}
              className={`group relative overflow-hidden bg-[#202326] ${
                project.size === 'large'
                  ? 'md:row-span-2 md:min-h-[620px]'
                  : 'min-h-[290px]'
              }`}
            >
              <img
                src={project.image}
                alt={project.title}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#17191c]/90 via-[#17191c]/10 to-transparent" />

              <div className="absolute bottom-0 left-0 w-full p-7 sm:p-9">
                <span className="text-xs font-bold uppercase tracking-widest text-[#F5B82E]">
                  {project.category}
                </span>

                <div className="mt-3 flex items-end justify-between gap-4">
                  <h3 className="max-w-sm text-2xl font-black text-white sm:text-3xl">
                    {project.title}
                  </h3>

                  <span className="flex h-11 w-11 shrink-0 items-center justify-center border border-white/40 text-white transition-all group-hover:border-[#F5B82E] group-hover:bg-[#F5B82E] group-hover:text-[#202326]">
                    <ArrowUpRight size={21} />
                  </span>
                </div>
              </div>
            </article>
          ))}

        </div>

        <p className="mt-6 text-xs text-[#202326]/40">
          Снимките са илюстративни и не представят реално изпълнени
          проекти на ММ Груп.
        </p>
      </div>
    </section>
  )
}

export default Projects
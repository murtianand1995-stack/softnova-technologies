import { NavLink, useParams } from 'react-router-dom'
import * as Icons from 'lucide-react'
import SEO from '../components/SEO'
import NotFound from './NotFound'
import { SERVICES, PROCESS_STEPS } from '../data/catalog'

export default function ServiceDetail() {
  const { id } = useParams()
  const service = SERVICES.find((s) => s.id === id)

  if (!service) return <NotFound />

  const Icon = Icons[service.icon] || Icons.Settings
  const others = SERVICES.filter((s) => s.id !== service.id).slice(0, 3)

  return (
    <>
      <SEO
        title={`${service.title} | SoftNova Technologies`}
        description={service.desc}
      />

      {/* Header */}
      <section className="relative overflow-hidden bg-navy-900 text-white">
        <div className="absolute inset-0 bg-field-lines" />
        <div className="container-x relative py-16 sm:py-20">
          <NavLink
            to="/services"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-metal-300 transition-colors hover:text-white"
          >
            <Icons.ArrowLeft size={16} /> All Services
          </NavLink>
          <div className="mt-6 flex items-center gap-4">
            <span className="grid h-14 w-14 place-items-center rounded-sm bg-forge-500 text-white">
              <Icon size={26} />
            </span>
            <span className="eyebrow">{service.title}</span>
          </div>
          <h1 className="mt-4 max-w-3xl text-4xl font-bold sm:text-5xl">{service.headline}</h1>
        </div>
      </section>

      {/* Overview + price card */}
      <section className="section-pad bg-white">
        <div className="container-x grid gap-10 lg:grid-cols-[1.4fr_0.8fr]">
          <div>
            <span className="eyebrow">Overview</span>
            <p className="mt-4 text-base leading-relaxed text-navy-700/85 sm:text-lg">{service.overview}</p>

            <h2 className="mt-10 font-display text-2xl font-bold text-navy-900">What&rsquo;s included</h2>
            <ul className="mt-5 grid gap-3 sm:grid-cols-2">
              {service.features.map((f) => (
                <li key={f} className="flex items-start gap-2.5 rounded-sm border border-metal-300 bg-metal-100 p-4 text-sm text-navy-800">
                  <Icons.CheckCircle2 size={18} className="mt-0.5 shrink-0 text-forge-500" />
                  {f}
                </li>
              ))}
            </ul>
          </div>

          <aside className="h-fit rounded-lg bg-navy-900 p-7 text-white shadow-image lg:sticky lg:top-28">
            <p className="text-xs font-semibold tracking-wide text-metal-400">PRICING</p>
            <p className="mt-2 font-display text-2xl font-bold text-forge-400">{service.startingPrice}</p>
            <p className="mt-1 text-xs text-metal-400">Final price depends on your requirements.</p>

            <p className="mt-6 text-xs font-semibold tracking-wide text-metal-400">IDEAL FOR</p>
            <p className="mt-2 text-sm leading-relaxed text-metal-300">{service.idealFor}</p>

            <NavLink to="/contact" className="btn-primary mt-7 w-full">
              Get a Quote
            </NavLink>
          </aside>
        </div>
      </section>

      {/* Process */}
      <section className="section-pad bg-metal-100">
        <div className="container-x">
          <span className="eyebrow">How It Works</span>
          <h2 className="mt-3 max-w-xl text-3xl font-bold text-navy-900 sm:text-4xl">
            From first conversation to delivery.
          </h2>
          <ol className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {PROCESS_STEPS.map((s) => (
              <li key={s.step} className="border-t-2 border-forge-500 pt-5">
                <span className="font-display text-4xl font-bold text-forge-500">{String(s.step).padStart(2, '0')}</span>
                <h3 className="mt-3 font-display text-lg font-semibold text-navy-900">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-navy-700/80">{s.desc}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Other services */}
      <section className="section-pad bg-white">
        <div className="container-x">
          <span className="eyebrow">Explore More</span>
          <h2 className="mt-3 text-3xl font-bold text-navy-900 sm:text-4xl">Other Services</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {others.map((s) => {
              const OtherIcon = Icons[s.icon] || Icons.Settings
              return (
                <NavLink
                  key={s.id}
                  to={`/services/${s.id}`}
                  className="group rounded-lg border border-metal-300 bg-metal-100 p-6 transition-all duration-200 hover:-translate-y-1 hover:border-forge-500 hover:shadow-image"
                >
                  <span className="grid h-11 w-11 place-items-center rounded-sm bg-navy-900 text-forge-400 transition-colors group-hover:bg-forge-500 group-hover:text-white">
                    <OtherIcon size={20} />
                  </span>
                  <h3 className="mt-4 font-display text-lg font-semibold text-navy-900">{s.title}</h3>
                  <p className="mt-1.5 text-sm text-navy-700/80">{s.desc}</p>
                </NavLink>
              )
            })}
          </div>
        </div>
      </section>

      <section className="bg-forge-500">
        <div className="container-x flex flex-col items-start gap-6 py-14 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="font-display text-2xl font-bold text-white sm:text-3xl">Interested in {service.title}?</h2>
            <p className="mt-2 text-sm text-white/90">Tell us what you need and we&rsquo;ll get back with a quote.</p>
          </div>
          <NavLink to="/contact" className="inline-flex items-center justify-center gap-2 rounded-sm bg-navy-900 px-7 py-3.5 text-sm font-semibold text-white shadow-panel transition-colors hover:bg-navy-800">
            Contact Our Team
          </NavLink>
        </div>
      </section>
    </>
  )
}

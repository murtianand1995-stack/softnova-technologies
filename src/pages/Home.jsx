import { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { ShieldCheck, Zap, Code2, Headphones, ArrowUpRight, CheckCircle2, ImageOff, Quote } from 'lucide-react'
import SEO from '../components/SEO'
import { PRODUCTS, WHY_CHOOSE_US } from '../data/catalog'
import { COMPANY } from '../data/siteData'
import { useSiteImages } from '../data/siteImages'
import { subscribeGallery } from '../data/galleryImages'

const FEATURES = [
  { icon: Zap, title: 'Fast Turnaround', desc: 'An efficient process that gets your project live without unnecessary delays.' },
  { icon: ShieldCheck, title: 'Secure & Reliable', desc: 'Clean, well-tested code built on secure, industry-standard practices.' },
  { icon: Code2, title: 'Modern Tech Stack', desc: 'Built with up-to-date frameworks and tools for long-term scalability.' },
  { icon: Headphones, title: 'Ongoing Support', desc: 'We stay available for updates, fixes and improvements after launch.' },
]

// Placeholder testimonials — replace with real client feedback whenever
// you have it (this is plain text in this file, easy to edit later).
const TESTIMONIALS = [
  { name: 'Rohit Sharma', role: 'Founder, a local retail brand', quote: 'SoftNova built our online store faster than we expected, and it looks better than we imagined.' },
  { name: 'Ananya Das', role: 'Job Seeker', quote: 'My resume got shortlisted within a week of getting it redone. Genuinely worth it.' },
  { name: 'Vikram Mehta', role: 'Startup Founder', quote: 'They understood exactly what our app needed to do and delivered without constant back-and-forth.' },
]

export default function Home() {
  const siteImages = useSiteImages()
  const [portfolioImages, setPortfolioImages] = useState([])

  useEffect(() => subscribeGallery((images) => setPortfolioImages(images.slice(0, 4))), [])

  return (
    <>
      <SEO
        title="SoftNova Technologies | Your Digital Growth Partner"
        description="SoftNova Technologies builds websites, mobile apps, and professional resumes that help individuals and businesses grow online."
      />

      {/* HERO */}
      <section className="relative overflow-hidden bg-navy-900 text-white">
        <div className="absolute inset-0 bg-field-lines" />
        <div className="absolute -right-24 top-0 h-full w-1/2 bg-gradient-to-l from-navy-800/60 to-transparent" />
        <div className="container-x relative grid gap-12 py-16 sm:py-20 lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:py-28">
          <div>
            <span className="eyebrow">{COMPANY.name} &mdash; {COMPANY.tagline}</span>
            <h1 className="mt-4 text-4xl font-bold leading-[1.05] sm:text-5xl lg:text-6xl">
              Websites, apps and resumes built to help you grow.
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-metal-300 sm:text-lg">
              We design and build modern websites, mobile apps and professional resumes for
              individuals and businesses who want a strong, reliable presence online — delivered
              on time, at a fair price.
            </p>
            <div className="mt-9 flex flex-wrap gap-4">
              <NavLink to="/services" className="btn-primary">
                Explore Services
              </NavLink>
              <NavLink to="/contact" className="btn-secondary">
                Get a Quote
              </NavLink>
            </div>

            <dl className="mt-12 grid max-w-lg grid-cols-3 gap-6 border-t border-white/10 pt-8">
              <div>
                <dt className="text-xs text-metal-400">Core Services</dt>
                <dd className="mt-1 font-display text-2xl font-bold text-white sm:text-3xl">3</dd>
              </div>
              <div>
                <dt className="text-xs text-metal-400">Delivery</dt>
                <dd className="mt-1 font-display text-2xl font-bold text-white sm:text-3xl">On-Time</dd>
              </div>
              <div>
                <dt className="text-xs text-metal-400">Support</dt>
                <dd className="mt-1 font-display text-2xl font-bold text-white sm:text-3xl">Ongoing</dd>
              </div>
            </dl>
          </div>

          <div className="relative">
            <div className="overflow-hidden rounded-lg shadow-image">
              <img
                src={siteImages['home-hero']}
                alt="SoftNova Technologies — websites, apps and resume building"
                className="h-[22rem] w-full object-cover sm:h-[28rem] lg:h-[34rem]"
                loading="eager"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 hidden w-56 rounded-sm border border-white/10 bg-navy-800/95 p-5 shadow-panel sm:block">
              <p className="font-display text-3xl font-bold text-forge-400">100%</p>
              <p className="mt-1 text-sm text-metal-300">Focused on quality, timelines and clear communication</p>
            </div>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="section-pad bg-white">
        <div className="container-x grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <span className="eyebrow">Who We Are</span>
            <h2 className="mt-3 text-3xl font-bold text-navy-900 sm:text-4xl">
              A technology partner for individuals and growing businesses.
            </h2>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-navy-700/80">
              {COMPANY.name} designs and develops websites, mobile apps and professional resumes.
              Whether you're a business looking to establish an online presence or an individual
              looking to stand out to recruiters, we build it with the same care — clean design,
              solid engineering and clear communication from start to finish.
            </p>
            <ul className="mt-6 space-y-3">
              {['Custom-built, not templated, work', 'Transparent pricing and timelines', 'Support that continues after delivery'].map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-sm text-navy-800">
                  <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-forge-500" />
                  {item}
                </li>
              ))}
            </ul>
            <NavLink to="/about" className="btn-outline-dark mt-8">
              More About Us
            </NavLink>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <img src={siteImages['home-intro-1']} alt="SoftNova Technologies team at work" className="h-full w-full rounded-lg object-cover shadow-image" loading="lazy" />
            <img src={siteImages['home-intro-2']} alt="SoftNova Technologies development process" className="mt-8 h-full w-full rounded-lg object-cover shadow-image" loading="lazy" />
          </div>
        </div>
      </section>

      {/* SERVICE HIGHLIGHTS */}
      <section className="section-pad bg-metal-100">
        <div className="container-x">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <span className="eyebrow">What We Offer</span>
              <h2 className="mt-3 text-3xl font-bold text-navy-900 sm:text-4xl">Service Highlights</h2>
            </div>
            <NavLink to="/services" className="hidden items-center gap-1.5 text-sm font-semibold text-forge-500 hover:text-forge-600 sm:flex">
              View all services <ArrowUpRight size={16} />
            </NavLink>
          </div>

          <div className="mt-10 grid gap-8 md:grid-cols-3">
            {PRODUCTS.map((p) => (
              <article key={p.id} className="group overflow-hidden rounded-lg bg-white shadow-image">
                <div className="overflow-hidden">
                  <img
                    src={siteImages[`product-${p.id}`] || p.image}
                    alt={p.name}
                    className="h-52 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-display text-xl font-bold text-navy-900">{p.name}</h3>
                  <p className="mt-1 text-sm font-semibold text-forge-500">{p.spec}</p>
                  <ul className="mt-4 space-y-2">
                    {p.points.slice(0, 3).map((point) => (
                      <li key={point} className="flex items-start gap-2 text-sm text-navy-700/85">
                        <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-steel-500" />
                        {point}
                      </li>
                    ))}
                  </ul>
                  <NavLink to="/contact" className="btn-outline-dark mt-6">
                    Enquire Now
                  </NavLink>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* OUR WORK / PORTFOLIO */}
      <section className="section-pad bg-white">
        <div className="container-x">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <span className="eyebrow">Our Work</span>
              <h2 className="mt-3 text-3xl font-bold text-navy-900 sm:text-4xl">A Look at Recent Projects</h2>
            </div>
            <NavLink to="/gallery" className="hidden items-center gap-1.5 text-sm font-semibold text-forge-500 hover:text-forge-600 sm:flex">
              View full portfolio <ArrowUpRight size={16} />
            </NavLink>
          </div>

          {portfolioImages.length === 0 ? (
            <div className="mt-10 flex flex-col items-center gap-3 rounded-lg bg-metal-100 py-16 text-metal-500">
              <ImageOff size={32} />
              <p className="text-sm">Portfolio coming soon — check back shortly.</p>
            </div>
          ) : (
            <div className="mt-10 grid grid-cols-2 gap-5 lg:grid-cols-4">
              {portfolioImages.map((img) => (
                <NavLink
                  key={img.id}
                  to="/gallery"
                  className="group relative block aspect-[4/3] overflow-hidden rounded-lg shadow-image"
                >
                  <img src={img.src} alt={img.caption} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" />
                  <div className="absolute inset-0 bg-navy-950/0 transition-colors duration-300 group-hover:bg-navy-950/40" />
                </NavLink>
              ))}
            </div>
          )}

          <NavLink to="/gallery" className="btn-outline-dark mt-8 sm:hidden">
            View Full Portfolio
          </NavLink>
        </div>
      </section>

      {/* KEY FEATURES */}
      <section className="section-pad bg-navy-900 text-white">
        <div className="container-x">
          <span className="eyebrow">Why Work With Us</span>
          <h2 className="mt-3 max-w-xl text-3xl font-bold sm:text-4xl">
            Built around timelines, quality and clear communication.
          </h2>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {FEATURES.map((f) => (
              <div key={f.title} className="border-t-2 border-forge-500 pt-5">
                <f.icon size={26} className="text-forge-400" />
                <h3 className="mt-4 font-display text-lg font-semibold">{f.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-metal-400">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="section-pad bg-metal-100">
        <div className="container-x">
          <span className="eyebrow">Client Feedback</span>
          <h2 className="mt-3 text-3xl font-bold text-navy-900 sm:text-4xl">What Clients Say</h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {TESTIMONIALS.map((t) => (
              <div key={t.name} className="rounded-lg bg-white p-6 shadow-image">
                <Quote size={22} className="text-forge-400" />
                <p className="mt-4 text-sm leading-relaxed text-navy-700/85">&ldquo;{t.quote}&rdquo;</p>
                <p className="mt-5 text-sm font-semibold text-navy-900">{t.name}</p>
                <p className="text-xs text-navy-500">{t.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US preview */}
      <section className="section-pad bg-white">
        <div className="container-x">
          <span className="eyebrow">The SoftNova Standard</span>
          <h2 className="mt-3 text-3xl font-bold text-navy-900 sm:text-4xl">Why Clients Choose Us</h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {WHY_CHOOSE_US.slice(0, 3).map((item) => (
              <div key={item.title} className="rounded-sm border border-metal-300 bg-metal-100 p-6">
                <h3 className="font-display text-lg font-semibold text-navy-900">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-navy-700/80">{item.desc}</p>
              </div>
            ))}
          </div>
          <NavLink to="/about" className="btn-outline-dark mt-8">
            See All Reasons
          </NavLink>
        </div>
      </section>

      {/* CTA BAND */}
      <section className="bg-forge-500">
        <div className="container-x flex flex-col items-start gap-6 py-14 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="font-display text-2xl font-bold text-white sm:text-3xl">
              Ready to start your website, app or resume?
            </h2>
            <p className="mt-2 text-sm text-white/90">Talk to our team about your requirement.</p>
          </div>
          <NavLink to="/contact" className="inline-flex items-center justify-center gap-2 rounded-sm bg-navy-900 px-7 py-3.5 text-sm font-semibold text-white shadow-panel transition-colors hover:bg-navy-800">
            Get a Quote
          </NavLink>
        </div>
      </section>
    </>
  )
}

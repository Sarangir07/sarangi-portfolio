import { profile, techStrip } from '../data/portfolio'
import Button from './Button'
import Reveal from './Reveal'
import { ArrowRight, Download, MapPin } from './Icons'

export default function Hero() {
  return (
    <section id="home" aria-label="Introduction" className="relative overflow-hidden pt-32 pb-10 sm:pt-40 sm:pb-14">
      {/* Background depth: grid, thin diagonal lines, one large blurred glow */}
      <div className="hero-grid pointer-events-none absolute inset-0 -z-10" aria-hidden="true" />
      <div className="hero-lines pointer-events-none absolute inset-0 -z-10" aria-hidden="true" />
      <span className="glow -top-32 left-[-10%] h-[34rem] w-[34rem] opacity-90" aria-hidden="true" />
      <span className="glow top-24 right-[-12%] h-[30rem] w-[30rem] opacity-60" aria-hidden="true" />

      <div className="container-x">
        <div className="flex flex-col gap-12 lg:flex-row lg:items-center lg:justify-between lg:gap-20">
          {/* Left: identity */}
          <div className="max-w-3xl">
            <Reveal>
              <p className="eyebrow">Software Developer</p>
            </Reveal>

            <Reveal delay={80}>
              <h1 className="mt-6 text-5xl font-extrabold leading-[1.0] tracking-[-0.035em] text-ink sm:text-6xl xl:text-[5.25rem]">
                {profile.name}
              </h1>
            </Reveal>

            <Reveal delay={160}>
              <p className="mt-5 font-display text-xl font-semibold tracking-tight text-accent-ink sm:text-2xl xl:text-[1.75rem]">
                {profile.title}
              </p>
            </Reveal>

            <Reveal delay={240}>
              <p className="mt-6 max-w-2xl text-base leading-relaxed text-ink-2 sm:text-lg sm:leading-[1.7]">{profile.intro}</p>
            </Reveal>

            <Reveal delay={320}>
              <div className="mt-9 flex flex-wrap items-center gap-3">
                <Button as="a" href="#projects" variant="primary">
                  View Projects
                  <ArrowRight width={16} height={16} />
                </Button>
                <Button as="a" href={profile.resumeUrl} download={profile.resumeFileName} variant="secondary">
                  <Download width={16} height={16} className="text-accent" />
                  Download Resume
                </Button>
                <Button as="a" href="#contact" variant="ghost">
                  Contact Me
                </Button>
              </div>
            </Reveal>

            <Reveal delay={400}>
              <p className="mt-10 inline-flex items-center gap-1.5 text-[13px] text-ink-3">
                <MapPin width={14} height={14} className="text-accent" />
                {profile.location}
              </p>
            </Reveal>
          </div>

          {/* Right: portrait */}
          <Reveal delay={200} className="order-first shrink-0 lg:order-last">
            <div className="relative w-40 sm:w-52 lg:w-[19rem] xl:w-[21rem]">
              <div
                className="absolute -inset-10 rounded-[3rem] bg-[radial-gradient(55%_55%_at_50%_45%,rgb(56_189_248/0.22),transparent_70%)] blur-2xl"
                aria-hidden="true"
              />
              {/* Offset frame line for depth */}
              <div className="absolute -inset-3 rounded-[1.6rem] border border-line/80 lg:-inset-4" aria-hidden="true" />
              <span className="absolute -top-3 -left-3 h-6 w-6 border-t border-l border-accent/70 lg:-top-4 lg:-left-4" aria-hidden="true" />
              <span className="absolute -right-3 -bottom-3 h-6 w-6 border-r border-b border-accent/70 lg:-right-4 lg:-bottom-4" aria-hidden="true" />

              <div className="relative rounded-[1.25rem] bg-bg-2 p-1.5 shadow-lift ring-1 ring-line">
                <img
                  src={profile.photo.src}
                  alt={profile.photo.alt}
                  width={profile.photo.width}
                  height={profile.photo.height}
                  loading="eager"
                  fetchPriority="high"
                  decoding="async"
                  className="img-reveal aspect-4/5 w-full rounded-2xl object-cover"
                />
              </div>
            </div>
          </Reveal>
        </div>

        {/* Tech stack strip */}
        <Reveal delay={480}>
          <div className="mt-16 flex flex-col gap-4 border-t border-line pt-6 sm:mt-20 sm:flex-row sm:items-center sm:gap-8">
            <p className="shrink-0 text-[11px] font-semibold uppercase tracking-[0.18em] text-ink-3">Tech stack</p>
            <ul className="flex flex-wrap gap-2" aria-label="Technology stack">
              {techStrip.map((t) => (
                <li
                  key={t}
                  className="rounded-md border border-line bg-card px-3 py-1.5 text-[13px] font-medium text-ink-2 transition-colors duration-200 hover:border-accent/50 hover:text-ink"
                >
                  {t}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

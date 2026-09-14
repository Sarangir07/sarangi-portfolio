import { education } from '../data/portfolio'
import Reveal from './Reveal'
import Section from './Section'
import { GraduationCap, MapPin } from './Icons'

export default function Education() {
  return (
    <Section id="education" eyebrow="Education" title="Academic background" glow="left">
      <ol className="relative grid gap-5 md:grid-cols-2 md:gap-6">
        {/* Thin connector between the two degrees on desktop */}
        <span className="absolute top-1/2 left-1/2 hidden h-px w-12 -translate-x-1/2 bg-accent/50 md:block" aria-hidden="true" />

        {education.map((item, i) => (
          <Reveal as="li" key={item.degree} delay={i * 100} className="h-full">
            <article className="card card-hover card-sheen group relative flex h-full flex-col overflow-hidden p-6 sm:p-7">
              <div className="flex items-start justify-between gap-4">
                <span className="icon-tile h-12 w-12 rounded-xl">
                  <GraduationCap width={22} height={22} />
                </span>
                <span className="rounded-md border border-line bg-bg-2 px-3 py-1.5 font-mono text-[12px] font-medium text-ink-2">{item.period}</span>
              </div>

              <h3 className="mt-6 font-display text-xl font-bold text-ink sm:text-2xl">{item.degree}</h3>
              <p className="mt-2 text-[15px] font-medium text-ink-2">{item.institution}</p>
              <p className="mt-1 inline-flex items-center gap-1 text-sm text-ink-3">
                <MapPin width={13} height={13} />
                {item.location}
              </p>

              <div className="mt-6 flex items-center justify-between border-t border-line pt-4">
                <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-ink-3">Result</span>
                <span className="rounded-md border border-accent/30 bg-accent-soft px-3 py-1 font-display text-sm font-bold text-accent">
                  {item.score}
                </span>
              </div>
            </article>
          </Reveal>
        ))}
      </ol>
    </Section>
  )
}

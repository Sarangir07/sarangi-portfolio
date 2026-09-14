import { experience } from '../data/portfolio'
import Reveal from './Reveal'
import Section from './Section'
import { Briefcase } from './Icons'

export default function Experience() {
  return (
    <Section
      id="experience"
      eyebrow="Experience"
      title="Where I've worked"
      lede="Internships spanning website development in a production environment and AI-driven data work."
      glow="right"
    >
      <ol className="relative pl-8 sm:pl-16">
        <span className="timeline-line absolute top-2 bottom-0 left-[9px] w-px sm:left-[15px]" aria-hidden="true" />

        {experience.map((job, i) => (
          <Reveal as="li" key={job.company} delay={i * 100} className={`relative ${i < experience.length - 1 ? 'pb-12 sm:pb-14' : ''}`}>
            <span
              className="timeline-dot absolute top-7 -left-8 flex h-5 w-5 items-center justify-center rounded-full bg-accent text-bg sm:-left-16 sm:h-8 sm:w-8"
              aria-hidden="true"
            >
              <Briefcase width={14} height={14} strokeWidth={2} className="hidden sm:block" />
            </span>

            <article className="card card-hover card-sheen p-6 sm:p-8">
              <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-accent">{job.company}</p>
                  <h3 className="mt-2 font-display text-xl font-bold text-ink sm:text-2xl">{job.role}</h3>
                  <p className="mt-1 text-sm text-ink-3">{job.location}</p>
                </div>
                <p className="inline-flex w-fit shrink-0 items-center rounded-md border border-line bg-bg-2 px-3 py-1.5 font-mono text-[12px] font-medium text-ink-2">
                  {job.period}
                </p>
              </div>

              <p className="mt-5 text-[15px] leading-relaxed text-ink">{job.summary}</p>

              <ul className="mt-4 space-y-2.5 text-[15px] leading-relaxed text-ink-2">
                {job.bullets.map((b) => (
                  <li key={b} className="flex gap-3">
                    <span className="mt-[10px] h-1.5 w-1.5 shrink-0 rounded-full bg-accent/70" aria-hidden="true" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>

              <ul className="mt-6 flex flex-wrap gap-2 border-t border-line pt-5" aria-label="Focus areas">
                {job.tags.map((t) => (
                  <li key={t} className="chip">
                    {t}
                  </li>
                ))}
              </ul>
            </article>
          </Reveal>
        ))}
      </ol>
    </Section>
  )
}

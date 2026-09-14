import { certifications } from '../data/portfolio'
import Reveal from './Reveal'
import Section from './Section'
import { Award } from './Icons'

export default function Certifications() {
  return (
    <Section id="certifications" eyebrow="Certifications" title="Certifications" band glow="right">
      <ul className="grid gap-4 sm:grid-cols-2">
        {certifications.map((cert, i) => (
          <Reveal as="li" key={cert.name} delay={(i % 2) * 90} className="h-full">
            <article className="card card-hover card-sheen group flex h-full items-start gap-4 p-5 sm:p-6">
              <span className="icon-tile h-11 w-11">
                <Award width={19} height={19} />
              </span>
              <div className="min-w-0 flex-1">
                <h3 className="font-display text-[15px] font-bold leading-snug text-ink sm:text-base">{cert.name}</h3>
                <p className="mt-1.5 text-sm text-ink-3">{cert.issuer}</p>
              </div>
              <span className="font-mono text-[11px] text-ink-3" aria-hidden="true">
                0{i + 1}
              </span>
            </article>
          </Reveal>
        ))}
      </ul>
    </Section>
  )
}

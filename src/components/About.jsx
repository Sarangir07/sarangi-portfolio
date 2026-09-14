import { about } from '../data/portfolio'
import Reveal from './Reveal'
import Section from './Section'
import { Cloud, GraduationCap, Layers, Lightbulb } from './Icons'

const cardIcons = [GraduationCap, Layers, Cloud, Lightbulb]

export default function About() {
  return (
    <Section id="about" eyebrow="About" title={about.heading} glow="right">
      <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="space-y-5 text-base leading-[1.75] text-ink-2 sm:text-[17px] lg:col-span-7">
          {about.paragraphs.map((text, i) => (
            <Reveal as="p" key={i} delay={i * 70} className={i === 0 ? 'text-[17px] text-ink sm:text-lg' : ''}>
              {text}
            </Reveal>
          ))}
        </div>

        <div className="grid gap-3 sm:grid-cols-2 lg:col-span-5 lg:grid-cols-1 xl:grid-cols-2">
          {about.cards.map((c, i) => {
            const Icon = cardIcons[i] ?? Layers
            return (
              <Reveal key={c.label} delay={120 + i * 70} className="h-full">
                <div className="card card-hover card-sheen group flex h-full flex-col p-5">
                  <span className="icon-tile">
                    <Icon width={18} height={18} />
                  </span>
                  <p className="mt-4 font-display text-[15px] font-bold text-ink">{c.label}</p>
                  <p className="mt-1 text-[13px] leading-relaxed text-ink-3">{c.detail}</p>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </Section>
  )
}

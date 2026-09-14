import { skillGroups } from '../data/portfolio'
import Reveal from './Reveal'
import Section from './Section'
import { Cloud, Code, Database, Layout, Lightbulb, Server, Wrench } from './Icons'

const icons = {
  Frontend: Layout,
  Backend: Server,
  Database: Database,
  'Cloud & Deployment': Cloud,
  Programming: Code,
  'AI & Data': Lightbulb,
  Tools: Wrench,
}

// Backend carries the most items, so it takes two columns: 7 cards fill a 4-column grid exactly.
const span = { Backend: 'md:col-span-2' }

export default function Skills() {
  return (
    <Section
      id="skills"
      eyebrow="Skills"
      title="Technical skills"
      lede="The languages, frameworks and tools I work with across the frontend, backend, database and deployment layers."
      band
      glow="left"
    >
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {skillGroups.map((group, i) => {
          const Icon = icons[group.name] ?? Code
          return (
            <Reveal key={group.name} delay={(i % 4) * 70} className={`h-full ${span[group.name] ?? ''}`}>
              <div className="card card-hover card-sheen group flex h-full flex-col p-5">
                <div className="flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <span className="icon-tile">
                      <Icon width={18} height={18} />
                    </span>
                    <h3 className="font-display text-[15px] font-bold text-ink">{group.name}</h3>
                  </div>
                  <span className="font-mono text-[11px] font-medium text-ink-3">0{i + 1}</span>
                </div>
                <ul className="mt-5 flex flex-wrap gap-2" aria-label={`${group.name} skills`}>
                  {group.items.map((item) => (
                    <li key={item} className="chip group-hover:border-accent/40 group-hover:text-ink">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          )
        })}
      </div>
    </Section>
  )
}

import { useCallback, useState } from 'react'
import { projects } from '../data/portfolio'
import ProjectCard, { FeaturedProjectCard, WideProjectCard } from './ProjectCard'
import ProjectDetails from './ProjectDetails'
import Reveal from './Reveal'
import Section from './Section'

export default function Projects() {
  const [selected, setSelected] = useState(null)
  const close = useCallback(() => setSelected(null), [])

  // Featured first, then two wide cards, then the compact pair.
  const [featured, ...rest] = projects
  const wide = rest.slice(0, 2)
  const compact = rest.slice(2)

  return (
    <Section
      id="projects"
      eyebrow="Projects"
      title="Selected work"
      lede="Full-stack applications with real workflows: authentication, user roles, data models, REST APIs and production deployments. Open a project for the full breakdown."
      band
      glow="right"
    >
      <Reveal>
        <FeaturedProjectCard project={featured} onOpen={setSelected} />
      </Reveal>

      <div className="mt-6 grid gap-5 lg:grid-cols-2">
        {wide.map((project, i) => (
          <Reveal key={project.id} delay={i * 90} className="h-full">
            <WideProjectCard project={project} onOpen={setSelected} />
          </Reveal>
        ))}
      </div>

      <div className="mt-5 grid gap-5 md:grid-cols-2">
        {compact.map((project, i) => (
          <Reveal key={project.id} delay={i * 90} className="h-full">
            <ProjectCard project={project} onOpen={setSelected} />
          </Reveal>
        ))}
      </div>

      <ProjectDetails project={selected} onClose={close} />
    </Section>
  )
}

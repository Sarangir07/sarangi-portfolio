import { ArrowRight, ArrowUpRight, Check, Cloud, Database, Layout, Server } from './Icons'

// Picks an icon for a layer label such as "React.js", "Express API", "MongoDB", "AWS EC2 · Nginx".
function iconFor(label) {
  const l = label.toLowerCase()
  if (l.includes('react') || l.includes('site')) return Layout
  if (l.includes('mongo') || l.includes('sql')) return Database
  if (l.includes('aws') || l.includes('vercel') || l.includes('hosting')) return Cloud
  return Server
}

function OpenButton({ project, onOpen, children }) {
  return (
    <button
      type="button"
      onClick={() => onOpen(project)}
      aria-haspopup="dialog"
      className="text-left after:absolute after:inset-0 after:content-[''] focus-visible:outline-none"
    >
      {children}
    </button>
  )
}

function TechPills({ tech }) {
  return (
    <ul className="flex flex-wrap gap-1.5" aria-label="Technologies">
      {tech.map((t) => (
        <li key={t} className="pill">
          {t}
        </li>
      ))}
    </ul>
  )
}

function Deployment({ text, className = '' }) {
  if (!text) return null
  return (
    <p className={`flex items-start gap-1.5 text-[13px] text-ink-3 ${className}`}>
      <Cloud width={14} height={14} className="mt-0.5 shrink-0 text-accent" />
      {text}
    </p>
  )
}

/* Horizontal flow: React → Express / Node → MongoDB → AWS EC2 */
function ArchitectureFlow({ nodes }) {
  return (
    <ol className={`relative grid grid-cols-2 gap-3 sm:gap-0 ${flowCols[nodes.length] ?? 'sm:grid-cols-4'}`} aria-label="Architecture flow">
      {nodes.map((node, i) => {
        const Icon = iconFor(node.label)
        return (
          <li key={node.label} className="relative flex flex-col items-center text-center sm:px-2">
            {i < nodes.length - 1 && (
              <span className="flow-connector absolute top-6 left-[calc(50%+28px)] hidden h-px w-[calc(100%-56px)] sm:block" aria-hidden="true" />
            )}
            <span className="relative flex h-12 w-12 items-center justify-center rounded-xl border border-line bg-bg-2 text-accent shadow-[0_0_0_4px_var(--color-card),0_0_24px_-6px_rgb(56_189_248/0.6)]">
              <Icon width={20} height={20} />
            </span>
            <span className="mt-3 text-[13px] font-semibold text-ink">{node.label}</span>
            <span className="mt-0.5 text-[11px] font-medium uppercase tracking-wider text-ink-3">{node.sub}</span>
          </li>
        )
      })}
    </ol>
  )
}

/* Vertical mini stack: React ↓ API ↓ Database ↓ Cloud */
function StackDiagram({ layers }) {
  return (
    <ol className="flex flex-col items-stretch" aria-label="Application layers">
      {layers.map((layer, i) => {
        const Icon = iconFor(layer)
        return (
          <li key={layer} className="flex flex-col items-center">
            <span className="flex w-full items-center gap-2.5 rounded-lg border border-line bg-bg-2/80 px-3 py-2 text-[12.5px] font-medium text-ink-2 transition-colors group-hover:border-accent/30">
              <Icon width={14} height={14} className="shrink-0 text-accent" />
              {layer}
            </span>
            {i < layers.length - 1 && <span className="my-0.5 h-3 w-px bg-accent/40" aria-hidden="true" />}
          </li>
        )
      })}
    </ol>
  )
}

// Turns a layer label from the data into a flow node with a role caption.
function flowNode(layer) {
  const l = layer.toLowerCase()
  if (l.includes('react')) return { label: 'React', sub: 'Frontend' }
  if (l.includes('express')) return { label: 'Express / Node', sub: 'REST API' }
  if (l.includes('mongo')) return { label: 'MongoDB', sub: 'Database' }
  if (l.includes('aws') || l.includes('vercel') || l.includes('hosting')) return { label: layer.split(' · ')[0], sub: 'Deployment' }
  return { label: layer, sub: '' }
}

const flowCols = { 2: 'sm:grid-cols-2', 3: 'sm:grid-cols-3', 4: 'sm:grid-cols-4' }

export function FeaturedProjectCard({ project, onOpen }) {
  const { name, type, tagline, tech, highlights, details, layers } = project
  const flow = layers.map(flowNode)

  return (
    <article className="card card-hover group relative overflow-hidden has-[button:focus-visible]:shadow-glow">
      <span className="glow -top-40 -right-20 h-96 w-96 opacity-60 transition-opacity duration-500 group-hover:opacity-100" aria-hidden="true" />
      <span className="absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,transparent,rgb(56_189_248/0.8),transparent)]" aria-hidden="true" />

      <div className="relative p-6 sm:p-8 lg:p-10">
        <div className="flex flex-wrap items-center gap-3">
          <span className="inline-flex items-center gap-1.5 rounded-md border border-accent/40 bg-accent-soft px-2.5 py-1 text-[11px] font-bold uppercase tracking-[0.14em] text-accent">
            Featured project
          </span>
          <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-ink-3">{type}</span>
        </div>

        <div className="mt-6 grid gap-10 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-7">
            <h3 className="font-display text-3xl font-bold text-ink sm:text-4xl">
              <OpenButton project={project} onOpen={onOpen}>
                {name}
              </OpenButton>
            </h3>
            <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-ink-2 sm:text-base">{tagline}</p>

            <ul className="mt-6 grid gap-2.5 sm:grid-cols-2" aria-label="Major features">
              {highlights.map((h) => (
                <li key={h} className="flex items-start gap-2.5 text-[14.5px] text-ink-2">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-md border border-accent/30 bg-accent-soft text-accent">
                    <Check width={11} height={11} strokeWidth={2.5} />
                  </span>
                  {h}
                </li>
              ))}
            </ul>

            <div className="mt-7">
              <TechPills tech={tech} />
            </div>
          </div>

          <div className="flex flex-col justify-between gap-6 lg:col-span-5">
            <div className="rounded-2xl border border-line bg-bg/60 p-5 sm:p-6">
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-ink-3">Architecture</p>
              <div className="mt-5">
                <ArchitectureFlow nodes={flow} />
              </div>
              <Deployment text={details.stack.Deployment} className="mt-6 border-t border-line pt-4" />
            </div>

            <p className="inline-flex w-fit items-center gap-2 rounded-lg bg-ink px-4 py-2.5 text-sm font-semibold text-bg transition-all duration-300 group-hover:gap-3 group-hover:bg-accent">
              View project details
              <ArrowRight width={15} height={15} />
            </p>
          </div>
        </div>
      </div>
    </article>
  )
}

/* Wide variant: content on the left, vertical stack diagram on the right */
export function WideProjectCard({ project, onOpen }) {
  const { name, type, tagline, tech, layers, highlights, details } = project
  return (
    <article className="card card-hover card-sheen group relative flex h-full flex-col overflow-hidden has-[button:focus-visible]:shadow-glow">
      <div className="grid flex-1 gap-6 p-6 sm:grid-cols-[1fr_150px] sm:p-7">
        <div className="flex flex-col">
          <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-ink-3">{type}</p>
          <h3 className="mt-2 font-display text-xl font-bold text-ink transition-colors group-hover:text-accent-ink sm:text-2xl">
            <OpenButton project={project} onOpen={onOpen}>
              {name}
            </OpenButton>
          </h3>
          <p className="mt-3 text-[15px] leading-relaxed text-ink-2">{tagline}</p>

          <ul className="mt-4 space-y-1.5 text-sm text-ink-2" aria-label="Highlights">
            {highlights.slice(0, 4).map((h) => (
              <li key={h} className="flex items-start gap-2">
                <span className="mt-[9px] h-1 w-1 shrink-0 rounded-full bg-accent" aria-hidden="true" />
                {h}
              </li>
            ))}
          </ul>

          <div className="mt-auto pt-6">
            <TechPills tech={tech} />
            <Deployment text={details.stack.Deployment} className="mt-3 text-[12.5px]" />
          </div>
        </div>

        <div className="border-t border-line pt-5 sm:border-t-0 sm:border-l sm:pt-0 sm:pl-5">
          <p className="mb-3 text-[10.5px] font-semibold uppercase tracking-[0.16em] text-ink-3">Stack</p>
          <StackDiagram layers={layers} />
        </div>
      </div>

      <p className="flex items-center gap-1 border-t border-line px-6 py-3.5 text-sm font-semibold text-ink transition-colors group-hover:text-accent sm:px-7">
        View details
        <ArrowUpRight width={15} height={15} className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      </p>
    </article>
  )
}

/* Compact variant: layer strip header + content */
export default function ProjectCard({ project, onOpen }) {
  const { name, type, tagline, tech, layers, highlights, details } = project
  return (
    <article className="card card-hover card-sheen group relative flex h-full flex-col overflow-hidden has-[button:focus-visible]:shadow-glow">
      <ol className="flex flex-wrap items-center gap-y-1.5 border-b border-line bg-bg-2/60 px-6 py-4 text-[11.5px] font-semibold text-ink-3" aria-label="Architecture layers">
        {layers.map((layer, i) => {
          const Icon = iconFor(layer)
          return (
            <li key={layer} className="flex items-center">
              <span className="inline-flex items-center gap-1.5 rounded-md border border-line bg-card px-2 py-1 text-ink-2">
                <Icon width={12} height={12} className="text-accent" />
                {layer}
              </span>
              {i < layers.length - 1 && (
                <span className="mx-1.5 text-line-strong" aria-hidden="true">
                  →
                </span>
              )}
            </li>
          )
        })}
      </ol>

      <div className="flex flex-1 flex-col p-6">
        <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-ink-3">{type}</p>
        <h3 className="mt-2 font-display text-xl font-bold text-ink transition-colors group-hover:text-accent-ink">
          <OpenButton project={project} onOpen={onOpen}>
            {name}
          </OpenButton>
        </h3>
        <p className="mt-3 text-[15px] leading-relaxed text-ink-2">{tagline}</p>

        <ul className="mt-4 grid gap-1.5 text-sm text-ink-2 sm:grid-cols-2" aria-label="Highlights">
          {highlights.map((h) => (
            <li key={h} className="flex items-start gap-2">
              <span className="mt-[9px] h-1 w-1 shrink-0 rounded-full bg-accent" aria-hidden="true" />
              {h}
            </li>
          ))}
        </ul>

        <div className="mt-auto pt-6">
          <TechPills tech={tech} />
          <Deployment text={details.stack.Deployment} className="mt-3 text-[12.5px]" />
          <p className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-ink transition-colors group-hover:text-accent">
            View details
            <ArrowUpRight width={15} height={15} className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </p>
        </div>
      </div>
    </article>
  )
}

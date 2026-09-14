import { useEffect, useRef } from 'react'
import { Check, ClipboardList, Close, Cloud, Database, GitBranch, Layers, Layout, Lock, Server, Shield, Users } from './Icons'

const FOCUSABLE = 'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
const layerIcons = { Frontend: Layout, Backend: Server, Database: Database, Authentication: Lock, Deployment: Cloud }

function Block({ icon: Icon, title, children }) {
  return (
    <section aria-label={title}>
      <h3 className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-accent">
        <Icon width={14} height={14} />
        {title}
      </h3>
      <div className="mt-4">{children}</div>
    </section>
  )
}

export default function ProjectDetails({ project, onClose }) {
  const panelRef = useRef(null)
  const closeRef = useRef(null)

  // Lock scroll, focus the dialog, trap Tab, close on Escape, restore focus on unmount.
  useEffect(() => {
    if (!project) return
    const previouslyFocused = document.activeElement
    document.body.style.overflow = 'hidden'
    closeRef.current?.focus()

    const onKey = (e) => {
      if (e.key === 'Escape') {
        onClose()
        return
      }
      if (e.key !== 'Tab' || !panelRef.current) return
      const nodes = panelRef.current.querySelectorAll(FOCUSABLE)
      if (!nodes.length) return
      const first = nodes[0]
      const last = nodes[nodes.length - 1]
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault()
        last.focus()
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault()
        first.focus()
      }
    }

    document.addEventListener('keydown', onKey)
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
      if (previouslyFocused && typeof previouslyFocused.focus === 'function') previouslyFocused.focus()
    }
  }, [project, onClose])

  if (!project) return null

  const { name, type, tech, details } = project
  const titleId = `project-${project.id}-title`
  const { Deployment: deployment, ...architecture } = details.stack

  return (
    <div
      className="modal-backdrop fixed inset-0 z-50 flex items-end justify-center bg-bg/80 p-0 backdrop-blur-sm sm:items-center sm:p-6"
      onMouseDown={(e) => e.target === e.currentTarget && onClose()}
    >
      <div
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        className="modal-panel flex max-h-[92dvh] w-full max-w-3xl flex-col overflow-hidden rounded-t-3xl border border-line bg-card shadow-modal sm:max-h-[88vh] sm:rounded-3xl"
      >
        <header className="relative flex items-start justify-between gap-4 border-b border-line bg-bg-2/70 px-6 py-6 sm:px-8 sm:py-7">
          <span className="absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,transparent,rgb(56_189_248/0.8),transparent)]" aria-hidden="true" />
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-accent">{type}</p>
            <h2 id={titleId} className="mt-2 font-display text-2xl font-bold text-ink sm:text-[2rem] sm:leading-tight">
              {name}
            </h2>
          </div>
          <button
            ref={closeRef}
            type="button"
            onClick={onClose}
            aria-label="Close project details"
            className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-line bg-card text-ink-2 transition-all duration-200 hover:border-accent/60 hover:text-ink"
          >
            <Close width={17} height={17} />
          </button>
        </header>

        <div className="modal-scroll overflow-y-auto px-6 py-7 sm:px-8 sm:py-8">
          <div className="space-y-10">
            <Block icon={ClipboardList} title="Overview">
              <p className="text-[15px] leading-[1.75] text-ink-2 sm:text-base">{details.overview}</p>
            </Block>

            <Block icon={Check} title="Features">
              <ul className="grid gap-2.5 sm:grid-cols-2">
                {details.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 rounded-lg border border-line bg-bg-2/60 px-3.5 py-2.5 text-[14.5px] text-ink-2">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-md border border-accent/30 bg-accent-soft text-accent">
                      <Check width={11} height={11} strokeWidth={2.5} />
                    </span>
                    {f}
                  </li>
                ))}
              </ul>
            </Block>

            <Block icon={Layers} title="Tech stack">
              <ul className="flex flex-wrap gap-1.5" aria-label="Technologies">
                {tech.map((t) => (
                  <li key={t} className="chip">
                    {t}
                  </li>
                ))}
              </ul>
            </Block>

            <Block icon={GitBranch} title="Architecture">
              <dl className="grid gap-2.5 sm:grid-cols-2">
                {Object.entries(architecture).map(([layer, value]) => {
                  const Icon = layerIcons[layer] ?? Server
                  return (
                    <div key={layer} className="flex items-start gap-3 rounded-lg border border-line bg-bg-2/60 p-3.5">
                      <span className="icon-tile h-9 w-9 rounded-lg">
                        <Icon width={16} height={16} />
                      </span>
                      <div className="min-w-0">
                        <dt className="text-[11px] font-semibold uppercase tracking-wider text-ink-3">{layer}</dt>
                        <dd className="mt-0.5 text-sm font-medium text-ink">{value}</dd>
                      </div>
                    </div>
                  )
                })}
              </dl>
            </Block>

            {deployment && (
              <Block icon={Cloud} title="Deployment">
                <p className="flex items-start gap-3 rounded-lg border border-accent/25 bg-accent-soft px-4 py-3 text-[15px] text-ink">
                  <Cloud width={16} height={16} className="mt-0.5 shrink-0 text-accent" />
                  {deployment}
                </p>
              </Block>
            )}

            <Block icon={Users} title="My contribution">
              <ul className="space-y-2.5">
                {details.contribution.map((c) => (
                  <li key={c} className="flex gap-3 text-[15px] leading-relaxed text-ink-2">
                    <span className="mt-[10px] h-1.5 w-1.5 shrink-0 rounded-full bg-accent/70" aria-hidden="true" />
                    {c}
                  </li>
                ))}
              </ul>
            </Block>

            <Block icon={GitBranch} title="Application workflow">
              <ol className="relative space-y-3 border-l border-line pl-6">
                {details.workflow.map((step, i) => (
                  <li key={step} className="relative text-[15px] leading-relaxed text-ink-2">
                    <span className="absolute top-0.5 -left-[35px] flex h-[22px] w-[22px] items-center justify-center rounded-md bg-accent font-display text-[11px] font-bold text-bg ring-4 ring-card">
                      {i + 1}
                    </span>
                    {step}
                  </li>
                ))}
              </ol>
            </Block>

            <Block icon={Shield} title="Areas that needed careful attention">
              <ul className="space-y-2.5">
                {details.considerations.map((c) => (
                  <li key={c} className="flex gap-3 text-[15px] leading-relaxed text-ink-2">
                    <span className="mt-[10px] h-1.5 w-1.5 shrink-0 rounded-full bg-accent/70" aria-hidden="true" />
                    {c}
                  </li>
                ))}
              </ul>
            </Block>
          </div>
        </div>
      </div>
    </div>
  )
}

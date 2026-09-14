import Reveal from './Reveal'

// `band` lifts the section on the secondary surface; `glow` places a soft accent light behind it.
export default function Section({ id, eyebrow, title, lede, children, band = false, glow, className = '' }) {
  return (
    <section
      id={id}
      aria-labelledby={`${id}-title`}
      className={`relative overflow-hidden py-20 sm:py-28 ${band ? 'band' : ''} ${className}`}
    >
      {glow === 'left' && <span className="glow -left-40 top-0 h-96 w-96" aria-hidden="true" />}
      {glow === 'right' && <span className="glow -right-40 top-20 h-[26rem] w-[26rem]" aria-hidden="true" />}

      <div className="container-x relative">
        <Reveal>
          <p className="eyebrow">{eyebrow}</p>
          <h2 id={`${id}-title`} className="section-title">
            {title}
          </h2>
          {lede && <p className="section-lede">{lede}</p>}
        </Reveal>
        <div className="mt-12 sm:mt-16">{children}</div>
      </div>
    </section>
  )
}

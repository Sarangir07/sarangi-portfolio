import { profile } from '../data/portfolio'
import Button from './Button'
import Reveal from './Reveal'
import { ArrowUpRight, Download, LinkedIn, Mail } from './Icons'

export default function Contact() {
  return (
    <section id="contact" aria-labelledby="contact-title" className="relative overflow-hidden py-20 sm:py-28">
      <div className="container-x">
        <Reveal>
          <div className="cta-panel relative overflow-hidden rounded-3xl border border-line px-6 py-14 shadow-lift sm:px-12 sm:py-20 lg:px-16">
            <span className="glow -top-32 -left-24 h-96 w-96 opacity-80" aria-hidden="true" />

            <div className="relative max-w-2xl">
              <p className="eyebrow">Contact</p>
              <h2 id="contact-title" className="mt-6 text-3xl font-bold tracking-tight text-ink sm:text-5xl sm:leading-[1.06]">
                Let&rsquo;s build something meaningful.
              </h2>
              <p className="mt-5 max-w-xl text-base leading-relaxed text-ink-2 sm:text-lg">
                Open to software development opportunities. The quickest way to reach me is by email, or connect with me on LinkedIn.
              </p>

              <div className="mt-9 flex flex-wrap items-center gap-3">
                <Button as="a" href={`mailto:${profile.email}`} variant="accent">
                  <Mail width={16} height={16} />
                  Email me
                </Button>
                <Button as="a" href={profile.linkedin.url} target="_blank" rel="noopener noreferrer" variant="outline">
                  <LinkedIn width={16} height={16} />
                  LinkedIn
                  <ArrowUpRight width={14} height={14} className="opacity-70" />
                </Button>
                <Button as="a" href={profile.resumeUrl} download={profile.resumeFileName} variant="outline">
                  <Download width={16} height={16} />
                  Download Resume
                </Button>
              </div>
            </div>

            <dl className="relative mt-12 grid gap-3 border-t border-line pt-8 sm:grid-cols-2 sm:gap-4">
              <div className="rounded-xl border border-line bg-bg/50 p-4 transition-colors hover:border-accent/40">
                <dt className="text-[11px] font-semibold uppercase tracking-[0.18em] text-ink-3">Email</dt>
                <dd className="mt-1.5">
                  <a href={`mailto:${profile.email}`} className="link-underline text-[15px] font-medium text-ink sm:text-base">
                    {profile.email}
                  </a>
                </dd>
              </div>
              <div className="rounded-xl border border-line bg-bg/50 p-4 transition-colors hover:border-accent/40">
                <dt className="text-[11px] font-semibold uppercase tracking-[0.18em] text-ink-3">LinkedIn</dt>
                <dd className="mt-1.5">
                  <a
                    href={profile.linkedin.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link-underline text-[15px] font-medium text-ink sm:text-base"
                  >
                    {profile.linkedin.label}
                  </a>
                </dd>
              </div>
            </dl>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

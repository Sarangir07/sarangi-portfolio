import { navLinks, profile } from '../data/portfolio'
import { ArrowUpRight, LinkedIn, Mail } from './Icons'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="relative border-t border-line bg-bg-2/60 py-12">
      <div className="container-x">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <div>
            <a href="#home" className="inline-flex items-center gap-2.5 font-display text-base font-bold tracking-tight text-ink">
              <span className="flex h-7 w-7 items-center justify-center rounded-md border border-line bg-bg font-display text-[13px] text-accent" aria-hidden="true">
                S
              </span>
              {profile.name}
            </a>
            <p className="mt-2 text-sm text-ink-3">{profile.title}</p>

            <div className="mt-5 flex flex-wrap gap-2">
              <a
                href={`mailto:${profile.email}`}
                className="inline-flex items-center gap-1.5 rounded-lg border border-line bg-card px-3 py-1.5 text-[13px] font-medium text-ink-2 transition-all duration-300 hover:-translate-y-0.5 hover:border-accent/60 hover:text-ink"
              >
                <Mail width={14} height={14} className="text-accent" />
                {profile.email}
              </a>
              <a
                href={profile.linkedin.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-lg border border-line bg-card px-3 py-1.5 text-[13px] font-medium text-ink-2 transition-all duration-300 hover:-translate-y-0.5 hover:border-accent/60 hover:text-ink"
              >
                <LinkedIn width={14} height={14} className="text-accent" />
                LinkedIn
                <ArrowUpRight width={12} height={12} className="opacity-60" />
              </a>
            </div>
          </div>

          <nav aria-label="Footer">
            <ul className="grid grid-cols-2 gap-x-10 gap-y-2 text-[13.5px] text-ink-3 sm:grid-cols-4 md:grid-cols-2">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <a href={`#${link.id}`} className="link-underline transition-colors hover:text-ink">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="mt-10 flex flex-col gap-2 border-t border-line pt-6 text-[13px] text-ink-3 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {profile.name}. All rights reserves.
          </p>
        </div>
      </div>
    </footer>
  )
}

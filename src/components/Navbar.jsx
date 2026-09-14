import { useEffect, useLayoutEffect, useRef, useState } from 'react'
import { navLinks, profile } from '../data/portfolio'
import { useActiveSection } from '../hooks/useActiveSection'
import { Close, Download, Menu } from './Icons'

const sectionIds = navLinks.map((l) => l.id)

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [indicator, setIndicator] = useState({ left: 0, width: 0, ready: false })
  const active = useActiveSection(sectionIds)
  const linkRefs = useRef({})

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Position the sliding underline beneath the active desktop link.
  useLayoutEffect(() => {
    const el = linkRefs.current[active]
    if (!el) return
    const update = () => setIndicator({ left: el.offsetLeft + 12, width: el.offsetWidth - 24, ready: true })
    update()
    window.addEventListener('resize', update)
    return () => window.removeEventListener('resize', update)
  }, [active])

  // Close the mobile panel on resize to desktop and on Escape.
  useEffect(() => {
    if (!open) return
    const onKey = (e) => e.key === 'Escape' && setOpen(false)
    const onResize = () => window.innerWidth >= 1024 && setOpen(false)
    window.addEventListener('keydown', onKey)
    window.addEventListener('resize', onResize)
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', onKey)
      window.removeEventListener('resize', onResize)
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-all duration-300 ${
        scrolled || open ? 'border-b border-line bg-bg/70 backdrop-blur-xl' : 'border-b border-transparent bg-transparent'
      }`}
    >
      <nav className="container-x flex h-16 items-center justify-between" aria-label="Primary">
        <a
          href="#home"
          className="group inline-flex items-center gap-2.5 font-display text-[15px] font-bold tracking-tight text-ink"
          onClick={() => setOpen(false)}
        >
          <span
            className="flex h-7 w-7 items-center justify-center rounded-md border border-line bg-bg-2 font-display text-[13px] font-bold text-accent transition-colors duration-300 group-hover:border-accent/60"
            aria-hidden="true"
          >
            S
          </span>
          {profile.name}
        </a>

        <ul className="relative hidden items-center gap-0.5 lg:flex">
          <span
            aria-hidden="true"
            className={`absolute bottom-0 h-px bg-accent transition-all duration-300 ease-out ${indicator.ready ? 'opacity-100' : 'opacity-0'}`}
            style={{ left: indicator.left, width: indicator.width, boxShadow: '0 0 10px rgb(56 189 248 / 0.8)' }}
          />
          {navLinks.map((link) => {
            const isActive = active === link.id
            return (
              <li key={link.id}>
                <a
                  ref={(el) => (linkRefs.current[link.id] = el)}
                  href={`#${link.id}`}
                  aria-current={isActive ? 'true' : undefined}
                  className={`relative z-10 block rounded-md px-3 py-2 text-[13.5px] font-medium transition-colors duration-200 ${
                    isActive ? 'text-ink' : 'text-ink-3 hover:text-ink'
                  }`}
                >
                  {link.label}
                </a>
              </li>
            )
          })}
        </ul>

        <div className="hidden lg:block">
          <a
            href={profile.resumeUrl}
            download={profile.resumeFileName}
            className="inline-flex items-center gap-1.5 rounded-lg border border-line bg-card px-3.5 py-1.5 text-[13px] font-semibold text-ink transition-all duration-300 hover:-translate-y-0.5 hover:border-accent/60 hover:bg-card-2"
          >
            <Download width={15} height={15} className="text-accent" />
            Resume
          </a>
        </div>

        <button
          type="button"
          className="-mr-2 inline-flex h-10 w-10 items-center justify-center rounded-lg text-ink transition-colors hover:bg-white/5 lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <Close /> : <Menu />}
        </button>
      </nav>

      {open && (
        <div id="mobile-nav" className="nav-panel border-t border-b border-line bg-bg/95 backdrop-blur-xl lg:hidden">
          <ul className="container-x flex flex-col py-3">
            {navLinks.map((link) => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  onClick={() => setOpen(false)}
                  aria-current={active === link.id ? 'true' : undefined}
                  className={`flex items-center gap-3 rounded-lg px-3 py-3 text-base font-medium transition-colors ${
                    active === link.id ? 'bg-white/[0.06] text-ink' : 'text-ink-2 hover:bg-white/[0.04]'
                  }`}
                >
                  <span
                    className={`h-1.5 w-1.5 rounded-full ${active === link.id ? 'bg-accent shadow-[0_0_8px_rgb(56_189_248/0.9)]' : 'bg-line-strong'}`}
                    aria-hidden="true"
                  />
                  {link.label}
                </a>
              </li>
            ))}
            <li className="mt-2 border-t border-line pt-3">
              <a
                href={profile.resumeUrl}
                download={profile.resumeFileName}
                onClick={() => setOpen(false)}
                className="flex items-center gap-2 rounded-lg px-3 py-3 text-base font-semibold text-ink"
              >
                <Download className="text-accent" />
                Download Resume
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}

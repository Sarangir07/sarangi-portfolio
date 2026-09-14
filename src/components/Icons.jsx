const svgProps = {
  width: 18,
  height: 18,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.75,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
  'aria-hidden': 'true',
}

export const ArrowRight = (p) => (
  <svg {...svgProps} {...p}>
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
)

export const ArrowUpRight = (p) => (
  <svg {...svgProps} {...p}>
    <path d="M7 17 17 7M8 7h9v9" />
  </svg>
)

export const Download = (p) => (
  <svg {...svgProps} {...p}>
    <path d="M12 3v12M6 11l6 6 6-6M4 21h16" />
  </svg>
)

export const Mail = (p) => (
  <svg {...svgProps} {...p}>
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <path d="m3 7 9 6 9-6" />
  </svg>
)

export const LinkedIn = (p) => (
  <svg {...svgProps} fill="currentColor" stroke="none" {...p}>
    <path d="M6.94 8.5H3.56V20h3.38V8.5ZM5.25 3.5a1.96 1.96 0 1 0 0 3.92 1.96 1.96 0 0 0 0-3.92ZM20.44 13.2c0-3.28-1.75-4.98-4.08-4.98-1.88 0-2.72 1.03-3.2 1.76V8.5H9.8c.04.95 0 11.5 0 11.5h3.37v-6.42c0-.34.03-.69.13-.93.27-.68.88-1.38 1.92-1.38 1.36 0 1.9 1.03 1.9 2.55V20h3.32v-6.8Z" />
  </svg>
)

export const MapPin = (p) => (
  <svg {...svgProps} {...p}>
    <path d="M12 21s-6-5.4-6-10a6 6 0 1 1 12 0c0 4.6-6 10-6 10Z" />
    <circle cx="12" cy="11" r="2.2" />
  </svg>
)

export const Close = (p) => (
  <svg {...svgProps} {...p}>
    <path d="M6 6l12 12M18 6 6 18" />
  </svg>
)

export const Menu = (p) => (
  <svg {...svgProps} {...p}>
    <path d="M4 7h16M4 12h16M4 17h16" />
  </svg>
)

export const Check = (p) => (
  <svg {...svgProps} {...p}>
    <path d="m5 12 4.5 4.5L19 7" />
  </svg>
)

export const Award = (p) => (
  <svg {...svgProps} {...p}>
    <circle cx="12" cy="9" r="5" />
    <path d="m8.5 13.5-1.5 7 5-2.5 5 2.5-1.5-7" />
  </svg>
)

export const GraduationCap = (p) => (
  <svg {...svgProps} {...p}>
    <path d="m2 9 10-4 10 4-10 4-10-4Z" />
    <path d="M6 11v4.5c0 1 2.7 2.5 6 2.5s6-1.5 6-2.5V11M22 9v5" />
  </svg>
)

export const Briefcase = (p) => (
  <svg {...svgProps} {...p}>
    <rect x="3" y="7" width="18" height="13" rx="2" />
    <path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M3 12h18" />
  </svg>
)

export const Code = (p) => (
  <svg {...svgProps} {...p}>
    <path d="m8 8-4 4 4 4M16 8l4 4-4 4M14 4l-4 16" />
  </svg>
)

export const Layout = (p) => (
  <svg {...svgProps} {...p}>
    <rect x="3" y="4" width="18" height="16" rx="2" />
    <path d="M3 10h18M9 10v10" />
  </svg>
)

export const Server = (p) => (
  <svg {...svgProps} {...p}>
    <rect x="3" y="4" width="18" height="6" rx="1.5" />
    <rect x="3" y="14" width="18" height="6" rx="1.5" />
    <path d="M7 7h.01M7 17h.01" />
  </svg>
)

export const Database = (p) => (
  <svg {...svgProps} {...p}>
    <ellipse cx="12" cy="6" rx="8" ry="3" />
    <path d="M4 6v6c0 1.7 3.6 3 8 3s8-1.3 8-3V6M4 12v6c0 1.7 3.6 3 8 3s8-1.3 8-3v-6" />
  </svg>
)

export const Shield = (p) => (
  <svg {...svgProps} {...p}>
    <path d="M12 3 4 6v6c0 4.5 3.4 7.8 8 9 4.6-1.2 8-4.5 8-9V6l-8-3Z" />
    <path d="m9 12 2 2 4-4" />
  </svg>
)

export const Cloud = (p) => (
  <svg {...svgProps} {...p}>
    <path d="M7 18h10a4 4 0 0 0 .6-7.95A6 6 0 0 0 6.2 9.5 4.25 4.25 0 0 0 7 18Z" />
  </svg>
)

export const Wrench = (p) => (
  <svg {...svgProps} {...p}>
    <path d="M14.7 6.3a4 4 0 0 0-5.3 5.3L4 17l3 3 5.4-5.4a4 4 0 0 0 5.3-5.3l-2.4 2.4-2.1-.5-.5-2.1 2-2Z" />
  </svg>
)

export const Lightbulb = (p) => (
  <svg {...svgProps} {...p}>
    <path d="M9 18h6M10 21h4M8.5 14a6 6 0 1 1 7 0c-.8.6-1.3 1.3-1.5 2h-4c-.2-.7-.7-1.4-1.5-2Z" />
  </svg>
)

export const Layers = (p) => (
  <svg {...svgProps} {...p}>
    <path d="m12 3 9 5-9 5-9-5 9-5Z" />
    <path d="m3 13 9 5 9-5M3 17l9 5 9-5" />
  </svg>
)

export const Rocket = (p) => (
  <svg {...svgProps} {...p}>
    <path d="M5 15c-1.5 1.5-2 5-2 5s3.5-.5 5-2M14 4c3-1 6-1 6-1s0 3-1 6c-1.5 4-6 8-9 9l-4-4c1-3 5-7.5 8-10Z" />
    <circle cx="15" cy="9" r="1.5" />
  </svg>
)

export const Users = (p) => (
  <svg {...svgProps} {...p}>
    <circle cx="9" cy="8" r="3.5" />
    <path d="M2.5 20a6.5 6.5 0 0 1 13 0M16 4.5a3.5 3.5 0 0 1 0 7M21.5 20a6.5 6.5 0 0 0-4.5-6.2" />
  </svg>
)

export const Calendar = (p) => (
  <svg {...svgProps} {...p}>
    <rect x="3" y="5" width="18" height="16" rx="2" />
    <path d="M3 10h18M8 3v4M16 3v4" />
  </svg>
)

export const Globe = (p) => (
  <svg {...svgProps} {...p}>
    <circle cx="12" cy="12" r="9" />
    <path d="M3 12h18M12 3c3 3.5 3 14.5 0 18M12 3c-3 3.5-3 14.5 0 18" />
  </svg>
)

export const ClipboardList = (p) => (
  <svg {...svgProps} {...p}>
    <rect x="5" y="4" width="14" height="17" rx="2" />
    <path d="M9 3h6v3H9zM9 11h6M9 15h6" />
  </svg>
)

export const GitBranch = (p) => (
  <svg {...svgProps} {...p}>
    <circle cx="6" cy="5" r="2" />
    <circle cx="6" cy="19" r="2" />
    <circle cx="18" cy="8" r="2" />
    <path d="M6 7v10M18 10c0 4-4 4-8 4" />
  </svg>
)

export const Lock = (p) => (
  <svg {...svgProps} {...p}>
    <rect x="5" y="11" width="14" height="10" rx="2" />
    <path d="M8 11V7a4 4 0 0 1 8 0v4" />
  </svg>
)

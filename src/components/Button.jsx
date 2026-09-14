const base =
  'inline-flex items-center justify-center gap-2 rounded-lg px-5 py-2.5 text-sm font-semibold transition-all duration-300 ease-out active:scale-[0.98] disabled:opacity-50'

const variants = {
  // Light-on-dark primary: reads as the single strongest action on the page.
  primary:
    'bg-ink text-bg shadow-[0_10px_30px_-12px_rgb(248_250_252/0.45)] hover:-translate-y-0.5 hover:bg-white hover:shadow-[0_16px_36px_-14px_rgb(56_189_248/0.5)]',
  secondary:
    'border border-line-strong bg-card text-ink hover:-translate-y-0.5 hover:border-accent/60 hover:bg-card-2 hover:shadow-lift',
  ghost: 'text-ink-2 hover:bg-white/5 hover:text-ink',
  accent:
    'bg-accent text-bg shadow-[0_10px_30px_-12px_rgb(56_189_248/0.7)] hover:-translate-y-0.5 hover:bg-accent-ink',
  outline: 'border border-white/15 bg-white/[0.04] text-ink hover:-translate-y-0.5 hover:border-accent/60 hover:bg-white/[0.07]',
}

export default function Button({ as: Tag = 'button', variant = 'primary', className = '', children, ...rest }) {
  return (
    <Tag className={`${base} ${variants[variant]} ${className}`} {...rest}>
      {children}
    </Tag>
  )
}

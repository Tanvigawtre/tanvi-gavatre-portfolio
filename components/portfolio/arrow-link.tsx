import { ArrowRight, ArrowUpRight } from 'lucide-react'
import { cn } from '@/lib/utils'

type ArrowLinkProps = {
  href: string | null
  children: React.ReactNode
  variant?: 'solid' | 'outline' | 'ghost-dark'
  external?: boolean
  arrow?: 'right' | 'up-right'
  className?: string
  disabledLabel?: string
}

const variants = {
  solid:
    'border-accent bg-accent text-ink-foreground shadow-[0_8px_24px_-10px_rgb(47_77_107/0.7)] hover:-translate-y-0.5 hover:bg-accent-hover hover:shadow-[0_14px_32px_-10px_rgb(47_77_107/0.8)]',
  outline:
    'border-foreground/25 bg-surface text-foreground hover:-translate-y-0.5 hover:border-highlight hover:bg-highlight hover:text-ink-foreground',
  'ghost-dark':
    'border-foreground/25 bg-surface text-foreground hover:-translate-y-0.5 hover:border-highlight hover:bg-highlight hover:text-ink-foreground',
}

export function ArrowLink({
  href,
  children,
  variant = 'solid',
  external = false,
  arrow = 'right',
  className,
  disabledLabel = 'Coming soon',
}: ArrowLinkProps) {
  const Icon = arrow === 'right' ? ArrowRight : ArrowUpRight
  const base = cn(
    'group inline-flex min-h-11 items-center justify-center gap-2.5 rounded-full border px-6 text-sm font-semibold tracking-wide transition-all duration-300',
    variants[variant],
    className,
  )
  const iconClass = cn(
    'size-4 transition-transform duration-300',
    arrow === 'right'
      ? 'group-hover:translate-x-1'
      : 'group-hover:-translate-y-0.5 group-hover:translate-x-0.5',
  )

  if (!href) {
    return (
      <span
        aria-disabled="true"
        title={disabledLabel}
        className={cn(
          'inline-flex min-h-11 cursor-not-allowed items-center justify-center gap-2.5 rounded-full border border-dashed border-border px-6 text-sm font-semibold tracking-wide text-muted-foreground',
          className,
        )}
      >
        {children}
        <span className="text-xs font-medium opacity-80">({disabledLabel})</span>
      </span>
    )
  }

  return (
    <a
      href={href}
      className={base}
      {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
    >
      {children}
      <Icon className={iconClass} aria-hidden="true" />
      {external && <span className="sr-only">(opens in a new tab)</span>}
    </a>
  )
}

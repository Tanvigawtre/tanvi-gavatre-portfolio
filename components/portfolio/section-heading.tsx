import { cn } from '@/lib/utils'
import { Reveal } from './reveal'

type SectionHeadingProps = {
  label: string
  title: React.ReactNode
  id: string
  tone?: 'light' | 'dark'
  className?: string
}

export function SectionHeading({ label, title, id, className }: SectionHeadingProps) {
  return (
    <Reveal className={cn('mb-10 md:mb-14', className)}>
      <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-border bg-surface/70 px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-highlight">
        <span aria-hidden="true" className="size-1.5 rounded-full bg-highlight" />
        {label}
      </p>
      <h2
        id={id}
        className="text-balance text-2xl font-semibold leading-tight tracking-tight text-foreground md:text-4xl"
      >
        {title}
      </h2>
    </Reveal>
  )
}

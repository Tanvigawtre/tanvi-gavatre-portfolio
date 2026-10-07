import { ArrowUp } from 'lucide-react'
import { profile } from '@/lib/site-data'

export function Footer() {
  return (
    <footer className="border-t border-border text-muted-foreground">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-6 md:px-10">
        <p className="font-display text-sm font-semibold tracking-wide text-foreground">{profile.name}</p>
        <a
          href="#home"
          className="group inline-flex min-h-10 items-center gap-2 rounded-full border border-border px-4 text-sm font-medium transition-all duration-300 hover:border-accent hover:text-foreground"
        >
          Back to top
          <ArrowUp className="size-4 transition-transform duration-300 group-hover:-translate-y-0.5" aria-hidden="true" />
        </a>
      </div>
    </footer>
  )
}

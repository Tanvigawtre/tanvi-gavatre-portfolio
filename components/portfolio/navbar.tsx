'use client'

import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { navItems, profile } from '@/lib/site-data'
import { cn } from '@/lib/utils'

export function Navbar() {
  const [active, setActive] = useState<string>('')
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const sections = ['home', ...navItems.map((item) => item.id)]
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null)

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id)
        })
      },
      { rootMargin: '-45% 0px -50% 0px' },
    )
    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
      <nav
        aria-label="Primary"
        className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 md:h-[4.5rem] md:px-10"
      >
        <a
          href="#home"
          className="font-display text-base font-bold tracking-wide text-foreground transition-colors hover:text-accent"
          onClick={() => setOpen(false)}
        >
          {profile.name}
        </a>

        <ul className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => {
            const isActive = active === item.id
            return (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  aria-current={isActive ? 'true' : undefined}
                  className={cn(
                    'rounded-full px-4 py-2 text-sm font-medium transition-all duration-300',
                    isActive
                      ? 'bg-accent text-ink-foreground ring-1 ring-accent'
                      : 'text-muted-foreground hover:bg-surface hover:text-foreground',
                  )}
                >
                  {item.label}
                </a>
              </li>
            )
          })}
        </ul>

        <button
          type="button"
          className="-mr-2 inline-flex size-11 items-center justify-center text-foreground md:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="size-5" aria-hidden="true" /> : <Menu className="size-5" aria-hidden="true" />}
          <span className="sr-only">{open ? 'Close menu' : 'Open menu'}</span>
        </button>
      </nav>

      <div
        id="mobile-menu"
        className={cn(
          'grid overflow-hidden border-border bg-background transition-[grid-template-rows,opacity] duration-400 ease-out md:hidden',
          open ? 'grid-rows-[1fr] border-t opacity-100' : 'grid-rows-[0fr] opacity-0',
        )}
        inert={!open}
      >
        <ul className="min-h-0 px-5">
          {navItems.map((item) => (
            <li key={item.id} className="border-b border-border last:border-b-0">
              <a
                href={`#${item.id}`}
                onClick={() => setOpen(false)}
                className={cn(
                  'flex items-center justify-between py-4 text-base font-medium',
                  active === item.id ? 'text-accent' : 'text-foreground',
                )}
              >
                {item.label}
                {active === item.id && <span aria-hidden="true" className="size-1.5 rounded-full bg-accent" />}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  )
}

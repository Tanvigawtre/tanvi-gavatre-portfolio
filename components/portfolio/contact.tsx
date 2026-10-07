import { ArrowUpRight, FileText, Mail } from 'lucide-react'
import { links } from '@/lib/site-data'
import { GithubIcon, LinkedinIcon } from './brand-icons'
import { Reveal } from './reveal'
import { SectionHeading } from './section-heading'
import { Spotlight } from './spotlight'

type ContactCard = {
  label: string
  hint: string
  href: string | null
  external: boolean
  icon: React.ComponentType<{ className?: string }>
}

const cards: ContactCard[] = [
  { label: 'Email', hint: 'Send me a message', href: `mailto:${links.email}`, external: false, icon: Mail },
  { label: 'LinkedIn', hint: 'Connect professionally', href: links.linkedin, external: true, icon: LinkedinIcon },
  { label: 'GitHub', hint: 'Browse my code', href: links.github, external: true, icon: GithubIcon },
  { label: 'Resume', hint: 'Download my resume', href: links.resume, external: true, icon: FileText },
]

const cardClass =
  'group flex h-full flex-col justify-between gap-10 rounded-2xl border border-border bg-surface/60 p-6 transition-all duration-300'

function CardBody({ card, disabled }: { card: ContactCard; disabled?: boolean }) {
  const Icon = card.icon
  return (
    <>
      <div className="flex items-start justify-between">
        <span className="inline-flex size-12 items-center justify-center rounded-xl border border-border bg-background/60 text-foreground transition-all duration-300 group-hover:rotate-[-6deg] group-hover:scale-110 group-hover:border-accent group-hover:bg-accent group-hover:text-background">
          <Icon className="size-5" />
        </span>
        <ArrowUpRight
          aria-hidden="true"
          className="size-5 text-muted-foreground transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-highlight"
        />
      </div>
      <div>
        <p className="font-display text-xl font-semibold text-foreground">{card.label}</p>
        <p className="mt-1 text-sm text-muted-foreground">{disabled ? 'Coming soon' : card.hint}</p>
      </div>
    </>
  )
}

export function Contact() {
  return (
    <section id="contact" aria-labelledby="contact-title">
      <div className="mx-auto max-w-6xl px-5 py-20 md:px-10 md:py-28">
        <SectionHeading id="contact-title" label="Contact" title={"Let's connect."} className="mb-5 md:mb-6" />
        <Reveal delay={100}>
          <p className="mb-10 max-w-md text-pretty text-base leading-relaxed text-muted-foreground md:text-lg">
            {"Have an opportunity, idea, or project in mind? I'd love to hear from you."}
          </p>
        </Reveal>

        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {cards.map((card, i) => (
            <Reveal as="li" key={card.label} delay={i * 80}>
              {card.href ? (
                <Spotlight
                  as="a"
                  href={card.href}
                  {...(card.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                  className={`${cardClass} hover:-translate-y-1.5 hover:border-accent hover:shadow-[0_20px_40px_-20px_rgb(47_77_107/0.45)]`}
                >
                  <CardBody card={card} />
                  {card.external && <span className="sr-only">(opens in a new tab)</span>}
                </Spotlight>
              ) : (
                <div aria-disabled="true" className={`${cardClass} cursor-not-allowed border-dashed opacity-60`}>
                  <CardBody card={card} disabled />
                </div>
              )}
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  )
}

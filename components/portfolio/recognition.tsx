'use client'

import { useState } from 'react'
import Image from 'next/image'
import { ArrowUpRight, Expand } from 'lucide-react'
import { achievement, certificates } from '@/lib/site-data'
import { CertificateModal, type ModalImage } from './certificate-modal'
import { Reveal } from './reveal'

const eyebrow = 'text-xs font-semibold uppercase tracking-[0.16em] text-accent'

export function Recognition() {
  const [openImage, setOpenImage] = useState<ModalImage | null>(null)

  return (
    <section id="recognition" aria-labelledby="achievement-title">
      <div className="mx-auto grid max-w-6xl gap-14 px-5 py-20 md:px-10 md:py-28 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-8">
          <Reveal>
            <p className={eyebrow}>Achievement</p>
            <h2
              id="achievement-title"
              className="mt-4 text-balance text-4xl font-medium tracking-tight text-foreground md:text-5xl"
            >
              {achievement.title}
            </h2>

            <div className="mt-6 flex flex-wrap items-end justify-between gap-4">
              <ul className="flex flex-wrap gap-2">
                {achievement.badges.map((badge) => (
                  <li
                    key={badge}
                    className="rounded-sm border border-border bg-surface px-3 py-2 text-sm font-medium text-accent transition-colors duration-300 hover:border-accent hover:bg-accent hover:text-ink-foreground"
                  >
                    {badge}
                  </li>
                ))}
              </ul>
              <p className="text-right text-sm leading-relaxed text-muted-foreground md:text-base">
                {achievement.event}
                <br />
                {achievement.venue}
              </p>
            </div>
          </Reveal>

          <Reveal delay={120} className="mt-10">
            <button
              type="button"
              onClick={() =>
                setOpenImage({ src: achievement.image, alt: achievement.alt, title: achievement.title })
              }
              className="group flex w-full flex-col gap-5 rounded-sm border border-border bg-surface-2/60 p-5 text-left transition-all duration-300 hover:-translate-y-1 hover:border-accent hover:shadow-[0_24px_48px_-28px_rgb(47_77_107/0.5)] md:p-6"
            >
              <span className="flex items-center justify-between gap-4">
                <span className="text-xs font-semibold uppercase tracking-[0.16em] text-highlight">Recognition</span>
                <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-accent opacity-70 transition-opacity duration-300 group-hover:opacity-100">
                  <Expand className="size-3.5" aria-hidden="true" />
                  View full
                </span>
              </span>
              <span className="relative block aspect-[1600/1141] overflow-hidden rounded-sm border border-border bg-surface">
                <Image
                  src={achievement.image}
                  alt={achievement.alt}
                  fill
                  sizes="(min-width: 1024px) 60vw, 100vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                />
              </span>
              <span className="self-end text-xs font-medium tracking-[0.1em] text-highlight">{'01 \u2014 01'}</span>
              <span className="sr-only">Open {achievement.title} certificate in full view</span>
            </button>
          </Reveal>
        </div>

        <Reveal delay={200} className="lg:col-span-4 lg:pt-10">
          <h3 className={eyebrow}>Certifications</h3>
          <ul className="mt-8 border-t border-border">
            {certificates.map((cert, i) => {
              const content = (
                <>
                  <span className="pt-0.5 text-xs font-medium text-accent">{String(i + 1).padStart(2, '0')}</span>
                  <span className="flex-1">
                    <span className="block font-display text-base font-semibold text-foreground transition-colors duration-300 group-hover:text-accent">
                      {cert.title}
                    </span>
                    <span className="mt-1 block text-sm text-muted-foreground">
                      {cert.image ? cert.issuer : 'Certificate to be added'}
                    </span>
                  </span>
                  <ArrowUpRight
                    className="size-4 text-accent transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    aria-hidden="true"
                  />
                </>
              )

              return (
                <li key={cert.id} className="border-b border-border">
                  {cert.image ? (
                    <button
                      type="button"
                      onClick={() => setOpenImage({ src: cert.image!, alt: cert.alt, title: cert.title })}
                      className="group flex w-full items-start gap-6 px-2 py-6 text-left transition-colors duration-300 hover:bg-surface"
                    >
                      {content}
                      <span className="sr-only">View certificate</span>
                    </button>
                  ) : (
                    <div className="flex items-start gap-6 px-2 py-6 opacity-70" aria-disabled="true">
                      {content}
                    </div>
                  )}
                </li>
              )
            })}
          </ul>
        </Reveal>
      </div>

      <CertificateModal image={openImage} onClose={() => setOpenImage(null)} />
    </section>
  )
}

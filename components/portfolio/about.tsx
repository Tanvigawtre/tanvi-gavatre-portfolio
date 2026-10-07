import Image from 'next/image'
import { profile } from '@/lib/site-data'
import { Reveal } from './reveal'
import { Spotlight } from './spotlight'

export function About() {
  return (
    <section id="about" aria-labelledby="about-title">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-20 md:px-10 md:py-28 lg:grid-cols-12 lg:gap-14">
        <Reveal className="lg:col-span-5">
          <figure className="group rounded-3xl border border-border bg-surface/60 p-3 transition-colors duration-300 hover:border-accent/60">
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl">
              <Image
                src={profile.portrait}
                alt="Portrait of Tanvi Gavatre"
                fill
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="object-cover object-[50%_30%] transition-transform duration-700 ease-out group-hover:scale-[1.04]"
              />
            </div>
          </figure>
        </Reveal>

        <div className="flex flex-col lg:col-span-7 lg:pt-4">
          <Reveal>
            <p className="mb-4 inline-flex w-fit items-center gap-2 rounded-full border border-border bg-surface/70 px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-highlight">
              <span aria-hidden="true" className="size-1.5 rounded-full bg-highlight" />
              About Me
            </p>
            <h2 id="about-title" className="sr-only">
              About Tanvi Gavatre
            </h2>
          </Reveal>

          <Reveal delay={100}>
            <div className="grid gap-4 sm:grid-cols-2">
              {profile.about.map((paragraph, index) => (
                <Spotlight
                  key={paragraph}
                  className="rounded-2xl border border-border border-l-4 border-l-highlight bg-surface/70 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-highlight/70"
                >
                  <span className="font-display text-xs font-semibold tracking-[0.12em] text-highlight">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <p className="mt-2 text-pretty text-[15px] leading-relaxed text-foreground">{paragraph}</p>
                </Spotlight>
              ))}
            </div>
          </Reveal>

          <Reveal delay={200} className="mt-10 lg:mt-auto lg:pt-12">
            <dl className="grid gap-3 sm:grid-cols-3">
              {profile.details.map((detail) => (
                <Spotlight
                  key={detail.label}
                  className="rounded-2xl border border-border bg-surface/60 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-highlight/70"
                >
                  <dt className="text-xs font-semibold uppercase tracking-[0.12em] text-highlight">
                    {detail.label}
                  </dt>
                  <dd className="mt-2 font-display text-base font-semibold text-foreground">{detail.value}</dd>
                </Spotlight>
              ))}
            </dl>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

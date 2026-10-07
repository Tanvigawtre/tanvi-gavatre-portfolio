import Image from 'next/image'
import { links, profile } from '@/lib/site-data'
import { ArrowLink } from './arrow-link'
import { GithubIcon, LinkedinIcon } from './brand-icons'

const enter = 'animate-in fade-in slide-in-from-bottom-5 duration-1000 ease-out fill-mode-both'

const socialClass =
  'group inline-flex size-11 items-center justify-center rounded-full border border-border bg-surface/60 text-foreground transition-all duration-300 hover:-translate-y-0.5 hover:border-accent hover:bg-accent/10 hover:text-accent'

export function Hero() {
  const [first, last] = profile.name.split(' ')

  return (
    <section
      id="home"
      aria-labelledby="hero-title"
      className="relative flex min-h-svh items-center overflow-hidden pt-16"
    >
      <div
        aria-hidden="true"
        className="dot-grid pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 top-1/4 size-[28rem] rounded-full bg-accent/20 blur-3xl motion-safe:animate-pulse"
      />

      <div className="relative mx-auto grid w-full max-w-6xl items-center gap-12 px-5 py-20 md:px-10 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-7">
          <p
            className={`${enter} mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-surface/70 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.12em] text-muted-foreground backdrop-blur`}
          >
            <span className="relative flex size-2" aria-hidden="true">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-highlight opacity-75" />
              <span className="relative inline-flex size-2 rounded-full bg-highlight" />
            </span>
            {profile.role}
          </p>

          <h1
            id="hero-title"
            className={`${enter} delay-150 text-[clamp(2.25rem,5.5vw,4rem)] font-bold leading-[1] tracking-tight text-foreground`}
          >
            {first} <span className="text-gradient">{last}</span>
          </h1>

          <p
            className={`${enter} delay-300 mt-6 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground md:text-lg`}
          >
            {profile.intro}
          </p>

          <div className={`${enter} delay-500 mt-10 flex flex-col gap-5 sm:flex-row sm:items-center`}>
            <div className="flex flex-col gap-3 sm:flex-row">
              <ArrowLink href="#project">Project</ArrowLink>
              <ArrowLink href={links.resume} variant="outline" external>
                Resume
              </ArrowLink>
            </div>

            <div className="flex items-center gap-3 sm:ml-2">
              <a href={links.github} target="_blank" rel="noopener noreferrer" className={socialClass}>
                <GithubIcon className="size-5 transition-transform duration-300 group-hover:scale-110" />
                <span className="sr-only">GitHub profile (opens in a new tab)</span>
              </a>

              <a href={links.linkedin} target="_blank" rel="noopener noreferrer" className={socialClass}>
                <LinkedinIcon className="size-5 transition-transform duration-300 group-hover:scale-110" />
                <span className="sr-only">LinkedIn profile (opens in a new tab)</span>
              </a>
            </div>
          </div>
        </div>

        <div className={`${enter} delay-300 lg:col-span-5`}>
          <div className="mx-auto w-full max-w-sm lg:max-w-md">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] border border-border bg-surface/60 p-2 shadow-2xl">
              <div className="relative h-full w-full overflow-hidden rounded-[1.5rem]">
                <Image
                  src={profile.portrait}
                  alt="Portrait of Tanvi Gavatre"
                  fill
                  priority
                  sizes="(min-width: 1024px) 35vw, 80vw"
                  className="object-cover object-[50%_30%]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
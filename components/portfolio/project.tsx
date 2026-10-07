import { links, project } from '@/lib/site-data'
import { ArrowLink } from './arrow-link'
import { Reveal } from './reveal'
import { SectionHeading } from './section-heading'
import { Spotlight } from './spotlight'

export function Project() {
  return (
    <section id="project" aria-labelledby="project-title">
      <div className="mx-auto max-w-6xl px-5 py-20 md:px-10 md:py-28">
        <SectionHeading
          id="project-title"
          label="Project · Case Study"
          title={
            <>
              {project.title}
              <span className="mt-2 block text-xl font-medium tracking-tight text-muted-foreground md:text-2xl">
                {project.subtitle}
              </span>
            </>
          }
        />

        <Reveal>
          <Spotlight className="grid gap-10 rounded-3xl border border-border bg-surface/60 p-6 md:p-10 lg:grid-cols-12 lg:gap-12">
            <div className="lg:col-span-7">
              <h3 className="mb-3 text-sm font-semibold uppercase tracking-[0.12em] text-accent">Core Idea</h3>
              <p className="text-pretty text-base leading-relaxed text-foreground">{project.core}</p>
            </div>

            <div className="lg:col-span-5">
              <h3 className="mb-3 text-sm font-semibold uppercase tracking-[0.12em] text-accent">Technologies</h3>
              <ul className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <li
                    key={tech}
                    className="rounded-full border border-border bg-background/60 px-4 py-1.5 text-sm font-medium text-foreground transition-colors duration-300 hover:border-highlight hover:text-highlight"
                  >
                    {tech}
                  </li>
                ))}
              </ul>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <ArrowLink href={links.roadintel} external arrow="up-right">
                  Live Project
                </ArrowLink>
                <ArrowLink href={links.roadintelRepo} external arrow="up-right" variant="outline">
                  GitHub
                </ArrowLink>
              </div>
            </div>
          </Spotlight>
        </Reveal>

        
    </section>
  )
}

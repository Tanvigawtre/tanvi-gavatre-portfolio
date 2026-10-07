import { skillGroups } from '@/lib/site-data'
import { Reveal } from './reveal'
import { SectionHeading } from './section-heading'
import { Spotlight } from './spotlight'

function SkillItem({ name }: { name: string }) {
  return (
    <li className="group flex items-center justify-between rounded-xl border border-border bg-background/60 px-4 py-3 transition-all duration-300 hover:-translate-y-0.5 hover:border-accent hover:bg-accent/10">
      <span className="text-sm font-semibold text-foreground md:text-base">{name}</span>
      <span
        aria-hidden="true"
        className="size-1.5 rounded-full bg-border transition-all duration-300 group-hover:scale-150 group-hover:bg-highlight"
      />
    </li>
  )
}

export function Skills() {
  return (
    <section id="skills" aria-labelledby="skills-title">
      <div className="mx-auto max-w-6xl px-5 py-20 md:px-10 md:py-28">
        <SectionHeading id="skills-title" label="Skills" title="Tools I build with." />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {skillGroups.map((group, i) => (
            <Reveal key={group.title} delay={i * 80}>
              <Spotlight className="flex h-full flex-col rounded-2xl border border-border bg-surface/60 p-6 transition-colors duration-300 hover:border-accent/60">
                <h3 className="mb-5 text-sm font-semibold uppercase tracking-[0.12em] text-accent">
                  {group.title}
                </h3>
                <ul className="flex flex-col gap-2.5">
                  {group.skills.map((skill) => (
                    <SkillItem key={skill} name={skill} />
                  ))}
                </ul>
              </Spotlight>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

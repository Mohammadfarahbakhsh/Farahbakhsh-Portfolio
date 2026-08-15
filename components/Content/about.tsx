import { Badge } from '@/components/ui/badge'
import { profile, skills } from '@/lib/portfolio-data'
import { SectionHeading } from '../ui/section-heading'
import { Reveal } from '../ui/reveal'

export function About() {
  return (
    <section id="about" className="mx-auto flex flex-col gap-6 max-w-5xl px-6 py-24 sm:py-32">
      <SectionHeading className="pt-7 " index="01 — About" title="A little about me" />
      <div className="items-center grid  gap-12 md:grid-cols-5">
        <Reveal
          className="flex justify-center flex-col gap-5 md:col-span-3 h-full"
          delay={0.1}
        >
          {profile.bio.map((paragraph) => (
            <p
              key={paragraph.slice(0, 24)}
              className="text-pretty leading-relaxed text-muted-foreground"
            >
              {paragraph}
            </p>
          ))}

          <p className="text-sm text-muted-foreground">{profile.location}</p>
            <blockquote
            dir="rtl"
            lang="fa"
            className="border-r-2 border-primary/40 pr-4 text-pretty font-sans text-base leading-loose text-muted-foreground"
          >
            try to be better don`t excuse
          </blockquote>
        </Reveal>

        <Reveal
          className="flex flex-col gap-6 md:col-span-2"
          delay={0.2}
          direction="left"
        >
          {skills.map((group) => (
            <div key={group.category} className="flex flex-col gap-2.5">
              <h3 className="font-mono text-xs uppercase tracking-widest text-primary">
                {group.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <Badge key={item} variant="secondary" className="font-sans">
                    {item}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  )
}
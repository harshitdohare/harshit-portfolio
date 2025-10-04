import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Briefcase, Calendar } from "lucide-react"

const experiences = [
  {
    title: "Senior Full Stack Developer",
    company: "NTT",
    period: "2022 - Present",
    description:
      "Leading development of enterprise web applications using React, Next.js, and Node.js. Mentoring junior developers and establishing coding standards.",
    technologies: ["TypeScript", "React", "Next.js", "Node.js", "PostgreSQL", "AWS"],
  },
  {
    title: "Full Stack Developer",
    company: "xyz",
    period: "2020 - 2022",
    description:
      "Built and maintained multiple client projects, focusing on responsive design and performance optimization. Collaborated with designers and product managers.",
    technologies: ["JavaScript", "React", "Express", "MongoDB", "Docker"],
  },
  {
    title: "Frontend Developer",
    company: "abc",
    period: "2018 - 2020",
    description:
      "Developed user-facing features for SaaS platform. Implemented modern UI/UX designs and improved application performance by 40%.",
    technologies: ["JavaScript", "Vue.js", "Tailwind CSS", "REST APIs"],
  },
]

export function ExperienceSection() {
  return (
    <section id="experience" className="py-24 px-4 bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        <div className="space-y-4 mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Experience</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            My professional journey in software development
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card key={index} className="p-8 hover:shadow-lg transition-shadow">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                <div className="space-y-2">
                  <h3 className="text-2xl font-semibold flex items-center gap-2">
                    <Briefcase className="h-5 w-5 text-primary" />
                    {exp.title}
                  </h3>
                  <p className="text-lg text-muted-foreground">{exp.company}</p>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Calendar className="h-4 w-4" />
                  <span className="font-mono text-sm">{exp.period}</span>
                </div>
              </div>

              <p className="text-muted-foreground leading-relaxed mb-4">{exp.description}</p>

              <div className="flex flex-wrap gap-2">
                {exp.technologies.map((tech) => (
                  <Badge key={tech} variant="secondary">
                    {tech}
                  </Badge>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

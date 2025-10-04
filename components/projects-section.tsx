import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"

const projects = [
  {
    title: "E-Commerce Platform",
    description:
      "Full-featured online store with payment integration, inventory management, and admin dashboard. Built with Next.js and Stripe.",
    technologies: ["Next.js", "TypeScript", "Stripe", "PostgreSQL", "Tailwind CSS"],
    github: "https://github.com",
    demo: "https://demo.com",
  },
  {
    title: "Task Management App",
    description:
      "Collaborative project management tool with real-time updates, team collaboration features, and analytics dashboard.",
    technologies: ["React", "Node.js", "Socket.io", "MongoDB", "Express"],
    github: "https://github.com",
    demo: "https://demo.com",
  },
  // {
  //   title: "AI Content Generator",
  //   description:
  //     "SaaS application leveraging AI to generate marketing content. Features user authentication, subscription management, and API integration.",
  //   technologies: ["Next.js", "OpenAI API", "Prisma", "Supabase", "Stripe"],
  //   github: "https://github.com",
  //   demo: "https://demo.com",
  // },
  // {
  //   title: "Developer Portfolio Template",
  //   description:
  //     "Open source portfolio template for developers. Fully customizable, responsive, and optimized for performance.",
  //   technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
  //   github: "https://github.com",
  //   demo: "https://demo.com",
  // },
]

export function ProjectsSection() {
  return (
    <section id="projects" className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="space-y-4 mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Projects</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            A selection of my recent work and open source contributions
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="p-6 hover:shadow-lg transition-shadow flex flex-col">
              <div className="space-y-4 flex-1">
                <h3 className="text-2xl font-semibold">{project.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="outline">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>

              <div className="flex gap-3 mt-6">
                <Button variant="outline" size="sm" asChild className="flex-1 bg-transparent">
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    <Github className="h-4 w-4 mr-2" />
                    Code
                  </a>
                </Button>
                <Button size="sm" asChild className="flex-1">
                  <a href={project.demo} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Demo
                  </a>
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

import { Card } from "@/components/ui/card"
import { Code2, Rocket, Brain } from "lucide-react"

const highlights = [
  {
    icon: Code2,
    title: "Clean Code",
    description: "Writing maintainable, scalable, and well-documented code following best practices.",
  },
  {
    icon: Rocket,
    title: "Fast Delivery",
    description: "Efficient development workflow ensuring timely project completion without compromising quality.",
  },
  {
    icon: Brain,
    title: "AI Integration",
    description: "Building intelligent applications with LLMs, LangChain, and modern AI workflows.",
  },
]

export function AboutSection() {
  return (
    <section id="about" className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="space-y-4 mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">About Me</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            Passionate about building exceptional digital experiences
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <p className="text-lg leading-relaxed text-muted-foreground">
              I'm a full-stack software developer and AI engineer with a passion for creating elegant, intelligent web
              applications. My journey spans both traditional web development and cutting-edge AI technologies, allowing
              me to build solutions that are both powerful and user-friendly.
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground">
              From architecting scalable backend systems to integrating LLMs with LangChain and building automated
              workflows with n8n, I bring a comprehensive skill set to every project. I believe in writing clean,
              maintainable code and staying current with the latest developments in both web and AI technologies.
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground">
              Currently available for freelance opportunities and open source collaboration. Let's build something
              amazing together.
            </p>
          </div>

          <div className="grid gap-6">
            {highlights.map((highlight) => (
              <Card key={highlight.title} className="p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-primary/10 text-primary">
                    <highlight.icon className="h-6 w-6" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="font-semibold text-lg">{highlight.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{highlight.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

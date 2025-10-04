import { Card } from "@/components/ui/card"
import { Code2, Database, Layers, Wrench, Cloud, Brain } from "lucide-react"

const skillCategories = [
  {
    icon: Code2,
    title: "Frontend",
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Vue.js", "HTML/CSS"],
  },
  {
    icon: Database,
    title: "Backend",
    skills: ["Node.js", "Express", "PostgreSQL", "MongoDB", "REST APIs", "GraphQL"],
  },
  // {
  //   icon: Layers,
  //   title: "Full Stack",
  //   skills: ["Next.js", "tRPC", "Prisma", "Authentication", "Payment Integration", "Real-time"],
  // },
  {
    icon: Brain,
    title: "AI Engineering",
    skills: ["LangChain", "LLMs", "n8n", "OpenAI", "Vector DBs", "RAG"],
  },
  {
    icon: Wrench,
    title: "Tools",
    skills: ["Git", "Docker", "VS Code", "Postman", "Figma", "Linear"],
  },
  // {
  //   icon: Cloud,
  //   title: "Cloud & DevOps",
  //   skills: ["Vercel", "AWS", "CI/CD", "GitHub Actions", "Netlify", "Railway"],
  // },
]

export function SkillsSection() {
  return (
    <section id="skills" className="py-24 px-4 bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        <div className="space-y-4 mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Skills</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            Technologies and tools I work with
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category) => (
            <Card key={category.title} className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg bg-primary/10 text-primary">
                  <category.icon className="h-5 w-5" />
                </div>
                <h3 className="text-xl font-semibold">{category.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span key={skill} className="px-3 py-1 text-sm bg-secondary text-secondary-foreground rounded-md">
                    {skill}
                  </span>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

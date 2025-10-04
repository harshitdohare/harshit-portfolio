import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Mail, Github, Linkedin, Twitter } from "lucide-react"

const contactMethods = [
  // {
  //   icon: Mail,
  //   label: "Email",
  //   value: "mailharshitdohare@gmail.com",
  //   href: "mailto:mailharshitdohare@gmail.com",
  // },
  {
    icon: Github,
    label: "GitHub",
    value: "@harshitdohare",
    href: "https://github.com/harshitdohare",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "Harshit Dohare",
    href: "https://linkedin.com/in/harshitdohare",
  },
  {
    icon: Twitter,
    label: "Twitter",
    value: "@harshit_dohare",
    href: "https://twitter.com/harshit_dohare",
  },
]

export function ContactSection() {
  return (
    <section id="contact" className="py-24 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="space-y-4 mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Get In Touch</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            Available for freelance projects and open source collaboration
          </p>
        </div>

        <Card className="p-8 md:p-12">
          <div className="space-y-8">
            <p className="text-lg text-center text-muted-foreground leading-relaxed">
              I'm always interested in hearing about new projects and opportunities. Whether you have a question or just
              want to say hi, feel free to reach out!
            </p>

            <div className="grid sm:grid-cols-3 gap-4">
              {contactMethods.map((method) => (
                <Button
                  key={method.label}
                  variant="outline"
                  size="lg"
                  asChild
                  className="justify-start h-auto py-4 bg-transparent"
                >
                  <a href={method.href} target="_blank" rel="noopener noreferrer">
                    <method.icon className="h-5 w-5 mr-3 flex-shrink-0" />
                    <div className="text-left">
                      <div className="text-sm text-muted-foreground">{method.label}</div>
                      <div className="font-medium">{method.value}</div>
                    </div>
                  </a>
                </Button>
              ))}
            </div>

            <div className="pt-8 text-center">
              <Button size="lg" asChild className="rounded-full">
                <a href="mailto:mailharshitdohare@gmail.com">
                  <Mail className="h-5 w-5 mr-2" />
                  Send Email
                </a>
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </section>
  )
}

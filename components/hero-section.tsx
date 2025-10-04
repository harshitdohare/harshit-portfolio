"use client"

import { ArrowDown } from "lucide-react"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4 pt-20">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        <div className="space-y-4">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-balance">
            Full Stack Developer & AI Engineer
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground font-mono">
            Building intelligent solutions with TypeScript & AI
          </p>
        </div>

        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed text-pretty">
          I craft scalable web applications and AI-powered solutions. Specializing in React, Next.js, LangChain, LLMs,
          and modern AI workflows with n8n.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <Button size="lg" asChild className="rounded-full">
            <a href="#contact">Get In Touch</a>
          </Button>
          <Button size="lg" variant="outline" asChild className="rounded-full bg-transparent">
            <a href="#projects">View Projects</a>
          </Button>
        </div>

        <div className="pt-12 animate-bounce">
          <a href="#about" className="inline-block text-muted-foreground hover:text-foreground transition-colors">
            <ArrowDown className="h-6 w-6" />
            <span className="sr-only">Scroll down</span>
          </a>
        </div>
      </div>
    </section>
  )
}

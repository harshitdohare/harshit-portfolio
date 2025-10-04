"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { useTheme } from "next-themes"
import { Moon, Sun } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const navItems = [
  // { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Contact", href: "#contact" },
]

export function CurvedNavbar() {
  const [scrolled, setScrolled] = useState(false)
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <nav
      className={cn(
        "fixed top-4 left-1/2 -translate-x-1/2 z-50 transition-all duration-500 ease-out",
        scrolled ? "w-[95%] max-w-5xl" : "w-auto",
      )}
    >
      <div
        className={cn(
          "backdrop-blur-md bg-card/80 border border-border shadow-lg transition-all duration-500 ease-out",
          scrolled ? "rounded-2xl px-8 py-4" : "rounded-full px-6 py-3",
        )}
      >
        <div className="flex items-center justify-between gap-2">
          <Link href="#home" className="font-semibold text-foreground hover:text-primary transition-colors shrink-0">
            Harshit
          </Link>

          <div className={cn("flex items-center transition-all duration-500", scrolled ? "gap-1" : "gap-0")}>
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "text-sm font-medium text-muted-foreground hover:text-foreground transition-all rounded-lg hover:bg-secondary/50",
                  scrolled ? "px-4 py-2" : "px-2 py-1.5",
                )}
              >
                {item.name}
              </Link>
            ))}
          </div>

          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="rounded-full shrink-0"
          >
            {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            <span className="sr-only">Toggle theme</span>
          </Button>
        </div>
      </div>
    </nav>
  )
}

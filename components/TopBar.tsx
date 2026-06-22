"use client"

import { useState, useEffect, useCallback } from "react"
import { Clock, Search, Home, Briefcase, Mail, SunMoon, Navigation } from "lucide-react"
import { useTheme } from "next-themes"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command"

function scrollToSection(id: string) {
  const el = document.getElementById(id)
  if (el) {
    el.scrollIntoView({ behavior: "smooth", block: "start" })
  }
}

const navItems = [
  { id: "home", label: "home", desc: "go to home page" },
  { id: "resume", label: "resume", desc: "view my resume" },
  { id: "download-resume", label: "download resume", desc: "download my resume" },
  { id: "experience", label: "experience", desc: "view my work experience" },
  { id: "featured-work", label: "contributions", desc: "view my featured pull requests" },
  { id: "projects", label: "projects", desc: "view my projects" },
  { id: "contact", label: "contact", desc: "let's get in touch" },
  { id: "toggle-theme", label: "toggle theme", desc: "switch dark/light theme" },
]

export function TopBar() {
  const [open, setOpen] = useState(false)
  const [time, setTime] = useState<string>("")
  const [isScrolled, setIsScrolled] = useState(false)
  const { resolvedTheme, setTheme } = useTheme()
  const [search, setSearch] = useState("")
  const [selectedValue, setSelectedValue] = useState("home")

  useEffect(() => {
    if (open) {
      setSearch("")
      setSelectedValue("home")
    }
  }, [open])

  const handleSearchChange = (val: string) => {
    setSearch(val)
    const query = val.toLowerCase().trim()
    if (query === "h" || query === "home") {
      setSelectedValue("home")
    } else if (query === "r" || query === "resume") {
      setSelectedValue("resume")
    } else if (query === "d" || query === "download" || query === "download resume") {
      setSelectedValue("download-resume")
    } else if (query === "e" || query === "experience") {
      setSelectedValue("experience")
    } else if (query === "f" || query === "featured" || query === "work") {
      setSelectedValue("featured-work")
    } else if (query === "p" || query === "projects") {
      setSelectedValue("projects")
    } else if (query === "c" || query === "contact") {
      setSelectedValue("contact")
    } else if (query === "t" || query === "toggle" || query === "theme") {
      setSelectedValue("toggle-theme")
    }
  }

  useEffect(() => {
    const updateTime = () => {
      const date = new Date()
      const options: Intl.DateTimeFormatOptions = {
        timeZone: "Asia/Kolkata",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
      }
      setTime(date.toLocaleTimeString("en-GB", options))
    }
    updateTime()
    const timer = setInterval(updateTime, 1000)
    return () => clearInterval(timer)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const runCommand = useCallback((id: string) => {
    setOpen(false)
    if (id === "home") {
      window.scrollTo({ top: 0, behavior: "smooth" })
    } else if (id === "toggle-theme") {
      setTheme(resolvedTheme === "dark" ? "light" : "dark")
    } else if (id === "resume") {
      window.open("/resume.pdf", "_blank")
    } else if (id === "download-resume") {
      const link = document.createElement("a")
      link.href = "/resume.pdf"
      link.download = "resume.pdf"
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
    } else {
      scrollToSection(id)
    }
  }, [resolvedTheme, setTheme])

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Open command palette with cmd/ctrl + k
      if (e.key.toLowerCase() === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        setOpen((prev) => !prev)
        return
      }

      // Ignore single-key shortcuts when the palette is open, when modifier keys
      // are pressed, or when the user is typing in an input/textarea
      const target = e.target as HTMLElement | null
      const isTyping =
        target?.tagName === "INPUT" ||
        target?.tagName === "TEXTAREA" ||
        target?.isContentEditable
      if (open || isTyping || e.metaKey || e.ctrlKey || e.altKey) return

      if (e.key.toLowerCase() === "h") {
        e.preventDefault()
        window.scrollTo({ top: 0, behavior: "smooth" })
      } else if (e.key.toLowerCase() === "r") {
        e.preventDefault()
        window.open("/resume.pdf", "_blank")
      } else if (e.key.toLowerCase() === "d") {
        e.preventDefault()
        const link = document.createElement("a")
        link.href = "/resume.pdf"
        link.download = "resume.pdf"
        document.body.appendChild(link)
        link.click()
        document.body.removeChild(link)
      } else if (e.key.toLowerCase() === "e") {
        e.preventDefault()
        scrollToSection("experience")
      } else if (e.key.toLowerCase() === "f") {
        e.preventDefault()
        scrollToSection("featured-work")
      } else if (e.key.toLowerCase() === "p") {
        e.preventDefault()
        scrollToSection("projects")
      } else if (e.key.toLowerCase() === "c") {
        e.preventDefault()
        scrollToSection("contact")
      } else if (e.key.toLowerCase() === "t") {
        e.preventDefault()
        setTheme(resolvedTheme === "dark" ? "light" : "dark")
      }
    }

    document.addEventListener("keydown", handleKeyDown)
    return () => document.removeEventListener("keydown", handleKeyDown)
  }, [open, resolvedTheme, setTheme])

  return (
    <>
      <header
        className={`sticky top-0 z-50 w-full bg-white/80 dark:bg-neutral-950/80 backdrop-blur-md transition-all duration-300 ease-in-out ${
          isScrolled ? "opacity-0 -translate-y-full pointer-events-none" : "opacity-100 translate-y-0"
        }`}
      >
        <div className="mx-auto flex h-14 w-full max-w-2xl items-center justify-between gap-4 px-4 sm:px-6 md:px-8">
          <span className="text-sm font-medium tracking-widest text-neutral-700 dark:text-neutral-300">EST. 2005</span>

          <div className="flex items-center gap-3 sm:gap-5">
            <div className="hidden items-center gap-2 text-sm tabular-nums text-neutral-500 dark:text-neutral-400 sm:flex">
              <Clock className="h-4 w-4" />
              <span>{time} GMT+5:30</span>
            </div>

            <button
              type="button"
              onClick={() => setOpen(true)}
              aria-label="Open command menu"
              className="flex items-center gap-3 rounded-lg border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900 px-3 py-1.5 text-neutral-500 dark:text-neutral-400 transition-colors hover:bg-neutral-100 dark:hover:bg-neutral-800"
            >
              <Search className="h-4 w-4" />
              <kbd className="flex items-center gap-1 text-[11px] font-medium">
                <span className="flex h-5 min-w-5 items-center justify-center rounded border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-950 px-1">
                  ⌘
                </span>
                <span className="flex h-5 min-w-5 items-center justify-center rounded border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-950 px-1">
                  K
                </span>
              </kbd>
            </button>
          </div>
        </div>
      </header>

      {/* Floating pill search button when scrolled */}
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label="Open command menu"
        className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 flex items-center gap-3 rounded-full border border-neutral-200 dark:border-neutral-850 bg-white/90 dark:bg-neutral-950/90 backdrop-blur-md pl-4 pr-3 py-2 text-neutral-500 dark:text-neutral-400 shadow-[0_4px_20px_rgba(0,0,0,0.15)] dark:shadow-[0_4px_20px_rgba(0,0,0,0.5)] hover:border-neutral-300 dark:hover:border-neutral-700 transition-all duration-300 ease-out ${
          isScrolled
            ? "opacity-100 translate-y-0 scale-100"
            : "opacity-0 -translate-y-4 scale-95 pointer-events-none"
        }`}
      >
        <Search className="h-4 w-4 text-neutral-500 dark:text-neutral-400" />
        <span className="text-sm font-normal text-neutral-400 dark:text-neutral-500 mr-1 select-none">Search...</span>
        <kbd className="flex items-center gap-1.5 text-[11px] font-medium">
          <span className="flex h-5 w-5 items-center justify-center rounded-[5px] border border-neutral-200 dark:border-neutral-800 bg-neutral-100 dark:bg-neutral-900 text-neutral-500 dark:text-neutral-400 font-sans">
            ⌘
          </span>
          <span className="flex h-5 w-5 items-center justify-center rounded-[5px] border border-neutral-200 dark:border-neutral-800 bg-neutral-100 dark:bg-neutral-900 text-neutral-500 dark:text-neutral-400 font-sans">
            K
          </span>
        </kbd>
      </button>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent
          onCloseAutoFocus={(e) => e.preventDefault()}
          className="overflow-hidden p-0 shadow-2xl border border-neutral-200 dark:border-neutral-900 bg-white dark:bg-[#0c0c0e] max-w-lg"
        >
          <Command
            shouldFilter={false}
            value={selectedValue}
            onValueChange={setSelectedValue}
            className="bg-white dark:bg-[#0c0c0e] text-neutral-800 dark:text-neutral-200"
          >
            <CommandInput
              placeholder="Type a command or search..."
              value={search}
              onValueChange={handleSearchChange}
              className="flex h-12 w-full bg-transparent py-3 text-sm outline-none placeholder:text-neutral-400 dark:placeholder:text-neutral-500 placeholder:font-light disabled:cursor-not-allowed disabled:opacity-50"
            />
            <CommandList className="max-h-[330px] overflow-y-auto overflow-x-hidden p-2">
              <CommandEmpty className="py-6 text-center text-sm text-neutral-500">No results found.</CommandEmpty>
              <CommandGroup heading="navigation" className="px-2 py-1 text-[11px] font-semibold text-neutral-400 dark:text-neutral-500 uppercase tracking-wider">
                {navItems.map((item) => (
                  <CommandItem
                    key={item.id}
                    value={item.id}
                    onSelect={() => runCommand(item.id)}
                    className="w-full flex items-start gap-4 p-3 rounded-lg cursor-pointer transition-colors duration-150 data-[selected=true]:bg-neutral-100 dark:data-[selected=true]:bg-neutral-900/60 mb-1"
                  >
                    <Navigation className="h-4.5 w-4.5 text-neutral-400 dark:text-neutral-500 mt-0.5 shrink-0" />
                    <div className="flex flex-col text-left">
                      <span className="text-sm font-semibold text-neutral-800 dark:text-neutral-200">{item.label}</span>
                      <span className="text-xs text-neutral-450 dark:text-neutral-400 mt-0.5 font-light">{item.desc}</span>
                    </div>
                  </CommandItem>
                ))}
              </CommandGroup>
            </CommandList>
            
            {/* Command Palette Footer */}
            <div className="flex items-center gap-4 px-4 py-3 border-t border-neutral-100 dark:border-neutral-900 bg-neutral-50 dark:bg-neutral-950/30 text-[10px] text-neutral-400 dark:text-neutral-500 select-none">
              <span className="flex items-center gap-1.5">
                <kbd className="px-1.5 py-0.5 rounded border border-neutral-200 dark:border-neutral-800 bg-neutral-100 dark:bg-neutral-900 text-neutral-500 dark:text-neutral-400 font-sans">⇅</kbd> navigate
              </span>
              <span className="flex items-center gap-1.5">
                <kbd className="px-1.5 py-0.5 rounded border border-neutral-200 dark:border-neutral-800 bg-neutral-100 dark:bg-neutral-900 text-neutral-500 dark:text-neutral-400 font-sans">↵</kbd> select
              </span>
              <span className="flex items-center gap-1.5">
                <kbd className="px-1.5 py-0.5 rounded border border-neutral-200 dark:border-neutral-800 bg-neutral-100 dark:bg-neutral-900 text-neutral-500 dark:text-neutral-400 font-sans">esc</kbd> close
              </span>
            </div>
          </Command>
        </DialogContent>
      </Dialog>
    </>
  )
}

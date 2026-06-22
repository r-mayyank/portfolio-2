"use client"

import { useTheme } from "next-themes"
import { useEffect, useState } from "react"

export function TextThemeSwitcher() {
  const { resolvedTheme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <div className="flex items-center text-sm font-light tracking-wide text-neutral-400 dark:text-neutral-500 select-none">
        <span>light</span>
        <span className="mx-2 text-neutral-300 dark:text-neutral-700">/</span>
        <span>dark</span>
      </div>
    )
  }

  const isDark = resolvedTheme === "dark"

  return (
    <div className="flex items-center text-sm font-light tracking-wide select-none">
      <button
        type="button"
        onClick={() => setTheme("light")}
        className={`transition-colors duration-250 ${
          !isDark
            ? "text-neutral-900 dark:text-neutral-100 font-medium"
            : "text-neutral-400 dark:text-neutral-500 hover:text-neutral-600 dark:hover:text-neutral-400"
        }`}
      >
        light
      </button>
      <span className="mx-2 text-neutral-300 dark:text-neutral-700">/</span>
      <button
        type="button"
        onClick={() => setTheme("dark")}
        className={`transition-colors duration-250 ${
          isDark
            ? "text-neutral-900 dark:text-neutral-100 font-medium"
            : "text-neutral-400 dark:text-neutral-500 hover:text-neutral-600 dark:hover:text-neutral-400"
        }`}
      >
        dark
      </button>
    </div>
  )
}

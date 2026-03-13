'use client'

import { useEffect, useCallback, useSyncExternalStore } from 'react'
import { MoonIcon, SunIcon } from '@heroicons/react/24/outline'

let currentTheme = 'light'
const listeners = new Set()

function subscribe(callback) {
  listeners.add(callback)
  return () => listeners.delete(callback)
}

function getSnapshot() {
  return currentTheme
}

function getServerSnapshot() {
  return 'light'
}

function setThemeValue(next) {
  currentTheme = next
  document.documentElement.classList.toggle('dark', next === 'dark')
  localStorage.setItem('theme', next)
  listeners.forEach(fn => fn())
}

export default function ThemeToggle() {
  const theme = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot)

  useEffect(() => {
    const saved = localStorage.getItem('theme')
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    const initial = saved || (systemPrefersDark ? 'dark' : 'light')
    if (initial !== currentTheme) {
      currentTheme = initial
      document.documentElement.classList.toggle('dark', initial === 'dark')
      listeners.forEach(fn => fn())
    }
  }, [])

  const toggleTheme = useCallback(() => {
    setThemeValue(currentTheme === 'dark' ? 'light' : 'dark')
  }, [])

  return (
    <button
      onClick={toggleTheme}
      className="fixed top-4 right-4 z-50 p-2 rounded-full bg-white/80 dark:bg-gray-900/80 border border-gray-200 dark:border-gray-700 backdrop-blur-sm hover:cursor-pointer transition-all duration-300 group"
      aria-label="Toggle theme"
    >
      <div className="relative w-5 h-5">
        <SunIcon className={`w-5 h-5 transition-all duration-300 text-gray-600 dark:text-gray-400 ${
          theme === 'dark' ? 'opacity-0 rotate-180 scale-50' : 'opacity-100 rotate-0 scale-100 group-hover:rotate-180'
        }`} />
        <MoonIcon className={`absolute inset-0 w-5 h-5 transition-all duration-300 text-gray-400 ${
          theme === 'dark' ? 'opacity-100 rotate-0 scale-100 group-hover:-rotate-180' : 'opacity-0 -rotate-180 scale-50'
        }`} />
      </div>
    </button>
  )
}

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
      className="fixed top-6 right-6 p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
      aria-label="Toggle theme"
    >
      {theme === 'dark' ? (
        <SunIcon className="w-5 h-5 text-yellow-500" />
      ) : (
        <MoonIcon className="w-5 h-5 text-gray-700" />
      )}
    </button>
  )
}

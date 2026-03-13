'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

const NAV_ITEMS = [
  { label: 'about', path: '/' },
  { label: 'research', path: '/research' },
  { label: 'experience', path: '/experience' },
  { label: 'writing', path: '/writing' },
  { label: 'contact', path: '/contact' },
]

export default function MobileNav() {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  return (
    <div className="lg:hidden sticky top-0 z-40 bg-[#f8faff]/90 dark:bg-[#080c14]/90 backdrop-blur-sm border-b border-gray-200 dark:border-gray-800">
      <div className="flex items-center justify-between px-6 py-4">
        <span className="font-mono text-sm text-gray-900 dark:text-gray-100">Debjeet Chakravorty</span>
        <button
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
          className="p-1 text-gray-700 dark:text-gray-300"
        >
          {open ? (
            <XMarkIcon className="w-6 h-6" />
          ) : (
            <Bars3Icon className="w-6 h-6" />
          )}
        </button>
      </div>

      {open && (
        <div className="w-full bg-[#f8faff]/95 dark:bg-[#080c14]/95 backdrop-blur-sm border-b border-gray-200 dark:border-gray-800 px-6 py-4 flex flex-col gap-3">
          {NAV_ITEMS.map((item) => {
            const isActive = pathname === item.path
            return (
              <Link
                key={item.path}
                href={item.path}
                onClick={() => setOpen(false)}
                className={`text-lg transition-colors duration-200 ${
                  isActive
                    ? 'italic text-gray-900 dark:text-gray-100'
                    : 'text-gray-500 dark:text-gray-500 hover:text-gray-800 dark:hover:text-gray-300'
                }`}
              >
                {item.label}
              </Link>
            )
          })}
        </div>
      )}
    </div>
  )
}

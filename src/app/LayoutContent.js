'use client'

import { useState, useEffect } from 'react'
import DesktopSidebar from '@/components/DesktopSidebar'
import MobileNav from '@/components/MobileNav'
import PacketRain from '@/components/PacketRain'
import GlobalImageOverlay from '@/components/GlobalImageOverlay'

export default function LayoutContent({ children }) {
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    const img = new window.Image()
    img.src = '/profile.jpg'
    img.onload = () => {
      setTimeout(() => setLoaded(true), 100)
    }
    img.onerror = () => {
      setTimeout(() => setLoaded(true), 100)
    }
  }, [])

  return (
    <>
      <PacketRain />
      <GlobalImageOverlay />
      <div
        className={`transition-all duration-1000 ease-out ${
          loaded ? 'opacity-100 blur-none' : 'opacity-0 blur-sm'
        }`}
      >
        {/* Mobile nav */}
        <div className="lg:hidden">
          <MobileNav />
        </div>

        {/* Desktop layout: sidebar + main content */}
        <div className="lg:grid lg:grid-cols-7 min-h-screen">
          {/* Sidebar col (lg:col-span-2) */}
          <div
            className={`lg:col-span-2 transition-all duration-700 ease-out delay-200 ${
              loaded ? 'translate-x-0 opacity-100' : '-translate-x-4 opacity-0'
            }`}
          >
            <DesktopSidebar />
          </div>

          {/* Main content col (lg:col-span-5) */}
          <div
            className={`lg:col-span-5 lg:pl-8 px-6 py-12 lg:py-16 max-w-2xl lg:max-w-none transition-all duration-700 ease-out delay-400 ${
              loaded ? 'translate-x-0 opacity-100' : 'translate-x-4 opacity-0'
            }`}
          >
            {children}
          </div>
        </div>
      </div>
    </>
  )
}

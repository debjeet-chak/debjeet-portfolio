'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'

const IMAGE_MAP = {
  jhu: { src: 'https://placehold.co/800x600/1a2744/4a90d9?text=Johns+Hopkins+University', alt: 'Johns Hopkins University' },
  mumbai: { src: 'https://placehold.co/800x600/1a1a2e/e94560?text=Mumbai%2C+India', alt: 'Mumbai, India' },
  baltimore: { src: 'https://placehold.co/800x600/0d1b2a/00b4d8?text=Baltimore%2C+MD', alt: 'Baltimore, MD' },
  ctf: { src: 'https://placehold.co/800x600/0a0a0a/00ff41?text=Z0DIAC+CTF+Team', alt: 'Z0DIAC CTF Team' },
}

export default function GlobalImageOverlay() {
  const [activeImage, setActiveImage] = useState(null)

  useEffect(() => {
    const handler = (e) => {
      const { imageType, show } = e.detail
      if (show) {
        setActiveImage(imageType)
      } else {
        setActiveImage((prev) => (prev === imageType ? null : prev))
      }
    }

    window.addEventListener('showImage', handler)

    // Mobile: tap outside image-trigger to hide
    const clickOutside = (e) => {
      if (!e.target.closest('.image-trigger')) {
        setActiveImage(null)
      }
    }
    document.addEventListener('click', clickOutside)

    return () => {
      window.removeEventListener('showImage', handler)
      document.removeEventListener('click', clickOutside)
    }
  }, [])

  if (!activeImage || !IMAGE_MAP[activeImage]) return null

  const { src, alt } = IMAGE_MAP[activeImage]

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center pointer-events-none">
      <div className="relative w-[80vw] h-[80vh]">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={src}
          alt={alt}
          className="w-full h-full object-contain opacity-90 rounded-lg shadow-2xl"
        />
      </div>
    </div>
  )
}

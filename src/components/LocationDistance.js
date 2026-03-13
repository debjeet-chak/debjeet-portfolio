'use client'

import { useEffect, useState } from 'react'

const BALTIMORE = { lat: 39.2904, lng: -76.6122 }
const R = 3959 // miles

function haversine(lat1, lon1, lat2, lon2) {
  const toRad = (deg) => (deg * Math.PI) / 180
  const dLat = toRad(lat2 - lat1)
  const dLon = toRad(lon2 - lon1)
  const a =
    Math.sin(dLat / 2) ** 2 +
    Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) * Math.sin(dLon / 2) ** 2
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a))
  return Math.round(R * c)
}

export default function LocationDistance() {
  const [distance, setDistance] = useState(null)
  const [locationError, setLocationError] = useState(false)
  const [typedText, setTypedText] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const [hasGeo, setHasGeo] = useState(true)

  useEffect(() => {
    if (!navigator.geolocation) {
      setHasGeo(false)
      return
    }

    navigator.geolocation.getCurrentPosition(
      (pos) => {
        const dist = haversine(
          pos.coords.latitude,
          pos.coords.longitude,
          BALTIMORE.lat,
          BALTIMORE.lng
        )
        setDistance(dist)
      },
      () => {
        setLocationError(true)
      }
    )
  }, [])

  useEffect(() => {
    if (distance === null) return

    const fullText = `you are ${distance} mi away from baltimore`
    let i = 0
    setTypedText('')
    setIsTyping(true)

    const interval = setInterval(() => {
      i++
      setTypedText(fullText.slice(0, i))
      if (i >= fullText.length) {
        clearInterval(interval)
        setIsTyping(false)
      }
    }, 50)

    return () => clearInterval(interval)
  }, [distance])

  if (!hasGeo) return null

  return (
    <div className="mt-6 w-full max-w-[220px]">
      {distance !== null && (
        <div className="flex items-center gap-2">
          <div className="relative flex-shrink-0">
            <div className="w-1.5 h-1.5 bg-green-500 rounded-full" />
            <div className="absolute inset-0 w-1.5 h-1.5 bg-green-500 rounded-full animate-ping opacity-75" />
          </div>
          <p className="text-xs italic text-gray-500 dark:text-gray-500 leading-tight">
            {typedText}
            {isTyping && <span className="animate-pulse">|</span>}
          </p>
        </div>
      )}
      {locationError && (
        <p className="text-xs italic text-gray-400 dark:text-gray-600">location unknown</p>
      )}
    </div>
  )
}

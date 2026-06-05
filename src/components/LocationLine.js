'use client'

import { useState, useEffect } from 'react'

const DEBJEET_LAT = 39.3299
const DEBJEET_LNG = -76.6205

function haversine(lat1, lon1, lat2, lon2) {
  const R = 3958.8
  const toRad = (d) => (d * Math.PI) / 180
  const dLat = toRad(lat2 - lat1)
  const dLon = toRad(lon2 - lon1)
  const a =
    Math.sin(dLat / 2) ** 2 +
    Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) * Math.sin(dLon / 2) ** 2
  return R * 2 * Math.asin(Math.sqrt(a))
}

export default function LocationLine() {
  const [text, setText] = useState(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    if (!navigator.geolocation) {
      setText('you are somewhere on Earth')
      return
    }
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        const miles = Math.round(
          haversine(pos.coords.latitude, pos.coords.longitude, DEBJEET_LAT, DEBJEET_LNG)
        )
        setText(`you are ${miles.toLocaleString()} miles away from Debjeet`)
      },
      () => setText('you are somewhere on Earth'),
      { timeout: 8000 }
    )
  }, [])

  useEffect(() => {
    if (text) {
      const t = setTimeout(() => setVisible(true), 50)
      return () => clearTimeout(t)
    }
  }, [text])

  if (!text) return null

  return (
    <p
      className="location-caption"
      style={{ opacity: visible ? 0.5 : 0, transition: 'opacity 0.8s ease' }}
    >
      {text}
    </p>
  )
}

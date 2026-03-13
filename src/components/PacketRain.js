'use client'

import { useEffect, useRef } from 'react'

export default function PacketRain() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')

    const CHARS = '0123456789ABCDEF:'
    const COL_WIDTH = 20
    const FONT_SIZE = 11
    const OPACITY = 0.42
    const SPEED_MIN = 0.3
    const SPEED_MAX = 0.8

    let animId
    let cols
    let drops
    let speeds
    let isDark = document.documentElement.classList.contains('dark')

    function resize() {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      cols = Math.floor(canvas.width / COL_WIDTH)
      drops = Array.from({ length: cols }, () => Math.random() * canvas.height)
      speeds = Array.from({ length: cols }, () => SPEED_MIN + Math.random() * (SPEED_MAX - SPEED_MIN))
    }

    function getColors() {
      if (isDark) {
        return {
          fill: '#080c14',
          lead: `rgba(29,158,117,${OPACITY * 1.1})`,
          trail: `rgba(93,202,165,${OPACITY * 0.35})`,
        }
      }
      return {
        fill: '#f8faff',
        lead: `rgba(24,95,165,${OPACITY * 1.1})`,
        trail: `rgba(133,183,235,${OPACITY * 0.35})`,
      }
    }

    function draw() {
      const { fill, lead, trail } = getColors()

      ctx.fillStyle = fill + 'CC' // slight transparency for trail persistence
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      ctx.font = `${FONT_SIZE}px monospace`

      for (let i = 0; i < cols; i++) {
        const x = i * COL_WIDTH
        const y = drops[i]

        // Lead character
        ctx.fillStyle = lead
        const leadChar = CHARS[Math.floor(Math.random() * CHARS.length)]
        ctx.fillText(leadChar, x, y)

        // Trail characters (a few above)
        ctx.fillStyle = trail
        for (let t = 1; t <= 3; t++) {
          const ty = y - t * FONT_SIZE * 1.4
          if (ty > 0) {
            const trailChar = CHARS[Math.floor(Math.random() * CHARS.length)]
            ctx.fillText(trailChar, x, ty)
          }
        }

        drops[i] += speeds[i]

        if (drops[i] > canvas.height) {
          drops[i] = -FONT_SIZE
        }
      }

      animId = requestAnimationFrame(draw)
    }

    resize()
    draw()

    const resizeHandler = () => {
      cancelAnimationFrame(animId)
      resize()
      draw()
    }
    window.addEventListener('resize', resizeHandler)

    // Watch for theme changes
    const observer = new MutationObserver(() => {
      isDark = document.documentElement.classList.contains('dark')
    })
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] })

    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener('resize', resizeHandler)
      observer.disconnect()
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        inset: 0,
        width: '100vw',
        height: '100vh',
        zIndex: -2,
        pointerEvents: 'none',
      }}
    />
  )
}

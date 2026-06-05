'use client'

import { useEffect, useRef } from 'react'

const SPACING = 30
const FONT_SIZE = 11
const BASE_OPACITY = 0.04
const MAX_OPACITY = 0.7
const RADIUS = 220
const LERP = 0.10

export default function BinaryBackground() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    let animId
    const mouse = { x: -9999, y: -9999 }
    let chars = []

    const getColor = () => '59, 130, 246'

    const build = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      chars = []
      const cols = Math.ceil(canvas.width / SPACING) + 1
      const rows = Math.ceil(canvas.height / SPACING) + 1
      for (let r = 0; r <= rows; r++) {
        for (let c = 0; c <= cols; c++) {
          chars.push({
            x: c * SPACING,
            y: r * SPACING,
            char: Math.random() > 0.5 ? '1' : '0',
            opacity: BASE_OPACITY,
          })
        }
      }
    }

    build()

    const onMouseMove = (e) => {
      mouse.x = e.clientX
      mouse.y = e.clientY
    }
    const onMouseLeave = () => {
      mouse.x = -9999
      mouse.y = -9999
    }

    window.addEventListener('mousemove', onMouseMove)
    window.addEventListener('mouseleave', onMouseLeave)
    window.addEventListener('resize', build)

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      ctx.font = `${FONT_SIZE}px "Courier New", monospace`
      ctx.textBaseline = 'top'

      const color = getColor()

      for (const c of chars) {
        const dx = c.x - mouse.x
        const dy = c.y - mouse.y
        const dist = Math.sqrt(dx * dx + dy * dy)

        let target = BASE_OPACITY
        if (dist < RADIUS) {
          const t = 1 - dist / RADIUS
          target = BASE_OPACITY + t * t * (MAX_OPACITY - BASE_OPACITY)
        }

        c.opacity += (target - c.opacity) * LERP

        ctx.fillStyle = `rgba(${color}, ${c.opacity})`
        ctx.fillText(c.char, c.x, c.y)
      }

      animId = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener('mousemove', onMouseMove)
      window.removeEventListener('mouseleave', onMouseLeave)
      window.removeEventListener('resize', build)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 0,
        pointerEvents: 'none',
      }}
    />
  )
}

'use client'

import { useState, useEffect, useRef } from 'react'
import useIsMobile from '@/hooks/useIsMobile'
import { showImage, hideImage } from '@/utils/imageOverlay'

const currently = "writing an adversarial ML paper · running CTFs · building the home lab"

const HERO_TEXT = "Hi, I'm "

function Typewriter({ text, delay = 0, speed = 25, onDone }) {
  const [displayed, setDisplayed] = useState('')
  const [started, setStarted] = useState(false)

  useEffect(() => {
    // Respect prefers-reduced-motion
    if (typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setDisplayed(text)
      onDone && onDone()
      return
    }
    // Desktop only
    if (typeof window !== 'undefined' && window.innerWidth < 1024) {
      setDisplayed(text)
      onDone && onDone()
      return
    }

    const delayTimer = setTimeout(() => {
      setStarted(true)
    }, delay)
    return () => clearTimeout(delayTimer)
  }, [delay, text, onDone])

  useEffect(() => {
    if (!started) return
    if (displayed.length >= text.length) {
      onDone && onDone()
      return
    }
    const timer = setTimeout(() => {
      setDisplayed(text.slice(0, displayed.length + 1))
    }, speed)
    return () => clearTimeout(timer)
  }, [started, displayed, text, speed, onDone])

  return <>{displayed}</>
}

export default function About() {
  const [name, setName] = useState('Debjeet Chakravorty')
  const isMobile = useIsMobile()
  const [heroVisible, setHeroVisible] = useState(false)
  const [para1Done, setPara1Done] = useState(false)

  const PARA1_AFTER_NAME = " I'm a security researcher and graduate student at "
  const PARA1_AFTER_JHU = ", where I work on adversarial machine learning and network intrusion detection."

  return (
    <main className="space-y-8 max-w-xl">
      {/* Para 1 - Hero with typewriter */}
      <section className="space-y-4">
        <p className="text-base leading-relaxed text-gray-800 dark:text-gray-200">
          {HERO_TEXT}
          <span
            className="underline decoration-dotted underline-offset-2 cursor-pointer"
            onMouseEnter={!isMobile ? () => setName('देवजीत चक्रवर्ती') : undefined}
            onMouseLeave={!isMobile ? () => setName('Debjeet Chakravorty') : undefined}
            onClick={isMobile ? () => setName(n => n === 'Debjeet Chakravorty' ? 'देवजीत चक्रवर्ती' : 'Debjeet Chakravorty') : undefined}
          >
            {name}
          </span>
          .{' '}
          <Typewriter
            text={PARA1_AFTER_NAME}
            delay={300}
            speed={25}
            onDone={() => setHeroVisible(true)}
          />
          {heroVisible && (
            <>
              <span
                className="underline decoration-dotted underline-offset-2 cursor-pointer image-trigger"
                onMouseEnter={() => showImage('jhu')}
                onMouseLeave={() => hideImage('jhu')}
              >
                Johns Hopkins University
              </span>
              <Typewriter
                text={PARA1_AFTER_JHU}
                delay={0}
                speed={25}
                onDone={() => setPara1Done(true)}
              />
            </>
          )}
        </p>

        {para1Done && (
          <p className="text-base leading-relaxed text-gray-800 dark:text-gray-200">
            I grew up in{' '}
            <span
              className="underline decoration-dotted underline-offset-2 cursor-pointer image-trigger"
              onMouseEnter={() => showImage('mumbai')}
              onMouseLeave={() => hideImage('mumbai')}
            >
              Mumbai, India
            </span>{' '}
            and I&apos;m currently based in{' '}
            <span
              className="underline decoration-dotted underline-offset-2 cursor-pointer image-trigger"
              onMouseEnter={() => showImage('baltimore')}
              onMouseLeave={() => hideImage('baltimore')}
            >
              Baltimore, MD
            </span>
            .
          </p>
        )}

        {para1Done && (
          <p className="text-base leading-relaxed text-gray-800 dark:text-gray-200">
            Right now I&apos;m researching byte-level adversarial attacks on ICS protocol traffic,
            competing in CTFs with{' '}
            <span
              className="underline decoration-dotted underline-offset-2 cursor-pointer image-trigger"
              onMouseEnter={() => showImage('ctf')}
              onMouseLeave={() => hideImage('ctf')}
            >
              Z0DIAC
            </span>
            {' '}
            <span className="inline-block font-mono text-xs border border-gray-400 dark:border-gray-600 px-1 ml-1 text-gray-500 dark:text-gray-500">
              CTF
            </span>
            , and building out a home lab for threat detection and malware analysis.
            I care about building security systems that actually work against a real, adaptive adversary.
          </p>
        )}

        {para1Done && (
          <p className="text-xs italic text-gray-400 dark:text-gray-600 leading-relaxed">
            currently: {currently}
          </p>
        )}

        {para1Done && (
          <p className="text-base leading-relaxed text-gray-800 dark:text-gray-200">
            Outside of security: I play tabla, guitar, drums, and cajon. I lift. I&apos;m obsessed with
            table tennis, cricket, F1, and finding the best coffee shop in whatever city I&apos;m in.
            If you want to argue about an F1 strategy call or trade cricket hot takes, reach out.
          </p>
        )}

        {para1Done && (
          <p className="text-base leading-relaxed text-gray-800 dark:text-gray-200">
            Say hi at{' '}
            <a
              href="mailto:debjeet.chak@gmail.com"
              className="underline decoration-dotted underline-offset-2 hover:opacity-70 transition-opacity"
            >
              debjeet.chak at gmail dot com
            </a>
            .
          </p>
        )}
      </section>

      {para1Done && (
        <footer className="pt-8 mt-16 border-t border-gray-200 dark:border-gray-800 text-xs text-gray-400 dark:text-gray-600">
          © 2026 Debjeet Chakravorty
        </footer>
      )}
    </main>
  )
}

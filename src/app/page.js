'use client'

import Image from 'next/image'
import ProjectsGrid from '@/components/ProjectsGrid'
import { useEffect, useRef } from 'react'

function useFadeIn() {
  const ref = useRef(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('visible')
          observer.unobserve(el)
        }
      },
      { threshold: 0.1 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])
  return ref
}

function FadeSection({ children, className = '' }) {
  const ref = useFadeIn()
  return (
    <div ref={ref} className={`fade-in ${className}`}>
      {children}
    </div>
  )
}

export default function Home() {
  return (
    <main className="space-y-16">
      {/* Header */}
      <header id="contact" className="space-y-4">
        <div className="flex flex-col-reverse items-center gap-6 sm:flex-row sm:items-start sm:justify-between">
          {/* Name + tagline */}
          <div className="space-y-3 text-center sm:text-left">
            <h1 className="text-2xl font-bold">Debjeet Chakravorty</h1>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              Security Informatics @ Johns Hopkins University.<br />
              Exploring ML-based intrusion detection, adversarial attacks, and data-driven security solutions.
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-500">
              📍 Baltimore, MD{' '}
              <span className="text-gray-400 dark:text-gray-600">(originally from Mumbai, India)</span>
            </p>

            {/* Links */}
            <div className="flex gap-4 text-sm flex-wrap justify-center sm:justify-start">
              <a href="https://www.linkedin.com/in/debjeet-chak"
                 className="text-blue-600 dark:text-blue-400 hover:underline"
                 target="_blank"
                 rel="noopener noreferrer">
                LinkedIn
              </a>
              <a href="https://github.com/debjeet-chak"
                 className="text-blue-600 dark:text-blue-400 hover:underline"
                 target="_blank"
                 rel="noopener noreferrer">
                GitHub
              </a>
              <a href="mailto:debjeet.chak@gmail.com"
                 className="text-blue-600 dark:text-blue-400 hover:underline">
                Email
              </a>
              <a href="/resume.pdf"
                 className="text-blue-600 dark:text-blue-400 hover:underline">
                Resume
              </a>
            </div>
          </div>

          {/* Profile Image */}
          <div className="flex-shrink-0">
            <Image
              src="/profile.jpg"
              alt="Debjeet Chakravorty"
              width={150}
              height={150}
              className="profile-image w-[120px] h-[120px] sm:w-[150px] sm:h-[150px]"
              priority
            />
          </div>
        </div>
      </header>

      {/* Background */}
      <FadeSection>
        <section id="background" className="space-y-4">
          <h2 className="text-xl font-semibold">Background</h2>
          <div className="space-y-3 text-gray-700 dark:text-gray-300 leading-relaxed">
            <p>
              I&apos;m a graduate student in Security Informatics at Johns Hopkins University,
              exploring the intersection of machine learning, security operations, and data
              engineering in cybersecurity.
            </p>
            <p>
              My journey started as a data engineer at Bajaj Finserv, building ML-powered
              analytics and data pipelines. Now at JHU, I&apos;m diving deep into network security,
              intrusion detection, and adversarial machine learning.
            </p>
            <p>
              Currently building a home lab for security testing, competing in CTFs with
              Z0DIAC (JHU&apos;s CTF team), and researching adversarial attacks against ML-based
              intrusion detection systems.
            </p>
          </div>
        </section>
      </FadeSection>

      {/* Projects & Research */}
      <FadeSection>
        <section id="projects" className="space-y-4">
          <h2 className="text-xl font-semibold">Projects & Research</h2>
          <ProjectsGrid />
        </section>
      </FadeSection>

      {/* Experience */}
      <FadeSection>
        <section id="experience" className="space-y-6">
          <h2 className="text-xl font-semibold">Experience</h2>

          {/* Timeline */}
          <div className="relative pl-6 space-y-8 before:absolute before:left-1.5 before:top-2 before:bottom-2 before:w-px before:bg-gray-200 dark:before:bg-gray-800">

            {/* JHU */}
            <div className="relative">
              <div className="absolute -left-6 top-1.5 w-3 h-3 rounded-full bg-blue-500 border-2 border-white dark:border-gray-950 ring-2 ring-blue-200 dark:ring-blue-900" />
              <div>
                <div className="flex items-start justify-between gap-2 flex-wrap">
                  <h3 className="font-medium">M.S. Security Informatics</h3>
                  <span className="text-xs text-gray-500 dark:text-gray-500 whitespace-nowrap">Aug 2025 – Dec 2026</span>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">Johns Hopkins University | Baltimore, MD</p>
                <ul className="space-y-1 text-gray-700 dark:text-gray-300 text-sm list-disc list-inside">
                  <li>Coursework: Assured Autonomy, Network Security, Computer Intrusion Detection, Cyber Operations</li>
                  <li>CTF team member — Z0DIAC (JHU&apos;s competitive team)</li>
                  <li>Researching adversarial ML attacks against ICS/IDS systems</li>
                </ul>
              </div>
            </div>

            {/* Bajaj DE */}
            <div className="relative">
              <div className="absolute -left-6 top-1.5 w-3 h-3 rounded-full bg-emerald-500 border-2 border-white dark:border-gray-950 ring-2 ring-emerald-200 dark:ring-emerald-900" />
              <div>
                <div className="flex items-start justify-between gap-2 flex-wrap">
                  <h3 className="font-medium">Data Engineer</h3>
                  <span className="text-xs text-gray-500 dark:text-gray-500 whitespace-nowrap">Jul 2024 – Jun 2025</span>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">Bajaj Finserv | Pune, India</p>
                <ul className="space-y-1 text-gray-700 dark:text-gray-300 text-sm list-disc list-inside">
                  <li>Built dedicated data pipelines for digital transactions (UPI), increasing monthly revenue</li>
                  <li>Developed AI-powered chatbot using Databricks Genie for business intelligence, enabling natural language queries over big data</li>
                  <li>Designed customer segmentation models to optimize collections and reduce non-payer costs</li>
                  <li>Reduced SMS costs by 10x through a segmentation and rule engine</li>
                  <li>Awarded Achiever of the Year (FY24-25)</li>
                </ul>
              </div>
            </div>

            {/* Bajaj Intern */}
            <div className="relative">
              <div className="absolute -left-6 top-1.5 w-3 h-3 rounded-full bg-emerald-400 border-2 border-white dark:border-gray-950 ring-2 ring-emerald-100 dark:ring-emerald-950" />
              <div>
                <div className="flex items-start justify-between gap-2 flex-wrap">
                  <h3 className="font-medium">Data Engineering Intern (BYTE)</h3>
                  <span className="text-xs text-gray-500 dark:text-gray-500 whitespace-nowrap">Jan 2024 – Jun 2024</span>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">Bajaj Finserv | Pune, India</p>
                <ul className="space-y-1 text-gray-700 dark:text-gray-300 text-sm list-disc list-inside">
                  <li>Built API integrating notification backend with debt recovery agent app for 15,000+ agents</li>
                  <li>Migrated 40+ stored procedures from Data Warehouse to Azure Data Lake</li>
                  <li>Automated MIS reporting scripts, improving operational efficiency by 75%</li>
                  <li>Top 5 finalist at DevTalks Hackathon (out of 98 interns)</li>
                </ul>
              </div>
            </div>

            {/* CloudFabrix */}
            <div className="relative">
              <div className="absolute -left-6 top-1.5 w-3 h-3 rounded-full bg-gray-400 border-2 border-white dark:border-gray-950 ring-2 ring-gray-200 dark:ring-gray-800" />
              <div>
                <div className="flex items-start justify-between gap-2 flex-wrap">
                  <h3 className="font-medium">Software Engineering Intern</h3>
                  <span className="text-xs text-gray-500 dark:text-gray-500 whitespace-nowrap">Jul 2023 – Aug 2023</span>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">CloudFabrix | Hyderabad, India</p>
                <ul className="space-y-1 text-gray-700 dark:text-gray-300 text-sm list-disc list-inside">
                  <li>Built a no-code analytics solution leveraging ML for a CI/CD pipeline, reducing IT operations cost by 13%</li>
                </ul>
              </div>
            </div>

            {/* MIT */}
            <div className="relative">
              <div className="absolute -left-6 top-1.5 w-3 h-3 rounded-full bg-gray-300 border-2 border-white dark:border-gray-950 ring-2 ring-gray-100 dark:ring-gray-900" />
              <div>
                <div className="flex items-start justify-between gap-2 flex-wrap">
                  <h3 className="font-medium">B.Tech Electronics & Communication Engineering</h3>
                  <span className="text-xs text-gray-500 dark:text-gray-500 whitespace-nowrap">2020 – 2024</span>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">Manipal Institute of Technology | Manipal, India</p>
                <p className="text-sm text-gray-700 dark:text-gray-300">Minor in Computational Intelligence. Electives in Computer Networks, Cryptography, and Intro to Cybersecurity.</p>
              </div>
            </div>

          </div>
        </section>
      </FadeSection>

      {/* Skills & Certifications */}
      <FadeSection>
        <section id="skills" className="space-y-6">
          <h2 className="text-xl font-semibold">Skills & Certifications</h2>

          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wide">Technical Skills</h3>
            <div className="space-y-3">
              {[
                { label: "Security Operations", skills: ["SIEM (Elastic Stack, Splunk)", "Incident Response", "Alert Triage", "Log Analysis", "SOAR", "Threat Intelligence"] },
                { label: "Penetration Testing", skills: ["Nmap", "Wireshark", "Burp Suite", "Metasploit", "Nessus", "Kali Linux"] },
                { label: "AI/ML & Data Science", skills: ["Python", "Scikit-learn", "TensorFlow", "Pandas", "NumPy", "Databricks", "MLOps"] },
                { label: "Cloud Platforms", skills: ["Azure (IAM, Security Center, Data Lake)", "AWS (IAM, CloudTrail, Lambda)", "Docker", "Kubernetes"] },
                { label: "Scripting & Automation", skills: ["Python", "Bash", "PowerShell", "REST APIs", "CI/CD"] },
                { label: "Databases & Data Eng.", skills: ["MySQL", "Oracle SQL", "Azure Data Lake", "PySpark", "ETL Pipelines"] },
                { label: "Frameworks", skills: ["MITRE ATT&CK", "NIST", "CIS Benchmarks", "Risk Assessment"] },
              ].map(({ label, skills }) => (
                <div key={label} className="flex flex-col sm:flex-row sm:items-start gap-1 sm:gap-3">
                  <span className="text-xs text-gray-500 dark:text-gray-500 w-36 flex-shrink-0 pt-1">{label}</span>
                  <div className="flex flex-wrap gap-1.5">
                    {skills.map((s) => (
                      <span key={s} className="px-2 py-0.5 text-xs rounded bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700">
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-3">
            <h3 className="text-sm font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wide">Certifications</h3>
            <div className="space-y-2">
              <div className="flex items-center justify-between text-sm">
                <div>
                  <a
                    href="https://www.credly.com/badges/e0b6a549-0926-4057-bb9c-b88fff48ff24/public_url"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium text-blue-600 dark:text-blue-400 hover:underline"
                  >
                    CompTIA Security+
                  </a>
                  <span className="text-gray-500 dark:text-gray-500 text-xs ml-2">Credential ID: L52TJ0LS0ERQSZ3J</span>
                </div>
                <span className="text-xs text-gray-500 dark:text-gray-500">2024</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-700 dark:text-gray-300">TryHackMe Learning Paths</span>
                <span className="text-xs text-yellow-600 dark:text-yellow-400">In Progress</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-700 dark:text-gray-300">Cloud Security — AWS / Azure / OCI</span>
                <span className="text-xs text-yellow-600 dark:text-yellow-400">In Progress</span>
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <h3 className="text-sm font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wide">Achievements</h3>
            <ul className="space-y-1 text-sm text-gray-700 dark:text-gray-300 list-disc list-inside">
              <li>Achiever of the Year (FY24-25) — Bajaj Finserv</li>
              <li>Top 5 Finalist — DevTalks Hackathon, Bajaj Finserv (out of 98 interns)</li>
            </ul>
          </div>
        </section>
      </FadeSection>

      {/* Beyond the Terminal */}
      <FadeSection>
        <section className="space-y-4">
          <h2 className="text-xl font-semibold">Beyond the Terminal</h2>
          <div className="space-y-3 text-gray-700 dark:text-gray-300 leading-relaxed">
            <p>
              When I&apos;m not breaking into systems or analyzing network traffic, you&apos;ll find me
              at the gym. Lifting has taught me discipline and the value of showing up
              consistently—something that applies to pretty much everything worth doing.
            </p>
            <p>
              Music is a huge part of my life. I play tabla, guitar, drums, and cajon, and I
              love performing whenever I get the chance. Whether I&apos;m jamming with friends,
              discovering new artists, or catching live shows, music is my way of resetting.
              There&apos;s something about learning a new instrument that never gets old—awkward at
              first, frustrating in the middle, but incredibly rewarding once things click.
            </p>
            <p>
              I&apos;m always picking up new things—new sports, new instruments, new skills. Table
              tennis is my current obsession (challenge me at your own risk). I&apos;m also that
              person who&apos;ll try any restaurant once and watches way too much cricket, soccer,
              and F1. Grabbing coffee at a new cafe or a drink with friends—whether they&apos;re
              old friends or people I just met—is how I stay connected outside of work.
            </p>
            <p>
              If you want to talk about music, lifting routines, or debate an F1 or cricket hot
              take, feel free to reach out.
            </p>
          </div>
        </section>
      </FadeSection>

      {/* Writing */}
      <FadeSection>
        <section className="space-y-4">
          <h2 className="text-xl font-semibold">Writing</h2>
          <p className="text-gray-600 dark:text-gray-400">
            <a href="https://debjeet-chak.github.io"
               className="text-blue-600 dark:text-blue-400 hover:underline"
               target="_blank"
               rel="noopener noreferrer">
              Visit my blog →
            </a>
          </p>
        </section>
      </FadeSection>

      {/* Footer */}
      <footer className="pt-8 text-sm text-gray-500 dark:text-gray-500 border-t border-gray-200 dark:border-gray-800">
        <p>© 2026 Debjeet Chakravorty.</p>
      </footer>
    </main>
  )
}

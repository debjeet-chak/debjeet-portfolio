import Image from 'next/image'
import ProjectsGrid from '@/components/ProjectsGrid'
import LocationLine from '@/components/LocationLine'

export default function Home() {
  return (
    <main className="space-y-8">
      {/* Header */}
      <header className="hero-header relative space-y-4">
        {/* Photo in left blank space */}
        <div className="photo-left-panel">
          <Image
            src="/profile.jpg"
            alt="Debjeet Chakravorty"
            width={280}
            height={336}
            className="profile-photo"
            priority
          />
          <LocationLine />
        </div>

        <h1 className="text-2xl font-bold">Debjeet Chakravorty</h1>
        <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
          Cybersecurity Graduate Student @ Johns Hopkins University
        </p>

        {/* Links */}
        <div className="flex gap-4 text-sm flex-wrap">
          <a
            href="https://www.linkedin.com/in/debjeet-chak"
            className="text-blue-600 dark:text-blue-400 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/debjeet-chak"
            className="text-blue-600 dark:text-blue-400 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          <a href="mailto:dchakra8@jh.edu" className="text-blue-600 dark:text-blue-400 hover:underline">
            Email
          </a>
          <a href="/resume.pdf" className="text-blue-600 dark:text-blue-400 hover:underline">
            Resume
          </a>
        </div>
      </header>

      {/* About */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">About</h2>
        <div className="space-y-3 text-gray-700 dark:text-gray-300 leading-relaxed">
          <p>
            I love a hard problem. Especially one that looks like it has no solution. And then
            proving otherwise.
          </p>
          <p>
            I&apos;m a Cybersecurity Graduate Student at Johns Hopkins with a Data Engineering
            background — a combination that lets me approach security from an engineering-first
            perspective. I&apos;m Security+ certified, compete in CTFs, and build hands-on
            experience through labs, projects, and research.
          </p>
          <p>
            Beyond the technical side, what really drives me is people. Understanding their
            problems. Talking through challenges. Learning from mentors and peers who push me to
            think differently.
          </p>
          <p>
            If you&apos;re working on something interesting in cybersecurity, data, or the space
            in between, let&apos;s connect.
          </p>
        </div>
      </section>

      {/* Experience */}
      <section className="space-y-6">
        <h2 className="text-xl font-semibold">Experience</h2>
        <div className="space-y-8">

          {/* JHU S4 Lab */}
          <div>
            <div className="flex items-start justify-between gap-2 flex-wrap">
              <h3 className="font-medium">Graduate Research Assistant — V2X Security</h3>
              <span className="text-xs text-gray-500 dark:text-gray-500 whitespace-nowrap">May 2026 – Present</span>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
              Johns Hopkins University · S4 Lab, Baltimore MD
            </p>
            <ul className="space-y-1 text-gray-700 dark:text-gray-300 text-sm list-disc list-inside">
              <li>Building real-time data streaming pipelines (Apache Flink &amp; Kafka) to process petabyte-scale V2X vehicle communication data for SCMS analysis.</li>
              <li>Developing misbehavior detection algorithms for AI-driven threat detection via trust scoring, perception mapping, and synthetic threat injection.</li>
              <li>Designing multi-terabyte data lake architecture for V2X network traffic archival and real-time security monitoring dashboards.</li>
            </ul>
          </div>

          {/* Course Assistant */}
          <div>
            <div className="flex items-start justify-between gap-2 flex-wrap">
              <h3 className="font-medium">Course Assistant — Assured Autonomy</h3>
              <span className="text-xs text-gray-500 dark:text-gray-500 whitespace-nowrap">May 2026 – Present</span>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
              Johns Hopkins University, Baltimore MD
            </p>
            <ul className="space-y-1 text-gray-700 dark:text-gray-300 text-sm list-disc list-inside">
              <li>Leading weekly discussions and evaluating student research on adversarial robustness, threat modeling, and attack surfaces in learning-enabled cyber-physical systems.</li>
            </ul>
          </div>

          {/* Bajaj Finserv */}
          <div>
            <div className="flex items-start justify-between gap-2 flex-wrap">
              <h3 className="font-medium">Data Engineer</h3>
              <span className="text-xs text-gray-500 dark:text-gray-500 whitespace-nowrap">Jan 2024 – Jun 2025</span>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
              Bajaj Finserv, Pune India
            </p>
            <ul className="space-y-1 text-gray-700 dark:text-gray-300 text-sm list-disc list-inside">
              <li>Engineered secure data pipelines for UPI transactions with encryption and access controls aligned with PCI DSS; built an AI-powered BI chatbot using Databricks Genie for NL querying of sensitive financial data.</li>
              <li>Designed ML-based customer segmentation models and messaging rule engine reducing SMS costs by 10x; deployed a REST API serving 15,000+ recovery agents.</li>
              <li>Automated MIS reporting scripts (DevTalks Hackathon), boosting operational efficiency by 75%. Awarded Achiever of the Year (FY24–25).</li>
            </ul>
          </div>

          {/* CloudFabrix */}
          <div>
            <div className="flex items-start justify-between gap-2 flex-wrap">
              <h3 className="font-medium">Software Engineering Intern</h3>
              <span className="text-xs text-gray-500 dark:text-gray-500 whitespace-nowrap">Jul – Aug 2023</span>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
              CloudFabrix, Hyderabad India
            </p>
            <ul className="space-y-1 text-gray-700 dark:text-gray-300 text-sm list-disc list-inside">
              <li>Built a no-code ML analytics solution for CI/CD pipeline monitoring using DevSecOps principles, achieving a 13% reduction in client IT operations costs.</li>
            </ul>
          </div>

          {/* PurpleTutor */}
          <div>
            <div className="flex items-start justify-between gap-2 flex-wrap">
              <h3 className="font-medium">Data Analyst Intern</h3>
              <span className="text-xs text-gray-500 dark:text-gray-500 whitespace-nowrap">Dec 2022 – Jan 2023</span>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
              PurpleTutor, Mumbai India
            </p>
            <ul className="space-y-1 text-gray-700 dark:text-gray-300 text-sm list-disc list-inside">
              <li>Scraped real-time data from Google Firebase and built dashboards to analyze customer behavior.</li>
              <li>Developed and deployed an AWS-hosted API implementing Collaborative Filtering for personalized student course recommendations.</li>
            </ul>
          </div>

        </div>
      </section>

      {/* Projects */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Projects &amp; Research</h2>
        <ProjectsGrid />
      </section>

      {/* Outside of Work */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Outside of Work</h2>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
          Outside of security: I play tabla, guitar, drums, and cajon. I lift. I&apos;m obsessed
          with table tennis, cricket, F1, and finding the best coffee shop in whatever city
          I&apos;m in. If you want to argue about an F1 strategy call or trade cricket hot takes,{' '}
          <a href="mailto:dchakra8@jh.edu" className="text-blue-600 dark:text-blue-400 hover:underline">
            reach out
          </a>
          .
        </p>
      </section>

      {/* Writing */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Writing</h2>
        <p className="text-gray-600 dark:text-gray-400">
          <a
            href="https://debjeet-chak.github.io"
            className="text-blue-600 dark:text-blue-400 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            Visit my blog →
          </a>
        </p>
      </section>

      {/* Footer */}
      <footer className="pt-8 text-sm text-gray-500 dark:text-gray-500 border-t border-gray-200 dark:border-gray-800">
        <p>© 2026 Debjeet Chakravorty · Baltimore, MD</p>
      </footer>
    </main>
  )
}

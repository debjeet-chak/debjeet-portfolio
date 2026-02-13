import ProjectsGrid from '@/components/ProjectsGrid'

export default function Home() {
  return (
    <main className="space-y-16">
      {/* Header */}
      <header className="space-y-4">
        <h1 className="text-2xl font-bold">Debjeet Chakravorty</h1>
        <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
          Security Informatics @ Johns Hopkins University.
          Exploring ML-based intrusion detection, adversarial attacks, and data-driven security solutions.
        </p>

        {/* Links */}
        <div className="flex gap-4 text-sm">
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
      </header>

      {/* About */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">About</h2>
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

      {/* Projects */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Projects & Research</h2>
        <ProjectsGrid />
      </section>

      {/* Experience */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Experience</h2>
        <div className="space-y-6">
          <div>
            <h3 className="font-medium">Data Engineer</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">Bajaj Finserv | Jul 2024 - Jun 2025</p>
            <ul className="mt-2 space-y-1 text-gray-700 dark:text-gray-300 text-sm list-disc list-inside">
              <li>Built data pipelines for UPI transactions, increasing monthly revenue</li>
              <li>Developed AI-powered chatbot using Databricks Genie for business intelligence</li>
              <li>Reduced SMS costs by 10x through segmentation and rule engine development</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Writing */}
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

      {/* Footer */}
      <footer className="pt-8 text-sm text-gray-500 dark:text-gray-500 border-t border-gray-200 dark:border-gray-800">
        <p>© 2025 Debjeet Chakravorty. Built with Next.js and Tailwind CSS.</p>
      </footer>
    </main>
  )
}

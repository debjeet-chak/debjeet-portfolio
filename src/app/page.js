import Link from 'next/link'

export default function Home() {
  return (
    <main className="space-y-16">
      {/* Header */}
      <header className="space-y-4">
        <h1 className="text-2xl font-bold">Debjeet Chakravorty</h1>
        <p className="text-gray-600 leading-relaxed">
          Security Informatics @ Johns Hopkins University. 
          Exploring ML-based intrusion detection, adversarial attacks, and data-driven security solutions.
        </p>
        
        {/* Links */}
        <div className="flex gap-4 text-sm">
          <a href="https://www.linkedin.com/in/debjeet-chak" 
             className="text-blue-600 hover:underline"
             target="_blank" 
             rel="noopener noreferrer">
            LinkedIn
          </a>
          <a href="https://github.com/debjeet-chak" 
             className="text-blue-600 hover:underline"
             target="_blank" 
             rel="noopener noreferrer">
            GitHub
          </a>
          <a href="mailto:debjeet.chak@gmail.com" 
             className="text-blue-600 hover:underline">
            Email
          </a>
          <a href="/resume.pdf" 
             className="text-blue-600 hover:underline">
            Resume
          </a>
        </div>
      </header>

      {/* About */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">About</h2>
        <div className="space-y-3 text-gray-700 leading-relaxed">
          <p>
            I'm a graduate student in Security Informatics at Johns Hopkins University, 
            exploring the intersection of machine learning, security operations, and data 
            engineering in cybersecurity.
          </p>
          <p>
            My journey started as a data engineer at Bajaj Finserv, building ML-powered 
            analytics and data pipelines. Now at JHU, I'm diving deep into network security, 
            intrusion detection, and adversarial machine learning.
          </p>
          <p>
            Currently building a home lab for security testing, competing in CTFs with 
            Z0DIAC (JHU's CTF team), and researching adversarial attacks against ML-based 
            intrusion detection systems.
          </p>
        </div>
      </section>

      {/* Research */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Research</h2>
        <div className="space-y-3">
          <h3 className="font-medium text-gray-900">
            Adversarial Attacks on ML-based IDS in Industrial Control Systems
          </h3>
          <p className="text-sm text-gray-600">Johns Hopkins University | 2025</p>
          <p className="text-gray-700 leading-relaxed">
            Demonstrated functionality-preserving byte-level adversarial attacks on 
            EtherNet/IP protocol traffic. Achieved 31.7% evasion rate while maintaining 
            85% protocol validity, exposing vulnerabilities in ML-based industrial security systems.
          </p>
          <div className="flex gap-3 text-sm">
            <a href="#" className="text-blue-600 hover:underline">Read Paper</a>
            <a href="#" className="text-blue-600 hover:underline">Code</a>
          </div>
        </div>
      </section>

      {/* Experience */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Experience</h2>
        <div className="space-y-6">
          <div>
            <h3 className="font-medium">Data Engineer</h3>
            <p className="text-sm text-gray-600">Bajaj Finserv | Jul 2024 - Jun 2025</p>
            <ul className="mt-2 space-y-1 text-gray-700 text-sm list-disc list-inside">
              <li>Built data pipelines for UPI transactions, increasing monthly revenue</li>
              <li>Developed AI-powered chatbot using Databricks Genie for business intelligence</li>
              <li>Reduced SMS costs by 10x through segmentation and rule engine development</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="space-y-4">
  <h2 className="text-xl font-semibold">Writing</h2>
  <p className="text-gray-600">
    <a href="https://debjeet-chak.github.io" 
       className="text-blue-600 hover:underline"
       target="_blank" 
       rel="noopener noreferrer">
      Visit my blog →
    </a>
  </p>
</section>

      {/* Writing (placeholder for blog) */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Writing</h2>
        <p className="text-gray-600">Coming soon - technical writeups and CTF walkthroughs</p>
      </section>

      {/* Footer */}
      <footer className="pt-8 text-sm text-gray-500 border-t border-gray-200">
        <p>© 2025 Debjeet Chakravorty. Built with Next.js and Tailwind CSS.</p>
      </footer>
    </main>
  )
}
export const metadata = {
  title: 'Experience | Debjeet Chakravorty',
}

export default function ExperiencePage() {
  return (
    <main className="space-y-8 max-w-2xl">
      <h1 className="text-2xl italic border-b border-gray-200 dark:border-gray-800 pb-4">
        experience.
      </h1>

      {/* Timeline */}
      <div className="relative pl-6 space-y-8 before:absolute before:left-1.5 before:top-2 before:bottom-2 before:w-px before:bg-gray-200 dark:before:bg-gray-800">

        {/* JHU */}
        <div className="relative">
          <div className="absolute -left-6 top-1.5 w-3 h-3 rounded-full bg-blue-500 border-2 border-[#f8faff] dark:border-[#080c14] ring-2 ring-blue-200 dark:ring-blue-900" />
          <div>
            <div className="flex items-start justify-between gap-2 flex-wrap">
              <h3 className="font-medium">M.S. Security Informatics</h3>
              <span className="text-xs text-gray-500 dark:text-gray-500 whitespace-nowrap">Aug 2025 – Dec 2026</span>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">Johns Hopkins University | Baltimore, MD</p>
            <ul className="space-y-1 text-gray-700 dark:text-gray-300 text-sm list-disc list-inside">
              <li>Coursework: Assured Autonomy, Network Security, Computer Intrusion Detection, Cyber Operations</li>
              <li>CTF team member — Z0DIAC (JHU&apos;s competitive team)</li>
              <li>Researching adversarial ML attacks against ICS/IDS systems; byte-level attacks on EtherNet/IP traffic</li>
            </ul>
          </div>
        </div>

        {/* Bajaj DE */}
        <div className="relative">
          <div className="absolute -left-6 top-1.5 w-3 h-3 rounded-full bg-emerald-500 border-2 border-[#f8faff] dark:border-[#080c14] ring-2 ring-emerald-200 dark:ring-emerald-900" />
          <div>
            <div className="flex items-start justify-between gap-2 flex-wrap">
              <h3 className="font-medium">Data Engineer</h3>
              <span className="text-xs text-gray-500 dark:text-gray-500 whitespace-nowrap">Jul 2024 – Jun 2025</span>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">Bajaj Finserv | Pune, India</p>
            <ul className="space-y-1 text-gray-700 dark:text-gray-300 text-sm list-disc list-inside">
              <li>Built dedicated data pipelines for digital transactions (UPI), increasing monthly revenue</li>
              <li>Reduced SMS costs by 10x through a segmentation and rule engine; awarded Achiever of the Year (FY24-25)</li>
            </ul>
          </div>
        </div>

        {/* Bajaj Intern */}
        <div className="relative">
          <div className="absolute -left-6 top-1.5 w-3 h-3 rounded-full bg-emerald-400 border-2 border-[#f8faff] dark:border-[#080c14] ring-2 ring-emerald-100 dark:ring-emerald-950" />
          <div>
            <div className="flex items-start justify-between gap-2 flex-wrap">
              <h3 className="font-medium">Data Engineering Intern (BYTE)</h3>
              <span className="text-xs text-gray-500 dark:text-gray-500 whitespace-nowrap">Jan 2024 – Jun 2024</span>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">Bajaj Finserv | Pune, India</p>
            <ul className="space-y-1 text-gray-700 dark:text-gray-300 text-sm list-disc list-inside">
              <li>Built API integrating notification backend with debt recovery agent app for 15,000+ agents</li>
              <li>Top 5 finalist at DevTalks Hackathon (out of 98 interns)</li>
            </ul>
          </div>
        </div>

        {/* CloudFabrix */}
        <div className="relative">
          <div className="absolute -left-6 top-1.5 w-3 h-3 rounded-full bg-gray-400 border-2 border-[#f8faff] dark:border-[#080c14] ring-2 ring-gray-200 dark:ring-gray-800" />
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
          <div className="absolute -left-6 top-1.5 w-3 h-3 rounded-full bg-gray-300 border-2 border-[#f8faff] dark:border-[#080c14] ring-2 ring-gray-100 dark:ring-gray-900" />
          <div>
            <div className="flex items-start justify-between gap-2 flex-wrap">
              <h3 className="font-medium">B.Tech Electronics &amp; Communication Engineering</h3>
              <span className="text-xs text-gray-500 dark:text-gray-500 whitespace-nowrap">2020 – 2024</span>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">Manipal Institute of Technology | Manipal, India</p>
            <p className="text-sm text-gray-700 dark:text-gray-300">Minor in Computational Intelligence. Electives in Computer Networks, Cryptography, and Intro to Cybersecurity.</p>
          </div>
        </div>
      </div>

      {/* Certifications */}
      <section className="space-y-3 pt-4">
        <h2 className="text-lg font-medium border-b border-gray-200 dark:border-gray-800 pb-2">certifications.</h2>
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
      </section>

      <footer className="pt-8 mt-16 border-t border-gray-200 dark:border-gray-800 text-xs text-gray-400 dark:text-gray-600">
        © 2026 Debjeet Chakravorty
      </footer>
    </main>
  )
}

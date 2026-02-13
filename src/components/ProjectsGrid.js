const projects = [
  {
    title: "Adversarial ML for ICS Security",
    type: "Research",
    description: "Demonstrated byte-level adversarial attacks on EtherNet/IP protocol traffic targeting ML-based IDS. Achieved 31.7% evasion rate with 85% protocol validity preservation.",
    tech: ["Python", "TensorFlow", "Scapy", "EtherNet/IP"],
    links: {
      paper: "#",
      code: "https://github.com/debjeet-chak",
    },
    status: "Published",
    year: "2025"
  },
  {
    title: "SOC Home Lab",
    type: "Lab",
    description: "Built SIEM environment for security monitoring using Elastic Stack. Configured detection rules for common attack patterns and automated alerting from multiple sources.",
    tech: ["Elastic Stack", "Splunk", "SIEM", "Linux"],
    links: {
      writeup: "#",
    },
    status: "In Progress",
    year: "2025"
  },
  {
    title: "Network Traffic Analysis Pipeline",
    type: "Project",
    description: "Developed automated pipeline for capturing, parsing, and analyzing network traffic. Implements protocol-specific parsers and anomaly detection algorithms.",
    tech: ["Wireshark", "Scapy", "Python", "Pandas"],
    links: {
      code: "https://github.com/debjeet-chak",
    },
    status: "Ongoing",
    year: "2024"
  },
  {
    title: "CTF Writeups Collection",
    type: "CTF",
    description: "Solutions and writeups from various CTF competitions. Covers web exploitation, crypto, reverse engineering, and network security challenges.",
    tech: ["Binary Exploitation", "Web Security", "Cryptography"],
    links: {
      blog: "https://debjeet-chak.github.io",
    },
    status: "Ongoing",
    year: "2024-2025"
  },
]

export default function ProjectsGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {projects.map((project, index) => (
        <ProjectCard key={index} project={project} />
      ))}
    </div>
  )
}

function ProjectCard({ project }) {
  return (
    <div className="card group">
      {/* Header */}
      <div className="flex items-start justify-between mb-3">
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-1">
            <h3 className="font-semibold text-gray-900 dark:text-gray-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
              {project.title}
            </h3>
          </div>
          <div className="flex items-center gap-2 text-xs">
            <span className="px-2 py-0.5 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400">
              {project.type}
            </span>
            <span className="text-gray-500 dark:text-gray-500">{project.year}</span>
            <StatusBadge status={project.status} />
          </div>
        </div>
      </div>

      {/* Description */}
      <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
        {project.description}
      </p>

      {/* Tech Stack */}
      <div className="flex flex-wrap gap-1.5 mb-4">
        {project.tech.map((tech, i) => (
          <span
            key={i}
            className="px-2 py-1 text-xs rounded bg-blue-50 dark:bg-blue-950 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-900"
          >
            {tech}
          </span>
        ))}
      </div>

      {/* Links */}
      <div className="flex gap-3 text-sm">
        {project.links.paper && (
          <a href={project.links.paper} className="link">
            Paper
          </a>
        )}
        {project.links.code && (
          <a href={project.links.code} className="link" target="_blank" rel="noopener noreferrer">
            Code
          </a>
        )}
        {project.links.writeup && (
          <a href={project.links.writeup} className="link">
            Writeup
          </a>
        )}
        {project.links.blog && (
          <a href={project.links.blog} className="link" target="_blank" rel="noopener noreferrer">
            Blog
          </a>
        )}
      </div>
    </div>
  )
}

function StatusBadge({ status }) {
  const colors = {
    "Published": "bg-green-100 dark:bg-green-950 text-green-700 dark:text-green-300 border-green-200 dark:border-green-900",
    "In Progress": "bg-yellow-100 dark:bg-yellow-950 text-yellow-700 dark:text-yellow-300 border-yellow-200 dark:border-yellow-900",
    "Ongoing": "bg-purple-100 dark:bg-purple-950 text-purple-700 dark:text-purple-300 border-purple-200 dark:border-purple-900",
  }

  return (
    <span className={`px-2 py-0.5 text-xs rounded-full border ${colors[status]}`}>
      {status}
    </span>
  )
}
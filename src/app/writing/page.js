export const metadata = {
  title: 'Writing | Debjeet Chakravorty',
}

const posts = [
  {
    title: "CTF Writeup: Getting Started with Web Exploitation",
    date: "2025-01-01",
    url: "https://debjeet-chak.github.io",
    summary: "Writeup from a recent CTF competition.",
    tags: ["ctf", "web security"],
  },
]

function formatYear(dateStr) {
  return new Date(dateStr).getFullYear()
}

export default function WritingPage() {
  return (
    <main className="space-y-8 max-w-2xl">
      <h1 className="text-2xl italic border-b border-gray-200 dark:border-gray-800 pb-4">
        writing.
      </h1>

      {posts.length === 0 ? (
        <p className="text-sm italic text-gray-400 dark:text-gray-600">
          nothing published yet — check back soon.
        </p>
      ) : (
        <div className="divide-y divide-gray-200 dark:divide-gray-800">
          {posts
            .slice()
            .sort((a, b) => new Date(b.date) - new Date(a.date))
            .map((post, i) => (
              <a
                key={i}
                href={post.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-6 py-4 hover:opacity-70 transition-opacity duration-200 group"
              >
                <span className="text-xs text-gray-400 dark:text-gray-600 w-10 flex-shrink-0 pt-0.5">
                  {formatYear(post.date)}
                </span>
                <div className="flex-1 min-w-0">
                  <span className="text-sm text-gray-900 dark:text-gray-100 group-hover:underline">
                    {post.title}
                  </span>
                  <div className="flex gap-2 mt-1 flex-wrap">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs text-gray-500 dark:text-gray-500 bg-gray-100 dark:bg-gray-800 px-1.5 py-0.5 rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <span className="text-gray-400 dark:text-gray-600 flex-shrink-0">→</span>
              </a>
            ))}
        </div>
      )}

      <footer className="pt-8 mt-16 border-t border-gray-200 dark:border-gray-800 text-xs text-gray-400 dark:text-gray-600">
        © 2026 Debjeet Chakravorty
      </footer>
    </main>
  )
}

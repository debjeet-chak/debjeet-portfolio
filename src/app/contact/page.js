export const metadata = {
  title: 'Contact | Debjeet Chakravorty',
}

export default function ContactPage() {
  return (
    <main className="space-y-8 max-w-2xl">
      <h1 className="text-2xl italic border-b border-gray-200 dark:border-gray-800 pb-4">
        contact.
      </h1>

      <div className="space-y-3 text-sm">
        <div>
          <a
            href="mailto:debjeet.chak@gmail.com"
            className="text-gray-900 dark:text-gray-100 hover:opacity-60 transition-opacity duration-200"
          >
            debjeet.chak@gmail.com
          </a>
        </div>
        <div>
          <a
            href="https://github.com/debjeet-chak"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-900 dark:text-gray-100 hover:opacity-60 transition-opacity duration-200"
          >
            github.com/debjeet-chak
          </a>
        </div>
        <div>
          <a
            href="https://www.linkedin.com/in/debjeet-chak"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-900 dark:text-gray-100 hover:opacity-60 transition-opacity duration-200"
          >
            linkedin.com/in/debjeet-chak
          </a>
        </div>
      </div>

      <footer className="pt-8 mt-16 border-t border-gray-200 dark:border-gray-800 text-xs text-gray-400 dark:text-gray-600">
        © 2026 Debjeet Chakravorty
      </footer>
    </main>
  )
}

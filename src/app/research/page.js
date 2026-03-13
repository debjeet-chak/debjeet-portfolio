import ProjectsGrid from '@/components/ProjectsGrid'

export const metadata = {
  title: 'Research & Projects | Debjeet Chakravorty',
}

export default function ResearchPage() {
  return (
    <main className="space-y-8 max-w-2xl">
      <h1 className="text-2xl italic border-b border-gray-200 dark:border-gray-800 pb-4">
        research &amp; projects.
      </h1>

      <ProjectsGrid />

      <footer className="pt-8 mt-16 border-t border-gray-200 dark:border-gray-800 text-xs text-gray-400 dark:text-gray-600">
        © 2026 Debjeet Chakravorty
      </footer>
    </main>
  )
}

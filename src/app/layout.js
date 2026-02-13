import './globals.css'
import ThemeToggle from '@/components/ThemeToggle'

export const metadata = {
  title: 'Debjeet Chakravorty | Security Informatics',
  description: 'Security researcher exploring ML-based intrusion detection and adversarial attacks',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100 font-mono">
        <ThemeToggle />
        <div className="max-w-2xl mx-auto px-6 py-12">
          {children}
        </div>
      </body>
    </html>
  )
}

import './globals.css'
import ThemeToggle from '@/components/ThemeToggle'
import BinaryBackground from '@/components/BinaryBackground'

export const metadata = {
  title: 'Debjeet Chakravorty',
  description: 'Cybersecurity graduate student at Johns Hopkins. Security+ certified, CTF competitor, V2X security researcher.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100 font-mono">
        <BinaryBackground />
        <ThemeToggle />
        <div className="relative z-10 max-w-2xl mx-auto px-6 py-12">
          {children}
        </div>
      </body>
    </html>
  )
}

import './globals.css'
import ThemeToggle from '@/components/ThemeToggle'
import LayoutContent from './LayoutContent'

export const metadata = {
  title: 'Debjeet Chakravorty | Security Informatics',
  description: 'Security researcher at Johns Hopkins. ML-based intrusion detection, adversarial attacks, CTF.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-[#f8faff] dark:bg-[#080c14] text-gray-900 dark:text-gray-100 font-mono">
        <ThemeToggle />
        <LayoutContent>{children}</LayoutContent>
      </body>
    </html>
  )
}

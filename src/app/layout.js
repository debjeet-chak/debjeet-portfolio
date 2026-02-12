export const metadata = {
  title: 'Debjeet Chakravorty | Security Informatics',
  description: 'Security researcher exploring ML-based intrusion detection and adversarial attacks',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-white text-gray-900 font-mono">
        <div className="max-w-2xl mx-auto px-6 py-12">
          {children}
        </div>
      </body>
    </html>
  )
}
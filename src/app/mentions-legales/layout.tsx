import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './../globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Mentions légales | Trouver-Mon-Chantier.fr',
  description: "Mension légales de Trouver-Mon-Chantier.fr",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <head>
        <link rel="icon" href="logo/favicon.png" sizes="any" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
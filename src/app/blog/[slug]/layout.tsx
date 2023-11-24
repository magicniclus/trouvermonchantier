import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '../../globals.css'
import { Suspense } from 'react'
import Analytics from '../../../components/Analytics'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Trouver des Chantiers - Augmentez Votre CA | Trouver-Mon-Chantier.fr',
  description: "Boostez votre CA avec Trouver-Mon-Chantier.fr. Solutions sur-mesure pour professionnels du bâtiment. Sans engagement ni frais cachés.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <head>
        <meta charSet="utf-8" />
        <link rel="icon" href="logo/favicon.png" sizes="any" />
      </head>
      <body className={inter.className}>
          <Analytics />
        {children}
        </body>
    </html>
  )
}

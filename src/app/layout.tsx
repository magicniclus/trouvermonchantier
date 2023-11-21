import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Trouver des Chantiers - Augmentez Votre CA avec Nos Solutions Sur-Mesure',
  description: "Découvrez comment accroître votre chiffre d'affaires en trouvant des chantiers qualifiés. Solutions personnalisées pour les professionnels du bâtiment, sans engagement ni frais de service. Contactez-nous pour booster votre activité dès aujourd'hui !",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}

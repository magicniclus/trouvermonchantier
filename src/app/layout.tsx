import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Script from 'next/script'

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
         <Script
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `
                (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                })(window,document,'script','dataLayer','GTM-NTLJ2NWF');
              `,
        }}
      />
      </head>
      <body className={inter.className}>
        {children}
        </body>
    </html>
  )
}

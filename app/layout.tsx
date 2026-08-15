import type { Metadata, Viewport } from "next";
import  localFont from "next/font/local";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";


const arad = localFont({
  src: "../public/font/AradVF.woff2",
  variable: "--font-arad",
  display: "swap",

});

export const metadata: Metadata = {
  title: 'Mohammad kazem farahbakhsh — software engineer',
  description:
    'software engineer crafting fast, accessible, and beautifully engineered interfaces. Portfolio featuring selected projects, experience, and contact.',
  generator: 'v0.app',
  icons: {
    icon: "/anime.jpg"
}}

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: '#171310',
  userScalable: true,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`dark bg-background ${arad.variable} ${arad.variable} ${arad.variable}`}
    >
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}


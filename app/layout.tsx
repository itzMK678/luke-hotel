import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })
export const metadata: Metadata = {
  title: "Luxe Hotel - Luxury Accommodation",
  description: "Experience world-class hospitality at Luxe Hotel",
  generator: "MK Dev",
  icons: {
    icon: [
      {
        url: "/logo-light.png", // Light mode favicon
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/logo-dark.png", // Dark mode favicon
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/logo.svg", // SVG version
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png", // Apple touch icon
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}

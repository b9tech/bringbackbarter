import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "B3 - BringBackBarter | Nigerian Bartering Platform",
  description: "Exchange what you have for what you need. A community-driven bartering platform for Nigerians.",
  keywords: "barter, trade, Nigeria, community, exchange, cashless",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          disableTransitionOnChange={false}
          storageKey="b3-theme"
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}

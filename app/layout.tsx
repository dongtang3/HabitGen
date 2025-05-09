import type React from "react"
import "@/app/globals.css"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import { QuoteProvider } from "@/lib/QuoteContext"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "HabitGen App",
  description: "A habit tracking and task management application",
  generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <QuoteProvider>
            {children}
          </QuoteProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
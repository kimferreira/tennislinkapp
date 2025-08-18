import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
  variable: "--font-inter",
})

export const metadata: Metadata = {
  title: "Tennis Link - Conecte-se com tenistas do seu nível",
  description: "Plataforma de matching para jogadores de tênis. Encontre parceiros, agende partidas e suba no ranking.",
  generator: "Tennis Link",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" className={`${inter.variable} antialiased`}>
      <body className="font-sans bg-tl-escuro text-tl">{children}</body>
    </html>
  )
}

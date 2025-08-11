import type { Metadata } from "next"
import { Plus_Jakarta_Sans } from "next/font/google"
import "./globals.css"

const plusJakartaSans = Plus_Jakarta_Sans({ 
  subsets: ["latin"],
  variable: "--font-plus-jakarta-sans",
})

export const metadata: Metadata = {
  title: "Dashboard Joki",
  description: "Dashboard management untuk joki pesanan",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="id">
      <body className={`${plusJakartaSans.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  )
}

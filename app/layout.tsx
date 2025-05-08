import type React from "react"
import type { Metadata } from "next"
import "./globals.css"
import { Inter } from "next/font/google"
import { AuthProvider } from "@/contexts/auth-context"
// Remove the Header import since it's likely included elsewhere
// import Header from "@/components/header"
import Footer from "@/components/footer"

// Initialize the Inter font
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
})

export const metadata: Metadata = {
  title: "Palm Learning Platform",
  description: "Empowering Minds Through STEM, Physical Activity and Locomotor Movement, and Emotional Wellbeing",
  generator: "v0.dev",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={inter.className}>
      <head>
        <link rel="icon" href="/images/palm-learning-logo.png" />
      </head>
      <body>
        <AuthProvider>
          <div className="flex flex-col min-h-screen">
            {/* Remove the Header component from here */}
            {/* <Header /> */}
            <main className="flex-grow">{children}</main>
            <Footer />
          </div>
        </AuthProvider>
      </body>
    </html>
  )
}

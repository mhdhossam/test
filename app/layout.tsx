import type React from "react"
import type { Metadata } from "next"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import "./globals.css"
import { CartProvider } from "@/lib/cart-context"
import { AuthProvider } from "@/lib/auth-context"
import { Navigation } from "@/components/navigation"

export const metadata: Metadata = {
  title: "دليل - منصة التمكين الشاملة",
  description: "منصة شاملة لتمكين ذوي الاحتياجات الخاصة من خلال التعليم والتدريب والتسوق",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ar" dir="rtl" className="font-geist-sans antialiased">
      <body className="font-sans">
        <AuthProvider>
          <CartProvider>
            <Navigation />
            <Suspense fallback={null}>{children}</Suspense>
          </CartProvider>
        </AuthProvider>
        <Analytics />
      </body>
    </html>
  )
}

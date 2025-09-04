"use client"

import { Button } from "@/components/ui/button"
import { CartDrawer } from "@/components/cart-drawer"
import { Menu, Search, User } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-lg">د</span>
            </div>
            <span className="font-bold text-xl">دليل</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6 space-x-reverse">
            <Link href="/" className="text-foreground hover:text-primary transition-colors">
              الرئيسية
            </Link>
            <Link href="/products" className="text-foreground hover:text-primary transition-colors">
              المتجر
            </Link>
            <Link href="/services" className="text-foreground hover:text-primary transition-colors">
              الخدمات
            </Link>
            <Link href="/scholarship" className="text-foreground hover:text-primary transition-colors">
              المنح
            </Link>
            <Link href="/about" className="text-foreground hover:text-primary transition-colors">
              من نحن
            </Link>
            <Link href="/contact" className="text-foreground hover:text-primary transition-colors">
              تواصل معنا
            </Link>
          </nav>

          {/* Actions */}
          <div className="flex items-center space-x-2 space-x-reverse">
            <Button variant="ghost" size="icon">
              <Search className="h-4 w-4" />
            </Button>
            <CartDrawer />
            <Button variant="ghost" size="icon">
              <User className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              <Menu className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t py-4">
            <nav className="flex flex-col space-y-3">
              <Link
                href="/"
                className="text-foreground hover:text-primary transition-colors px-2 py-1"
                onClick={() => setIsMenuOpen(false)}
              >
                الرئيسية
              </Link>
              <Link
                href="/products"
                className="text-foreground hover:text-primary transition-colors px-2 py-1"
                onClick={() => setIsMenuOpen(false)}
              >
                المتجر
              </Link>
              <Link
                href="/services"
                className="text-foreground hover:text-primary transition-colors px-2 py-1"
                onClick={() => setIsMenuOpen(false)}
              >
                الخدمات
              </Link>
              <Link
                href="/scholarship"
                className="text-foreground hover:text-primary transition-colors px-2 py-1"
                onClick={() => setIsMenuOpen(false)}
              >
                المنح
              </Link>
              <Link
                href="/about"
                className="text-foreground hover:text-primary transition-colors px-2 py-1"
                onClick={() => setIsMenuOpen(false)}
              >
                من نحن
              </Link>
              <Link
                href="/contact"
                className="text-foreground hover:text-primary transition-colors px-2 py-1"
                onClick={() => setIsMenuOpen(false)}
              >
                تواصل معنا
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}

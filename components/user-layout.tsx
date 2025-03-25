"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { WhatsappButton } from "@/components/whatsapp-button"
import { DarkModeToggle } from "@/components/dark-mode-toggle"
import { CartDropdown } from "@/components/cart-dropdown"
import { Menu, GlobeLock} from "lucide-react"

export function UserLayout({ children }: { children: React.ReactNode }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-40 border-b bg-background">
        <div className="container flex h-16 items-center justify-between px-4">
          <div className="flex items-center gap-2">
            <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-[240px] sm:w-[300px]">
                <nav className="flex flex-col gap-4 mt-8">
                  <Link href="/" className="text-lg font-medium" onClick={() => setIsMenuOpen(false)}>
                    Home
                  </Link>
                  <Link href="/accessories" className="text-lg font-medium" onClick={() => setIsMenuOpen(false)}>
                    Surgical Items
                  </Link>
                  <Link href="/about" className="text-lg font-medium" onClick={() => setIsMenuOpen(false)}>
                    About Us
                  </Link>
                  <Link href="/contact" className="text-lg font-medium" onClick={() => setIsMenuOpen(false)}>
                    Contact Us
                  </Link>
                </nav>
              </SheetContent>
            </Sheet>
            <Link href="/" className="flex items-center gap-2">
              <GlobeLock className="h-6 w-6" />
              <span className="font-bold text-xl hidden sm:inline-block">Surgical Store</span>
            </Link>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="/" className="text-sm font-medium">
              Home
            </Link>
            <Link href="/accessories" className="text-sm font-medium">
            Surgical Items

            </Link>
            <Link href="/about" className="text-sm font-medium">
              About Us
            </Link>
            <Link href="/contact" className="text-sm font-medium">
              Contact Us
            </Link>
          </nav>
          <div className="flex items-center gap-2">
            <DarkModeToggle />
            <CartDropdown />
            <Link href="/admin/login">
              <Button variant="outline" size="sm">
                Admin Login
              </Button>
            </Link>
          </div>
        </div>
      </header>
      <main className="flex-1">{children}</main>
      <footer className="border-t py-6 md:py-8">
        <div className="container flex flex-col items-center justify-between gap-4 px-4 md:flex-row">
          <div className="flex flex-col items-center gap-2 md:items-start">
            <Link href="/" className="flex items-center gap-2">
              <GlobeLock className="h-5 w-5" />
              <span className="font-bold">Surgical Store</span>
            </Link>
            <p className="text-center text-sm text-muted-foreground md:text-left">
              &copy; {new Date().getFullYear()} Surgical Store. All rights reserved.
            </p>
          </div>
          <nav className="flex gap-4">
            <Link href="/about" className="text-sm font-medium text-muted-foreground hover:text-foreground">
              About Us
            </Link>
            <Link href="/contact" className="text-sm font-medium text-muted-foreground hover:text-foreground">
              Contact Us
            </Link>
            <Link href="#" className="text-sm font-medium text-muted-foreground hover:text-foreground">
              Privacy Policy
            </Link>
            <Link href="#" className="text-sm font-medium text-muted-foreground hover:text-foreground">
              Terms of Service
            </Link>
          </nav>
        </div>
      </footer>
      <WhatsappButton />
    </div>
  )
}


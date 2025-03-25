"use client"

import type React from "react"

import { useEffect, useState } from "react"
import { useRouter, usePathname } from "next/navigation"
import { AdminSidebar } from "@/components/admin-sidebar"

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const router = useRouter()
  const pathname = usePathname()
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Check if user is logged in
    const isLoggedIn = localStorage.getItem("isAdminLoggedIn") === "true"
    setIsAuthenticated(isLoggedIn)
    setIsLoading(false)

    // If not logged in and not on login page, redirect to login
    if (!isLoggedIn && pathname !== "/admin/login") {
      router.push("/admin/login")
    }
  }, [pathname, router])

  // Show nothing while checking authentication
  if (isLoading) {
    return <div className="flex min-h-screen items-center justify-center">Loading...</div>
  }

  // If on login page or not authenticated, just show the content (login form)
  if (pathname === "/admin/login" || !isAuthenticated) {
    return <>{children}</>
  }

  // If authenticated and not on login page, show the admin layout
  return (
    <div className="flex min-h-screen">
      <AdminSidebar />
      <main className="flex-1 p-6 overflow-auto">{children}</main>
    </div>
  )
}


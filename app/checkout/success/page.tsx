"use client"

import { useEffect, useState } from "react"
import { useSearchParams, useRouter } from "next/navigation"
import Link from "next/link"
import { UserLayout } from "@/components/user-layout"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle2 } from "lucide-react"

export default function CheckoutSuccessPage() {
  const searchParams = useSearchParams()
  const router = useRouter()
  const [orderId, setOrderId] = useState<string | null>(null)

  useEffect(() => {
    const id = searchParams.get("orderId")
    if (!id) {
      router.push("/")
      return
    }
    setOrderId(id)
  }, [searchParams, router])

  if (!orderId) {
    return null // Will redirect in useEffect
  }

  return (
    <UserLayout>
      <div className="container px-4 py-16 mx-auto flex flex-col items-center">
        <Card className="max-w-md w-full">
          <CardHeader className="text-center">
            <div className="flex justify-center mb-4">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                <CheckCircle2 className="h-10 w-10 text-primary" />
              </div>
            </div>
            <CardTitle className="text-2xl">Purchase Order Submitted!</CardTitle>
          </CardHeader>
          <CardContent className="text-center space-y-4">
            <p className="text-muted-foreground">
              Thank you for your order. We've received your purchase order and our team will contact you shortly to
              arrange payment and confirm shipping details.
            </p>
            <div className="bg-muted p-4 rounded-md">
              <p className="text-sm text-muted-foreground mb-1">Order Reference Number</p>
              <p className="font-bold text-lg">{orderId}</p>
            </div>
            <p className="text-sm text-muted-foreground">
              A confirmation email has been sent to your email address with the details of your order.
            </p>
          </CardContent>
          <CardFooter className="flex flex-col gap-2">
            <Button asChild className="w-full">
              <Link href="/accessories">Continue Shopping</Link>
            </Button>
            <Button variant="outline" asChild className="w-full">
              <Link href="/">Return to Home</Link>
            </Button>
          </CardFooter>
        </Card>
      </div>
    </UserLayout>
  )
}


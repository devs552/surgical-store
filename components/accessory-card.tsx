"use client"

import Image from "next/image"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { useCart } from "@/context/cart-context"

interface Accessory {
  id: string
  name: string
  description: string
  price: number
  stock: number
  category: string
  image: string
}

interface AccessoryCardProps {
  accessory: Accessory
}

export function AccessoryCard({ accessory }: AccessoryCardProps) {
  const { addItem } = useCart()

  const handleAddToCart = () => {
    addItem({
      id: accessory.id,
      name: accessory.name,
      price: accessory.price,
      quantity: 1,
      image: accessory.image || "/placeholder.svg",
    })
  }

  return (
    <Card className="overflow-hidden">
      <div className="aspect-square relative">
        <Image src={accessory.image || "/placeholder.svg"} alt={accessory.name} fill className="object-cover" />
      </div>
      <CardContent className="p-4">
        <h3 className="font-semibold text-lg truncate">{accessory.name}</h3>
        <p className="text-sm text-muted-foreground line-clamp-2 h-10 mb-2">{accessory.description}</p>
        <div className="flex items-center justify-between">
          <span className="font-bold text-lg">${accessory.price.toFixed(2)}</span>
          <span className="text-sm text-muted-foreground">{accessory.category}</span>
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Button className="w-full" onClick={handleAddToCart}>
          Add to Cart
        </Button>
      </CardFooter>
    </Card>
  )
}


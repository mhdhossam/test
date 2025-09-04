"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Star, ShoppingCart } from "lucide-react"
import { useCart } from "@/lib/cart-context"

interface Product {
  id: string
  name: string
  name_ar: string
  description?: string
  description_ar?: string
  price: number
  sale_price?: number
  image_url?: string
  is_featured: boolean
  slug: string
}

interface ProductCardProps {
  product: Product
}

export function ProductCard({ product }: ProductCardProps) {
  const { dispatch } = useCart()
  const displayPrice = product.sale_price || product.price
  const hasDiscount = product.sale_price && product.sale_price < product.price

  const addToCart = () => {
    dispatch({
      type: "ADD_ITEM",
      payload: {
        id: product.id,
        name: product.name,
        name_ar: product.name_ar,
        price: product.price,
        sale_price: product.sale_price,
        image_url: product.image_url,
      },
    })
  }

  return (
    <Card className="group hover:shadow-lg transition-all duration-300">
      <div className="aspect-square bg-muted rounded-t-lg relative overflow-hidden">
        <img
          src={product.image_url || `/placeholder.svg?height=300&width=300&query=${product.name_ar}`}
          alt={product.name_ar}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        {hasDiscount && (
          <Badge className="absolute top-3 right-3 bg-destructive text-destructive-foreground">خصم</Badge>
        )}
        {product.is_featured && <Badge className="absolute top-3 left-3 bg-accent text-accent-foreground">مميز</Badge>}
      </div>
      <CardContent className="p-4">
        <h3 className="font-semibold text-foreground mb-2 line-clamp-2">{product.name_ar}</h3>
        <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
          {product.description_ar || product.description}
        </p>
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            <span className="font-bold text-primary">${displayPrice}</span>
            {hasDiscount && <span className="text-sm text-muted-foreground line-through">${product.price}</span>}
          </div>
          <div className="flex items-center gap-1">
            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
            <span className="text-sm text-muted-foreground">4.5</span>
          </div>
        </div>
        <Button className="w-full" size="sm" onClick={addToCart}>
          <ShoppingCart className="mr-2 h-4 w-4" />
          إضافة للسلة
        </Button>
      </CardContent>
    </Card>
  )
}

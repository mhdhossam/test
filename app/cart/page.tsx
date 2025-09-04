"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import { Plus, Minus, Trash2, ShoppingCart, ArrowRight } from "lucide-react"
import { useCart } from "@/lib/cart-context"
import Link from "next/link"

export default function CartPage() {
  const { state, dispatch } = useCart()

  const updateQuantity = (id: string, quantity: number) => {
    dispatch({ type: "UPDATE_QUANTITY", payload: { id, quantity } })
  }

  const removeItem = (id: string) => {
    dispatch({ type: "REMOVE_ITEM", payload: id })
  }

  const clearCart = () => {
    dispatch({ type: "CLEAR_CART" })
  }

  if (state.items.length === 0) {
    return (
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-md mx-auto text-center">
          <ShoppingCart className="mx-auto h-16 w-16 text-muted-foreground mb-6" />
          <h1 className="text-2xl font-bold mb-4">سلة التسوق فارغة</h1>
          <p className="text-muted-foreground mb-8">لم تقم بإضافة أي منتجات إلى سلة التسوق بعد</p>
          <Link href="/products">
            <Button size="lg">
              تصفح المنتجات
              <ArrowRight className="mr-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">سلة التسوق</h1>
        <p className="text-muted-foreground">{state.itemCount} منتج في السلة</p>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Cart Items */}
        <div className="lg:col-span-2 space-y-4">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-semibold">المنتجات</h2>
            <Button variant="ghost" size="sm" onClick={clearCart} className="text-destructive hover:text-destructive">
              <Trash2 className="mr-2 h-4 w-4" />
              إفراغ السلة
            </Button>
          </div>

          {state.items.map((item) => (
            <Card key={item.id}>
              <CardContent className="p-4">
                <div className="flex items-center gap-4">
                  <img
                    src={item.image_url || `/placeholder.svg?height=100&width=100&query=${item.name_ar}`}
                    alt={item.name_ar}
                    className="w-20 h-20 object-cover rounded-lg"
                  />
                  <div className="flex-1">
                    <h3 className="font-semibold mb-1">{item.name_ar}</h3>
                    <p className="text-sm text-muted-foreground mb-2">{item.name}</p>
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-primary">${(item.sale_price || item.price).toFixed(2)}</span>
                      {item.sale_price && (
                        <span className="text-sm text-muted-foreground line-through">${item.price.toFixed(2)}</span>
                      )}
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="flex items-center gap-2">
                      <Button
                        variant="outline"
                        size="icon"
                        className="h-8 w-8 bg-transparent"
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      >
                        <Minus className="h-3 w-3" />
                      </Button>
                      <Input
                        type="number"
                        value={item.quantity}
                        onChange={(e) => updateQuantity(item.id, Number.parseInt(e.target.value) || 1)}
                        className="w-16 text-center"
                        min="1"
                      />
                      <Button
                        variant="outline"
                        size="icon"
                        className="h-8 w-8 bg-transparent"
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      >
                        <Plus className="h-3 w-3" />
                      </Button>
                    </div>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="text-destructive hover:text-destructive"
                      onClick={() => removeItem(item.id)}
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Order Summary */}
        <div className="lg:col-span-1">
          <Card className="sticky top-4">
            <CardHeader>
              <CardTitle>ملخص الطلب</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span>المجموع الفرعي:</span>
                  <span>${state.total.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span>الشحن:</span>
                  <span>مجاني</span>
                </div>
                <div className="flex justify-between">
                  <span>الضريبة:</span>
                  <span>${(state.total * 0.1).toFixed(2)}</span>
                </div>
                <Separator />
                <div className="flex justify-between text-lg font-semibold">
                  <span>المجموع الكلي:</span>
                  <span className="text-primary">${(state.total * 1.1).toFixed(2)}</span>
                </div>
              </div>

              <div className="space-y-3">
                <Button className="w-full" size="lg">
                  إتمام الشراء
                </Button>
                <Link href="/products">
                  <Button variant="outline" className="w-full bg-transparent">
                    متابعة التسوق
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

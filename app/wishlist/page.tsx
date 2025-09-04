"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Heart, ShoppingCart, Trash2 } from "lucide-react"
import { useCart } from "@/lib/cart-context"

interface WishlistItem {
  id: number
  title: string
  price: number
  image: string
  description?: string
}

export default function Wishlist() {
  const [wishlistItems, setWishlistItems] = useState<WishlistItem[]>([])
  const { addToCart } = useCart()

  // Mock wishlist data
  useEffect(() => {
    const mockWishlist: WishlistItem[] = [
      {
        id: 1,
        title: "منتج تعليمي للأطفال ذوي الاحتياجات الخاصة",
        price: 299,
        image: "/educational-toy-special-needs.jpg",
        description: "منتج تعليمي مصمم خصيصاً لتطوير مهارات الأطفال",
      },
      {
        id: 2,
        title: "كتاب تطوير المهارات الحركية",
        price: 150,
        image: "/motor-skills-book.jpg",
        description: "دليل شامل لتطوير المهارات الحركية",
      },
      {
        id: 3,
        title: "أدوات مساعدة للتواصل",
        price: 450,
        image: "/communication-aids.jpg",
        description: "أدوات مساعدة لتحسين التواصل والتفاعل",
      },
    ]
    setWishlistItems(mockWishlist)
  }, [])

  const removeFromWishlist = (itemId: number) => {
    setWishlistItems((items) => items.filter((item) => item.id !== itemId))
  }

  const handleAddToCart = (item: WishlistItem) => {
    addToCart({
      id: item.id,
      title: item.title,
      price: item.price,
      image: item.image,
      quantity: 1,
    })
  }

  if (wishlistItems.length === 0) {
    return (
      <div
        className="min-h-screen bg-gradient-to-br from-teal-50 to-orange-50 flex items-center justify-center p-4"
        dir="rtl"
      >
        <div className="text-center space-y-6">
          <Heart className="w-24 h-24 text-gray-300 mx-auto" />
          <div className="space-y-2">
            <h2 className="text-2xl font-bold text-gray-900">قائمة الأمنيات فارغة</h2>
            <p className="text-gray-600">لم تقم بإضافة أي منتجات إلى قائمة الأمنيات بعد</p>
          </div>
          <Link href="/products">
            <Button className="bg-teal-600 hover:bg-teal-700">استكشاف المنتجات</Button>
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 to-orange-50 p-6" dir="rtl">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">قائمة الأمنيات</h1>
          <p className="text-gray-600">المنتجات المحفوظة لديك ({wishlistItems.length} منتج)</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {wishlistItems.map((item) => (
            <Card key={item.id} className="group hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <div className="relative">
                  <img
                    src={item.image || "/placeholder.svg"}
                    alt={item.title}
                    className="w-full h-48 object-cover rounded-t-lg"
                  />
                  <Button
                    size="sm"
                    variant="destructive"
                    className="absolute top-2 left-2 opacity-0 group-hover:opacity-100 transition-opacity"
                    onClick={() => removeFromWishlist(item.id)}
                  >
                    <Trash2 className="w-4 h-4" />
                  </Button>
                </div>

                <div className="p-4 space-y-3">
                  <div>
                    <h3 className="font-semibold text-gray-900 line-clamp-2">{item.title}</h3>
                    {item.description && <p className="text-sm text-gray-600 mt-1 line-clamp-2">{item.description}</p>}
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-xl font-bold text-teal-600">{item.price} جنيه</span>
                    <Button size="sm" onClick={() => handleAddToCart(item)} className="bg-teal-600 hover:bg-teal-700">
                      <ShoppingCart className="w-4 h-4 ml-2" />
                      أضف للسلة
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}

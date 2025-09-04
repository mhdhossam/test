"use client"

import { ProductCard } from "@/components/product-card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Search } from "lucide-react"

export default function ProductsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Page Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-foreground mb-2">متجر دليل</h1>
        <p className="text-muted-foreground">اكتشف مجموعة واسعة من المنتجات عالية الجودة</p>
      </div>

      {/* Filters and Search */}
      <div className="flex flex-col sm:flex-row gap-4 mb-8">
        <div className="relative flex-1">
          <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input placeholder="ابحث عن المنتجات..." className="pr-10" />
        </div>
        <Select>
          <SelectTrigger className="w-full sm:w-48">
            <SelectValue placeholder="الفئة" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">جميع الفئات</SelectItem>
            <SelectItem value="electronics">إلكترونيات</SelectItem>
            <SelectItem value="clothing">ملابس</SelectItem>
            <SelectItem value="books">كتب</SelectItem>
            <SelectItem value="home-garden">المنزل والحديقة</SelectItem>
            <SelectItem value="sports">رياضة</SelectItem>
          </SelectContent>
        </Select>
        <Select>
          <SelectTrigger className="w-full sm:w-48">
            <SelectValue placeholder="ترتيب حسب" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="newest">الأحدث</SelectItem>
            <SelectItem value="price-low">السعر: من الأقل للأعلى</SelectItem>
            <SelectItem value="price-high">السعر: من الأعلى للأقل</SelectItem>
            <SelectItem value="rating">التقييم</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Products Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {sampleProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {/* Load More */}
      <div className="text-center mt-12">
        <Button variant="outline" size="lg">
          تحميل المزيد
        </Button>
      </div>
    </div>
  )
}

// Sample products data
const sampleProducts = [
  {
    id: "1",
    name: "Wireless Headphones",
    name_ar: "سماعات لاسلكية عالية الجودة",
    description_ar: "سماعات لاسلكية مع إلغاء الضوضاء وجودة صوت استثنائية",
    price: 299.99,
    sale_price: 249.99,
    is_featured: true,
    slug: "wireless-headphones",
  },
  {
    id: "2",
    name: "Smart Watch",
    name_ar: "ساعة ذكية متقدمة",
    description_ar: "ساعة ذكية مع مراقبة الصحة وميزات متقدمة للياقة البدنية",
    price: 399.99,
    is_featured: true,
    slug: "smart-watch",
  },
  {
    id: "3",
    name: "Programming Guide",
    name_ar: "دليل البرمجة الشامل",
    description_ar: "كتاب شامل لتعلم البرمجة وتطوير الويب الحديث",
    price: 49.99,
    is_featured: false,
    slug: "programming-guide",
  },
  {
    id: "4",
    name: "Cotton T-Shirt",
    name_ar: "تيشيرت قطني مريح",
    description_ar: "تيشيرت قطني عالي الجودة ومريح للاستخدام اليومي",
    price: 29.99,
    sale_price: 24.99,
    is_featured: false,
    slug: "cotton-t-shirt",
  },
  {
    id: "5",
    name: "Yoga Mat",
    name_ar: "سجادة يوغا احترافية",
    description_ar: "سجادة يوغا غير قابلة للانزلاق ومناسبة لجميع التمارين",
    price: 39.99,
    sale_price: 34.99,
    is_featured: false,
    slug: "yoga-mat",
  },
  {
    id: "6",
    name: "LED Desk Lamp",
    name_ar: "مصباح مكتب LED ذكي",
    description_ar: "مصباح مكتب LED قابل للتعديل مع منفذ شحن USB",
    price: 79.99,
    is_featured: false,
    slug: "led-desk-lamp",
  },
]

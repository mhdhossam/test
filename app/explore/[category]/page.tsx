"use client"

import { useState, useEffect } from "react"
import { useParams } from "next/navigation"
import { ProductCard } from "@/components/product-card"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent } from "@/components/ui/card"
import { Filter, Grid, List } from "lucide-react"

interface Product {
  id: number
  title: string
  price: number
  image: string
  category: string
  description?: string
  is_in_stock?: boolean
}

interface Category {
  id: string
  name: string
  label: string
}

export default function ExploreProducts() {
  const params = useParams()
  const category = params.category as string
  const [products, setProducts] = useState<Product[]>([])
  const [categories, setCategories] = useState<Category[]>([])
  const [loading, setLoading] = useState(true)
  const [sortBy, setSortBy] = useState("default")
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")
  const [currentPage, setCurrentPage] = useState(1)
  const productsPerPage = 12

  // Mock data
  useEffect(() => {
    const mockCategories: Category[] = [
      { id: "all", name: "الكل", label: "all" },
      { id: "education", name: "تعليم", label: "education" },
      { id: "books", name: "كتب", label: "books" },
      { id: "tools", name: "أدوات مساعدة", label: "tools" },
      { id: "therapy", name: "علاج طبيعي", label: "therapy" },
    ]

    const mockProducts: Product[] = [
      {
        id: 1,
        title: "منتج تعليمي للأطفال ذوي الاحتياجات الخاصة",
        price: 299,
        image: "/educational-toy-special-needs.jpg",
        category: "education",
        description: "منتج تعليمي مصمم خصيصاً لتطوير مهارات الأطفال ذوي الاحتياجات الخاصة",
        is_in_stock: true,
      },
      {
        id: 2,
        title: "كتاب تطوير المهارات الحركية",
        price: 150,
        image: "/motor-skills-book.jpg",
        category: "books",
        description: "دليل شامل لتطوير المهارات الحركية للأطفال والبالغين",
        is_in_stock: true,
      },
      {
        id: 3,
        title: "أدوات مساعدة للتواصل",
        price: 450,
        image: "/communication-aids.jpg",
        category: "tools",
        description: "أدوات مساعدة لتحسين التواصل والتفاعل الاجتماعي",
        is_in_stock: true,
      },
      {
        id: 4,
        title: "برنامج العلاج الطبيعي المنزلي",
        price: 200,
        image: "/physical-therapy-home.jpg",
        category: "therapy",
        description: "برنامج شامل للعلاج الطبيعي يمكن تطبيقه في المنزل",
        is_in_stock: true,
      },
      {
        id: 5,
        title: "ألعاب تعليمية تفاعلية",
        price: 350,
        image: "/interactive-educational-games.jpg",
        category: "education",
        description: "مجموعة من الألعاب التعليمية التفاعلية لتطوير المهارات المختلفة",
        is_in_stock: true,
      },
      {
        id: 6,
        title: "دليل الأهل للتعامل مع الاحتياجات الخاصة",
        price: 120,
        image: "/parents-guide-special-needs.jpg",
        category: "books",
        description: "دليل شامل للأهل حول كيفية التعامل مع الأطفال ذوي الاحتياجات الخاصة",
        is_in_stock: true,
      },
    ]

    setCategories(mockCategories)

    // Filter products by category
    let filteredProducts = mockProducts
    if (category && category !== "all") {
      filteredProducts = mockProducts.filter((product) => product.category === category)
    }

    // Sort products
    if (sortBy === "price-low") {
      filteredProducts.sort((a, b) => a.price - b.price)
    } else if (sortBy === "price-high") {
      filteredProducts.sort((a, b) => b.price - a.price)
    }

    setProducts(filteredProducts)
    setLoading(false)
  }, [category, sortBy])

  const indexOfLastProduct = currentPage * productsPerPage
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct)
  const totalPages = Math.ceil(products.length / productsPerPage)

  const getCategoryName = (categoryId: string) => {
    const cat = categories.find((c) => c.label === categoryId)
    return cat ? cat.name : "المنتجات"
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-teal-50 to-orange-50 p-6" dir="rtl">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {Array.from({ length: 8 }).map((_, i) => (
              <Card key={i} className="animate-pulse">
                <CardContent className="p-0">
                  <div className="w-full h-48 bg-gray-200 rounded-t-lg"></div>
                  <div className="p-4 space-y-2">
                    <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                    <div className="h-4 bg-gray-200 rounded w-1/2"></div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 to-orange-50 p-6" dir="rtl">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">{getCategoryName(category || "all")}</h1>
          <p className="text-gray-600">{products.length} منتج متاح</p>
        </div>

        {/* Filters and Controls */}
        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          <div className="flex items-center gap-2">
            <Filter className="w-5 h-5 text-gray-600" />
            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger className="w-48">
                <SelectValue placeholder="ترتيب حسب" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="default">الافتراضي</SelectItem>
                <SelectItem value="price-low">السعر: من الأقل للأعلى</SelectItem>
                <SelectItem value="price-high">السعر: من الأعلى للأقل</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="flex items-center gap-2 mr-auto">
            <Button variant={viewMode === "grid" ? "default" : "outline"} size="sm" onClick={() => setViewMode("grid")}>
              <Grid className="w-4 h-4" />
            </Button>
            <Button variant={viewMode === "list" ? "default" : "outline"} size="sm" onClick={() => setViewMode("list")}>
              <List className="w-4 h-4" />
            </Button>
          </div>
        </div>

        {/* Products Grid */}
        {currentProducts.length > 0 ? (
          <div
            className={`grid gap-6 mb-8 ${
              viewMode === "grid" ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4" : "grid-cols-1"
            }`}
          >
            {currentProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-600 text-lg">لا توجد منتجات في هذه الفئة</p>
          </div>
        )}

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center gap-2">
            <Button
              variant="outline"
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
            >
              السابق
            </Button>

            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <Button
                key={page}
                variant={currentPage === page ? "default" : "outline"}
                onClick={() => setCurrentPage(page)}
                className="w-10"
              >
                {page}
              </Button>
            ))}

            <Button
              variant="outline"
              onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
              disabled={currentPage === totalPages}
            >
              التالي
            </Button>
          </div>
        )}
      </div>
    </div>
  )
}

"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"
import { Badge } from "@/components/ui/badge"
import { X, Filter } from "lucide-react"

interface FilterProps {
  onFiltersChange: (filters: ProductFilters) => void
}

interface ProductFilters {
  categories: string[]
  priceRange: [number, number]
  inStock: boolean
  rating: number
}

export function ProductFilters({ onFiltersChange }: FilterProps) {
  const [filters, setFilters] = useState<ProductFilters>({
    categories: [],
    priceRange: [0, 1000],
    inStock: false,
    rating: 0,
  })

  const categories = [
    { id: "education", name: "تعليم", count: 12 },
    { id: "books", name: "كتب", count: 8 },
    { id: "tools", name: "أدوات مساعدة", count: 15 },
    { id: "therapy", name: "علاج طبيعي", count: 6 },
    { id: "games", name: "ألعاب", count: 10 },
  ]

  const handleCategoryChange = (categoryId: string, checked: boolean) => {
    const newCategories = checked
      ? [...filters.categories, categoryId]
      : filters.categories.filter((id) => id !== categoryId)

    const newFilters = { ...filters, categories: newCategories }
    setFilters(newFilters)
    onFiltersChange(newFilters)
  }

  const handlePriceChange = (value: number[]) => {
    const newFilters = { ...filters, priceRange: [value[0], value[1]] as [number, number] }
    setFilters(newFilters)
    onFiltersChange(newFilters)
  }

  const handleInStockChange = (checked: boolean) => {
    const newFilters = { ...filters, inStock: checked }
    setFilters(newFilters)
    onFiltersChange(newFilters)
  }

  const clearFilters = () => {
    const newFilters: ProductFilters = {
      categories: [],
      priceRange: [0, 1000],
      inStock: false,
      rating: 0,
    }
    setFilters(newFilters)
    onFiltersChange(newFilters)
  }

  const activeFiltersCount =
    filters.categories.length +
    (filters.inStock ? 1 : 0) +
    (filters.priceRange[0] > 0 || filters.priceRange[1] < 1000 ? 1 : 0)

  return (
    <Card className="w-full" dir="rtl">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="flex items-center gap-2">
            <Filter className="w-5 h-5" />
            تصفية المنتجات
            {activeFiltersCount > 0 && <Badge variant="secondary">{activeFiltersCount}</Badge>}
          </CardTitle>
          {activeFiltersCount > 0 && (
            <Button variant="ghost" size="sm" onClick={clearFilters}>
              <X className="w-4 h-4 ml-1" />
              مسح الكل
            </Button>
          )}
        </div>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Categories */}
        <div className="space-y-3">
          <h4 className="font-medium text-sm">الفئات</h4>
          <div className="space-y-2">
            {categories.map((category) => (
              <div key={category.id} className="flex items-center justify-between">
                <div className="flex items-center space-x-2 space-x-reverse">
                  <Checkbox
                    id={category.id}
                    checked={filters.categories.includes(category.id)}
                    onCheckedChange={(checked) => handleCategoryChange(category.id, checked as boolean)}
                  />
                  <Label htmlFor={category.id} className="text-sm">
                    {category.name}
                  </Label>
                </div>
                <span className="text-xs text-gray-500">({category.count})</span>
              </div>
            ))}
          </div>
        </div>

        {/* Price Range */}
        <div className="space-y-3">
          <h4 className="font-medium text-sm">نطاق السعر</h4>
          <div className="px-2">
            <Slider
              value={filters.priceRange}
              onValueChange={handlePriceChange}
              max={1000}
              min={0}
              step={10}
              className="w-full"
            />
            <div className="flex justify-between text-xs text-gray-500 mt-2">
              <span>{filters.priceRange[0]} جنيه</span>
              <span>{filters.priceRange[1]} جنيه</span>
            </div>
          </div>
        </div>

        {/* Availability */}
        <div className="space-y-3">
          <h4 className="font-medium text-sm">التوفر</h4>
          <div className="flex items-center space-x-2 space-x-reverse">
            <Checkbox id="inStock" checked={filters.inStock} onCheckedChange={handleInStockChange} />
            <Label htmlFor="inStock" className="text-sm">
              متوفر فقط
            </Label>
          </div>
        </div>

        {/* Active Filters */}
        {activeFiltersCount > 0 && (
          <div className="space-y-2">
            <h4 className="font-medium text-sm">المرشحات النشطة</h4>
            <div className="flex flex-wrap gap-2">
              {filters.categories.map((categoryId) => {
                const category = categories.find((c) => c.id === categoryId)
                return category ? (
                  <Badge key={categoryId} variant="secondary" className="text-xs">
                    {category.name}
                    <Button
                      variant="ghost"
                      size="sm"
                      className="h-auto p-0 ml-1"
                      onClick={() => handleCategoryChange(categoryId, false)}
                    >
                      <X className="w-3 h-3" />
                    </Button>
                  </Badge>
                ) : null
              })}
              {filters.inStock && (
                <Badge variant="secondary" className="text-xs">
                  متوفر فقط
                  <Button
                    variant="ghost"
                    size="sm"
                    className="h-auto p-0 ml-1"
                    onClick={() => handleInStockChange(false)}
                  >
                    <X className="w-3 h-3" />
                  </Button>
                </Badge>
              )}
              {(filters.priceRange[0] > 0 || filters.priceRange[1] < 1000) && (
                <Badge variant="secondary" className="text-xs">
                  {filters.priceRange[0]} - {filters.priceRange[1]} جنيه
                  <Button
                    variant="ghost"
                    size="sm"
                    className="h-auto p-0 ml-1"
                    onClick={() => handlePriceChange([0, 1000])}
                  >
                    <X className="w-3 h-3" />
                  </Button>
                </Badge>
              )}
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  )
}

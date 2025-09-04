"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Pencil, Trash2, Plus, Package, DollarSign, ShoppingCart, TrendingUp } from "lucide-react"
import { useAuth } from "@/lib/auth-context"

interface Product {
  id: number
  title: string
  price: number
  stock: number
  category: string
  sold_count: number
  image: string
  vendor_name: string
}

export default function VendorDashboard() {
  const [products, setProducts] = useState<Product[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [editingProduct, setEditingProduct] = useState<Product | null>(null)
  const { user } = useAuth()
  const router = useRouter()

  // Mock data for demonstration
  useEffect(() => {
    const mockProducts: Product[] = [
      {
        id: 1,
        title: "منتج تعليمي للأطفال",
        price: 299,
        stock: 15,
        category: "تعليم",
        sold_count: 8,
        image: "/placeholder-ie2ml.png",
        vendor_name: "متجر دليل",
      },
      {
        id: 2,
        title: "كتاب تطوير المهارات",
        price: 150,
        stock: 25,
        category: "كتب",
        sold_count: 12,
        image: "/placeholder-8ws0i.png",
        vendor_name: "متجر دليل",
      },
      {
        id: 3,
        title: "أدوات مساعدة حركية",
        price: 450,
        stock: 8,
        category: "أدوات مساعدة",
        sold_count: 5,
        image: "/placeholder-06tmb.png",
        vendor_name: "متجر دليل",
      },
    ]
    setProducts(mockProducts)
  }, [])

  const handleEdit = (product: Product) => {
    setEditingProduct(product)
  }

  const handleSave = () => {
    if (editingProduct) {
      setProducts(products.map((p) => (p.id === editingProduct.id ? editingProduct : p)))
      setEditingProduct(null)
    }
  }

  const handleDelete = (productId: number) => {
    if (confirm("هل أنت متأكد من حذف هذا المنتج؟")) {
      setProducts(products.filter((p) => p.id !== productId))
    }
  }

  const totalRevenue = products.reduce((sum, product) => sum + product.price * product.sold_count, 0)
  const totalSold = products.reduce((sum, product) => sum + product.sold_count, 0)
  const lowStockProducts = products.filter((p) => p.stock < 10).length

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 to-orange-50 p-6" dir="rtl">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header */}
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">لوحة تحكم البائع</h1>
            <p className="text-gray-600 mt-2">إدارة منتجاتك بكفاءة</p>
          </div>
          <Button onClick={() => router.push("/vendor/products/new")} className="bg-teal-600 hover:bg-teal-700">
            <Plus className="w-4 h-4 ml-2" />
            إضافة منتج جديد
          </Button>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">إجمالي المنتجات</CardTitle>
              <Package className="h-4 w-4 text-teal-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{products.length}</div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">إجمالي الإيرادات</CardTitle>
              <DollarSign className="h-4 w-4 text-teal-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{totalRevenue} جنيه</div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">المبيعات</CardTitle>
              <ShoppingCart className="h-4 w-4 text-teal-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{totalSold}</div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">مخزون منخفض</CardTitle>
              <TrendingUp className="h-4 w-4 text-orange-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-orange-600">{lowStockProducts}</div>
            </CardContent>
          </Card>
        </div>

        {/* Products Table */}
        <Card>
          <CardHeader>
            <CardTitle>إدارة المنتجات</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="text-right">الصورة</TableHead>
                  <TableHead className="text-right">اسم المنتج</TableHead>
                  <TableHead className="text-right">السعر</TableHead>
                  <TableHead className="text-right">المخزون</TableHead>
                  <TableHead className="text-right">الفئة</TableHead>
                  <TableHead className="text-right">المبيعات</TableHead>
                  <TableHead className="text-right">الإجراءات</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {products.map((product) => (
                  <TableRow key={product.id}>
                    <TableCell>
                      <img
                        src={product.image || "/placeholder.svg"}
                        alt={product.title}
                        className="w-12 h-12 rounded-lg object-cover"
                      />
                    </TableCell>
                    <TableCell>
                      {editingProduct?.id === product.id ? (
                        <Input
                          value={editingProduct.title}
                          onChange={(e) => setEditingProduct({ ...editingProduct, title: e.target.value })}
                          className="w-full"
                        />
                      ) : (
                        <div className="font-medium">{product.title}</div>
                      )}
                    </TableCell>
                    <TableCell>
                      {editingProduct?.id === product.id ? (
                        <Input
                          type="number"
                          value={editingProduct.price}
                          onChange={(e) => setEditingProduct({ ...editingProduct, price: Number(e.target.value) })}
                          className="w-24"
                        />
                      ) : (
                        <span>{product.price} جنيه</span>
                      )}
                    </TableCell>
                    <TableCell>
                      {editingProduct?.id === product.id ? (
                        <Input
                          type="number"
                          value={editingProduct.stock}
                          onChange={(e) => setEditingProduct({ ...editingProduct, stock: Number(e.target.value) })}
                          className="w-20"
                        />
                      ) : (
                        <Badge variant={product.stock < 10 ? "destructive" : "secondary"}>{product.stock}</Badge>
                      )}
                    </TableCell>
                    <TableCell>
                      {editingProduct?.id === product.id ? (
                        <Input
                          value={editingProduct.category}
                          onChange={(e) => setEditingProduct({ ...editingProduct, category: e.target.value })}
                          className="w-32"
                        />
                      ) : (
                        <span>{product.category}</span>
                      )}
                    </TableCell>
                    <TableCell>
                      <span className="font-medium">{product.sold_count}</span>
                    </TableCell>
                    <TableCell>
                      <div className="flex gap-2">
                        {editingProduct?.id === product.id ? (
                          <>
                            <Button size="sm" onClick={handleSave} className="bg-green-600 hover:bg-green-700">
                              حفظ
                            </Button>
                            <Button size="sm" variant="outline" onClick={() => setEditingProduct(null)}>
                              إلغاء
                            </Button>
                          </>
                        ) : (
                          <>
                            <Button size="sm" variant="outline" onClick={() => handleEdit(product)}>
                              <Pencil className="w-4 h-4" />
                            </Button>
                            <Button size="sm" variant="destructive" onClick={() => handleDelete(product.id)}>
                              <Trash2 className="w-4 h-4" />
                            </Button>
                          </>
                        )}
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

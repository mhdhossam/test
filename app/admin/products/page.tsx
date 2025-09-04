import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Plus, Search, MoreHorizontal, Edit, Trash2, Eye } from "lucide-react"

export default function ProductsPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">إدارة المنتجات</h1>
          <p className="text-muted-foreground">إدارة وتحديث منتجات المتجر</p>
        </div>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          إضافة منتج جديد
        </Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>المنتجات</CardTitle>
          <CardDescription>قائمة بجميع المنتجات في المتجر</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center space-x-2 space-x-reverse mb-4">
            <div className="relative flex-1 max-w-sm">
              <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input placeholder="البحث في المنتجات..." className="pr-10" />
            </div>
          </div>

          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>المنتج</TableHead>
                <TableHead>الفئة</TableHead>
                <TableHead>السعر</TableHead>
                <TableHead>المخزون</TableHead>
                <TableHead>الحالة</TableHead>
                <TableHead className="text-right">الإجراءات</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {products.map((product) => (
                <TableRow key={product.id}>
                  <TableCell className="font-medium">
                    <div className="flex items-center space-x-3 space-x-reverse">
                      <img
                        src={`/abstract-geometric-shapes.png?height=40&width=40&query=${product.name_ar}`}
                        alt={product.name_ar}
                        className="w-10 h-10 rounded object-cover"
                      />
                      <div>
                        <div className="font-medium">{product.name_ar}</div>
                        <div className="text-sm text-muted-foreground">{product.sku}</div>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>{product.category}</TableCell>
                  <TableCell>
                    <div className="flex items-center space-x-2 space-x-reverse">
                      <span className="font-medium">${product.sale_price || product.price}</span>
                      {product.sale_price && (
                        <span className="text-sm text-muted-foreground line-through">${product.price}</span>
                      )}
                    </div>
                  </TableCell>
                  <TableCell>
                    <span className={product.stock > 10 ? "text-green-600" : "text-red-600"}>{product.stock}</span>
                  </TableCell>
                  <TableCell>
                    <Badge variant={product.is_active ? "default" : "secondary"}>
                      {product.is_active ? "نشط" : "غير نشط"}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-right">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" className="h-8 w-8 p-0">
                          <span className="sr-only">فتح القائمة</span>
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuLabel>الإجراءات</DropdownMenuLabel>
                        <DropdownMenuItem>
                          <Eye className="mr-2 h-4 w-4" />
                          عرض
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <Edit className="mr-2 h-4 w-4" />
                          تعديل
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem className="text-red-600">
                          <Trash2 className="mr-2 h-4 w-4" />
                          حذف
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}

const products = [
  {
    id: "1",
    name_ar: "سماعات لاسلكية عالية الجودة",
    sku: "WH-001",
    category: "إلكترونيات",
    price: 299.99,
    sale_price: 249.99,
    stock: 50,
    is_active: true,
  },
  {
    id: "2",
    name_ar: "ساعة ذكية متقدمة",
    sku: "SW-001",
    category: "إلكترونيات",
    price: 399.99,
    sale_price: null,
    stock: 30,
    is_active: true,
  },
  {
    id: "3",
    name_ar: "دليل البرمجة الشامل",
    sku: "PG-001",
    category: "كتب",
    price: 49.99,
    sale_price: null,
    stock: 25,
    is_active: true,
  },
  {
    id: "4",
    name_ar: "تيشيرت قطني مريح",
    sku: "CT-001",
    category: "ملابس",
    price: 29.99,
    sale_price: 24.99,
    stock: 100,
    is_active: true,
  },
  {
    id: "5",
    name_ar: "سجادة يوغا احترافية",
    sku: "YM-001",
    category: "رياضة",
    price: 39.99,
    sale_price: 34.99,
    stock: 5,
    is_active: true,
  },
]

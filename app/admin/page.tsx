import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { DollarSign, Package, ShoppingCart, Users, TrendingUp, Eye, Plus } from "lucide-react"

export default function AdminDashboard() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">لوحة التحكم</h1>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          إضافة منتج جديد
        </Button>
      </div>

      {/* Stats Cards */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">إجمالي المبيعات</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$45,231.89</div>
            <p className="text-xs text-muted-foreground flex items-center">
              <TrendingUp className="h-3 w-3 text-green-500 mr-1" />
              +20.1% من الشهر الماضي
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">الطلبات</CardTitle>
            <ShoppingCart className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">+2350</div>
            <p className="text-xs text-muted-foreground flex items-center">
              <TrendingUp className="h-3 w-3 text-green-500 mr-1" />
              +180.1% من الشهر الماضي
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">المنتجات</CardTitle>
            <Package className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">+12,234</div>
            <p className="text-xs text-muted-foreground flex items-center">
              <TrendingUp className="h-3 w-3 text-green-500 mr-1" />
              +19% من الشهر الماضي
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">العملاء النشطون</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">+573</div>
            <p className="text-xs text-muted-foreground flex items-center">
              <TrendingUp className="h-3 w-3 text-green-500 mr-1" />
              +201 منذ الساعة الماضية
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        {/* Recent Orders */}
        <Card className="col-span-4">
          <CardHeader>
            <CardTitle>الطلبات الأخيرة</CardTitle>
            <CardDescription>لديك 265 طلب هذا الشهر.</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentOrders.map((order) => (
                <div key={order.id} className="flex items-center justify-between">
                  <div className="flex items-center space-x-4 space-x-reverse">
                    <div className="w-9 h-9 bg-muted rounded-full flex items-center justify-center">
                      <span className="text-sm font-medium">{order.customer.charAt(0)}</span>
                    </div>
                    <div>
                      <p className="text-sm font-medium leading-none">{order.customer}</p>
                      <p className="text-sm text-muted-foreground">طلب #{order.id}</p>
                    </div>
                  </div>
                  <div className="text-left">
                    <p className="text-sm font-medium">${order.amount}</p>
                    <Badge variant={order.status === "completed" ? "default" : "secondary"}>
                      {order.status === "completed" ? "مكتمل" : "قيد المعالجة"}
                    </Badge>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Top Products */}
        <Card className="col-span-3">
          <CardHeader>
            <CardTitle>المنتجات الأكثر مبيعاً</CardTitle>
            <CardDescription>أفضل المنتجات هذا الأسبوع</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {topProducts.map((product) => (
                <div key={product.id} className="flex items-center justify-between">
                  <div className="flex items-center space-x-3 space-x-reverse">
                    <img
                      src={`/abstract-geometric-shapes.png?height=40&width=40&query=${product.name}`}
                      alt={product.name}
                      className="w-10 h-10 rounded object-cover"
                    />
                    <div>
                      <p className="text-sm font-medium leading-none">{product.name}</p>
                      <p className="text-sm text-muted-foreground">${product.price}</p>
                    </div>
                  </div>
                  <div className="text-left">
                    <p className="text-sm font-medium">{product.sales} مبيعة</p>
                    <div className="flex items-center text-xs text-muted-foreground">
                      <Eye className="h-3 w-3 mr-1" />
                      {product.views} مشاهدة
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

const recentOrders = [
  {
    id: "ORD-001",
    customer: "أحمد محمد",
    amount: 250.0,
    status: "completed",
  },
  {
    id: "ORD-002",
    customer: "فاطمة علي",
    amount: 150.0,
    status: "processing",
  },
  {
    id: "ORD-003",
    customer: "محمد حسن",
    amount: 350.0,
    status: "completed",
  },
  {
    id: "ORD-004",
    customer: "نور الدين",
    amount: 450.0,
    status: "processing",
  },
  {
    id: "ORD-005",
    customer: "ليلى أحمد",
    amount: 200.0,
    status: "completed",
  },
]

const topProducts = [
  {
    id: "1",
    name: "سماعات لاسلكية",
    price: 249.99,
    sales: 73,
    views: 1234,
  },
  {
    id: "2",
    name: "ساعة ذكية",
    price: 399.99,
    sales: 52,
    views: 987,
  },
  {
    id: "3",
    name: "دليل البرمجة",
    price: 49.99,
    sales: 47,
    views: 756,
  },
  {
    id: "4",
    name: "تيشيرت قطني",
    price: 24.99,
    sales: 41,
    views: 654,
  },
]

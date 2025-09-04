import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ShoppingBag, BookOpen, Users, Award, Star, ArrowRight } from "lucide-react"

export default function HomePage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/10 via-background to-accent/5 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold tracking-tight text-foreground sm:text-6xl text-balance">
              دليل - منصة التمكين الشاملة
            </h1>
            <p className="mt-6 text-xl leading-8 text-muted-foreground text-pretty">
              نمكن ذوي الاحتياجات الخاصة من خلال التعليم والتدريب والتسوق الآمن
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                <ShoppingBag className="mr-2 h-5 w-5" />
                تسوق الآن
              </Button>
              <Button variant="outline" size="lg">
                <BookOpen className="mr-2 h-5 w-5" />
                استكشف الدورات
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">خدماتنا</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              نقدم مجموعة شاملة من الخدمات لدعم وتمكين ذوي الاحتياجات الخاصة
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="mx-auto w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <BookOpen className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>التعليم والتدريب</CardTitle>
                <CardDescription>دورات متخصصة ومناهج تعليمية مصممة خصيصاً لذوي الاحتياجات الخاصة</CardDescription>
              </CardHeader>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="mx-auto w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                  <ShoppingBag className="h-6 w-6 text-accent-foreground" />
                </div>
                <CardTitle>متجر دليل</CardTitle>
                <CardDescription>منتجات وأدوات مساعدة عالية الجودة لتحسين جودة الحياة اليومية</CardDescription>
              </CardHeader>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="mx-auto w-12 h-12 bg-chart-3/10 rounded-lg flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-chart-3" />
                </div>
                <CardTitle>المجتمع والدعم</CardTitle>
                <CardDescription>شبكة دعم قوية وبرامج تأهيل مهني لضمان الاندماج المجتمعي</CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-2">المنتجات المميزة</h2>
              <p className="text-muted-foreground">اكتشف أحدث المنتجات في متجر دليل</p>
            </div>
            <Button variant="outline">
              عرض الكل
              <ArrowRight className="mr-2 h-4 w-4" />
            </Button>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProducts.map((product) => (
              <Card key={product.id} className="group hover:shadow-lg transition-all duration-300">
                <div className="aspect-square bg-muted rounded-t-lg relative overflow-hidden">
                  <img
                    src={`/abstract-geometric-shapes.png?height=300&width=300&query=${product.name}`}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  {product.badge && (
                    <Badge className="absolute top-3 right-3 bg-accent text-accent-foreground">{product.badge}</Badge>
                  )}
                </div>
                <CardContent className="p-4">
                  <h3 className="font-semibold text-foreground mb-2 line-clamp-2">{product.name}</h3>
                  <p className="text-sm text-muted-foreground mb-3 line-clamp-2">{product.description}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-primary">${product.price}</span>
                      {product.originalPrice && (
                        <span className="text-sm text-muted-foreground line-through">${product.originalPrice}</span>
                      )}
                    </div>
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm text-muted-foreground">{product.rating}</span>
                    </div>
                  </div>
                  <Button className="w-full mt-3" size="sm">
                    إضافة للسلة
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">انضم إلى مجتمع دليل</h2>
          <p className="text-xl mb-8 text-primary-foreground/90 max-w-2xl mx-auto">
            ابدأ رحلتك معنا اليوم واكتشف عالماً من الفرص والإمكانيات
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary">
              <Award className="mr-2 h-5 w-5" />
              سجل في دورة
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary bg-transparent"
            >
              تواصل معنا
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}

// Sample featured products data
const featuredProducts = [
  {
    id: 1,
    name: "سماعات لاسلكية عالية الجودة",
    description: "سماعات لاسلكية مع إلغاء الضوضاء وجودة صوت استثنائية",
    price: 249.99,
    originalPrice: 299.99,
    rating: 4.8,
    badge: "خصم",
  },
  {
    id: 2,
    name: "ساعة ذكية متقدمة",
    description: "ساعة ذكية مع مراقبة الصحة وميزات متقدمة",
    price: 399.99,
    rating: 4.9,
    badge: "جديد",
  },
  {
    id: 3,
    name: "دليل البرمجة الشامل",
    description: "كتاب شامل لتعلم البرمجة وتطوير الويب الحديث",
    price: 49.99,
    rating: 4.7,
  },
]

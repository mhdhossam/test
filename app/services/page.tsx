import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const services = [
  {
    title: "دورات تدريبية متخصصة",
    description: "برامج تدريبية مصممة خصيصاً لتطوير مهارات ذوي الهمم في مختلف المجالات",
    features: ["تدريب مهني", "تطوير المهارات", "شهادات معتمدة"],
    icon: "🎓",
  },
  {
    title: "الحرف اليدوية",
    description: "تعلم الحرف اليدوية التقليدية والحديثة لتطوير مهارات جديدة وفرص عمل",
    features: ["حرف تقليدية", "تقنيات حديثة", "تسويق المنتجات"],
    icon: "🎨",
  },
  {
    title: "الإرشاد النفسي",
    description: "جلسات إرشادية نفسية أونلاين وأوفلاين لدعم الصحة النفسية والعقلية",
    features: ["جلسات فردية", "جلسات جماعية", "استشارات أونلاين"],
    icon: "🧠",
  },
  {
    title: "فرص العمل",
    description: "ربط ذوي الهمم بفرص عمل مناسبة وتأهيلهم للسوق المصري",
    features: ["توظيف مباشر", "تدريب مهني", "متابعة مستمرة"],
    icon: "💼",
  },
  {
    title: "المنح الدراسية",
    description: "برامج منح دراسية لدعم التعليم والتطوير الأكاديمي",
    features: ["منح كاملة", "منح جزئية", "دعم أكاديمي"],
    icon: "📚",
  },
  {
    title: "التسويق الإلكتروني",
    description: "منصة لتسويق منتجات ذوي الهمم وزيادة دخلهم",
    features: ["متجر إلكتروني", "تسويق رقمي", "دعم المبيعات"],
    icon: "🛒",
  },
]

const tracks = [
  { name: "تطوير الويب", duration: "3 أشهر", level: "مبتدئ إلى متقدم" },
  { name: "التصميم الجرافيكي", duration: "2 أشهر", level: "مبتدئ" },
  { name: "التسويق الرقمي", duration: "6 أسابيع", level: "متوسط" },
  { name: "المحاسبة", duration: "4 أشهر", level: "مبتدئ إلى متوسط" },
  { name: "خدمة العملاء", duration: "4 أسابيع", level: "مبتدئ" },
  { name: "الحرف اليدوية", duration: "مستمر", level: "جميع المستويات" },
]

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-primary to-primary/80 text-primary-foreground py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">خدماتنا</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed">
            مجموعة شاملة من الخدمات المصممة خصيصاً لتمكين ذوي الهمم وتطوير قدراتهم
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">خدماتنا المتميزة</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              نقدم مجموعة متنوعة من الخدمات لدعم ذوي الهمم في رحلتهم نحو التمكين والاستقلالية
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow h-full">
                <CardHeader>
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-1">
                  <p className="text-muted-foreground mb-4">{service.description}</p>
                  <div className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <Badge key={idx} variant="secondary" className="mr-2">
                        {feature}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Tracks Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">مساراتنا التدريبية</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              مسارات تدريبية متخصصة مصممة لتلبية احتياجات السوق وتطوير المهارات المطلوبة
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tracks.map((track, index) => (
              <Card key={index} className="text-center">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-3">{track.name}</h3>
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <p>
                      <span className="font-medium">المدة:</span> {track.duration}
                    </p>
                    <p>
                      <span className="font-medium">المستوى:</span> {track.level}
                    </p>
                  </div>
                  <Button className="mt-4 w-full">التسجيل الآن</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">ابدأ رحلتك معنا اليوم</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            انضم إلى مجتمع دليل واكتشف إمكاناتك الحقيقية مع برامجنا المتخصصة
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary">
              تصفح الدورات
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
    </div>
  )
}

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const scholarships = [
  {
    title: "منحة E-Matrix للتكنولوجيا",
    description: "منحة شاملة لتعلم تطوير البرمجيات وتقنيات الذكاء الاصطناعي",
    duration: "6 أشهر",
    value: "مجانية بالكامل",
    requirements: ["شهادة ثانوية عامة", "اهتمام بالتكنولوجيا", "التزام بالحضور"],
    benefits: ["تدريب عملي", "شهادة معتمدة", "فرص توظيف", "دعم مستمر"],
  },
  {
    title: "منحة دليل للحرف اليدوية",
    description: "برنامج تدريبي متخصص في الحرف اليدوية التقليدية والحديثة",
    duration: "4 أشهر",
    value: "مجانية + مواد التدريب",
    requirements: ["الرغبة في التعلم", "الالتزام بالمواعيد", "العمل الجماعي"],
    benefits: ["تعلم حرف متنوعة", "تسويق المنتجات", "دخل إضافي", "شبكة علاقات"],
  },
  {
    title: "منحة التمكين المهني",
    description: "برنامج شامل لتطوير المهارات المهنية والشخصية",
    duration: "3 أشهر",
    value: "مجانية + مكافآت",
    requirements: ["التفاني في التعلم", "المشاركة الفعالة", "إكمال المشاريع"],
    benefits: ["تطوير مهارات", "بناء السيرة الذاتية", "شبكة مهنية", "إرشاد مهني"],
  },
]

const applicationSteps = [
  {
    step: 1,
    title: "التسجيل الأولي",
    description: "املأ نموذج التقديم الإلكتروني بالمعلومات المطلوبة",
  },
  {
    step: 2,
    title: "المراجعة والتقييم",
    description: "سيتم مراجعة طلبك وتقييم مدى توافقك مع متطلبات المنحة",
  },
  {
    step: 3,
    title: "المقابلة الشخصية",
    description: "مقابلة قصيرة لتحديد مستوى الالتزام والدافعية",
  },
  {
    step: 4,
    title: "القبول والبدء",
    description: "إشعار بالقبول وبدء البرنامج التدريبي",
  },
]

export default function ScholarshipPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-primary to-primary/80 text-primary-foreground py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">المنح الدراسية</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed">
            فرص تعليمية مجانية لتطوير مهاراتك وتحقيق أهدافك المهنية
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-primary">اكتشف فرص المنح مع دليل</h2>
              <p className="text-lg leading-relaxed text-muted-foreground">
                نوفر مجموعة متنوعة من المنح الدراسية المجانية المصممة خصيصاً لذوي الهمم. هدفنا هو تمكينكم من الوصول إلى
                أفضل الفرص التعليمية والتدريبية لتطوير مهاراتكم وتحقيق أحلامكم المهنية.
              </p>
              <div className="flex flex-wrap gap-3">
                <Badge variant="secondary" className="text-sm">
                  منح مجانية 100%
                </Badge>
                <Badge variant="secondary" className="text-sm">
                  شهادات معتمدة
                </Badge>
                <Badge variant="secondary" className="text-sm">
                  دعم مستمر
                </Badge>
                <Badge variant="secondary" className="text-sm">
                  فرص توظيف
                </Badge>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-video bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-primary-foreground" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
                    </svg>
                  </div>
                  <p className="text-muted-foreground">صورة توضيحية للمنح الدراسية</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Scholarships */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">المنح المتاحة</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              اختر المنحة التي تناسب اهتماماتك وأهدافك المهنية
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {scholarships.map((scholarship, index) => (
              <Card key={index} className="h-full hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-xl">{scholarship.title}</CardTitle>
                  <p className="text-muted-foreground">{scholarship.description}</p>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="font-medium">المدة:</span>
                      <p className="text-muted-foreground">{scholarship.duration}</p>
                    </div>
                    <div>
                      <span className="font-medium">القيمة:</span>
                      <p className="text-muted-foreground">{scholarship.value}</p>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-medium mb-2">المتطلبات:</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      {scholarship.requirements.map((req, idx) => (
                        <li key={idx} className="flex items-center">
                          <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2 flex-shrink-0"></span>
                          {req}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-medium mb-2">المزايا:</h4>
                    <div className="flex flex-wrap gap-2">
                      {scholarship.benefits.map((benefit, idx) => (
                        <Badge key={idx} variant="outline" className="text-xs">
                          {benefit}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <Button className="w-full mt-4">التقديم للمنحة</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">خطوات التقديم</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              عملية بسيطة وواضحة للتقديم على المنح الدراسية
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {applicationSteps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary-foreground">{step.step}</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                <p className="text-sm text-muted-foreground">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">ابدأ رحلتك التعليمية اليوم</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            لا تفوت الفرصة للحصول على تعليم مجاني عالي الجودة وتطوير مهاراتك
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary">
              تقديم طلب منحة
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary bg-transparent"
            >
              تحميل دليل المنح
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

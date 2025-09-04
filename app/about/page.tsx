import { Card, CardContent } from "@/components/ui/card"

const teamMembers = [
  { name: "Eng. Eman Ahmed", role: "Founder Daleel", description: "مؤسسة دليل والرائدة في تمكين ذوي الهمم" },
  { name: "Mostafa Sayed", role: "Technical Front-End", description: "مطور واجهات المستخدم" },
  { name: "Mohamed Hossam", role: "Technical Back-End", description: "مطور الخادم والقواعد" },
  { name: "Mohamed Salah", role: "Technical Back-End", description: "مطور الخادم والقواعد" },
  { name: "Alaa Nasser", role: "Customer Service", description: "خدمة العملاء" },
  { name: "Ali Gamal", role: "Coach", description: "مدرب ومرشد" },
]

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-primary to-primary/80 text-primary-foreground py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">من نحن</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed">
            نحن فريق دليل المتخصص في تمكين ذوي الهمم اقتصادياً ومهنياً ونفسياً
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-primary">رسالتنا</h2>
              <p className="text-lg leading-relaxed text-muted-foreground">
                تمكين ذوي الهمم اقتصادياً ومهنياً ونفسياً من خلال توفير دورات تدريبية وكورسات حرف يدوية ومنح وتسويق منتجات
                وجلسات إرشادية أوفلاين وأونلاين لتوفير فرص عمل لذوي الهمم وتأهيلهم في السوق المصري طبقاً لرؤية مصر 2030
              </p>
              <div className="text-2xl font-bold text-accent">#دليل_الأولى_والرائدة</div>
            </div>
            <div className="relative">
              <div className="aspect-video bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-primary-foreground" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10 12l-6-6 1.41-1.41L10 9.17l4.59-4.58L16 6l-6 6z" />
                    </svg>
                  </div>
                  <p className="text-muted-foreground">فيديو تعريفي عن دليل</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">فريق العمل</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              فريق متخصص ومتفاني لخدمة ذوي الهمم وتحقيق أهدافهم
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="w-24 h-24 bg-gradient-to-br from-primary to-accent rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-2xl font-bold text-white">
                      {member.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                  <p className="text-accent font-medium mb-2">{member.role}</p>
                  <p className="text-sm text-muted-foreground">{member.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">قيمنا</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-primary-foreground" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">التمكين</h3>
                <p className="text-muted-foreground">نؤمن بقدرة كل فرد على تحقيق إمكاناته الكاملة</p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">المجتمع</h3>
                <p className="text-muted-foreground">نبني مجتمعاً داعماً ومتفهماً لاحتياجات الجميع</p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-secondary-foreground" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">الرعاية</h3>
                <p className="text-muted-foreground">نقدم الدعم والرعاية الشاملة لكل فرد في رحلته</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}

"use client"

import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { LayoutDashboard, Package, ShoppingCart, Users, BarChart3, Settings, Tag, FileText } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"

const sidebarItems = [
  {
    title: "لوحة التحكم",
    href: "/admin",
    icon: LayoutDashboard,
  },
  {
    title: "المنتجات",
    href: "/admin/products",
    icon: Package,
  },
  {
    title: "الطلبات",
    href: "/admin/orders",
    icon: ShoppingCart,
  },
  {
    title: "الفئات",
    href: "/admin/categories",
    icon: Tag,
  },
  {
    title: "العملاء",
    href: "/admin/customers",
    icon: Users,
  },
  {
    title: "التقارير",
    href: "/admin/reports",
    icon: BarChart3,
  },
  {
    title: "المحتوى",
    href: "/admin/content",
    icon: FileText,
  },
  {
    title: "الإعدادات",
    href: "/admin/settings",
    icon: Settings,
  },
]

export function Sidebar() {
  const pathname = usePathname()

  return (
    <div className="w-64 bg-card border-r border-border">
      <div className="p-6">
        <Link href="/admin" className="flex items-center space-x-2 space-x-reverse">
          <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
            <span className="text-primary-foreground font-bold text-lg">د</span>
          </div>
          <span className="font-bold text-xl">لوحة التحكم</span>
        </Link>
      </div>

      <Separator />

      <nav className="p-4 space-y-2">
        {sidebarItems.map((item) => {
          const Icon = item.icon
          const isActive = pathname === item.href

          return (
            <Link key={item.href} href={item.href}>
              <Button
                variant={isActive ? "secondary" : "ghost"}
                className={cn(
                  "w-full justify-start space-x-2 space-x-reverse",
                  isActive && "bg-primary/10 text-primary hover:bg-primary/20",
                )}
              >
                <Icon className="h-4 w-4" />
                <span>{item.title}</span>
              </Button>
            </Link>
          )
        })}
      </nav>
    </div>
  )
}

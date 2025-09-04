"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import Link from "next/link"
import { useState, useEffect } from "react"

interface TimeLeft {
  days: number
  hours: number
  minutes: number
  seconds: number
}

export default function ComingSoonPage() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({ days: 0, hours: 0, minutes: 0, seconds: 0 })
  const [email, setEmail] = useState("")

  useEffect(() => {
    const calculateTimeLeft = (): TimeLeft => {
      const difference = +new Date("2024-12-01") - +new Date()

      if (difference > 0) {
        return {
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        }
      }

      return { days: 0, hours: 0, minutes: 0, seconds: 0 }
    }

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft())
    }, 1000)

    setTimeLeft(calculateTimeLeft())

    return () => clearInterval(timer)
  }, [])

  const handleNotifySubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle email subscription
    console.log("Email submitted:", email)
    setEmail("")
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/10 via-background to-accent/10 flex items-center justify-center p-4">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        {/* Logo */}
        <div className="flex items-center justify-center space-x-2">
          <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
            <span className="text-primary-foreground font-bold text-2xl">د</span>
          </div>
          <span className="font-bold text-3xl">دليل</span>
        </div>

        {/* Main Content */}
        <div className="space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold text-primary">قريباً جداً</h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
            نحن نعمل على إطلاق منصة التجارة الإلكترونية والمنح الدراسية الجديدة
          </p>
        </div>

        {/* Countdown Timer */}
        <Card className="max-w-2xl mx-auto">
          <CardContent className="p-8">
            <h2 className="text-2xl font-semibold mb-6">العد التنازلي للإطلاق</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary">{timeLeft.days}</div>
                <div className="text-sm text-muted-foreground">يوم</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary">{timeLeft.hours}</div>
                <div className="text-sm text-muted-foreground">ساعة</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary">{timeLeft.minutes}</div>
                <div className="text-sm text-muted-foreground">دقيقة</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary">{timeLeft.seconds}</div>
                <div className="text-sm text-muted-foreground">ثانية</div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Email Notification */}
        <Card className="max-w-md mx-auto">
          <CardContent className="p-6">
            <h3 className="text-lg font-semibold mb-4">احصل على إشعار عند الإطلاق</h3>
            <form onSubmit={handleNotifySubmit} className="space-y-4">
              <Input
                type="email"
                placeholder="أدخل بريدك الإلكتروني"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <Button type="submit" className="w-full">
                إشعرني عند الإطلاق
              </Button>
            </form>
          </CardContent>
        </Card>

        {/* Features Preview */}
        <div className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto">
          <Card className="text-center">
            <CardContent className="p-6">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-primary-foreground" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
                </svg>
              </div>
              <h4 className="font-semibold mb-2">متجر إلكتروني</h4>
              <p className="text-sm text-muted-foreground">منصة شاملة لبيع وشراء المنتجات</p>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardContent className="p-6">
              <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3z" />
                </svg>
              </div>
              <h4 className="font-semibold mb-2">منح دراسية</h4>
              <p className="text-sm text-muted-foreground">فرص تعليمية مجانية ومتنوعة</p>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardContent className="p-6">
              <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-secondary-foreground" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z" />
                </svg>
              </div>
              <h4 className="font-semibold mb-2">مجتمع دليل</h4>
              <p className="text-sm text-muted-foreground">شبكة تواصل وتفاعل مع المجتمع</p>
            </CardContent>
          </Card>
        </div>

        {/* Back to Home */}
        <div className="pt-8">
          <Link href="/">
            <Button variant="outline" size="lg">
              العودة للصفحة الرئيسية
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}

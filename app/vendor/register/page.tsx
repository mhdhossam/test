"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Building, Mail, User, Lock, MapPin } from "lucide-react"

interface VendorFormData {
  email: string
  username: string
  password: string
  business_name: string
  business_address: string
}

export default function VendorRegister() {
  const [formData, setFormData] = useState<VendorFormData>({
    email: "",
    username: "",
    password: "",
    business_name: "",
    business_address: "",
  })
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")
  const [success, setSuccess] = useState("")
  const router = useRouter()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError("")

    try {
      // Mock registration - replace with actual API call
      await new Promise((resolve) => setTimeout(resolve, 1000))
      setSuccess("تم تسجيل البائع بنجاح!")
      setTimeout(() => router.push("/auth/login"), 2000)
    } catch {
      setError("فشل في التسجيل. يرجى المحاولة مرة أخرى.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div
      className="min-h-screen bg-gradient-to-br from-teal-50 to-orange-50 flex items-center justify-center p-4"
      dir="rtl"
    >
      <div className="w-full max-w-md">
        <Card className="shadow-xl">
          <CardHeader className="text-center space-y-2">
            <CardTitle className="text-2xl font-bold text-gray-900">
              مرحباً <span className="text-teal-600">بك!</span>
            </CardTitle>
            <p className="text-gray-600">أنشئ حساب بائع للمتابعة</p>
          </CardHeader>
          <CardContent className="space-y-4">
            {success && (
              <div className="p-3 bg-green-100 border border-green-400 text-green-700 rounded-lg text-center">
                {success}
              </div>
            )}
            {error && (
              <div className="p-3 bg-red-100 border border-red-400 text-red-700 rounded-lg text-center">{error}</div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">البريد الإلكتروني</Label>
                <div className="relative">
                  <Mail className="absolute right-3 top-3 h-4 w-4 text-gray-400" />
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="awesome@user.com"
                    value={formData.email}
                    onChange={handleChange}
                    className="pr-10"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="username">اسم المستخدم</Label>
                <div className="relative">
                  <User className="absolute right-3 top-3 h-4 w-4 text-gray-400" />
                  <Input
                    id="username"
                    name="username"
                    type="text"
                    placeholder="اسم المستخدم"
                    value={formData.username}
                    onChange={handleChange}
                    className="pr-10"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="password">كلمة المرور</Label>
                <div className="relative">
                  <Lock className="absolute right-3 top-3 h-4 w-4 text-gray-400" />
                  <Input
                    id="password"
                    name="password"
                    type="password"
                    placeholder="●●●●●●●●●●●●"
                    value={formData.password}
                    onChange={handleChange}
                    className="pr-10"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="business_name">اسم النشاط التجاري</Label>
                <div className="relative">
                  <Building className="absolute right-3 top-3 h-4 w-4 text-gray-400" />
                  <Input
                    id="business_name"
                    name="business_name"
                    type="text"
                    placeholder="اسم النشاط التجاري"
                    value={formData.business_name}
                    onChange={handleChange}
                    className="pr-10"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="business_address">عنوان النشاط التجاري</Label>
                <div className="relative">
                  <MapPin className="absolute right-3 top-3 h-4 w-4 text-gray-400" />
                  <Input
                    id="business_address"
                    name="business_address"
                    type="text"
                    placeholder="عنوان النشاط التجاري"
                    value={formData.business_address}
                    onChange={handleChange}
                    className="pr-10"
                    required
                  />
                </div>
              </div>

              <Button type="submit" className="w-full bg-teal-600 hover:bg-teal-700" disabled={loading}>
                {loading ? "جاري التسجيل..." : "تسجيل"}
              </Button>
            </form>

            <p className="text-center text-sm text-gray-600">
              هل لديك حساب؟{" "}
              <Link href="/auth/login" className="text-teal-600 hover:text-teal-700 font-medium">
                تسجيل الدخول!
              </Link>
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

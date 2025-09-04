"use client"

import { createContext, useContext, useEffect, useState, type ReactNode } from "react"
import { createClient } from "@/lib/supabase/client"
import type { User } from "@supabase/supabase-js"

interface AuthContextType {
  user: User | null
  loading: boolean
  signIn: (email: string, password: string) => Promise<{ error?: string }>
  signUp: (email: string, password: string, fullName: string) => Promise<{ error?: string }>
  signOut: () => Promise<void>
  supabaseAvailable: boolean
}

const AuthContext = createContext<AuthContextType | null>(null)

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)
  const [supabaseAvailable, setSupabaseAvailable] = useState(false)
  const [supabase, setSupabase] = useState<any>(null)

  useEffect(() => {
    try {
      const client = createClient()
      setSupabase(client)
      setSupabaseAvailable(true)

      // Get initial session
      const getSession = async () => {
        try {
          const {
            data: { session },
          } = await client.auth.getSession()
          setUser(session?.user ?? null)
        } catch (error) {
          console.error("[v0] Error getting session:", error)
        }
        setLoading(false)
      }

      getSession()

      // Listen for auth changes
      const {
        data: { subscription },
      } = client.auth.onAuthStateChange(async (event, session) => {
        setUser(session?.user ?? null)
        setLoading(false)
      })

      return () => subscription.unsubscribe()
    } catch (error) {
      console.warn("[v0] Supabase not available:", error)
      setSupabaseAvailable(false)
      setLoading(false)
    }
  }, [])

  const signIn = async (email: string, password: string) => {
    if (!supabase || !supabaseAvailable) {
      return { error: "خدمة المصادقة غير متاحة حالياً" }
    }

    try {
      const { error } = await supabase.auth.signInWithPassword({
        email,
        password,
      })

      if (error) {
        return { error: error.message }
      }

      return {}
    } catch (error) {
      return { error: "حدث خطأ أثناء تسجيل الدخول" }
    }
  }

  const signUp = async (email: string, password: string, fullName: string) => {
    if (!supabase || !supabaseAvailable) {
      return { error: "خدمة المصادقة غير متاحة حالياً" }
    }

    try {
      const { error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          emailRedirectTo: process.env.NEXT_PUBLIC_DEV_SUPABASE_REDIRECT_URL || `${window.location.origin}/protected`,
          data: {
            full_name: fullName,
          },
        },
      })

      if (error) {
        return { error: error.message }
      }

      return {}
    } catch (error) {
      return { error: "حدث خطأ أثناء إنشاء الحساب" }
    }
  }

  const signOut = async () => {
    if (supabase && supabaseAvailable) {
      await supabase.auth.signOut()
    }
  }

  return (
    <AuthContext.Provider value={{ user, loading, signIn, signUp, signOut, supabaseAvailable }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
}

"use client"

import { Bell, Search, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

interface TopbarProps {
  title?: string
  subtitle?: string
}

export function Topbar({ title, subtitle }: TopbarProps) {
  const getGreeting = () => {
    const hour = new Date().getHours()
    if (hour < 12) return "Selamat Pagi"
    if (hour < 15) return "Selamat Siang"
    if (hour < 18) return "Selamat Sore"
    return "Selamat Malam"
  }

  return (
    <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/80 backdrop-blur-sm">
      <div className="flex h-16 items-center justify-between px-6">
        <div className="flex items-center space-x-4">
          <div>
            {title ? (
              <div>
                <h1 className="text-xl font-semibold text-slate-900">{title}</h1>
                {subtitle && (
                  <p className="text-sm text-slate-600">{subtitle}</p>
                )}
              </div>
            ) : (
              <div>
                <h1 className="text-xl font-semibold text-slate-900">
                  {getGreeting()}, Novi Amanda! 👋
                </h1>
                <p className="text-sm text-slate-600">
                  Semoga hari Anda menyenangkan
                </p>
              </div>
            )}
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <div className="relative hidden md:block">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
            <Input
              placeholder="Cari pesanan..."
              className="w-64 pl-9 bg-slate-50 border-slate-200"
            />
          </div>
          
          <Button variant="ghost" size="icon" className="relative">
            <Bell className="h-5 w-5" />
            <span className="absolute -top-1 -right-1 h-3 w-3 bg-rose-500 rounded-full"></span>
          </Button>

          <Button variant="ghost" size="icon">
            <User className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </header>
  )
}

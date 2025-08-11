"use client"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Eye, EyeOff, ShoppingCart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function RegisterPage() {
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [formData, setFormData] = useState({
    namaLengkap: "",
    noWhatsapp: "",
    username: "",
    password: "",
    ulangiPassword: "",
    kodeReferral: "",
  })
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    
    if (formData.password !== formData.ulangiPassword) {
      alert("Password tidak cocok!")
      setIsLoading(false)
      return
    }

    console.log("Register data:", formData)
    
    // Simulate registration
    setTimeout(() => {
      alert("Pendaftaran berhasil! Silakan login.")
      router.push("/login")
      setIsLoading(false)
    }, 1000)
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-50 via-white to-violet-50 p-4">
      <div className="w-full max-w-md">
        {/* Logo */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-indigo-500 to-violet-600 rounded-2xl mb-4 shadow-glow">
            <ShoppingCart className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-2xl font-bold text-slate-900">Dashboard Joki</h1>
          <p className="text-slate-600">Buat akun baru</p>
        </div>

        <Card className="border-0 shadow-medium">
          <CardHeader className="space-y-1 pb-4">
            <CardTitle className="text-xl text-center text-slate-900">
              Daftar Akun Baru
            </CardTitle>
            <CardDescription className="text-center">
              Lengkapi data di bawah untuk mendaftar
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-700">
                  Nama Lengkap
                </label>
                <Input
                  type="text"
                  placeholder="Masukkan nama lengkap"
                  value={formData.namaLengkap}
                  onChange={(e) =>
                    setFormData({ ...formData, namaLengkap: e.target.value })
                  }
                  required
                  className="h-11"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-700">
                  No WhatsApp
                </label>
                <Input
                  type="tel"
                  placeholder="08xxxxxxxxxx"
                  value={formData.noWhatsapp}
                  onChange={(e) =>
                    setFormData({ ...formData, noWhatsapp: e.target.value })
                  }
                  required
                  className="h-11"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-700">
                  Username
                </label>
                <Input
                  type="text"
                  placeholder="Pilih username"
                  value={formData.username}
                  onChange={(e) =>
                    setFormData({ ...formData, username: e.target.value })
                  }
                  required
                  className="h-11"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-700">
                  Password
                </label>
                <div className="relative">
                  <Input
                    type={showPassword ? "text" : "password"}
                    placeholder="Buat password"
                    value={formData.password}
                    onChange={(e) =>
                      setFormData({ ...formData, password: e.target.value })
                    }
                    required
                    className="h-11 pr-10"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                  >
                    {showPassword ? (
                      <EyeOff className="w-4 h-4" />
                    ) : (
                      <Eye className="w-4 h-4" />
                    )}
                  </button>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-700">
                  Ulangi Password
                </label>
                <div className="relative">
                  <Input
                    type={showConfirmPassword ? "text" : "password"}
                    placeholder="Ulangi password"
                    value={formData.ulangiPassword}
                    onChange={(e) =>
                      setFormData({ ...formData, ulangiPassword: e.target.value })
                    }
                    required
                    className="h-11 pr-10"
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                  >
                    {showConfirmPassword ? (
                      <EyeOff className="w-4 h-4" />
                    ) : (
                      <Eye className="w-4 h-4" />
                    )}
                  </button>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-700">
                  Kode Referral (Opsional)
                </label>
                <Input
                  type="text"
                  placeholder="Masukkan kode referral"
                  value={formData.kodeReferral}
                  onChange={(e) =>
                    setFormData({ ...formData, kodeReferral: e.target.value })
                  }
                  className="h-11"
                />
              </div>

              <Button
                type="submit"
                className="w-full h-11 bg-gradient-to-r from-indigo-500 to-violet-600 hover:from-indigo-600 hover:to-violet-700"
                disabled={isLoading}
              >
                {isLoading ? "Memproses..." : "Daftar Sekarang"}
              </Button>
            </form>

            <div className="mt-6 text-center">
              <p className="text-sm text-slate-600">
                Sudah punya akun?{" "}
                <Link
                  href="/login"
                  className="font-medium text-indigo-600 hover:text-indigo-500"
                >
                  Masuk di sini
                </Link>
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

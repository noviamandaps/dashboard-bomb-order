"use client"

import { useState } from "react"
import { DashboardLayout } from "@/components/layout/dashboard-layout"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { User, CreditCard, Save, Edit, Copy } from "lucide-react"

export default function ProfilePage() {
  const [isEditingProfile, setIsEditingProfile] = useState(false)
  const [isEditingBank, setIsEditingBank] = useState(false)
  
  const [profileData, setProfileData] = useState({
    namaLengkap: "Novi Amanda",
    username: "noviamanda",
    noWhatsapp: "08123456789",
    email: "novi.amanda@email.com",
    alamat: "Jakarta Selatan, Indonesia",
    tanggalDaftar: "15 Januari 2024",
  })

  const [bankData, setBankData] = useState({
    namaBank: "Bank BCA",
    nomorRekening: "1234567890",
    namaRekening: "Novi Amanda",
    cabang: "Jakarta Selatan",
  })

  const [referralCode] = useState("NOVI2024")

  const handleSaveProfile = () => {
    console.log("Profile data:", profileData)
    setIsEditingProfile(false)
    alert("Profil berhasil diperbarui!")
  }

  const handleSaveBank = () => {
    console.log("Bank data:", bankData)
    setIsEditingBank(false)
    alert("Data rekening berhasil diperbarui!")
  }

  const handleCopyReferral = () => {
    navigator.clipboard.writeText(referralCode)
    alert("Kode referral berhasil disalin!")
  }

  return (
    <DashboardLayout 
      title="Profil Saya"
      subtitle="Kelola informasi pribadi dan data rekening Anda"
    >
      <div className="max-w-4xl mx-auto space-y-6">
        {/* Profile Information */}
        <Card className="border-0 shadow-soft">
          <CardHeader>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <User className="w-5 h-5 text-indigo-600" />
                <CardTitle className="text-xl text-slate-900">
                  Informasi Profil
                </CardTitle>
              </div>
              <Button
                variant="outline"
                size="sm"
                onClick={() => setIsEditingProfile(!isEditingProfile)}
              >
                <Edit className="w-4 h-4 mr-2" />
                {isEditingProfile ? "Batal" : "Edit"}
              </Button>
            </div>
            <CardDescription>
              Informasi dasar akun Anda
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-700">
                  Nama Lengkap
                </label>
                <Input
                  value={profileData.namaLengkap}
                  onChange={(e) => setProfileData({...profileData, namaLengkap: e.target.value})}
                  disabled={!isEditingProfile}
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-700">
                  Username
                </label>
                <Input
                  value={profileData.username}
                  onChange={(e) => setProfileData({...profileData, username: e.target.value})}
                  disabled={!isEditingProfile}
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-700">
                  No WhatsApp
                </label>
                <Input
                  value={profileData.noWhatsapp}
                  onChange={(e) => setProfileData({...profileData, noWhatsapp: e.target.value})}
                  disabled={!isEditingProfile}
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-700">
                  Email
                </label>
                <Input
                  value={profileData.email}
                  onChange={(e) => setProfileData({...profileData, email: e.target.value})}
                  disabled={!isEditingProfile}
                />
              </div>

              <div className="space-y-2 md:col-span-2">
                <label className="text-sm font-medium text-slate-700">
                  Alamat
                </label>
                <Input
                  value={profileData.alamat}
                  onChange={(e) => setProfileData({...profileData, alamat: e.target.value})}
                  disabled={!isEditingProfile}
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-700">
                  Tanggal Daftar
                </label>
                <Input
                  value={profileData.tanggalDaftar}
                  disabled
                  className="bg-slate-50"
                />
              </div>
            </div>

            {isEditingProfile && (
              <div className="flex justify-end space-x-4 mt-6 pt-6 border-t">
                <Button variant="outline" onClick={() => setIsEditingProfile(false)}>
                  Batal
                </Button>
                <Button 
                  onClick={handleSaveProfile}
                  className="bg-gradient-to-r from-indigo-500 to-violet-600 hover:from-indigo-600 hover:to-violet-700"
                >
                  <Save className="w-4 h-4 mr-2" />
                  Simpan Perubahan
                </Button>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Bank Account Information */}
        <Card className="border-0 shadow-soft">
          <CardHeader>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <CreditCard className="w-5 h-5 text-indigo-600" />
                <CardTitle className="text-xl text-slate-900">
                  Data Rekening Bank
                </CardTitle>
              </div>
              <Button
                variant="outline"
                size="sm"
                onClick={() => setIsEditingBank(!isEditingBank)}
              >
                <Edit className="w-4 h-4 mr-2" />
                {isEditingBank ? "Batal" : "Edit"}
              </Button>
            </div>
            <CardDescription>
              Informasi rekening untuk penarikan komisi
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-700">
                  Nama Bank
                </label>
                <select
                  className="flex h-9 w-full rounded-md border border-input bg-background px-3 py-1 text-sm shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
                  value={bankData.namaBank}
                  onChange={(e) => setBankData({...bankData, namaBank: e.target.value})}
                  disabled={!isEditingBank}
                >
                  <option value="Bank BCA">Bank BCA</option>
                  <option value="Bank Mandiri">Bank Mandiri</option>
                  <option value="Bank BRI">Bank BRI</option>
                  <option value="Bank BNI">Bank BNI</option>
                  <option value="Bank CIMB Niaga">Bank CIMB Niaga</option>
                  <option value="Bank Danamon">Bank Danamon</option>
                  <option value="Bank Permata">Bank Permata</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-700">
                  Nomor Rekening
                </label>
                <Input
                  value={bankData.nomorRekening}
                  onChange={(e) => setBankData({...bankData, nomorRekening: e.target.value})}
                  disabled={!isEditingBank}
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-700">
                  Nama Pemilik Rekening
                </label>
                <Input
                  value={bankData.namaRekening}
                  onChange={(e) => setBankData({...bankData, namaRekening: e.target.value})}
                  disabled={!isEditingBank}
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-700">
                  Cabang
                </label>
                <Input
                  value={bankData.cabang}
                  onChange={(e) => setBankData({...bankData, cabang: e.target.value})}
                  disabled={!isEditingBank}
                />
              </div>
            </div>

            {isEditingBank && (
              <div className="flex justify-end space-x-4 mt-6 pt-6 border-t">
                <Button variant="outline" onClick={() => setIsEditingBank(false)}>
                  Batal
                </Button>
                <Button 
                  onClick={handleSaveBank}
                  className="bg-gradient-to-r from-indigo-500 to-violet-600 hover:from-indigo-600 hover:to-violet-700"
                >
                  <Save className="w-4 h-4 mr-2" />
                  Simpan Rekening
                </Button>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Referral Code */}
        <Card className="border-0 shadow-soft bg-gradient-to-br from-violet-50 to-indigo-50">
          <CardHeader>
            <CardTitle className="text-xl text-slate-900">
              Kode Referral Anda
            </CardTitle>
            <CardDescription>
              Bagikan kode ini untuk mendapatkan bonus referral
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between p-4 bg-white rounded-lg border border-violet-200">
              <div>
                <div className="text-2xl font-bold text-violet-600">{referralCode}</div>
                <div className="text-sm text-slate-600">
                  Dapatkan bonus Rp 25.000 untuk setiap referral yang bergabung
                </div>
              </div>
              <Button
                variant="outline"
                onClick={handleCopyReferral}
                className="border-violet-200 text-violet-600 hover:bg-violet-50"
              >
                <Copy className="w-4 h-4 mr-2" />
                Salin Kode
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  )
}

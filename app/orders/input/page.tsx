"use client"

import { useState } from "react"
import { DashboardLayout } from "@/components/layout/dashboard-layout"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { PlusCircle, Save } from "lucide-react"

export default function InputOrderPage() {
  const [formData, setFormData] = useState({
    namaPemesan: "",
    produk: "",
    alamat: "",
    kode: "",
    harga: "",
    noPesanan: "",
    noResi: "",
    qty: "1",
    tanggalOrder: "",
    marketplace: "",
    status: "Pending",
    tanggalDiterima: "",
    namaKurir: "",
  })

  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    
    console.log("Order data:", formData)
    
    // Simulate save
    setTimeout(() => {
      alert("Pesanan berhasil disimpan!")
      setFormData({
        namaPemesan: "",
        produk: "",
        alamat: "",
        kode: "",
        harga: "",
        noPesanan: "",
        noResi: "",
        qty: "1",
        tanggalOrder: "",
        marketplace: "",
        status: "Pending",
        tanggalDiterima: "",
        namaKurir: "",
      })
      setIsLoading(false)
    }, 1000)
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  return (
    <DashboardLayout 
      title="Input Pesanan Baru"
      subtitle="Tambahkan pesanan baru ke dalam sistem"
    >
      <div className="max-w-4xl mx-auto">
        <Card className="border-0 shadow-soft">
          <CardHeader>
            <div className="flex items-center space-x-2">
              <PlusCircle className="w-5 h-5 text-indigo-600" />
              <CardTitle className="text-xl text-slate-900">
                Form Input Pesanan
              </CardTitle>
            </div>
            <CardDescription>
              Lengkapi semua informasi pesanan di bawah ini
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-700">
                    Nama Pemesan *
                  </label>
                  <Input
                    placeholder="Nama lengkap pemesan"
                    value={formData.namaPemesan}
                    onChange={(e) => handleInputChange("namaPemesan", e.target.value)}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-700">
                    Produk *
                  </label>
                  <Input
                    placeholder="Nama produk/jasa"
                    value={formData.produk}
                    onChange={(e) => handleInputChange("produk", e.target.value)}
                    required
                  />
                </div>

                <div className="space-y-2 md:col-span-2">
                  <label className="text-sm font-medium text-slate-700">
                    Alamat
                  </label>
                  <Input
                    placeholder="Alamat lengkap"
                    value={formData.alamat}
                    onChange={(e) => handleInputChange("alamat", e.target.value)}
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-700">
                    Kode
                  </label>
                  <Input
                    placeholder="Kode produk/referensi"
                    value={formData.kode}
                    onChange={(e) => handleInputChange("kode", e.target.value)}
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-700">
                    Harga *
                  </label>
                  <Input
                    type="number"
                    placeholder="Harga dalam rupiah"
                    value={formData.harga}
                    onChange={(e) => handleInputChange("harga", e.target.value)}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-700">
                    No Pesanan *
                  </label>
                  <Input
                    placeholder="Nomor pesanan"
                    value={formData.noPesanan}
                    onChange={(e) => handleInputChange("noPesanan", e.target.value)}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-700">
                    No Resi
                  </label>
                  <Input
                    placeholder="Nomor resi pengiriman"
                    value={formData.noResi}
                    onChange={(e) => handleInputChange("noResi", e.target.value)}
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-700">
                    Quantity *
                  </label>
                  <Input
                    type="number"
                    min="1"
                    placeholder="Jumlah"
                    value={formData.qty}
                    onChange={(e) => handleInputChange("qty", e.target.value)}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-700">
                    Tanggal Order *
                  </label>
                  <Input
                    type="date"
                    value={formData.tanggalOrder}
                    onChange={(e) => handleInputChange("tanggalOrder", e.target.value)}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-700">
                    Marketplace *
                  </label>
                  <select
                    className="flex h-9 w-full rounded-md border border-input bg-background px-3 py-1 text-sm shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                    value={formData.marketplace}
                    onChange={(e) => handleInputChange("marketplace", e.target.value)}
                    required
                  >
                    <option value="">Pilih marketplace</option>
                    <option value="Tokopedia">Tokopedia</option>
                    <option value="Shopee">Shopee</option>
                    <option value="Lazada">Lazada</option>
                    <option value="Bukalapak">Bukalapak</option>
                    <option value="Blibli">Blibli</option>
                    <option value="Lainnya">Lainnya</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-700">
                    Status
                  </label>
                  <select
                    className="flex h-9 w-full rounded-md border border-input bg-background px-3 py-1 text-sm shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                    value={formData.status}
                    onChange={(e) => handleInputChange("status", e.target.value)}
                  >
                    <option value="Pending">Pending</option>
                    <option value="Diproses">Diproses</option>
                    <option value="Dikirim">Dikirim</option>
                    <option value="Selesai">Selesai</option>
                    <option value="Dibatalkan">Dibatalkan</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-700">
                    Tanggal Diterima
                  </label>
                  <Input
                    type="date"
                    value={formData.tanggalDiterima}
                    onChange={(e) => handleInputChange("tanggalDiterima", e.target.value)}
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-700">
                    Nama Kurir
                  </label>
                  <Input
                    placeholder="Nama kurir pengiriman"
                    value={formData.namaKurir}
                    onChange={(e) => handleInputChange("namaKurir", e.target.value)}
                  />
                </div>
              </div>

              <div className="flex justify-end space-x-4 pt-6 border-t">
                <Button type="button" variant="outline">
                  Reset
                </Button>
                <Button 
                  type="submit" 
                  disabled={isLoading}
                  className="bg-gradient-to-r from-indigo-500 to-violet-600 hover:from-indigo-600 hover:to-violet-700"
                >
                  <Save className="w-4 h-4 mr-2" />
                  {isLoading ? "Menyimpan..." : "Simpan Pesanan"}
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  )
}

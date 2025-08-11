"use client"

import { useState } from "react"
import { DashboardLayout } from "@/components/layout/dashboard-layout"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { formatCurrency, formatDate } from "@/lib/utils"
import { History, Search, Edit, Trash2, Eye, Filter, Download } from "lucide-react"

// Dummy order data
const orderData = [
  {
    id: 1,
    namaPemesan: "John Doe",
    produk: "Joki Mobile Legends Rank",
    alamat: "Jakarta Selatan",
    kode: "ML001",
    harga: 50000,
    noPesanan: "ORD-001",
    noResi: "JNE123456789",
    qty: 1,
    tanggalOrder: new Date("2024-01-15"),
    marketplace: "Tokopedia",
    status: "Selesai",
    tanggalDiterima: new Date("2024-01-18"),
    namaKurir: "JNE",
  },
  {
    id: 2,
    namaPemesan: "Jane Smith",
    produk: "Joki PUBG Mobile Rank",
    alamat: "Bandung",
    kode: "PUBG002",
    harga: 75000,
    noPesanan: "ORD-002",
    noResi: "SICEPAT987654321",
    qty: 1,
    tanggalOrder: new Date("2024-01-14"),
    marketplace: "Shopee",
    status: "Diproses",
    tanggalDiterima: null,
    namaKurir: "SiCepat",
  },
  {
    id: 3,
    namaPemesan: "Ahmad Rahman",
    produk: "Joki Free Fire Rank",
    alamat: "Surabaya",
    kode: "FF003",
    harga: 40000,
    noPesanan: "ORD-003",
    noResi: "",
    qty: 2,
    tanggalOrder: new Date("2024-01-13"),
    marketplace: "Lazada",
    status: "Pending",
    tanggalDiterima: null,
    namaKurir: "",
  },
  {
    id: 4,
    namaPemesan: "Siti Nurhaliza",
    produk: "Joki Genshin Impact",
    alamat: "Medan",
    kode: "GI004",
    harga: 100000,
    noPesanan: "ORD-004",
    noResi: "POS123789456",
    qty: 1,
    tanggalOrder: new Date("2024-01-12"),
    marketplace: "Bukalapak",
    status: "Dikirim",
    tanggalDiterima: null,
    namaKurir: "Pos Indonesia",
  },
  {
    id: 5,
    namaPemesan: "Budi Santoso",
    produk: "Joki Call of Duty Mobile",
    alamat: "Yogyakarta",
    kode: "COD005",
    harga: 60000,
    noPesanan: "ORD-005",
    noResi: "",
    qty: 1,
    tanggalOrder: new Date("2024-01-11"),
    marketplace: "Tokopedia",
    status: "Dibatalkan",
    tanggalDiterima: null,
    namaKurir: "",
  },
]

export default function OrderHistoryPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [statusFilter, setStatusFilter] = useState("Semua")

  const handleEdit = (id: number) => {
    console.log("Edit order:", id)
    alert(`Edit pesanan ID: ${id}`)
  }

  const handleDelete = (id: number) => {
    if (confirm("Apakah Anda yakin ingin menghapus pesanan ini?")) {
      console.log("Delete order:", id)
      alert(`Pesanan ID: ${id} telah dihapus`)
    }
  }

  const handleView = (id: number) => {
    console.log("View order:", id)
    alert(`Lihat detail pesanan ID: ${id}`)
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Selesai":
        return "bg-emerald-100 text-emerald-700"
      case "Diproses":
        return "bg-blue-100 text-blue-700"
      case "Dikirim":
        return "bg-indigo-100 text-indigo-700"
      case "Pending":
        return "bg-amber-100 text-amber-700"
      case "Dibatalkan":
        return "bg-rose-100 text-rose-700"
      default:
        return "bg-slate-100 text-slate-700"
    }
  }

  const filteredOrders = orderData.filter(order => {
    const matchesSearch = 
      order.namaPemesan.toLowerCase().includes(searchTerm.toLowerCase()) ||
      order.produk.toLowerCase().includes(searchTerm.toLowerCase()) ||
      order.noPesanan.toLowerCase().includes(searchTerm.toLowerCase())
    
    const matchesStatus = statusFilter === "Semua" || order.status === statusFilter

    return matchesSearch && matchesStatus
  })

  return (
    <DashboardLayout 
      title="Riwayat Pesanan"
      subtitle="Kelola dan pantau semua pesanan Anda"
    >
      <div className="space-y-6">
        {/* Filters */}
        <Card className="border-0 shadow-soft">
          <CardContent className="pt-6">
            <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
              <div className="flex flex-col md:flex-row gap-4 flex-1">
                <div className="relative flex-1 max-w-sm">
                  <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                  <Input
                    placeholder="Cari pesanan..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10"
                  />
                </div>
                
                <select
                  className="flex h-9 w-full md:w-auto rounded-md border border-input bg-background px-3 py-1 text-sm shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                  value={statusFilter}
                  onChange={(e) => setStatusFilter(e.target.value)}
                >
                  <option value="Semua">Semua Status</option>
                  <option value="Pending">Pending</option>
                  <option value="Diproses">Diproses</option>
                  <option value="Dikirim">Dikirim</option>
                  <option value="Selesai">Selesai</option>
                  <option value="Dibatalkan">Dibatalkan</option>
                </select>
              </div>

              <div className="flex gap-2">
                <Button variant="outline" size="sm">
                  <Filter className="w-4 h-4 mr-2" />
                  Filter
                </Button>
                <Button variant="outline" size="sm">
                  <Download className="w-4 h-4 mr-2" />
                  Export
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Orders Table */}
        <Card className="border-0 shadow-soft">
          <CardHeader>
            <div className="flex items-center space-x-2">
              <History className="w-5 h-5 text-indigo-600" />
              <CardTitle className="text-xl text-slate-900">
                Daftar Pesanan
              </CardTitle>
            </div>
            <CardDescription>
              Total {filteredOrders.length} pesanan ditemukan
            </CardDescription>
          </CardHeader>
          <CardContent>
            {filteredOrders.length > 0 ? (
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>No Pesanan</TableHead>
                      <TableHead>Nama Pemesan</TableHead>
                      <TableHead>Produk</TableHead>
                      <TableHead>Harga</TableHead>
                      <TableHead>Marketplace</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Tanggal Order</TableHead>
                      <TableHead className="text-right">Aksi</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {filteredOrders.map((order) => (
                      <TableRow key={order.id}>
                        <TableCell className="font-medium">
                          {order.noPesanan}
                        </TableCell>
                        <TableCell>{order.namaPemesan}</TableCell>
                        <TableCell>
                          <div>
                            <div className="font-medium">{order.produk}</div>
                            <div className="text-sm text-slate-500">
                              Qty: {order.qty} • {order.kode}
                            </div>
                          </div>
                        </TableCell>
                        <TableCell className="font-semibold">
                          {formatCurrency(order.harga)}
                        </TableCell>
                        <TableCell>{order.marketplace}</TableCell>
                        <TableCell>
                          <span className={`inline-flex items-center rounded-full px-2 py-1 text-xs font-medium ${getStatusColor(order.status)}`}>
                            {order.status}
                          </span>
                        </TableCell>
                        <TableCell>{formatDate(order.tanggalOrder)}</TableCell>
                        <TableCell className="text-right">
                          <div className="flex justify-end space-x-2">
                            <Button
                              size="sm"
                              variant="ghost"
                              onClick={() => handleView(order.id)}
                            >
                              <Eye className="w-4 h-4" />
                            </Button>
                            <Button
                              size="sm"
                              variant="ghost"
                              onClick={() => handleEdit(order.id)}
                            >
                              <Edit className="w-4 h-4" />
                            </Button>
                            <Button
                              size="sm"
                              variant="ghost"
                              onClick={() => handleDelete(order.id)}
                              className="text-rose-600 hover:text-rose-700 hover:bg-rose-50"
                            >
                              <Trash2 className="w-4 h-4" />
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            ) : (
              <div className="text-center py-12">
                <History className="mx-auto h-12 w-12 text-slate-400" />
                <h3 className="mt-4 text-sm font-medium text-slate-900">
                  Tidak ada pesanan ditemukan
                </h3>
                <p className="mt-2 text-sm text-slate-500">
                  Coba ubah kata kunci pencarian atau filter
                </p>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  )
}

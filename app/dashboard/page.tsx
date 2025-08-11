"use client"

import { DashboardLayout } from "@/components/layout/dashboard-layout"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { formatCurrency, formatDate } from "@/lib/utils"
import { DollarSign, Gift, ShoppingBag, TrendingUp, Eye, Download } from "lucide-react"

// Dummy data
const metrics = {
  komisiAktif: 0,
  bonusReferral: 0,
  totalPesanan: 10,
}

const komisiData = [
  {
    id: 1,
    noPesanan: "ORD-001",
    produk: "Joki Mobile Legends Rank",
    komisi: 15000,
    status: "Selesai",
    tanggal: new Date("2024-01-15"),
  },
  {
    id: 2,
    noPesanan: "ORD-002",
    produk: "Joki PUBG Mobile Rank",
    komisi: 20000,
    status: "Menunggu",
    tanggal: new Date("2024-01-14"),
  },
]

const bonusReferralData = [
  {
    id: 1,
    namaReferral: "Ahmad Rizki",
    bonus: 25000,
    tanggal: new Date("2024-01-10"),
    status: "Dapat Diklaim",
  },
]

export default function DashboardPage() {
  const handleClaimCommission = (id: number) => {
    console.log("Claim commission:", id)
  }

  const handleClaimBonus = (id: number) => {
    console.log("Claim bonus:", id)
  }

  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Metrics Cards */}
        <div className="grid gap-4 md:grid-cols-3">
          <Card className="border-0 shadow-soft bg-gradient-to-br from-emerald-500 to-emerald-600 text-white">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium opacity-90">
                Komisi Aktif
              </CardTitle>
              <DollarSign className="h-4 w-4 opacity-90" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                {formatCurrency(metrics.komisiAktif)}
              </div>
              <p className="text-xs opacity-90">
                Siap untuk ditarik
              </p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-soft bg-gradient-to-br from-violet-500 to-violet-600 text-white">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium opacity-90">
                Bonus Referral
              </CardTitle>
              <Gift className="h-4 w-4 opacity-90" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                {formatCurrency(metrics.bonusReferral)}
              </div>
              <p className="text-xs opacity-90">
                Dari referral Anda
              </p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-soft bg-gradient-to-br from-indigo-500 to-indigo-600 text-white">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium opacity-90">
                Total Pesanan
              </CardTitle>
              <ShoppingBag className="h-4 w-4 opacity-90" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                {metrics.totalPesanan}
              </div>
              <p className="text-xs opacity-90">
                Pesanan bulan ini
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Commission Table */}
        <Card className="border-0 shadow-soft">
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle className="text-lg text-slate-900">
                  Komisi yang Bisa Diklaim
                </CardTitle>
                <CardDescription>
                  Daftar komisi dari pesanan yang sudah selesai
                </CardDescription>
              </div>
              <Button variant="outline" size="sm">
                <Download className="w-4 h-4 mr-2" />
                Export
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            {komisiData.length > 0 ? (
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>No Pesanan</TableHead>
                    <TableHead>Produk</TableHead>
                    <TableHead>Komisi</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Tanggal</TableHead>
                    <TableHead className="text-right">Aksi</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {komisiData.map((item) => (
                    <TableRow key={item.id}>
                      <TableCell className="font-medium">
                        {item.noPesanan}
                      </TableCell>
                      <TableCell>{item.produk}</TableCell>
                      <TableCell className="font-semibold text-emerald-600">
                        {formatCurrency(item.komisi)}
                      </TableCell>
                      <TableCell>
                        <span className={`inline-flex items-center rounded-full px-2 py-1 text-xs font-medium ${
                          item.status === "Selesai"
                            ? "bg-emerald-100 text-emerald-700"
                            : "bg-amber-100 text-amber-700"
                        }`}>
                          {item.status}
                        </span>
                      </TableCell>
                      <TableCell>{formatDate(item.tanggal)}</TableCell>
                      <TableCell className="text-right">
                        <Button
                          size="sm"
                          variant="success"
                          onClick={() => handleClaimCommission(item.id)}
                          disabled={item.status !== "Selesai"}
                        >
                          Klaim
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            ) : (
              <div className="text-center py-12">
                <TrendingUp className="mx-auto h-12 w-12 text-slate-400" />
                <h3 className="mt-4 text-sm font-medium text-slate-900">
                  Belum ada komisi
                </h3>
                <p className="mt-2 text-sm text-slate-500">
                  Komisi akan muncul setelah pesanan selesai
                </p>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Bonus Referral Table */}
        <Card className="border-0 shadow-soft">
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle className="text-lg text-slate-900">
                  Bonus Referral
                </CardTitle>
                <CardDescription>
                  Bonus dari referral yang sudah bergabung
                </CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            {bonusReferralData.length > 0 ? (
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Nama Referral</TableHead>
                    <TableHead>Bonus</TableHead>
                    <TableHead>Tanggal</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead className="text-right">Aksi</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {bonusReferralData.map((item) => (
                    <TableRow key={item.id}>
                      <TableCell className="font-medium">
                        {item.namaReferral}
                      </TableCell>
                      <TableCell className="font-semibold text-violet-600">
                        {formatCurrency(item.bonus)}
                      </TableCell>
                      <TableCell>{formatDate(item.tanggal)}</TableCell>
                      <TableCell>
                        <span className="inline-flex items-center rounded-full px-2 py-1 text-xs font-medium bg-emerald-100 text-emerald-700">
                          {item.status}
                        </span>
                      </TableCell>
                      <TableCell className="text-right">
                        <Button
                          size="sm"
                          variant="success"
                          onClick={() => handleClaimBonus(item.id)}
                        >
                          Klaim
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            ) : (
              <div className="text-center py-12">
                <Gift className="mx-auto h-12 w-12 text-slate-400" />
                <h3 className="mt-4 text-sm font-medium text-slate-900">
                  Belum ada bonus referral
                </h3>
                <p className="mt-2 text-sm text-slate-500">
                  Ajak teman untuk bergabung dan dapatkan bonus
                </p>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  )
}

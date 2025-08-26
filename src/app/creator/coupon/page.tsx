"use client"
import React, { useState } from "react"
import {
  Home,
  Rocket,
  Tag,
  BookOpen,
  FileText,
  Star,
  ChevronRight,
  Bell,
  User,
  ChevronDown,
  Search,
  Plus,
  ChevronLeft,
  ChevronFirst,
  ChevronLast,
} from "lucide-react"

interface Coupon {
  id: number
  name: string
  code: string
  discountAmount: string
  quantity: number
  startDate: string
  endDate: string
  status: "Active" | "Inactive" | "Expired"
}

export default function CouponPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [rowsPerPage, setRowsPerPage] = useState(10)
  const [currentPage, setCurrentPage] = useState(1)

  const coupons: Coupon[] = [
    {
      id: 1,
      name: "Giảm giá khóa học AI",
      code: "JKSB5AVS34",
      discountAmount: "Flat: 50%",
      quantity: 100,
      startDate: "Aug 31, 2025, 12:00:00 AM",
      endDate: "Sep 6, 2025, 12:00:00 AM",
      status: "Active",
    },
  ]

  const handleBackToDashboard = () => {}

  const handleCreateNewCoupon = () => {
    console.log("Create new coupon clicked")
  }

  const filteredCoupons = coupons.filter(
    (coupon) =>
      coupon.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      coupon.code.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  const totalPages = Math.ceil(filteredCoupons.length / rowsPerPage)
  const startIndex = (currentPage - 1) * rowsPerPage
  const endIndex = startIndex + rowsPerPage
  const currentCoupons = filteredCoupons.slice(startIndex, endIndex)

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "Active":
        return "bg-green-100 text-green-800"
      case "Inactive":
        return "bg-gray-100 text-gray-800"
      case "Expired":
        return "bg-red-100 text-red-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  return (
    <div className="flex-1 flex flex-col bg-white">
      {/* Breadcrumb */}
      <div className="px-6 py-4 border-b border-gray-200">
        <div className="flex items-center space-x-2 text-sm text-gray-600">
          <Home className="w-4 h-4" />
          <ChevronRight className="w-4 h-4" />
          <span className="text-blue-600 font-medium">Coupon</span>
        </div>
      </div>

      {/* Page Header */}
      <div className="px-6 py-4 border-b border-gray-200">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold text-gray-900">Coupon</h1>
          <button
            onClick={handleCreateNewCoupon}
            className="flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
          >
            <Plus className="w-4 h-4" />
            <span>Create New Coupon</span>
          </button>
        </div>
      </div>

      {/* Search and Filters */}
      <div className="px-6 py-4 border-b border-gray-200">
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <span className="text-sm font-medium text-gray-700">Coupon...</span>
            <ChevronDown className="w-4 h-4 text-gray-400" />
          </div>
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search by coupon name..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
        </div>
      </div>

      {/* Table */}
      <div className="flex-1 overflow-auto">
        <table className="w-full">
          <thead className="bg-gray-50 border-b border-gray-200">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">No</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                <div className="flex items-center space-x-1">
                  <span>Coupon Name</span>
                  <ChevronDown className="w-3 h-3" />
                </div>
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                <div className="flex items-center space-x-1">
                  <span>Coupon Code</span>
                  <ChevronDown className="w-3 h-3" />
                </div>
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                <div className="flex items-center space-x-1">
                  <span>Discount Amount</span>
                  <ChevronDown className="w-3 h-3" />
                </div>
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                <div className="flex items-center space-x-1">
                  <span>Quantity</span>
                  <ChevronDown className="w-3 h-3" />
                </div>
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                <div className="flex items-center space-x-1">
                  <span>Start Date</span>
                  <ChevronDown className="w-3 h-3" />
                </div>
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                <div className="flex items-center space-x-1">
                  <span>End Date</span>
                  <ChevronDown className="w-3 h-3" />
                </div>
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                <div className="flex items-center space-x-1">
                  <span>Status</span>
                  <ChevronDown className="w-3 h-3" />
                </div>
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {currentCoupons.map((coupon, index) => (
              <tr key={coupon.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{startIndex + index + 1}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{coupon.name}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 font-mono">{coupon.code}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{coupon.discountAmount}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{coupon.quantity}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{coupon.startDate}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{coupon.endDate}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span
                    className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusBadge(
                      coupon.status,
                    )}`}
                  >
                    {coupon.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="px-6 py-4 border-t border-gray-200">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <span className="text-sm text-gray-700">Rows per page</span>
            <select
              value={rowsPerPage}
              onChange={(e) => setRowsPerPage(Number(e.target.value))}
              className="border border-gray-300 rounded px-2 py-1 text-sm"
            >
              <option value={10}>10</option>
              <option value={25}>25</option>
              <option value={50}>50</option>
            </select>
          </div>

          <div className="flex items-center space-x-4">
            <span className="text-sm text-gray-700">
              Page {currentPage} / {totalPages}
            </span>
            <div className="flex items-center space-x-1">
              <button
                onClick={() => setCurrentPage(1)}
                disabled={currentPage === 1}
                className="p-1 rounded hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <ChevronFirst className="w-4 h-4" />
              </button>
              <button
                onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                disabled={currentPage === 1}
                className="p-1 rounded hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
                disabled={currentPage === totalPages}
                className="p-1 rounded hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
              <button
                onClick={() => setCurrentPage(totalPages)}
                disabled={currentPage === totalPages}
                className="p-1 rounded hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <ChevronLast className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

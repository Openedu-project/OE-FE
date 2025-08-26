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
  Trash2,
  ChevronLeft,
  ChevronFirst,
  ChevronLast,
  Users,
  TrendingUp,
} from "lucide-react"

interface FormTemplate {
  id: number
  name: string
  description: string
  status: "Draft" | "Published All"
  lastUpdated: string
}

export default function FormTemplatesPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [rowsPerPage, setRowsPerPage] = useState(10)
  const [currentPage, setCurrentPage] = useState(1)

  const formTemplates: FormTemplate[] = [
    {
      id: 1,
      name: "test",
      description: "25332",
      status: "Draft",
      lastUpdated: "Jul 1, 2025, 8:57:19 PM",
    },
    {
      id: 2,
      name: "Test",
      description: "Tạo form test",
      status: "Draft",
      lastUpdated: "Jul 1, 2025, 10:53:43 PM",
    },
    {
      id: 3,
      name: "Survey đầu khóa Lisk",
      description: "Đầu khóa Lisk",
      status: "Published All",
      lastUpdated: "Jun 16, 2025, 5:28:57 PM",
    },
    {
      id: 4,
      name: "sss",
      description: "fff",
      status: "Draft",
      lastUpdated: "Jun 16, 2025, 3:20:02 PM",
    },
    {
      id: 5,
      name: "dasfasdf",
      description: "asdfasdfasdfasds",
      status: "Draft",
      lastUpdated: "Jun 16, 2025, 3:17:41 PM",
    },
  ]

  const handleBackToDashboard = () => {}

  const handleCreateForm = () => {
    console.log("Create form clicked")
  }

  const handleDeleteForm = (formId: number) => {
    console.log("Delete form:", formId)
  }

  const filteredForms = formTemplates.filter(
    (form) =>
      form.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      form.description.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  const totalPages = Math.ceil(filteredForms.length / rowsPerPage)
  const startIndex = (currentPage - 1) * rowsPerPage
  const endIndex = startIndex + rowsPerPage
  const currentForms = filteredForms.slice(startIndex, endIndex)

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "Published All":
        return "bg-green-100 text-green-800"
      case "Draft":
        return "bg-gray-100 text-gray-800"
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
          <span className="text-blue-600 font-medium">Form Templates</span>
        </div>
      </div>

      {/* Page Header */}
      <div className="px-6 py-4 border-b border-gray-200">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold text-gray-900">Form Templates</h1>
          <button
            onClick={handleCreateForm}
            className="flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
          >
            <Plus className="w-4 h-4" />
            <span>Create Form</span>
          </button>
        </div>
      </div>

      {/* Search and Filters */}
      <div className="px-6 py-4 border-b border-gray-200">
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <span className="text-sm font-medium text-gray-700">Name</span>
            <ChevronDown className="w-4 h-4 text-gray-400" />
          </div>
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search by name..."
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
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Description
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Last Updated
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {currentForms.map((form, index) => (
              <tr key={form.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{startIndex + index + 1}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="text-sm text-blue-600 hover:text-blue-800 cursor-pointer font-medium">
                    {form.name}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{form.description}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span
                    className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusBadge(
                      form.status,
                    )}`}
                  >
                    {form.status}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{form.lastUpdated}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                  <button
                    onClick={() => handleDeleteForm(form.id)}
                    className="flex items-center space-x-1 text-white bg-red-600 hover:bg-red-700 px-3 py-1.5 rounded transition-colors"
                  >
                    <Trash2 className="w-4 h-4" />
                    <span>Delete Form</span>
                  </button>
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

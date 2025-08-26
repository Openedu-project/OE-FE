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
  Copy,
  Trash2,
  ChevronLeft,
  ChevronFirst,
  ChevronLast,
} from "lucide-react"

interface Course {
  id: number
  name: string
  status: "Draft" | "Published"
  type: "Manual"
  price: string
  published: string
  reviewing: string
  learners: number
}

export default function CoursesPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [rowsPerPage, setRowsPerPage] = useState(10)
  const [currentPage, setCurrentPage] = useState(1)

  const sidebarItems = [
    { icon: Home, label: "Dashboard" },
    { icon: Rocket, label: "Launchpad" },
    { icon: Tag, label: "Coupon" },
    { icon: BookOpen, label: "Courses", active: true },
    { icon: FileText, label: "Form Templates" },
    { icon: Star, label: "Affiliate Campaigns", hasSubmenu: true },
  ]

  const courses: Course[] = [
    {
      id: 1,
      name: "ai mastery lam chu tuong lai t...",
      status: "Draft",
      type: "Manual",
      price: "100.000,00 đ",
      published: "v1.0",
      reviewing: "v1.0",
      learners: 1,
    },
    {
      id: 2,
      name: "Test Launchpad",
      status: "Draft",
      type: "Manual",
      price: "1.000.000,00 đ",
      published: "-",
      reviewing: "-",
      learners: 1,
    },
    {
      id: 3,
      name: "Launchpad 2",
      status: "Draft",
      type: "Manual",
      price: "2.000,00 đ\n1.00 USDT",
      published: "v1.0",
      reviewing: "v1.0",
      learners: 1,
    },
    {
      id: 4,
      name: "khóa học môia",
      status: "Draft",
      type: "Manual",
      price: "$2,222.00",
      published: "v1.0",
      reviewing: "v1.0",
      learners: 2,
    },
    {
      id: 5,
      name: "Course -Next Js",
      status: "Draft",
      type: "Manual",
      price: "$1.00\n1.00 USDT",
      published: "v4.0",
      reviewing: "v5.0",
      learners: 2,
    },
  ]

  const handleBackToDashboard = () => {}

  const handleCreateNewCourse = () => {
    console.log("Create new course clicked")
  }

  const handleDuplicate = (courseId: number) => {
    console.log("Duplicate course:", courseId)
  }

  const handleDelete = (courseId: number) => {
    console.log("Delete course:", courseId)
  }

  const filteredCourses = courses.filter((course) => course.name.toLowerCase().includes(searchTerm.toLowerCase()))

  const totalPages = Math.ceil(filteredCourses.length / rowsPerPage)
  const startIndex = (currentPage - 1) * rowsPerPage
  const endIndex = startIndex + rowsPerPage
  const currentCourses = filteredCourses.slice(startIndex, endIndex)

  return (
    <div className="flex-1 flex flex-col bg-white">
      {/* Breadcrumb */}
      <div className="px-6 py-4 border-b border-gray-200">
        <div className="flex items-center space-x-2 text-sm text-gray-600">
          <Home className="w-4 h-4" />
          <ChevronRight className="w-4 h-4" />
          <span className="text-blue-600 font-medium">Courses</span>
        </div>
      </div>

      {/* Page Header */}
      <div className="px-6 py-4 border-b border-gray-200">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold text-gray-900">Courses</h1>
          <button
            onClick={handleCreateNewCourse}
            className="flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
          >
            <Plus className="w-4 h-4" />
            <span>Create New Course</span>
            <ChevronDown className="w-4 h-4" />
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
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                <div className="flex items-center space-x-1">
                  <span>Name</span>
                  <ChevronDown className="w-3 h-3" />
                </div>
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                <div className="flex items-center space-x-1">
                  <span>Status</span>
                  <ChevronDown className="w-3 h-3" />
                </div>
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Type</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Price</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Published
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Reviewing
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Learners
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {currentCourses.map((course, index) => (
              <tr key={course.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{startIndex + index + 1}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="text-sm text-blue-600 hover:text-blue-800 cursor-pointer">{course.name}</span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="text-sm text-gray-600">{course.status}</span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                    {course.type}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  <div className="whitespace-pre-line">{course.price}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {course.published !== "-" ? (
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                      {course.published}
                    </span>
                  ) : (
                    <span className="text-sm text-gray-400">-</span>
                  )}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {course.reviewing !== "-" ? (
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                      {course.reviewing}
                    </span>
                  ) : (
                    <span className="text-sm text-gray-400">-</span>
                  )}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{course.learners}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => handleDuplicate(course.id)}
                      className="flex items-center space-x-1 text-gray-600 hover:text-gray-900 px-2 py-1 rounded"
                    >
                      <Copy className="w-4 h-4" />
                      <span>Duplicate</span>
                    </button>
                    <button
                      onClick={() => handleDelete(course.id)}
                      className="flex items-center space-x-1 text-red-600 hover:text-red-900 px-2 py-1 rounded"
                    >
                      <Trash2 className="w-4 h-4" />
                      <span>Delete</span>
                    </button>
                  </div>
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

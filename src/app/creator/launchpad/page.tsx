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
  Calendar,
  DollarSign,
  Users,
  TrendingUp,
  Clock,
  CheckCircle,
  XCircle,
  AlertCircle,
} from "lucide-react"

interface LaunchpadItem {
  id: number
  title: string
  description: string
  status:
    | "Draft"
    | "Reviewing"
    | "Approved"
    | "Publish"
    | "Funding"
    | "Waiting"
    | "Voting"
    | "Success"
    | "Failed"
    | "Refunded"
  category: string
  price: string
  fundingGoal?: string
  currentFunding?: string
  backers?: number
  daysLeft?: number
  image: string
  createdAt: string
}

export default function LaunchpadPage() {
  const [activeTab, setActiveTab] = useState<LaunchpadItem["status"]>("Draft")

  const sidebarItems = [
    { icon: Home, label: "Dashboard" },
    { icon: Rocket, label: "Launchpad", active: true },
    { icon: Tag, label: "Coupon" },
    { icon: BookOpen, label: "Courses" },
    { icon: FileText, label: "Form Templates" },
    { icon: Star, label: "Affiliate Campaigns", hasSubmenu: true, expanded: true },
    { icon: Users, label: "Campaigns", isSubItem: true },
    { icon: TrendingUp, label: "Report", isSubItem: true },
  ]

  const tabs: LaunchpadItem["status"][] = [
    "Draft",
    "Reviewing",
    "Approved",
    "Publish",
    "Funding",
    "Waiting",
    "Voting",
    "Success",
    "Failed",
    "Refunded",
  ]

  const launchpadItems: LaunchpadItem[] = [
    // Draft items
    {
      id: 1,
      title: "AI-Powered Learning Platform",
      description: "Revolutionary AI platform that personalizes learning experiences for students worldwide.",
      status: "Draft",
      category: "Education Technology",
      price: "$99",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=300&h=200&fit=crop",
      createdAt: "2024-01-15",
    },
    {
      id: 2,
      title: "Smart Study Assistant",
      description: "An intelligent study companion that helps students organize and optimize their learning.",
      status: "Draft",
      category: "Productivity",
      price: "$49",
      image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=300&h=200&fit=crop",
      createdAt: "2024-01-10",
    },
    // Reviewing items
    {
      id: 3,
      title: "Virtual Reality Classroom",
      description: "Immersive VR environment for interactive learning experiences.",
      status: "Reviewing",
      category: "Virtual Reality",
      price: "$199",
      image: "https://images.unsplash.com/photo-1592478411213-6153e4ebc696?w=300&h=200&fit=crop",
      createdAt: "2024-01-12",
    },
    // Approved items
    {
      id: 4,
      title: "Language Learning Bot",
      description: "AI chatbot that helps users learn new languages through conversation.",
      status: "Approved",
      category: "Language Learning",
      price: "$79",
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=300&h=200&fit=crop",
      createdAt: "2024-01-08",
    },
    // Funding items
    {
      id: 5,
      title: "Blockchain Education Platform",
      description: "Decentralized platform for verified educational credentials.",
      status: "Funding",
      category: "Blockchain",
      price: "$299",
      fundingGoal: "$50,000",
      currentFunding: "$32,500",
      backers: 127,
      daysLeft: 15,
      image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=300&h=200&fit=crop",
      createdAt: "2024-01-05",
    },
    {
      id: 6,
      title: "Interactive Coding Tutor",
      description: "Real-time coding assistance and mentorship platform.",
      status: "Funding",
      category: "Programming",
      price: "$149",
      fundingGoal: "$75,000",
      currentFunding: "$18,750",
      backers: 89,
      daysLeft: 22,
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=300&h=200&fit=crop",
      createdAt: "2024-01-03",
    },
    // Success items
    {
      id: 7,
      title: "Digital Art Academy",
      description: "Comprehensive digital art courses with industry professionals.",
      status: "Success",
      category: "Creative Arts",
      price: "$129",
      fundingGoal: "$30,000",
      currentFunding: "$45,200",
      backers: 234,
      image: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=300&h=200&fit=crop",
      createdAt: "2023-12-20",
    },
  ]

  const handleBackToDashboard = () => {}

  const getStatusIcon = (status: LaunchpadItem["status"]) => {
    switch (status) {
      case "Draft":
        return <FileText className="w-4 h-4" />
      case "Reviewing":
        return <Clock className="w-4 h-4" />
      case "Approved":
        return <CheckCircle className="w-4 h-4" />
      case "Success":
        return <TrendingUp className="w-4 h-4" />
      case "Failed":
        return <XCircle className="w-4 h-4" />
      case "Funding":
        return <DollarSign className="w-4 h-4" />
      default:
        return <AlertCircle className="w-4 h-4" />
    }
  }

  const getStatusColor = (status: LaunchpadItem["status"]) => {
    switch (status) {
      case "Draft":
        return "text-gray-600 bg-gray-100"
      case "Reviewing":
        return "text-yellow-600 bg-yellow-100"
      case "Approved":
        return "text-green-600 bg-green-100"
      case "Success":
        return "text-emerald-600 bg-emerald-100"
      case "Failed":
        return "text-red-600 bg-red-100"
      case "Funding":
        return "text-blue-600 bg-blue-100"
      case "Publish":
        return "text-purple-600 bg-purple-100"
      case "Waiting":
        return "text-orange-600 bg-orange-100"
      case "Voting":
        return "text-indigo-600 bg-indigo-100"
      case "Refunded":
        return "text-pink-600 bg-pink-100"
      default:
        return "text-gray-600 bg-gray-100"
    }
  }

  const filteredItems = launchpadItems.filter((item) => item.status === activeTab)

  const renderProductCard = (item: LaunchpadItem) => (
    <div
      key={item.id}
      className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow"
    >
      <div className="aspect-video bg-gray-100 relative">
        <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
        <div className="absolute top-3 right-3">
          <span
            className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(
              item.status,
            )}`}
          >
            {getStatusIcon(item.status)}
            <span className="ml-1">{item.status}</span>
          </span>
        </div>
      </div>

      <div className="p-4">
        <div className="flex items-start justify-between mb-2">
          <h3 className="text-lg font-semibold text-gray-900 line-clamp-1">{item.title}</h3>
          <span className="text-lg font-bold text-blue-600">{item.price}</span>
        </div>

        <p className="text-sm text-gray-600 mb-3 line-clamp-2">{item.description}</p>

        <div className="flex items-center justify-between text-xs text-gray-500 mb-3">
          <span className="bg-gray-100 px-2 py-1 rounded">{item.category}</span>
          <span>{new Date(item.createdAt).toLocaleDateString()}</span>
        </div>

        {item.status === "Funding" && (
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-gray-600">Progress</span>
              <span className="font-medium">
                {item.currentFunding} / {item.fundingGoal}
              </span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div
                className="bg-blue-600 h-2 rounded-full"
                style={{
                  width: `${
                    (parseInt(item.currentFunding?.replace(/[^0-9]/g, "") || "0") /
                      parseInt(item.fundingGoal?.replace(/[^0-9]/g, "") || "1")) *
                    100
                  }%`,
                }}
              ></div>
            </div>
            <div className="flex justify-between text-xs text-gray-500">
              <span>{item.backers} backers</span>
              <span>{item.daysLeft} days left</span>
            </div>
          </div>
        )}

        {item.status === "Success" && (
          <div className="bg-green-50 p-3 rounded-lg">
            <div className="flex items-center justify-between text-sm">
              <span className="text-green-700 font-medium">Funded Successfully!</span>
              <span className="text-green-600">{item.currentFunding}</span>
            </div>
            <div className="text-xs text-green-600 mt-1">{item.backers} total backers</div>
          </div>
        )}
      </div>
    </div>
  )

  return (
    <div className="flex-1 flex flex-col bg-white">
      {/* Breadcrumb */}
      <div className="px-6 py-4 border-b border-gray-200">
        <div className="flex items-center space-x-2 text-sm text-gray-600">
          <Home className="w-4 h-4" />
          <ChevronRight className="w-4 h-4" />
          <span className="text-blue-600 font-medium">Launchpad</span>
        </div>
      </div>

      {/* Page Header */}
      <div className="px-6 py-4 border-b border-gray-200">
        <h1 className="text-2xl font-bold text-gray-900">Launchpad List</h1>
      </div>

      {/* Tabs */}
      <div className="px-6 py-4 border-b border-gray-200">
        <div className="flex space-x-8 overflow-x-auto">
          {tabs.map((tab) => (
            <button
              key={tab}
              className={`text-sm font-medium pb-2 border-b-2 transition-colors whitespace-nowrap ${
                activeTab === tab
                  ? "text-blue-600 border-blue-600"
                  : "text-gray-500 border-transparent hover:text-gray-700"
              }`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* Content Area */}
      <div className="flex-1 overflow-auto p-6">
        {filteredItems.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map(renderProductCard)}
          </div>
        ) : (
          <div className="text-center py-12">
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Rocket className="w-8 h-8 text-gray-400" />
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">No items in {activeTab}</h3>
            <p className="text-gray-500">There are no launchpad items with {activeTab.toLowerCase()} status yet.</p>
          </div>
        )}
      </div>
    </div>
  )
}

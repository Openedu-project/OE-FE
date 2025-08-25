"use client"
import React, { useState } from "react"
import { Home, Rocket, Tag, BookOpen, FileText, Star, ChevronRight, Bell, User, ChevronDown } from "lucide-react"
import { Header } from "../_components/layout/Header"

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState("Creator")

  const sidebarItems = [
    { icon: Home, label: "Dashboard", active: true },
    { icon: Rocket, label: "Launchpad" },
    { icon: Tag, label: "Coupon" },
    { icon: BookOpen, label: "Courses" },
    { icon: FileText, label: "Form Templates" },
    { icon: Star, label: "Affiliate Campaigns", hasSubmenu: true },
  ]

  const topNavItems = [
    { label: "Home" },
    { label: "Affiliate" },
    { label: "Blog" },
    { label: "Learner" },
    { label: "Creator", active: true },
    { label: "About" },
  ]

  const handleBackToDashboard = () => {}

  return (
    <div className="min-h-screen bg-gray-50 font-inter">
      {/* Header */}
      <Header />

      <div className="flex h-[calc(100vh-64px)]">
        {/* Sidebar */}
        <div className="w-64 bg-white border-r border-gray-200 flex flex-col">
          <div className="flex-1 p-4">
            <div className="space-y-2">
              {sidebarItems.map((item, index) => (
                <div key={index} className="relative">
                  <div
                    className={`flex items-center justify-between p-3 rounded-lg cursor-pointer transition-colors ${
                      item.active ? "bg-blue-50 text-blue-600 border border-blue-200" : "text-gray-600 hover:bg-gray-50"
                    }`}
                    onClick={item.label === "Dashboard" ? handleBackToDashboard : undefined}
                  >
                    <div className="flex items-center space-x-3">
                      <item.icon className="w-5 h-5" />
                      <span className="text-sm font-medium">{item.label}</span>
                    </div>
                    {item.hasSubmenu && <ChevronRight className="w-4 h-4 text-gray-400" />}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Icon */}
          <div className="p-4 border-t border-gray-200">
            <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center">
              <span className="text-gray-600 text-sm">?</span>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 flex flex-col">
          {/* Top Navigation Tabs */}
          <div className="bg-white border-b border-gray-200 px-6 py-4">
            <div className="flex space-x-8">
              {topNavItems.map((item, index) => (
                <button
                  key={index}
                  className={`text-sm font-medium pb-2 border-b-2 transition-colors ${
                    item.active
                      ? "text-blue-600 border-blue-600"
                      : "text-gray-500 border-transparent hover:text-gray-700"
                  }`}
                  onClick={() => setActiveTab(item.label)}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          {/* Page Title */}
          <div className="bg-white px-6 py-4 border-b border-gray-200">
            <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
          </div>

          {/* Main Content Area */}
          <div className="flex-1 p-6 bg-gray-50">
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 h-full">
              <div className="p-8 text-center">
                <div className="max-w-md mx-auto">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Home className="w-8 h-8 text-blue-600" />
                  </div>
                  <h2 className="text-xl font-semibold text-gray-900 mb-2">Welcome to Admin Dashboard</h2>
                  <p className="text-gray-600 mb-6">
                    Manage your OpenEdu platform from this central dashboard. Use the sidebar to navigate between
                    different sections.
                  </p>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <div className="font-semibold text-blue-900">Quick Stats</div>
                      <div className="text-blue-700 mt-1">View analytics and metrics</div>
                    </div>
                    <div className="bg-green-50 p-4 rounded-lg">
                      <div className="font-semibold text-green-900">Manage Content</div>
                      <div className="text-green-700 mt-1">Create and edit courses</div>
                    </div>
                    <div className="bg-purple-50 p-4 rounded-lg">
                      <div className="font-semibold text-purple-900">User Management</div>
                      <div className="text-purple-700 mt-1">Handle user accounts</div>
                    </div>
                    <div className="bg-orange-50 p-4 rounded-lg">
                      <div className="font-semibold text-orange-900">Settings</div>
                      <div className="text-orange-700 mt-1">Configure platform</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

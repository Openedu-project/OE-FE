"use client"
import React, { useState } from "react"
import { Home, Rocket, Tag, BookOpen, FileText, Star, ChevronRight, Bell, User, ChevronDown } from "lucide-react"
import { Header } from "../_components/layout/Header"

export default function CreatorDashboardPage({ children }: { children: React.ReactNode }) {
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
          {/* Main Content Area */}
          {children}
        </div>
      </div>
    </div>
  )
}

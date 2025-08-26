import React, { Children, useState } from "react"

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
  Award,
  Users,
  TrendingUp,
  Play,
  CheckCircle,
} from "lucide-react"
import { Header } from "../_components/layout/Header"

export default function CreateCoursePage({ children }: { children: React.ReactNode }) {
  const sidebarItems = [
    { icon: Home, label: "Dashboard", active: true },
    { icon: BookOpen, label: "My Courses", hasSubmenu: true },
    { icon: Award, label: "My Certificates" },
    { icon: Star, label: "Wishlist" },
  ]

  return (
    <div className="min-h-screen bg-gray-50 font-inter">
      {/* Header */}
      <Header />

      <div className="flex">
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

        {children}
      </div>
    </div>
  )
}

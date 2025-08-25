import { Image, MessageSquare, Presentation, ProjectorIcon, Search } from "lucide-react"
import React from "react"

function SidebarAIPage() {
  const sidebarItems = [
    { icon: MessageSquare, label: "New Chat", active: true },
    { icon: Presentation, label: "Presentation" },
    { icon: Image, label: "Image Generator" },
    { icon: ProjectorIcon, label: "Workspace", badge: "Beta" },
    { icon: MessageSquare, label: "Prompt", badge: "Soon" },
  ]

  return (
    <div className="w-64 bg-white border-r border-gray-200 flex flex-col">
      {/* Free Plan Badge */}
      <div className="p-4 border-b border-gray-200">
        <div className="flex items-center space-x-2 bg-blue-50 p-3 rounded-lg">
          <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
            <span className="text-white text-sm font-bold">F</span>
          </div>
          <span className="text-sm font-medium text-gray-700">Free Plan</span>
        </div>
      </div>

      {/* Sidebar Menu */}
      <div className="flex-1 p-4">
        <div className="space-y-2">
          {sidebarItems.map((item, index) => (
            <div
              key={index}
              className={`flex items-center space-x-3 p-3 rounded-lg cursor-pointer transition-colors ${
                item.active ? "bg-blue-50 text-blue-600 border border-blue-200" : "text-gray-600 hover:bg-gray-50"
              }`}
            >
              <item.icon className="w-5 h-5" />
              <span className="text-sm font-medium">{item.label}</span>
              {item.badge && (
                <span
                  className={`text-xs px-2 py-0.5 rounded-full ${
                    item.badge === "Beta" ? "bg-blue-100 text-blue-600" : "bg-gray-100 text-gray-600"
                  }`}
                >
                  {item.badge}
                </span>
              )}
            </div>
          ))}
        </div>

        {/* History Section */}
        <div className="mt-8">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-sm font-medium text-gray-700">History</h3>
            <Search className="w-4 h-4 text-gray-400" />
          </div>
          <div className="text-center py-8">
            <p className="text-sm text-gray-500">No History Here</p>
          </div>
        </div>
      </div>

      {/* Bottom Icon */}
      <div className="p-4 border-t border-gray-200">
        <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center">
          <span className="text-gray-600 text-sm">?</span>
        </div>
      </div>
    </div>
  )
}

export default SidebarAIPage

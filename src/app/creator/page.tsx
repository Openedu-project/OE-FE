import { Home } from "lucide-react"
import React, { useState } from "react"

function CreatorDashboardPage() {
  return (
    <div className="flex-1 p-6 bg-gray-50">
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 h-full">
        <div className="p-8 text-center">
          <div className="max-w-md mx-auto">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Home className="w-8 h-8 text-blue-600" />
            </div>
            <h2 className="text-xl font-semibold text-gray-900 mb-2">Welcome to Admin Dashboard</h2>
            <p className="text-gray-600 mb-6">
              Manage your OpenEdu platform from this central dashboard. Use the sidebar to navigate between different
              sections.
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
  )
}

export default CreatorDashboardPage

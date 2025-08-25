"use client"
import React, { useState } from "react"
import { ChevronDown, Search, Mic, Send } from "lucide-react"

export default function Dashboard() {
  const [selectedModel, setSelectedModel] = useState("ChatGPT - 4o mini")
  const [inputText, setInputText] = useState("")

  return (
    <div className="flex-1 flex flex-col">
      {/* Model Selection */}
      <div className="p-4 border-b border-gray-200 bg-white">
        <div className="flex justify-center">
          <button className="flex items-center space-x-2 bg-gray-100 px-4 py-2 rounded-full">
            <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
              <span className="text-white text-xs">✓</span>
            </div>
            <span className="text-sm font-medium">{selectedModel}</span>
            <ChevronDown className="w-4 h-4 text-gray-500" />
          </button>
        </div>
      </div>

      {/* Chat Area */}
      <div className="flex-1 flex flex-col items-center justify-center p-8 bg-gray-50">
        {/* AI Character */}
        <div className="mb-8">
          <div className="w-24 h-24 bg-blue-100 rounded-full flex items-center justify-center mb-4">
            <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center">
              <span className="text-white text-2xl">🤖</span>
            </div>
          </div>
        </div>

        {/* Main Heading */}
        <h1 className="text-3xl font-bold text-center mb-2 max-w-2xl">
          <span className="text-blue-600">Increase x10</span> of your work & study performance every day
        </h1>

        {/* Input Area */}
        <div className="w-full max-w-3xl mt-8">
          <div className="relative">
            <input
              type="text"
              placeholder="Write something / Tip: Use @ to mention an AI Agent"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              className="w-full px-6 py-4 pr-20 border border-gray-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />

            {/* Input Actions */}
            <div className="absolute right-4 top-1/2 transform -translate-y-1/2 flex items-center space-x-2">
              <button className="p-2 text-gray-400 hover:text-gray-600">
                <span className="text-sm">💡</span>
              </button>
              <button className="p-2 text-gray-400 hover:text-gray-600">
                <Search className="w-4 h-4" />
              </button>
              <button className="p-2 text-gray-400 hover:text-gray-600">
                <span className="text-sm">🧠</span>
              </button>
              <button className="p-2 text-gray-400 hover:text-gray-600">
                <Mic className="w-4 h-4" />
              </button>
              <button className="p-2 bg-blue-600 text-white rounded-full hover:bg-blue-700">
                <Send className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="flex items-center justify-center space-x-4 mt-4">
            <button className="flex items-center space-x-2 px-4 py-2 bg-white border border-gray-200 rounded-full text-sm hover:bg-gray-50">
              <span>💡</span>
              <span>Deep Research</span>
            </button>
            <button className="flex items-center space-x-2 px-4 py-2 bg-white border border-gray-200 rounded-full text-sm hover:bg-gray-50">
              <span>🧠</span>
              <span>Thinking</span>
            </button>
          </div>
        </div>
      </div>

      {/* Loading Indicator */}
      <div className="p-4 flex justify-center">
        <div className="w-8 h-8 border-4 border-gray-200 border-t-blue-600 rounded-full animate-spin"></div>
      </div>
    </div>
  )
}

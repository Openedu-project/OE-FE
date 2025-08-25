import { Header } from "../_components/layout/Header"
import SidebarAIPage from "./_components/sidebar"

export default function AIPageLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <div className="min-h-screen bg-gray-50 font-inter">
        {/* Header */}
        <Header />

        <div className="flex h-[calc(100vh-64px)]">
          {/* Sidebar */}
          <SidebarAIPage />

          {/* Main Content */}
          {children}
        </div>
      </div>
    </div>
  )
}

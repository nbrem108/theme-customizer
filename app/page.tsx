"use client"
import { useState } from "react"
import { ThemeProvider } from "../components/theme-provider"
import { ThemeCustomizer } from "../components/theme-customizer"
import { Dashboard } from "../components/dashboard"
import { WelcomeGuide } from "../components/welcome-guide"

export default function Home() {
  const [showWelcome, setShowWelcome] = useState(true)
  const [sidebarOpen, setSidebarOpen] = useState(false)

  if (showWelcome) {
    return (
      <ThemeProvider>
        <WelcomeGuide onGetStarted={() => setShowWelcome(false)} />
      </ThemeProvider>
    )
  }

  return (
    <ThemeProvider>
      <div className="flex h-screen w-full bg-background overflow-hidden">
        {/* Mobile Overlay */}
        {sidebarOpen && (
          <div className="fixed inset-0 bg-black/50 z-40 lg:hidden" onClick={() => setSidebarOpen(false)} />
        )}

        {/* Sidebar */}
        <div
          className={`
          fixed lg:relative z-50 lg:z-auto
          w-80 h-full
          transform transition-transform duration-300 ease-in-out
          ${sidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}
        `}
        >
          <ThemeCustomizer onClose={() => setSidebarOpen(false)} />
        </div>

        {/* Main Content */}
        <div className="flex-1 flex flex-col min-w-0">
          <Dashboard onOpenSidebar={() => setSidebarOpen(true)} />
        </div>
      </div>
    </ThemeProvider>
  )
}

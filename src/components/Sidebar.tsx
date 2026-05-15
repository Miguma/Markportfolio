'use client'

import { motion } from 'framer-motion'
import { ChevronRight, Home, User, Code, Briefcase, Trophy, Mail, X } from 'lucide-react'

interface SidebarProps {
  activeSection: string
  setActiveSection: (section: string) => void
  sidebarOpen: boolean
  setSidebarOpen: (open: boolean) => void
}

const sectionItems = [
  { id: 'home', label: 'home.tsx', icon: Home },
  { id: 'about', label: 'about.tsx', icon: User },
  { id: 'skills', label: 'skills.tsx', icon: Code },
  { id: 'experience', label: 'experience.tsx', icon: Briefcase },
  { id: 'projects', label: 'projects.tsx', icon: Code },
  { id: 'achievements', label: 'achievements.tsx', icon: Trophy },
  { id: 'contact', label: 'contact.tsx', icon: Mail },
]

export function Sidebar({ activeSection, setActiveSection, sidebarOpen, setSidebarOpen }: SidebarProps) {
  return (
    <>
      {/* Mobile overlay */}
      {sidebarOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setSidebarOpen(false)}
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
        />
      )}

      {/* Sidebar */}
      <motion.div
        initial={{ x: -250 }}
        animate={{ x: sidebarOpen ? 0 : -250 }}
        transition={{ duration: 0.3 }}
        className="fixed md:relative w-64 h-screen bg-dark-panel border-r border-dark-border overflow-y-auto z-50 md:z-auto md:translate-x-0"
      >
        {/* Header */}
        <div className="p-4 border-b border-dark-border flex justify-between items-center">
          <h2 className="text-sm font-semibold text-gray-300">Explorer</h2>
          <button
            onClick={() => setSidebarOpen(false)}
            className="md:hidden p-1 hover:bg-dark-border rounded"
          >
            <X size={16} />
          </button>
        </div>

        {/* Project Structure */}
        <div className="p-3">
          <div className="text-xs text-gray-500 mb-4 flex items-center gap-2">
            <ChevronRight size={14} />
            <span>PORTFOLIO</span>
          </div>

          {/* Sections */}
          <div className="space-y-1">
          {sectionItems.map((item) => {
              const Icon = item.icon
              const isActive = activeSection === item.id

              return (
                <motion.button
                  key={item.id}
                  onClick={() => {
                    setActiveSection(item.id)
                  }}
                  whileHover={{ x: 4 }}
                  className={`w-full flex items-center gap-3 px-3 py-2 rounded text-sm transition-all duration-200 ${
                    isActive
                      ? 'bg-accent-purple/20 text-accent-purple border-l-2 border-accent-purple'
                      : 'text-gray-400 hover:bg-dark-border/50 hover:text-gray-300'
                  }`}
                >
                  <Icon size={16} />
                  <span className="truncate">{item.label}</span>
                  {isActive && (
                    <motion.div
                      layoutId="activeIndicator"
                      className="ml-auto w-1 h-1 bg-accent-purple rounded-full"
                      transition={{ duration: 0.2 }}
                    />
                  )}
                </motion.button>
              )
            })}
          </div>
        </div>

        {/* Bottom Info */}
        <div className="absolute bottom-0 w-full border-t border-dark-border bg-dark-panel p-3 text-xs text-gray-500">
          <div className="text-accent-purple mb-1">// Developer</div>
          <div>Full-Stack Engineer</div>
        </div>
      </motion.div>
    </>
  )
}

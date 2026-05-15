'use client'

import { motion } from 'framer-motion'
import { Menu, X, Minus, Square } from 'lucide-react'

interface NavbarProps {
  sidebarOpen: boolean
  setSidebarOpen: (open: boolean) => void
}

export function Navbar({ sidebarOpen, setSidebarOpen }: NavbarProps) {
  return (
    <motion.div
      initial={{ y: -60 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.4 }}
      className="h-14 bg-dark-panel border-b border-dark-border flex items-center justify-between px-4 sticky top-0 z-40"
    >
      {/* Left - Menu Toggle */}
      <div className="flex items-center gap-2">
        <button
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="p-1 hover:bg-dark-border rounded transition-colors md:hidden"
        >
          {sidebarOpen ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      {/* Center - File/Tab Info */}
      <div className="flex-1 flex items-center justify-center md:justify-start ml-4">
        <div className="flex items-center gap-2 text-sm text-gray-400">
          <span className="font-semibold text-accent-purple">Mark</span>
          <span>-</span>
          <span>MarkPortfolio.code-workspace</span>
        </div>
      </div>

      {/* Right - Window Controls */}
      <div className="flex items-center gap-3">
        <div className="hidden sm:flex items-center gap-2">
          <button className="p-1 hover:bg-dark-border rounded transition-colors hover:text-accent-blue">
            <Minus size={16} />
          </button>
          <button className="p-1 hover:bg-dark-border rounded transition-colors hover:text-accent-blue">
            <Square size={16} />
          </button>
          <button className="p-1 hover:bg-dark-border rounded transition-colors hover:text-red-500 group">
            <X size={16} />
          </button>
        </div>
      </div>
    </motion.div>
  )
}

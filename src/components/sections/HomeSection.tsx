'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Github, Linkedin, Mail, Terminal } from 'lucide-react'
import { useEffect, useState } from 'react'

export function HomeSection() {
  const [displayedText, setDisplayedText] = useState('')
  const fullText = "Full-Stack Developer & Project Manager"
  
  useEffect(() => {
    let index = 0
    const interval = setInterval(() => {
      if (index < fullText.length) {
        setDisplayedText(fullText.slice(0, index + 1))
        index++
      } else {
        clearInterval(interval)
      }
    }, 50)
    return () => clearInterval(interval)
  }, [fullText])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  }

  return (
    <div className="min-h-screen bg-dark-bg relative overflow-hidden flex flex-col justify-center px-4 sm:px-8 lg:px-16 py-20">
      {/* Grid Background */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03] z-0">
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(rgba(139, 92, 246, 1) 1px, transparent 1px), linear-gradient(90deg, rgba(139, 92, 246, 1) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }} />
      </div>

      {/* Ambient Glows */}
      <div className="absolute top-1/4 -right-48 w-[600px] h-[600px] bg-accent-purple/10 rounded-full blur-[150px] pointer-events-none z-0" />
      <div className="absolute -bottom-48 -left-48 w-[600px] h-[600px] bg-accent-cyan/10 rounded-full blur-[150px] pointer-events-none z-0" />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 max-w-5xl mx-auto w-full"
      >
        {/* Top Badge */}
        <motion.div variants={itemVariants} className="mb-10">
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-dark-panel/40 border border-dark-border backdrop-blur-md">
            <Terminal size={16} className="text-accent-purple" />
            <span className="text-sm text-gray-300 font-mono tracking-wide">
              {`const developer = "Mark"`}
            </span>
            <span className="w-2 h-2 rounded-full bg-accent-cyan animate-pulse ml-2" />
          </div>
        </motion.div>

        {/* Main Heading */}
        <motion.div variants={itemVariants} className="mb-6">
          <h1 className="text-5xl sm:text-7xl lg:text-8xl font-extrabold text-white tracking-tight leading-[1.1]">
            Engineering <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-purple via-accent-blue to-accent-cyan">
              Digital Reality.
            </span>
          </h1>
        </motion.div>

        {/* Typing subtitle */}
        <motion.div variants={itemVariants} className="mb-10">
          <div className="text-xl sm:text-2xl lg:text-3xl text-gray-400 font-mono h-12 flex items-center">
            <span className="text-accent-purple mr-3">{'> '}</span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-200 to-gray-500 font-semibold tracking-tight">{displayedText}</span>
            <span className="w-3 h-8 ml-1 bg-accent-purple/70 animate-pulse" />
          </div>
        </motion.div>

        {/* Description */}
        <motion.div variants={itemVariants} className="mb-12 max-w-2xl">
          <p className="text-gray-400 text-lg sm:text-xl leading-relaxed font-light">
            I specialize in building modern web and mobile applications while leading collaborative teams. I turn complex problems into elegant, high-performance systems. Based in Cebu, Philippines.
          </p>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-6 mb-16">
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="group relative px-8 py-4 bg-transparent text-white font-medium rounded-full overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-accent-purple to-accent-blue opacity-90 group-hover:opacity-100 transition-opacity" />
            <div className="absolute inset-0 opacity-0 group-hover:opacity-20 bg-white transition-opacity" />
            <div className="absolute -inset-1 bg-gradient-to-r from-accent-purple to-accent-blue opacity-30 blur-xl group-hover:opacity-60 transition-opacity duration-500" />
            <span className="relative z-10 flex items-center gap-2">
              View My Work
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </span>
          </motion.button>
          
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="px-8 py-4 bg-dark-panel/40 backdrop-blur-md border border-dark-border text-gray-300 rounded-full font-medium hover:text-white hover:border-accent-purple/50 hover:bg-dark-panel/60 transition-all duration-300"
          >
            Get In Touch
          </motion.button>
        </motion.div>

        {/* Social Links */}
        <motion.div variants={itemVariants} className="flex items-center gap-4">
          <span className="text-sm text-gray-500 font-mono mr-4 hidden sm:block">{`// Connect with me`}</span>
          {[
            { icon: Github, label: 'GitHub', href: '#' },
            { icon: Linkedin, label: 'LinkedIn', href: '#' },
            { icon: Mail, label: 'Email', href: '#' },
          ].map((social) => (
            <motion.a
              key={social.label}
              href={social.href}
              whileHover={{ y: -4, scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="relative group p-4 rounded-full border border-dark-border bg-dark-panel/30 backdrop-blur-sm text-gray-400 transition-all duration-300"
              aria-label={social.label}
            >
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-accent-purple/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <social.icon size={20} className="relative z-10 group-hover:text-accent-purple transition-colors" />
            </motion.a>
          ))}
        </motion.div>

      </motion.div>
    </div>
  )
}

'use client'

import { motion } from 'framer-motion'
import { Mail, Github, Linkedin, Twitter, Send, Phone, MapPin, MessageSquare } from 'lucide-react'
import { useState } from 'react'

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  
  const [isFocused, setIsFocused] = useState<string | null>(null)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', formData)
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.1 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  }

  const contactMethods = [
    {
      icon: Mail,
      label: 'Email',
      value: 'markabangan212@gmail.com',
      link: 'mailto:markabangan212@gmail.com',
      color: 'accent-purple',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '09276223004',
      link: 'tel:09276223004',
      color: 'accent-blue',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Cebu, Philippines',
      link: '#',
      color: 'accent-cyan',
    },
  ]

  const socials = [
    { icon: Github, label: 'GitHub', link: '#', hoverColor: 'hover:text-white hover:border-white' },
    { icon: Linkedin, label: 'LinkedIn', link: '#', hoverColor: 'hover:text-accent-blue hover:border-accent-blue' },
    { icon: Twitter, label: 'Twitter', link: '#', hoverColor: 'hover:text-accent-cyan hover:border-accent-cyan' },
  ]

  return (
    <div className="min-h-screen bg-dark-bg px-4 sm:px-8 lg:px-16 py-12 sm:py-24 relative overflow-hidden">
      {/* Background Orbs */}
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-accent-purple/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent-blue/5 rounded-full blur-[120px] pointer-events-none" />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="max-w-6xl mx-auto relative z-10"
      >
        {/* Header */}
        <motion.div variants={itemVariants} className="mb-16 md:text-center">
          <div className="flex items-center md:justify-center gap-4 mb-4">
            <div className="h-[1px] w-8 md:w-12 bg-accent-purple/50"></div>
            <div className="text-sm text-accent-purple font-mono uppercase tracking-widest flex items-center gap-2">
              <MessageSquare size={14} /> Connect
            </div>
            <div className="h-[1px] w-8 md:w-12 bg-accent-purple/50 hidden md:block"></div>
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 tracking-tight">
            Get In <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-purple to-accent-blue">Touch</span>
          </h2>
          <p className="text-gray-400 text-lg md:mx-auto max-w-2xl leading-relaxed">
            Have a project in mind or want to discuss technical initiatives? I'm currently open to new opportunities and always excited to collaborate on interesting projects.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 items-start">
          
          {/* Left Column - Contact Info */}
          <motion.div variants={itemVariants} className="lg:col-span-2 space-y-8">
            
            <div className="space-y-4">
              {contactMethods.map((method) => {
                const Icon = method.icon
                return (
                  <motion.a
                    key={method.label}
                    href={method.link}
                    className={`group block p-6 rounded-2xl border border-dark-border bg-dark-panel/40 backdrop-blur-sm hover:bg-dark-panel/60 hover:border-${method.color}/50 hover:shadow-glow-${method.color === 'accent-purple' ? '' : method.color.split('-')[1]} transition-all duration-300`}
                  >
                    <div className="flex items-center gap-6">
                      <div className={`w-12 h-12 rounded-xl bg-dark-bg border border-dark-border flex items-center justify-center group-hover:border-${method.color}/50 transition-colors`}>
                        <Icon size={24} className={`text-${method.color}`} />
                      </div>
                      <div>
                        <p className="text-sm text-gray-500 font-mono mb-1">{method.label}</p>
                        <p className="text-white font-semibold group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-400 transition-all">{method.value}</p>
                      </div>
                    </div>
                  </motion.a>
                )
              })}
            </div>

            {/* Social Links */}
            <div className="p-8 rounded-3xl border border-dark-border bg-dark-panel/30 backdrop-blur-sm">
              <p className="text-white font-semibold mb-6 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-accent-blue animate-pulse" />
                Social Profiles
              </p>
              <div className="flex gap-4">
                {socials.map((social) => {
                  const Icon = social.icon
                  return (
                    <motion.a
                      key={social.label}
                      href={social.link}
                      whileHover={{ y: -5 }}
                      className={`w-12 h-12 rounded-xl border border-dark-border bg-dark-bg flex items-center justify-center text-gray-400 transition-all duration-300 ${social.hoverColor}`}
                    >
                      <Icon size={20} />
                    </motion.a>
                  )
                })}
              </div>
            </div>
          </motion.div>

          {/* Right Column - Contact Form */}
          <motion.div variants={itemVariants} className="lg:col-span-3">
            <form onSubmit={handleSubmit} className="p-8 sm:p-10 rounded-3xl border border-dark-border bg-dark-panel/40 backdrop-blur-sm relative overflow-hidden">
              {/* Form internal glow */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-accent-blue/5 rounded-full blur-[80px] pointer-events-none" />

              <div className="space-y-6 relative z-10">
                <div className="grid sm:grid-cols-2 gap-6">
                  {/* Name Input */}
                  <div className="space-y-2">
                    <label className="text-sm text-gray-400 font-mono flex justify-between">
                      Name <span className="text-accent-purple">*</span>
                    </label>
                    <div className={`rounded-xl border ${isFocused === 'name' ? 'border-accent-purple shadow-glow bg-dark-bg/80' : 'border-dark-border bg-dark-bg/50'} transition-all duration-300`}>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        onFocus={() => setIsFocused('name')}
                        onBlur={() => setIsFocused(null)}
                        className="w-full px-5 py-4 bg-transparent text-white focus:outline-none rounded-xl"
                        placeholder="John Doe"
                        required
                      />
                    </div>
                  </div>

                  {/* Email Input */}
                  <div className="space-y-2">
                    <label className="text-sm text-gray-400 font-mono flex justify-between">
                      Email <span className="text-accent-blue">*</span>
                    </label>
                    <div className={`rounded-xl border ${isFocused === 'email' ? 'border-accent-blue shadow-glow-blue bg-dark-bg/80' : 'border-dark-border bg-dark-bg/50'} transition-all duration-300`}>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        onFocus={() => setIsFocused('email')}
                        onBlur={() => setIsFocused(null)}
                        className="w-full px-5 py-4 bg-transparent text-white focus:outline-none rounded-xl"
                        placeholder="john@example.com"
                        required
                      />
                    </div>
                  </div>
                </div>

                {/* Subject Input */}
                <div className="space-y-2">
                  <label className="text-sm text-gray-400 font-mono flex justify-between">
                    Subject <span className="text-accent-cyan">*</span>
                  </label>
                  <div className={`rounded-xl border ${isFocused === 'subject' ? 'border-accent-cyan shadow-glow-cyan bg-dark-bg/80' : 'border-dark-border bg-dark-bg/50'} transition-all duration-300`}>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      onFocus={() => setIsFocused('subject')}
                      onBlur={() => setIsFocused(null)}
                      className="w-full px-5 py-4 bg-transparent text-white focus:outline-none rounded-xl"
                      placeholder="Project Inquiry"
                      required
                    />
                  </div>
                </div>

                {/* Message Input */}
                <div className="space-y-2">
                  <label className="text-sm text-gray-400 font-mono flex justify-between">
                    Message <span className="text-accent-purple">*</span>
                  </label>
                  <div className={`rounded-xl border ${isFocused === 'message' ? 'border-accent-purple shadow-glow bg-dark-bg/80' : 'border-dark-border bg-dark-bg/50'} transition-all duration-300`}>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      onFocus={() => setIsFocused('message')}
                      onBlur={() => setIsFocused(null)}
                      rows={5}
                      className="w-full px-5 py-4 bg-transparent text-white focus:outline-none rounded-xl resize-none"
                      placeholder="Tell me about your project..."
                      required
                    />
                  </div>
                </div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full group relative px-8 py-4 rounded-xl bg-dark-bg border border-dark-border overflow-hidden transition-all hover:border-accent-purple/50"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-accent-purple via-accent-blue to-accent-cyan opacity-20 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative flex items-center justify-center gap-3 text-white font-semibold tracking-wide">
                    <span>Send Message</span>
                    <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </div>
                </motion.button>
              </div>
            </form>
          </motion.div>
        </div>

        {/* Footer Note */}
        <motion.div
          variants={itemVariants}
          className="mt-20 text-center"
        >
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full border border-dark-border bg-dark-panel/30 text-gray-400 text-sm font-mono backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            Available for new opportunities
          </div>
        </motion.div>
      </motion.div>
    </div>
  )
}

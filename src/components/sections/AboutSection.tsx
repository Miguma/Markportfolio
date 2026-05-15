'use client'

import { motion } from 'framer-motion'
import { Code2, Lightbulb, Zap, Target, Users } from 'lucide-react'

export function AboutSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
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

  const features = [
    {
      icon: Code2,
      title: 'Clean Architecture',
      description: 'Writing maintainable, efficient, and well-structured code that scales.',
      color: 'text-accent-purple',
      bg: 'bg-accent-purple/10',
      border: 'group-hover:border-accent-purple/50'
    },
    {
      icon: Lightbulb,
      title: 'Creative Solutions',
      description: 'Tackling complex challenges with innovative problem-solving approaches.',
      color: 'text-accent-blue',
      bg: 'bg-accent-blue/10',
      border: 'group-hover:border-accent-blue/50'
    },
    {
      icon: Zap,
      title: 'High Performance',
      description: 'Building blazing fast, responsive, and accessible applications.',
      color: 'text-accent-cyan',
      bg: 'bg-accent-cyan/10',
      border: 'group-hover:border-accent-cyan/50'
    },
  ]

  const stats = [
    { label: 'Projects Completed', value: '5+', icon: Target, color: 'text-accent-purple' },
    { label: 'Developers Led', value: '20+', icon: Users, color: 'text-accent-blue' },
    { label: 'Initiatives Started', value: '10+', icon: Zap, color: 'text-accent-cyan' },
  ]

  return (
    <div className="min-h-screen bg-dark-bg px-4 sm:px-8 lg:px-16 py-20 relative overflow-hidden">
      {/* Background ambient glow */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-accent-purple/5 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-1/4 left-0 w-[500px] h-[500px] bg-accent-blue/5 rounded-full blur-[120px] -z-10" />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="max-w-6xl mx-auto relative z-10"
      >
        {/* Header - Professional */}
        <motion.div variants={itemVariants} className="mb-16 md:mb-24 flex flex-col md:flex-row items-start md:items-center gap-12 lg:gap-16">
          {/* TEXT CONTENT - LEFT SIDE */}
          <div className="flex-1 lg:max-w-[60%]">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-dark-panel/60 border border-accent-purple/30 mb-6 backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-accent-blue animate-pulse" />
              <span className="text-sm text-gray-300 font-mono tracking-wide">about.tsx</span>
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight leading-tight">
              Behind the <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-purple via-accent-blue to-accent-cyan">Code</span>
            </h2>
            <p className="text-gray-400 text-base md:text-lg leading-relaxed font-light">
              Full-stack developer crafting scalable solutions at the intersection of technology and user experience. Passionate about clean code, innovative design, and building products that create meaningful impact.
            </p>
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Main Content */}
          <motion.div variants={itemVariants} className="lg:col-span-7 space-y-8">
            <div className="relative p-8 md:p-10 rounded-3xl bg-dark-panel/40 backdrop-blur-md border border-dark-border overflow-hidden group h-full">
              {/* Decorative top border */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-accent-purple via-accent-blue to-accent-cyan opacity-50 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="space-y-6 relative z-10">
                <p className="text-gray-300 leading-relaxed text-lg font-light">
                  I'm a student developer passionate about software development, UI/UX design, and project management. I thrive at the intersection of functionality and aesthetics, working on modern web and mobile applications while leading collaborative projects and developer teams.
                </p>
                
                <p className="text-gray-300 leading-relaxed text-lg font-light">
                  I focus on building systems that are both robust and visually polished. Whether working solo in the terminal or leading a squad of developers, I'm committed to creating elegant solutions that solve real-world problems and deliver immediate value.
                </p>

                <div className="p-6 rounded-2xl bg-dark-bg/50 border border-dark-border mt-8 relative overflow-hidden group/cto">
                  <div className="absolute inset-0 bg-gradient-to-r from-accent-purple/5 to-transparent opacity-0 group-hover/cto:opacity-100 transition-opacity duration-500" />
                  <p className="text-gray-300 leading-relaxed relative z-10">
                    <span className="font-semibold text-accent-purple">As CTO at SWUDEVS</span>, I organize developer workshops, manage technical initiatives, and actively support student developers in our community. I strongly believe in the power of open collaboration and knowledge sharing.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Features Side */}
          <motion.div variants={itemVariants} className="lg:col-span-5 flex flex-col items-stretch space-y-6">
            {/* Features List */}
            <div className="space-y-5 w-full">
              {features.map((feature) => {
                const Icon = feature.icon
                return (
                  <motion.div
                    key={feature.title}
                    whileHover={{ scale: 1.02, x: 5 }}
                    className={`group p-5 sm:p-6 rounded-2xl border border-dark-border bg-dark-panel/30 backdrop-blur-sm transition-all duration-300 ${feature.border}`}
                  >
                    <div className="flex items-start gap-4 sm:gap-5">
                      <div className={`p-3 rounded-xl ${feature.bg} ${feature.color} border border-white/5 shrink-0`}>
                        <Icon size={24} />
                      </div>
                      <div>
                        <h3 className="text-white font-semibold text-lg mb-1 group-hover:text-accent-blue transition-colors">{feature.title}</h3>
                        <p className="text-gray-400 text-sm leading-relaxed">{feature.description}</p>
                      </div>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>
        </div>

        {/* Stats Grid */}
        <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 md:mt-24">
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                whileHover={{ y: -5, scale: 1.02 }}
                className="relative group p-8 rounded-3xl border border-dark-border bg-dark-panel/20 backdrop-blur-sm text-center overflow-hidden transition-all duration-300 hover:border-accent-purple/30 hover:shadow-glow"
              >
                <div className={`absolute top-0 right-0 -mt-4 -mr-4 w-24 h-24 bg-gradient-to-br from-white/5 to-transparent rounded-full blur-xl group-hover:bg-accent-purple/10 transition-colors duration-500`} />
                
                <div className={`inline-flex p-3 rounded-2xl bg-dark-bg/50 border border-dark-border mb-4 ${stat.color}`}>
                  <Icon size={24} />
                </div>
                <div className={`text-4xl md:text-5xl font-bold tracking-tight mb-3 text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-500`}>
                  {stat.value}
                </div>
                <div className="text-sm font-medium text-gray-400 tracking-wide uppercase">{stat.label}</div>
              </motion.div>
            )
          })}
        </motion.div>
      </motion.div>
    </div>
  )
}

'use client'

import { motion } from 'framer-motion'
import { Github, ExternalLink, Code2, Rocket, Globe } from 'lucide-react'

export function ProjectsSection() {
  const projects = [
    {
      title: 'SafeKo',
      description: 'A safety-focused platform providing users with tools for awareness and security. Built with a focus on real-time data and user accessibility.',
      technologies: ['Flutter', 'Firebase', 'REST APIs', 'Dart'],
      icon: Rocket,
      color: 'accent-purple',
      gradient: 'from-accent-purple/20 via-dark-panel to-dark-bg',
      link: '#',
      github: '#',
    },
    {
      title: 'Artemis AI Assistant',
      description: 'An intelligent AI assistant application designed for productivity and automation tasks. Integrates advanced NLP models for seamless interactions.',
      technologies: ['AI/ML', 'Python', 'React', 'NLP'],
      icon: Code2,
      color: 'accent-blue',
      gradient: 'from-accent-blue/20 via-dark-panel to-dark-bg',
      link: '#',
      github: '#',
    },
    {
      title: 'Akasya Cafe System',
      description: 'A comprehensive cafe management system for point-of-sale, inventory, and customer management with robust reporting features.',
      technologies: ['Next.js', 'TypeScript', 'PostgreSQL', 'Tailwind CSS'],
      icon: Globe,
      color: 'accent-cyan',
      gradient: 'from-accent-cyan/20 via-dark-panel to-dark-bg',
      link: '#',
      github: '#',
    },
    {
      title: 'Talisay City College SIS',
      description: 'A robust student information system for managing enrollment, grades, and academic records securely and efficiently.',
      technologies: ['React', 'Node.js', 'MySQL', 'Express.js'],
      icon: ServerIcon,
      color: 'accent-purple',
      gradient: 'from-accent-purple/20 via-dark-panel to-dark-bg',
      link: '#',
      github: '#',
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.1 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
  }

  return (
    <div className="min-h-screen bg-dark-bg px-4 sm:px-8 lg:px-16 py-12 sm:py-24 relative">
      {/* Background Lines Pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)', backgroundSize: '4rem 4rem' }}></div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="max-w-6xl mx-auto relative z-10"
      >
        {/* Header */}
        <motion.div variants={itemVariants} className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <div className="flex items-center gap-4 mb-4">
              <div className="h-[1px] w-12 bg-accent-blue/50"></div>
              <div className="text-sm text-accent-blue font-mono uppercase tracking-widest">Portfolio</div>
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white tracking-tight">
              Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-blue to-accent-cyan">Projects</span>
            </h2>
          </div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group px-6 py-3 rounded-full border border-dark-border bg-dark-panel/50 text-gray-300 hover:text-white hover:border-accent-blue/50 hover:shadow-glow-blue transition-all inline-flex items-center gap-2 backdrop-blur-sm"
          >
            <span className="font-medium text-sm">View Archive</span>
            <ExternalLink size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </motion.button>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-10">
          {projects.map((project) => {
            const Icon = project.icon;
            return (
              <motion.div
                key={project.title}
                variants={itemVariants}
                className="group relative rounded-2xl border border-dark-border bg-dark-panel/30 overflow-hidden backdrop-blur-sm hover:border-dark-border/80 transition-all duration-500"
              >
                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-40 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`} />
                
                <div className="relative p-8 h-full flex flex-col">
                  {/* Top Row: Icon + Links */}
                  <div className="flex justify-between items-start mb-6">
                    <div className={`w-14 h-14 rounded-2xl bg-dark-bg/80 border border-dark-border flex items-center justify-center backdrop-blur-md group-hover:border-${project.color}/50 group-hover:shadow-glow-${project.color === 'accent-purple' ? '' : project.color.split('-')[1]} transition-all duration-500`}>
                      <Icon className={`text-${project.color}`} size={28} />
                    </div>
                    <div className="flex gap-3">
                      <a href={project.github} className="p-2 rounded-full bg-dark-bg/50 border border-dark-border text-gray-400 hover:text-white hover:border-white/20 transition-all">
                        <Github size={20} />
                      </a>
                      <a href={project.link} className={`p-2 rounded-full bg-dark-bg/50 border border-dark-border text-gray-400 hover:text-${project.color} hover:border-${project.color}/30 transition-all`}>
                        <ExternalLink size={20} />
                      </a>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-grow">
                    <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-400 transition-all">
                      {project.title}
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed mb-8">
                      {project.description}
                    </p>
                  </div>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 pt-6 border-t border-dark-border/50">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 rounded-md text-xs font-mono bg-dark-bg/50 text-gray-300 border border-dark-border/50"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </motion.div>
    </div>
  )
}

function ServerIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="8" x="2" y="2" rx="2" ry="2" />
      <rect width="20" height="8" x="2" y="14" rx="2" ry="2" />
      <line x1="6" x2="6.01" y1="6" y2="6" />
      <line x1="6" x2="6.01" y1="18" y2="18" />
    </svg>
  )
}

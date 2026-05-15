'use client'

import { motion } from 'framer-motion'
import { Calendar, MapPin, Briefcase, Code, Terminal, Rocket } from 'lucide-react'

export function ExperienceSection() {
  const experiences = [
    {
      role: 'Chief Technology Officer (CTO)',
      company: 'SWUDEVS',
      location: 'Cebu, Philippines',
      period: '2026 - Present',
      description: 'Leading technical initiatives, organizing developer workshops, managing project workflows, and supporting student developers in the community.',
      icon: Terminal,
      color: 'from-accent-purple to-accent-blue',
      glow: 'shadow-glow',
      skills: ['Leadership', 'System Architecture', 'Community Management', 'Technical Strategy']
    },
    {
      role: 'Full-Stack Developer & Project Manager',
      company: 'SafeKo',
      location: 'Cebu, Philippines',
      period: '2026',
      description: 'Developed and managed the platform, led development planning, managed frontend and backend systems, and coordinated project milestones.',
      icon: Code,
      color: 'from-accent-blue to-accent-cyan',
      glow: 'shadow-glow-blue',
      skills: ['React', 'Node.js', 'PostgreSQL', 'Agile']
    },
    {
      role: 'Project Manager',
      company: 'InfoTool',
      location: 'Cebu, Philippines',
      period: '2026',
      description: 'Managed development workflow, delegated tasks, monitored deliverables, and organized team communication.',
      icon: Briefcase,
      color: 'from-accent-cyan to-accent-purple',
      glow: 'shadow-glow-cyan',
      skills: ['Jira', 'Scrum', 'Team Coordination', 'Risk Management']
    },
    {
      role: 'Project Manager',
      company: 'Embraze',
      location: 'Cebu, Philippines',
      period: '2026',
      description: 'Oversaw project operations, coordinated development progress, and managed documentation and planning.',
      icon: Rocket,
      color: 'from-accent-purple to-accent-cyan',
      glow: 'shadow-glow',
      skills: ['Documentation', 'Operation Management', 'Sprint Planning']
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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
    <div className="min-h-screen bg-dark-bg px-4 sm:px-8 lg:px-16 py-20 relative overflow-hidden">
      {/* Background ambient glow */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-accent-purple/5 rounded-full blur-[100px] -z-10" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-accent-blue/5 rounded-full blur-[100px] -z-10" />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="max-w-5xl mx-auto relative z-10"
      >
        {/* Header */}
        <motion.div variants={itemVariants} className="mb-20 text-center md:text-left flex flex-col md:items-start items-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-dark-panel border border-dark-border mb-6">
            <span className="w-2 h-2 rounded-full bg-accent-purple animate-pulse" />
            <span className="text-sm text-gray-400 font-mono">experience.tsx</span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight">
            Professional <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-purple to-accent-blue">Journey</span>
          </h2>
          <p className="text-gray-400 max-w-2xl text-lg">A timeline of my professional experience, highlighting leadership, development, and project management roles.</p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Central Timeline Line */}
          <div className="absolute left-8 md:left-1/2 top-4 bottom-4 w-px bg-gradient-to-b from-accent-purple via-accent-blue to-transparent md:-translate-x-1/2" />

          {/* Experience items */}
          <div className="space-y-12 md:space-y-24">
            {experiences.map((exp, index) => {
              const Icon = exp.icon;
              const isEven = index % 2 === 0;
              
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className={`relative flex flex-col md:flex-row items-start md:items-center ${isEven ? 'md:flex-row-reverse' : ''}`}
                >
                  {/* Timeline dot */}
                  <div className={`absolute left-8 md:left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-dark-panel border border-dark-border flex items-center justify-center z-10 ${exp.glow}`}>
                    <div className={`absolute inset-0 rounded-full bg-gradient-to-r ${exp.color} opacity-20 animate-pulse`} />
                    <Icon size={20} className={isEven ? 'text-accent-purple' : 'text-accent-blue'} />
                  </div>

                  {/* Content Card */}
                  <div className={`w-full md:w-1/2 pl-24 md:pl-0 ${isEven ? 'md:pr-16 md:text-right' : 'md:pl-16'}`}>
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.2 }}
                      className="group relative p-8 rounded-2xl bg-dark-panel/40 backdrop-blur-sm border border-dark-border hover:border-accent-purple/50 transition-colors"
                    >
                      {/* Decorative gradient border top */}
                      <div className={`absolute top-0 left-0 right-0 h-1 rounded-t-2xl bg-gradient-to-r ${exp.color} opacity-50 group-hover:opacity-100 transition-opacity`} />
                      
                      <div className={`flex flex-col gap-4 ${isEven ? 'md:items-end' : ''}`}>
                        <div className="space-y-2">
                          <h3 className="text-2xl font-bold text-white group-hover:text-accent-blue transition-colors duration-300">{exp.role}</h3>
                          <div className={`flex items-center gap-2 text-lg font-mono font-medium bg-clip-text text-transparent bg-gradient-to-r ${exp.color}`}>
                            {exp.company}
                          </div>
                        </div>

                        <div className={`flex flex-wrap gap-4 text-sm text-gray-400 ${isEven ? 'md:justify-end' : ''}`}>
                          <div className="flex items-center gap-2 bg-dark-bg/50 px-3 py-1.5 rounded-lg border border-dark-border">
                            <Calendar size={14} className="text-accent-purple" />
                            <span>{exp.period}</span>
                          </div>
                          <div className="flex items-center gap-2 bg-dark-bg/50 px-3 py-1.5 rounded-lg border border-dark-border">
                            <MapPin size={14} className="text-accent-blue" />
                            <span>{exp.location}</span>
                          </div>
                        </div>

                        <p className={`text-gray-400 leading-relaxed mt-2 ${isEven ? 'md:text-right' : 'text-left'}`}>
                          {exp.description}
                        </p>

                        {/* Skills/Tags */}
                        <div className={`flex flex-wrap gap-2 mt-4 ${isEven ? 'md:justify-end' : ''}`}>
                          {exp.skills.map((skill) => (
                            <span 
                              key={skill} 
                              className="px-3 py-1 text-xs font-mono rounded-full bg-dark-border/30 text-gray-300 border border-dark-border group-hover:border-accent-purple/30 transition-colors"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </motion.div>
    </div>
  )
}

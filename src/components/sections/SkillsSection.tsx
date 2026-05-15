'use client'

import { motion } from 'framer-motion'
import { Layout, Server, Wrench } from 'lucide-react'
import { 
  SiReact, 
  SiNextdotjs, 
  SiTypescript, 
  SiTailwindcss, 
  SiHtml5, 
  SiJavascript,
  SiNodedotjs,
  SiFirebase,
  SiFlutter,
  SiDart,
  SiGithub,
  SiFigma
} from 'react-icons/si'
import { TbApi, TbBrandVscode } from 'react-icons/tb'
import { FaDatabase, FaUsers, FaTasks, FaCss3 } from 'react-icons/fa'
import { BiCodeAlt } from 'react-icons/bi'

export function SkillsSection() {
  const skillCategories = [
    {
      category: 'Frontend',
      icon: Layout,
      color: 'accent-purple',
      glow: 'hover:shadow-glow',
      skills: [
        { name: 'React', icon: SiReact },
        { name: 'Next.js', icon: SiNextdotjs },
        { name: 'TypeScript', icon: SiTypescript },
        { name: 'Tailwind CSS', icon: SiTailwindcss },
        { name: 'HTML', icon: SiHtml5 },
        { name: 'CSS', icon: FaCss3 },
        { name: 'JavaScript', icon: SiJavascript },
      ],
    },
    {
      category: 'Backend & Mobile',
      icon: Server,
      color: 'accent-blue',
      glow: 'hover:shadow-glow-blue',
      skills: [
        { name: 'Node.js', icon: SiNodedotjs },
        { name: 'REST APIs', icon: TbApi },
        { name: 'Firebase', icon: SiFirebase },
        { name: 'Flutter', icon: SiFlutter },
        { name: 'Dart', icon: SiDart },
        { name: 'Databases', icon: FaDatabase },
      ],
    },
    {
      category: 'Tools & Skills',
      icon: Wrench,
      color: 'accent-cyan',
      glow: 'hover:shadow-glow-cyan',
      skills: [
        { name: 'GitHub', icon: SiGithub },
        { name: 'VS Code', icon: TbBrandVscode },
        { name: 'Cursor IDE', icon: BiCodeAlt },
        { name: 'Figma', icon: SiFigma },
        { name: 'Project Mgt', icon: FaTasks },
        { name: 'Leadership', icon: FaUsers },
      ],
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.1 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  }

  return (
    <div className="min-h-screen bg-dark-bg px-4 sm:px-8 lg:px-16 py-12 sm:py-24 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent-purple/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent-blue/5 rounded-full blur-[100px] pointer-events-none" />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="max-w-5xl mx-auto relative z-10"
      >
        {/* Header */}
        <motion.div variants={itemVariants} className="mb-16">
          <div className="flex items-center gap-4 mb-4">
            <div className="h-[1px] w-12 bg-accent-purple/50"></div>
            <div className="text-sm text-accent-purple font-mono uppercase tracking-widest">Expertise</div>
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 tracking-tight">
            Skills & <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-purple to-accent-cyan">Technologies</span>
          </h2>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 mb-20">
          {skillCategories.map((category) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={category.category}
                variants={itemVariants}
                className={`p-6 sm:p-8 rounded-2xl border border-dark-border bg-dark-panel/40 backdrop-blur-sm transition-all duration-300 ${category.glow} hover:-translate-y-2 group`}
              >
                <div className={`w-12 h-12 rounded-xl mb-6 flex items-center justify-center bg-dark-bg border border-dark-border group-hover:border-${category.color}/50 transition-colors`}>
                  <Icon className={`text-${category.color}`} size={24} />
                </div>
                <h3 className="text-xl font-bold text-white mb-6 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-400 transition-all">
                  {category.category}
                </h3>
                <div className="flex flex-wrap gap-2.5">
                  {category.skills.map((skill) => {
                    const SkillIcon = skill.icon;
                    return (
                      <div
                        key={skill.name}
                        className={`flex items-center gap-2 px-3 py-1.5 rounded-lg bg-dark-bg border border-dark-border text-gray-300 text-sm font-medium hover:border-${category.color}/50 hover:text-white transition-colors cursor-default`}
                      >
                        <SkillIcon className={`text-${category.color} opacity-70 group-hover:opacity-100 transition-opacity`} size={16} />
                        {skill.name}
                      </div>
                    )
                  })}
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Proficiency Chart */}
        <motion.div variants={itemVariants} className="p-8 rounded-2xl border border-dark-border bg-dark-panel/40 backdrop-blur-sm relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-accent-cyan/5 rounded-full blur-[80px] pointer-events-none" />
          
          <h3 className="text-2xl font-bold text-white mb-8">Core Proficiencies</h3>
          <div className="grid md:grid-cols-2 gap-x-12 gap-y-8">
            {[
              { name: 'React / Next.js', level: 90, color: 'from-accent-purple to-accent-blue', icon: SiReact },
              { name: 'TypeScript', level: 85, color: 'from-accent-blue to-accent-cyan', icon: SiTypescript },
              { name: 'Tailwind CSS', level: 88, color: 'from-accent-cyan to-accent-purple', icon: SiTailwindcss },
              { name: 'Flutter', level: 85, color: 'from-accent-purple to-accent-blue', icon: SiFlutter },
              { name: 'Project Management', level: 90, color: 'from-accent-blue to-accent-cyan', icon: FaTasks },
              { name: 'Leadership', level: 88, color: 'from-accent-cyan to-accent-purple', icon: FaUsers },
            ].map((skill, index) => {
              const SkillIcon = skill.icon;
              return (
                <div key={skill.name} className="relative">
                  <div className="flex justify-between items-end mb-2">
                    <div className="flex items-center gap-2 text-gray-200 font-medium">
                      <SkillIcon className="text-gray-400" size={16} />
                      {skill.name}
                    </div>
                    <span className="text-gray-500 font-mono text-sm">{skill.level}%</span>
                  </div>
                  <div className="h-2.5 rounded-full bg-dark-bg border border-dark-border overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.2 + (index * 0.1), ease: "easeOut" }}
                      className={`h-full bg-gradient-to-r ${skill.color} rounded-full relative`}
                    >
                      <div className="absolute top-0 right-0 bottom-0 w-4 bg-white/20 blur-sm rounded-full animate-pulse" />
                    </motion.div>
                  </div>
                </div>
              )
            })}
          </div>
        </motion.div>
      </motion.div>
    </div>
  )
}

'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { HomeSection } from './sections/HomeSection'
import { AboutSection } from './sections/AboutSection'
import { SkillsSection } from './sections/SkillsSection'
import { ExperienceSection } from './sections/ExperienceSection'
import { ProjectsSection } from './sections/ProjectsSection'
import { AchievementsSection } from './sections/AchievementsSection'
import { ContactSection } from './sections/ContactSection'

interface MainContentProps {
  activeSection: string
}

const sections = {
  home: HomeSection,
  about: AboutSection,
  skills: SkillsSection,
  experience: ExperienceSection,
  projects: ProjectsSection,
  achievements: AchievementsSection,
  contact: ContactSection,
}

export function MainContent({ activeSection }: MainContentProps) {
  const CurrentSection = sections[activeSection as keyof typeof sections] || HomeSection

  return (
    <div className="flex-1 overflow-y-auto bg-dark-bg">
      <AnimatePresence mode="wait">
        <motion.div
          key={activeSection}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
        >
          <CurrentSection />
        </motion.div>
      </AnimatePresence>
    </div>
  )
}

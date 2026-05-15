'use client'

import { motion } from 'framer-motion'
import { Award, Star, CheckCircle2, TrendingUp, Zap } from 'lucide-react'

export function AchievementsSection() {
  const achievements = [
    {
      icon: Award,
      title: 'Chief Technology Officer',
      organization: 'SWUDEVS',
      year: '2026–Present',
      description: 'Leading technical initiatives and supporting student developers in the community. Architected core internal tools and mentored junior developers.',
      color: 'accent-purple',
    },
    {
      icon: Star,
      title: 'Multiple Development Projects',
      organization: 'SafeKo, Artemis AI, Akasya Cafe, TCC SIS',
      year: '2026',
      description: 'Led and delivered multiple successful projects across web and mobile platforms. Ensured high code quality and timely delivery.',
      color: 'accent-blue',
    },
    {
      icon: TrendingUp,
      title: 'Team Leadership',
      organization: 'SWUDEVS & Project Teams',
      year: '2026',
      description: 'Managed collaborative developer teams and organized technical initiatives, workshops, and hackathons reaching over 500+ students.',
      color: 'accent-cyan',
    },
  ]

  const certifications = [
    { name: 'Full-Stack Development', icon: Zap },
    { name: 'Mobile App Development', icon: CheckCircle2 },
    { name: 'Project Management', icon: Star },
    { name: 'UI/UX Design', icon: Award },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.1 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
  }

  return (
    <div className="min-h-screen bg-dark-bg px-4 sm:px-8 lg:px-16 py-12 sm:py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-accent-cyan/5 rounded-full blur-[120px] pointer-events-none" />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="max-w-6xl mx-auto relative z-10"
      >
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8">
          
          {/* Left Column - Header & Certs */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <motion.div variants={itemVariants} className="mb-12">
              <div className="flex items-center gap-4 mb-4">
                <div className="h-[1px] w-12 bg-accent-cyan/50"></div>
                <div className="text-sm text-accent-cyan font-mono uppercase tracking-widest">Milestones</div>
              </div>
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 tracking-tight leading-tight">
                Achievements & <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-cyan to-accent-blue">Awards</span>
              </h2>
              <p className="text-gray-400 text-lg leading-relaxed max-w-md">
                A timeline of my professional journey, highlighting key roles, successful projects, and recognized expertise in the field.
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="bg-dark-panel/30 border border-dark-border p-8 rounded-3xl backdrop-blur-sm">
              <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
                <CheckCircle2 className="text-accent-cyan" size={24} />
                Certifications
              </h3>
              <div className="flex flex-col gap-4">
                {certifications.map((cert) => {
                  const CertIcon = cert.icon;
                  return (
                    <motion.div
                      key={cert.name}
                      whileHover={{ x: 5 }}
                      className="group flex items-center gap-4 p-3 rounded-xl hover:bg-dark-border/30 transition-colors cursor-default"
                    >
                      <div className="w-10 h-10 rounded-lg bg-dark-bg border border-dark-border flex items-center justify-center group-hover:border-accent-cyan/50 group-hover:shadow-glow-cyan transition-all">
                        <CertIcon size={18} className="text-gray-400 group-hover:text-accent-cyan transition-colors" />
                      </div>
                      <span className="text-gray-300 font-medium group-hover:text-white transition-colors">{cert.name}</span>
                    </motion.div>
                  )
                })}
              </div>
            </motion.div>
          </div>

          {/* Right Column - Timeline */}
          <div className="lg:col-span-7 relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-8 bottom-8 w-[2px] bg-gradient-to-b from-accent-purple via-accent-blue to-accent-cyan hidden sm:block opacity-30" />

            <div className="space-y-8 relative">
              {achievements.map((achievement) => {
                const Icon = achievement.icon
                return (
                  <motion.div
                    key={achievement.title}
                    variants={itemVariants}
                    className="relative sm:pl-24"
                  >
                    {/* Timeline Node */}
                    <div className="absolute left-8 top-6 w-10 h-10 -translate-x-1/2 -translate-y-1/2 hidden sm:flex items-center justify-center">
                      <div className={`w-4 h-4 rounded-full bg-dark-bg border-2 border-${achievement.color} z-10 shadow-glow-${achievement.color === 'accent-purple' ? '' : achievement.color.split('-')[1]}`} />
                    </div>

                    <div className={`group p-8 rounded-3xl border border-dark-border bg-dark-panel/40 backdrop-blur-sm hover:border-${achievement.color}/50 hover:shadow-glow-${achievement.color === 'accent-purple' ? '' : achievement.color.split('-')[1]} transition-all duration-300`}>
                      <div className="flex flex-col sm:flex-row sm:items-start gap-6">
                        <div className={`w-14 h-14 rounded-2xl bg-dark-bg border border-dark-border flex items-center justify-center flex-shrink-0 group-hover:border-${achievement.color}/50 transition-colors`}>
                          <Icon size={28} className={`text-${achievement.color}`} />
                        </div>
                        <div className="flex-1">
                          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 mb-2">
                            <h3 className="text-2xl font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-400 transition-all">
                              {achievement.title}
                            </h3>
                            <span className={`inline-flex px-3 py-1 rounded-full bg-${achievement.color}/10 text-${achievement.color} text-sm font-mono whitespace-nowrap`}>
                              {achievement.year}
                            </span>
                          </div>
                          <p className={`text-${achievement.color} font-medium text-sm mb-4 tracking-wide`}>
                            {achievement.organization}
                          </p>
                          <p className="text-gray-400 leading-relaxed text-sm">
                            {achievement.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </div>

        </div>
      </motion.div>
    </div>
  )
}

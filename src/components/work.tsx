'use client'

import { motion } from "framer-motion"
import { useTheme } from "@/lib/theme-provider"

const workExperience = [
  {
    title: "Frontend Engineer Intern",
    period: "June 2023 - Aug 2023",
    company: "Project",
    description: "Worked on designing a landing page with a focus on providing the best user experience. Gained valuable experience in frontend development and collaborated on improving user interfaces for better engagement.",
    skills: ["React.js", "Redux", "Next.js", "Material UI", "HTML", "CSS", "JavaScript"],
    side: "left"
  },
  {
    title: "Freelance Web Dev Project",
    period: "jan 2024 - Oct 2024",
    company: "Self-employed",
    description: "Built 6 WordPress websites and 3 full-stack websites. Gained strong knowledge in web development, including creating dynamic websites and integrating various technologies to meet client needs.",
    skills: [ "HTML", "CSS", "JavaScript","React.js", "Redux", "Next.js", "Wordpress","Figma", "Tailwind CSS","MongoDB"],
    side: "right"
  },
  {
    title: "Full-stack Developer",
    period: "  Aug 2024",
    company: "Tech Solutions",
    description: "Developed and maintained both front-end and back-end features using modern technologies. Built scalable APIs with Node.js and integrated them with front-end frameworks like React.js, ensuring seamless user experiences. Worked on database management, deployment, and cloud-based solutions.",
    skills: ["React.js", "Next.js", "Node.js", "MongoDB","PostgreSQL", "Docker","AWS", "Cloud Features", "Firebase", ],
    side: "left"
  }
]

export function Work() {
  const { theme } = useTheme()
  const isDark = theme === 'dark'

  const bgColor = isDark ? 'bg-[#0d1117]' : 'bg-white'
  const borderColor = isDark ? 'border-primary/10' : 'border-gray-200'
  const timelineColor = isDark ? 'bg-primary/20' : 'bg-gray-200'
  const dotColor = isDark ? 'bg-primary' : 'bg-gray-400'

  return (
    <section id="work" className="py-16 md:py-24 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        className="text-3xl md:text-4xl font-bold mb-12 text-center"
        >
          My <span className="text-primary">work experience</span>
        </motion.h2>
        
        <div className="relative">
          {/* Timeline Line */}
          <div className={`absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 ${timelineColor}`} />

          <div className="space-y-12">
            {workExperience.map((job, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: job.side === 'left' ? -100 : (job.side === 'right' && index === 1 ? 0 : 100) }}  // Start from outside or center for second box
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="relative grid grid-cols-1 md:grid-cols-[1fr,auto,1fr] gap-4 md:gap-8 items-center"
              >
                {/* Job Card */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  className={`${job.side === 'left' ? 'col-start-1' : 'col-start-3'} 
                               ${bgColor} p-4 md:p-6 rounded-xl border ${borderColor} shadow-lg w-full sm:w-10/12 md:w-11/12`}
                >
                  <div className="mb-2 text-sm md:text-base font-medium text-primary">{job.period}</div>
                  <h3 className="text-lg md:text-xl font-bold mb-2">{job.title}</h3>
                  <p className="text-xs md:text-sm text-muted-foreground mb-2">{job.company}</p>
                  <p className="text-xs md:text-sm text-muted-foreground mb-4">{job.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {job.skills.map((skill, skillIndex) => (
                      <motion.span
                        key={skillIndex}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.4, delay: skillIndex * 0.1 }}
                        className={`px-2 py-1 text-xs rounded-full ${
                          isDark ? 'bg-primary/10 text-primary' : 'bg-gray-100 text-gray-700'
                        }`}
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>

                {/* Timeline Dot */}
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0., delay: index * 0.2 }}
                  className={`w-4 h-4 ${dotColor} rounded-full relative z-10 col-start-2`}
                />

                {/* Spacer */}
                <div className={`${job.side === 'left' ? 'col-start-3' : 'col-start-1'}`} />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

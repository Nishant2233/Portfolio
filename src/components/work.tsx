'use client'

import { motion } from "framer-motion"
import { useTheme } from "@/lib/theme-provider"

const workExperience = [
  {
    title: "Frontend Engineer Intern",
    period: "June 2023 - Aug 2023",
    company: "Tech Company",
    description: "Enhanced user experiences on Nextrate Prod & Mobile reports by performing bug & code review fixes by 40%. Built Nextrate Analytics portal using React Js with seamless integration of REST APIs using react-query and axios client. Contributed to TypeScript, updated with new dependencies and integrated with web-sockets for live testing.",
    skills: ["React.js", "Redux", "Next.js", "Material UI", "HTML", "CSS", "JavaScript"],
    side: "left"
  },
  {
    title: "Freelance Web Dev Project",
    period: "jan 2024 - Oct 2024",
    company: "Self-employed",
    description: "Built Play Connect Platform using React.js. Integrated Firebase with MERN, created high level components for real-time chat using Socket.io, GraphQL and Node Js and connected with MongoDB. Reducing API calls by 30%, Developed and tested 45+ API endpoints in Swagger and CI CD deployed to AWS EC2 called Frontend & Backend Services for monitoring.",
    skills: ["Docker", "TensorFlow", "AWS", "EC2", "PostgreSQL", "Node.js", "JavaScript", "TypeScript", "Node.js", "Rest.js"],
    side: "right"
  },
  {
    title: "Frontend Developer",
    period: "June 2024 - Aug 2024",
    company: "Tech Solutions",
    description: "Developed and maintained user-facing features using modern frontend technologies.",
    skills: ["Android", "Java", "Kotlin", "AWS", "Node.js", "Cloud Features", "Firebase", "Figma"],
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
                initial={{ opacity: 0, x: job.side === 'left' ? -20 : 20 }}
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
                  transition={{ duration: 0.4, delay: index * 0.2 }}
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

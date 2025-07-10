'use client';

import { motion } from 'framer-motion';
import { useTheme } from '@/lib/theme-provider';
import { Particles } from '@/components/ui/particles';
// import { CardSpotlight } from '@/components/ui/card-spotlight';

type Skill = {
  name: string;
  icon: string;
};

type SkillCategoryProps = {
  title: string;
  skills: Skill[];
  isDark: boolean;
  className?: string;
};

const skillsData = {
  frontend: [
    { name: 'React Js', icon: '⚛️' },
    { name: 'Next Js', icon: 'N' },
    { name: 'HTML', icon: '🌐' },
    { name: 'CSS', icon: '🎨' },
    { name: 'JavaScript', icon: 'JS' },
    { name: 'Bootstrap', icon: 'B' },
    { name: 'Tailwind CSS', icon: '🌊' },
  ],
  backend: [
    { name: 'Node Js', icon: '🟢' },
    { name: 'Express Js', icon: 'E' },
    { name: 'Graph Ql', icon: '◈' },
    { name: 'Python', icon: '🐍' },
   
    { name: 'Django', icon: 'D' },
    { name: 'MongoDB', icon: '🍃' },
    { name: 'Firebase', icon: '🔥' },
  ],
  other: [
    { name: 'Git', icon: '📦' },
    { name: 'GitHub', icon: '🐱' },
    { name: 'Docker', icon: '🐋' },
    { name: 'Vercel', icon: '▲' },
    { name: 'Figma', icon: '🎨' },
    { name: 'WordPress', icon: '📝' },
  ],
};

export function Skills() {
  const { theme } = useTheme();

  if (!theme) {
    return null; // Prevent rendering if theme is not available
  }

  const isDark = theme === 'dark';

  return (
    <section id="skills" className="py-24 bg-gradient-to-b from-background to-background/80 relative overflow-hidden">
      {/* Particles background */}
      <Particles
        className="absolute inset-0 z-0"
        quantity={80}
        ease={80}
        color={isDark ? '#ffffff' : '#000000'}
        refresh
      />
      <div className="container px-4 sm:px-6 lg:px-20 relative z-10 flex flex-col items-center justify-center">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Skills</h2>
          <p className="text-sm sm:text-base text-muted-foreground">
            Here are some of my skills on which I have been working on for the past 2 years
          </p>
        </div>
        <div className="grid gap-12 w-full max-w-7xl">
          <div className="grid md:grid-cols-2 gap-8">
            <SkillCategory title="Frontend" skills={skillsData.frontend} isDark={isDark} />
            <SkillCategory title="Backend" skills={skillsData.backend} isDark={isDark} />
          </div>
          <SkillCategory title="Other Skills" skills={skillsData.other} isDark={isDark} className="md:w-3/4 lg:w-1/2 mx-auto" />
        </div>
      </div>
    </section>
  );
}

function SkillCategory({ title, skills, isDark, className = '' }: SkillCategoryProps) {
  // Set background color based on theme
  const bgColor = isDark ? 'bg-[#1c2330]' : 'bg-white';

  // Skill badge background
  const skillBg = isDark ? 'bg-[#161b22]' : 'bg-gray-50';

  // Skill badge borders
  const skillBorder = isDark ? 'border-primary/10' : 'border-gray-200';
  const skillHoverBorder = isDark ? 'hover:border-primary/30' : 'hover:border-gray-300';

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      // Main card with top-left blue border
      className={`relative p-6 rounded-xl overflow-hidden ${bgColor} backdrop-blur-sm shadow-lg ${className} w-full sm:w-10/12 md:w-11/12 lg:w-full mx-auto`}
    >
      {/* Top border */}
      <div className="absolute top-0 left-0 h-[1px] w-full bg-gradient-to-r from-[#007AFF] to-transparent" />

      {/* Left border */}
      <div className="absolute top-0 left-0 h-full w-[1px] bg-gradient-to-b from-[#007AFF] to-transparent" />

      {/* Title */}
      <h3 className="text-xl sm:text-2xl font-semibold mb-6">{title}</h3>

      {/* Skill badges */}
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
        {skills.map((skill, index) => (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1 }}
            viewport={{ once: true }}
            className={`px-4 py-2 rounded-full ${skillBg} border ${skillBorder} ${skillHoverBorder} transition-colors`}
          >
            <span className="flex items-center gap-2">
              <span className="text-base sm:text-lg">{skill.icon}</span>
              <span className="text-xs sm:text-sm font-medium">{skill.name}</span>
            </span>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

import { motion } from 'framer-motion';
import { GraduationCap, Award, Code2 } from 'lucide-react';
import ScrollReveal from '@/components/ScrollReveal';

const educationData = [
  {
    icon: GraduationCap,
    institution: 'University of Ibadan',
    degree: 'Bachelor of Arts in Archaeology',
    badges: [
      { icon: Award, text: 'Graduated with honors' },
      { icon: Code2, text: '3+ years as Software Engineer' },
    ],
    description: 'Combining archaeological research methodology with modern software engineering to build human-centered digital products.',
    gradient: 'from-accent to-blue-600',
  },
  {
    icon: Code2,
    institution: 'Brave Redemptive Fellowship',
    degree: 'Software Engineer Track',
    badges: [
      { icon: GraduationCap, text: 'Completed intensive program' },
      { icon: Code2, text: 'Fullstack Development' },
    ],
    description: 'Intensive software engineering program focused on fullstack development, modern web technologies, and industry best practices.',
    gradient: 'from-blue-600 to-accent',
  },
];

function EducationCard({ education, index }: { education: typeof educationData[0]; index: number }) {
  const Icon = education.icon;

  return (
    <ScrollReveal delay={0.4 + index * 0.1}>
      <motion.div
        whileHover={{ y: -8, scale: 1.02 }}
        className="relative overflow-hidden bg-gradient-to-br from-accent/10 via-blue-500/5 to-transparent border border-accent/30 rounded-3xl p-8 sm:p-10"
      >
        {/* Glow effect */}
        <motion.div
          className="absolute inset-0"
          animate={{
            boxShadow: [
              'inset 0 0 60px rgba(0, 120, 215, 0.1)',
              'inset 0 0 80px rgba(0, 120, 215, 0.15)',
              'inset 0 0 60px rgba(0, 120, 215, 0.1)',
            ],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />

        <div className="relative flex flex-col sm:flex-row items-start gap-6">
          {/* Icon - white on colored gradient background */}
          <div className={`flex-shrink-0 p-4 bg-gradient-to-br ${education.gradient} rounded-2xl shadow-lg`}>
            <Icon className="w-10 h-10 text-white" />
          </div>

          {/* Content */}
          <div className="flex-1 space-y-4">
            <div>
              <h3 className="text-2xl sm:text-3xl font-heading font-bold text-white mb-2">
                {education.institution}
              </h3>
              <p className="text-lg text-accent font-medium">
                {education.degree}
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              {education.badges.map((badge, badgeIndex) => {
                const BadgeIcon = badge.icon;
                return (
                  <div key={badgeIndex} className="flex items-center gap-2 px-4 py-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg">
                    <BadgeIcon className="w-5 h-5 text-accent" />
                    <span className="text-sm text-zinc-300">{badge.text}</span>
                  </div>
                );
              })}
            </div>

            <p className="text-zinc-400 leading-relaxed">
              {education.description}
            </p>
          </div>
        </div>

        {/* Corner accents */}
        <div className="absolute top-4 left-4 w-8 h-8 border-t-2 border-l-2 border-accent/50 rounded-tl-xl" />
        <div className="absolute bottom-4 right-4 w-8 h-8 border-b-2 border-r-2 border-accent/50 rounded-br-xl" />
      </motion.div>
    </ScrollReveal>
  );
}

export default function EducationSection() {
  return (
    <div className="max-w-4xl mx-auto space-y-12">
      <div className="text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-white mb-3">
            Education
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-accent to-accent/70 rounded-full mx-auto" />
        </motion.div>
      </div>

      <div className="space-y-6">
        {educationData.map((education, index) => (
          <EducationCard key={index} education={education} index={index} />
        ))}
      </div>
    </div>
  );
}
import { motion } from 'framer-motion';
import { Code2, Palette, FlaskConical, Users, Book, Microscope } from 'lucide-react';
import ScrollReveal from '@/components/ScrollReveal';

const experiences = [
  {
    icon: Code2,
    title: 'Software Engineering',
    description: 'Full-stack development specializing in modern web technologies including Next.js, React, TypeScript, Node.js, Express.js, MongoDB, Supabase, and TailwindCSS. Building scalable, performant applications with exceptional user experiences.',
    color: 'from-accent to-blue-600',
  },
  {
    icon: FlaskConical,
    title: 'Data Analysis & Research',
    description: 'Co-founded DAWB, training professionals and beginners in data analysis and applying analytical skills to solve societal challenges. Co-founded Resonance, an innovation and research company, collaborating with researchers and MIT professors on impactful projects.',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    icon: Palette,
    title: 'Creative & Design',
    description: 'Professional voiceover artist and video editor for leading Nigerian companies. Expertise in media production, brand storytelling, and design thinking methodologies to create compelling visual narratives.',
    color: 'from-purple-500 to-pink-500',
  },
  {
    icon: Users,
    title: 'Program Leadership',
    description: 'Extensive experience in community management and program coordination across diverse organizations. Skilled in stakeholder engagement, strategic planning, and fostering collaborative environments.',
    color: 'from-orange-500 to-red-500',
  },
  {
    icon: Microscope,
    title: 'Archaeological Research',
    description: 'Field researcher and research assistant contributing to archaeological studies and documentary projects. Experienced in data collection, site analysis, and academic research methodologies.',
    color: 'from-teal-500 to-green-500',
  },
  {
    icon: Book,
    title: 'Education & Training',
    description: 'Teaching experience across various primary schools in Nigeria. Passionate about knowledge transfer, curriculum development, and creating engaging learning environments for diverse student populations.',
    color: 'from-indigo-500 to-violet-500',
  },
];

function ExperienceCard({ experience, index }: { experience: typeof experiences[0]; index: number }) {
  const Icon = experience.icon;

  return (
    <ScrollReveal delay={index * 0.1} direction="up">
      <motion.div
        whileHover={{ y: -8, scale: 1.02 }}
        className="group relative overflow-hidden bg-zinc-100/80 dark:bg-white/5 backdrop-blur-sm border border-zinc-300 dark:border-white/10 hover:border-accent/50 rounded-2xl p-6 transition-all duration-300 h-full"
      >
        {/* Gradient overlay */}
        <div className={`absolute inset-0 bg-gradient-to-br ${experience.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
        
        {/* Glow effect on hover */}
        <motion.div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{
            boxShadow: 'inset 0 0 40px rgba(0, 120, 215, 0.1)',
          }}
        />
        
        <div className="relative flex flex-col items-center text-center space-y-4 h-full">
          {/* Icon with rotation animation on hover - matching NavigationButtons style */}
          <motion.div
            whileHover={{ rotate: 360 }}
            transition={{ duration: 0.6, ease: 'easeInOut' }}
            className="flex-shrink-0 p-4 bg-accent/10 group-hover:bg-accent/20 rounded-xl transition-colors duration-300"
          >
            <Icon className="w-8 h-8 text-accent" />
          </motion.div>
          
          <div className="space-y-2 flex-1 flex flex-col">
            <h3 className="text-xl font-heading font-bold text-black dark:text-white group-hover:text-accent transition-colors duration-300">
              {experience.title}
            </h3>
            <p className="text-sm text-zinc-600 dark:text-zinc-400 group-hover:text-zinc-500 dark:group-hover:text-zinc-300 transition-colors duration-300 leading-relaxed">
              {experience.description}
            </p>
          </div>
        </div>

        {/* Bottom accent line */}
        <motion.div
          className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-accent to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500"
        />
      </motion.div>
    </ScrollReveal>
  );
}

export default function ExperienceGrid() {
  return (
    <ScrollReveal delay={0.3}>
      <div className="space-y-12">
        <div className="text-center space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-black dark:text-white mb-3">
              Multidisciplinary Expertise
            </h2>
            <p className="text-lg text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto mb-4">
              A unique blend of technical skills, creative thinking, and diverse professional experiences
            </p>
            <div className="h-1 w-24 bg-gradient-to-r from-accent to-accent/70 rounded-full mx-auto" />
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {experiences.map((experience, index) => (
            <ExperienceCard key={index} experience={experience} index={index} />
          ))}
        </div>
      </div>
    </ScrollReveal>
  );
}
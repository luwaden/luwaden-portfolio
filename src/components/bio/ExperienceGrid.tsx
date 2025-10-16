import { motion } from 'framer-motion';
import { Code2, Palette, FlaskConical, Users, Book, Microscope } from 'lucide-react';
import ScrollReveal from '@/components/ScrollReveal';

const experiences = [
  {
    icon: Code2,
    title: 'Software Engineering',
    description: 'Fullstack development with Next.js, React, TypeScript, Node.js, Express.js, MongoDB, Supabase, and TailwindCSS.',
    color: 'from-accent to-blue-600',
  },
  {
    icon: FlaskConical,
    title: 'Research & Development',
    description: 'Co-founded an innovation and research company and collaborated with an MIT professor.',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    icon: Palette,
    title: 'Branding & Design',
    description: 'Voiceovers and video editing for top Nigerian companies, specializing in media and design thinking.',
    color: 'from-purple-500 to-pink-500',
  },
  {
    icon: Users,
    title: 'Programme Administration',
    description: 'Community management and program coordination across diverse organizations.',
    color: 'from-orange-500 to-red-500',
  },
  {
    icon: Microscope,
    title: 'Archaeology & Research',
    description: 'Field researcher and assistant contributing to archaeological studies.',
    color: 'from-teal-500 to-green-500',
  },
  {
    icon: Book,
    title: 'Education',
    description: 'Teaching experience in various primary schools across Nigeria.',
    color: 'from-indigo-500 to-violet-500',
  },
];

function ExperienceCard({ experience, index }: { experience: typeof experiences[0]; index: number }) {
  const Icon = experience.icon;

  return (
    <ScrollReveal delay={index * 0.1} direction="up">
      <motion.div
        whileHover={{ y: -8, scale: 1.02 }}
        className="group relative overflow-hidden bg-white/5 backdrop-blur-sm border border-white/10 hover:border-accent/50 rounded-2xl p-6 transition-all duration-300"
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
        
        <div className="relative flex flex-col items-center text-center space-y-4">
          {/* Icon with gradient background - white icon on colored background */}
          <div className={`p-4 rounded-2xl bg-gradient-to-br ${experience.color} shadow-lg`}>
            <Icon className="w-8 h-8 text-white" />
          </div>
          
          <div className="space-y-2">
            <h3 className="text-xl font-heading font-bold text-white group-hover:text-accent transition-colors">
              {experience.title}
            </h3>
            <p className="text-sm text-zinc-400 group-hover:text-zinc-300 transition-colors leading-relaxed">
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
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-white mb-3">
              My Diverse Background
            </h2>
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
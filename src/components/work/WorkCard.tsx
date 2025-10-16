'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { ExternalLink, Github, ChevronDown } from 'lucide-react';

type Project = {
  name: string;
  description: string;
  tags: string[];
  liveUrl?: string;
  githubUrl?: string;
  slug: string; // For URL routing
};

interface WorkCardProps {
  title: string;
  icon: React.ElementType;
  description: string;
  projects: Project[];
  sectionId: string;
  delay?: number;
}

export default function WorkCard({ 
  title, 
  icon: Icon, 
  description, 
  projects,
  sectionId,
  delay = 0 
}: WorkCardProps) {
  const [expanded, setExpanded] = useState(false);
  const router = useRouter();

  const handleProjectClick = (projectSlug: string) => {
    router.push(`/work/${sectionId}/${projectSlug}`);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        delay,
        type: 'spring',
        stiffness: 260,
        damping: 20,
      }}
      onClick={() => setExpanded(!expanded)}
      className="group relative overflow-hidden bg-white dark:bg-zinc-900 border-2 border-zinc-200 dark:border-zinc-800 hover:border-[#0078D7] rounded-2xl sm:rounded-3xl p-6 sm:p-8 cursor-pointer transition-all duration-300 hover:shadow-2xl hover:shadow-[#0078D7]/20"
    >
      {/* Animated gradient background */}
      <motion.div
        animate={{
          background: [
            'radial-gradient(circle at 20% 50%, rgba(0, 120, 215, 0.1) 0%, transparent 50%)',
            'radial-gradient(circle at 80% 50%, rgba(0, 120, 215, 0.1) 0%, transparent 50%)',
            'radial-gradient(circle at 50% 80%, rgba(0, 120, 215, 0.1) 0%, transparent 50%)',
            'radial-gradient(circle at 20% 50%, rgba(0, 120, 215, 0.1) 0%, transparent 50%)',
          ],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
      />

      <div className="relative">
        {/* Header - Now just display, clicking anywhere expands */}
        <div className="flex items-start justify-between mb-4 sm:mb-6 gap-4">
          <div className="flex items-center gap-3 sm:gap-4 flex-1 min-w-0">
            <div className="p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-[#0078D7] text-white shadow-lg flex-shrink-0">
              <Icon className="w-6 h-6 sm:w-8 sm:h-8" />
            </div>
            <div className="min-w-0">
              <h3 className="text-xl sm:text-2xl font-heading font-bold text-black dark:text-white mb-1 sm:mb-2 truncate">
                {title}
              </h3>
              <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400 line-clamp-2">
                {description}
              </p>
            </div>
          </div>
          
          <motion.div
            animate={{ rotate: expanded ? 180 : 0 }}
            transition={{ duration: 0.3 }}
            className="text-[#0078D7] flex-shrink-0"
          >
            <ChevronDown className="w-5 h-5 sm:w-6 sm:h-6" />
          </motion.div>
        </div>

        {/* Projects - Clickable cards that navigate */}
        <motion.div
          initial={false}
          animate={{
            height: expanded ? 'auto' : 0,
            opacity: expanded ? 1 : 0,
          }}
          transition={{ duration: 0.3 }}
          className="overflow-hidden"
        >
          <div className="space-y-3 sm:space-y-4 pt-4 border-t border-zinc-200 dark:border-zinc-800">
            {projects.map((project, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                animate={expanded ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                transition={{ delay: idx * 0.1 }}
                onClick={(e) => {
                  e.stopPropagation();
                  handleProjectClick(project.slug);
                }}
                className="bg-zinc-50 dark:bg-zinc-800/50 rounded-xl p-4 sm:p-6 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors cursor-pointer group/project relative"
              >
                <div className="flex items-start justify-between mb-3 gap-3">
                  <div className="flex-1">
                    <h4 className="text-base sm:text-lg font-heading font-bold text-black dark:text-white group-hover/project:text-[#0078D7] transition-colors mb-2">
                      {project.name}
                    </h4>
                    <p className="text-xs sm:text-sm text-[#0078D7] font-medium flex items-center gap-1">
                      <span>Click for more details</span>
                      <motion.span
                        animate={{ x: [0, 4, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      >
                        →
                      </motion.span>
                    </p>
                  </div>
                  <div className="flex gap-2 flex-shrink-0">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-lg bg-[#0078D7] hover:bg-[#0078D7]/80 text-white transition-colors"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4" />
                      </a>
                    )}
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-lg bg-zinc-200 dark:bg-zinc-700 hover:bg-zinc-300 dark:hover:bg-zinc-600 transition-colors"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <Github className="w-3 h-3 sm:w-4 sm:h-4" />
                      </a>
                    )}
                  </div>
                </div>
                
                <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400 mb-4">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIdx) => (
                    <span
                      key={tagIdx}
                      className="px-2 sm:px-3 py-1 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-700 rounded-full text-xs font-medium text-zinc-700 dark:text-zinc-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
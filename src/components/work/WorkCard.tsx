// ==================== FILE 4: WorkCard.tsx ====================
// components/work/WorkCard.tsx

'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { ChevronDown, ExternalLink, Github, Award } from 'lucide-react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { LucideIcon } from 'lucide-react';

interface Project {
  name: string;
  slug: string;
  description: string;
  image: string;
  tags: string[];
  liveUrl?: string;
  githubUrl?: string;
  certificateUrl?: string;
}

interface WorkCardProps {
  title: string;
  icon: LucideIcon;
  description: string;
  projects: Project[];
  sectionId: string;
  delay: number;
}

export default function WorkCard({
  title,
  icon: Icon,
  description,
  projects,
  sectionId,
  delay,
}: WorkCardProps) {
  const [expanded, setExpanded] = useState(false);
  const router = useRouter();
  const isCertification = sectionId === 'certifications';

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, type: 'spring', stiffness: 100, damping: 20 }}
      className="relative group"
    >
      <div
        className="relative overflow-hidden bg-white dark:bg-zinc-900 border-2 border-zinc-200 dark:border-zinc-800 hover:border-[#3B82F6] dark:hover:border-[#3B82F6] rounded-2xl sm:rounded-3xl p-6 sm:p-8 transition-all duration-300 hover:shadow-2xl hover:shadow-[#3B82F6]/20 cursor-pointer"
        onClick={() => setExpanded(!expanded)}
      >
        {/* Animated gradient background */}
        <motion.div
          animate={{
            background: [
              'radial-gradient(circle at 20% 50%, rgba(59, 130, 246, 0.08) 0%, transparent 50%)',
              'radial-gradient(circle at 80% 50%, rgba(59, 130, 246, 0.08) 0%, transparent 50%)',
              'radial-gradient(circle at 50% 80%, rgba(59, 130, 246, 0.08) 0%, transparent 50%)',
              'radial-gradient(circle at 20% 50%, rgba(59, 130, 246, 0.08) 0%, transparent 50%)',
            ],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
          className="absolute inset-0 pointer-events-none"
        />

        <div className="relative">
          {/* Header with Icon, Title and Image */}
          <div className="flex items-start justify-between mb-6 gap-4">
            <div className="flex items-center gap-4 flex-1 min-w-0">
              <div className="p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-[#3B82F6] text-white shadow-lg flex-shrink-0">
                <Icon className="w-6 h-6 sm:w-8 sm:h-8" />
              </div>
              <div className="min-w-0 flex-1">
                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-black dark:text-white mb-2">
                  {title}
                </h3>
                <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400">
                  {description}
                </p>
              </div>
            </div>

            <motion.div
              animate={{ rotate: expanded ? 180 : 0 }}
              transition={{ duration: 0.3 }}
              className="text-[#3B82F6] flex-shrink-0"
            >
              <ChevronDown className="w-6 h-6" />
            </motion.div>
          </div>

          {/* Projects List */}
          <motion.div
            initial={false}
            animate={{
              height: expanded ? 'auto' : 0,
              opacity: expanded ? 1 : 0,
            }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="space-y-4 pt-6 border-t border-zinc-200 dark:border-zinc-800">
              {projects.map((project, idx) => (
                <motion.div
                  key={project.slug}
                  initial={{ opacity: 0, x: -20 }}
                  animate={expanded ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  transition={{ delay: idx * 0.1 }}
                  onClick={(e) => {
                    e.stopPropagation();
                    router.push(`/work/${sectionId}/${project.slug}`);
                  }}
                  className="flex gap-4 bg-zinc-50 dark:bg-zinc-800/50 rounded-xl p-4 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors cursor-pointer group/project"
                >
                  {/* Project Image */}
                  <div className="relative w-24 h-24 sm:w-32 sm:h-32 rounded-lg overflow-hidden flex-shrink-0">
                    <Image
                      src={project.image}
                      alt={project.name}
                      fill
                      className="object-cover group-hover/project:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                  </div>

                  {/* Project Details */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between mb-2 gap-3">
                      <h4 className="text-base sm:text-lg font-bold text-black dark:text-white group-hover/project:text-[#3B82F6] transition-colors">
                        {project.name}
                      </h4>
                      <div className="flex gap-2 flex-shrink-0">
                        {isCertification && project.certificateUrl && (
                          <a
                            href={project.certificateUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 rounded-lg bg-[#3B82F6] hover:bg-[#2563EB] text-black transition-colors"
                            onClick={(e) => e.stopPropagation()}
                          >
                            <Award className="w-4 h-4" />
                          </a>
                        )}
                        {!isCertification && project.liveUrl && (
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 rounded-lg bg-[#3B82F6] hover:bg-[#2563EB] text-black transition-colors"
                            onClick={(e) => e.stopPropagation()}
                          >
                            <ExternalLink className="w-4 h-4" />
                          </a>
                        )}
                        {!isCertification && project.githubUrl && (
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 rounded-lg bg-zinc-200 dark:bg-zinc-700 hover:bg-zinc-300 dark:hover:bg-zinc-600 transition-colors"
                            onClick={(e) => e.stopPropagation()}
                          >
                            <Github className="w-4 h-4" />
                          </a>
                        )}
                      </div>
                    </div>

                    <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-3 line-clamp-2">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {project.tags.slice(0, 3).map((tag, tagIdx) => (
                        <span
                          key={tagIdx}
                          className="px-2 sm:px-3 py-1 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-700 rounded-full text-xs font-medium text-zinc-700 dark:text-zinc-300"
                        >
                          {tag}
                        </span>
                      ))}
                      {project.tags.length > 3 && (
                        <span className="px-2 sm:px-3 py-1 text-xs font-medium text-zinc-500">
                          +{project.tags.length - 3} more
                        </span>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}

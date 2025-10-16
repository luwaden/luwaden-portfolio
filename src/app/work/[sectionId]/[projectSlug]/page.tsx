'use client';

import { motion } from 'framer-motion';
import { useParams, useRouter } from 'next/navigation';
import { ArrowLeft, ExternalLink, Github, Calendar, Tag } from 'lucide-react';
import { workSections } from '@/components/work/data/workData';

export default function ProjectDetailPage() {
  const params = useParams();
  const router = useRouter();
  const sectionId = params.sectionId as string;
  const projectSlug = params.projectSlug as string;

  // Find the work section and project
  const section = workSections.find((s) => s.id === sectionId);
  const project = section?.projects.find((p) => p.slug === projectSlug);

  if (!section || !project) {
    return (
      <div className="min-h-screen flex items-center justify-center px-4">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-black dark:text-white mb-4">
            Project Not Found
          </h1>
          <button
            onClick={() => router.push('/work')}
            className="text-[#0078D7] hover:underline"
          >
            ← Back to Work
          </button>
        </div>
      </div>
    );
  }

  const Icon = section.icon;

  return (
    <div className="min-h-screen py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Back Button */}
        <motion.button
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          onClick={() => router.push('/work')}
          className="flex items-center gap-2 text-[#0078D7] hover:text-[#0078D7]/80 mb-8 sm:mb-12 transition-colors group"
        >
          <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
          <span className="font-medium">Back to Work</span>
        </motion.button>

        {/* Project Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-12"
        >
          {/* Category Badge */}
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 rounded-xl bg-[#0078D7] text-white">
              <Icon className="w-5 h-5" />
            </div>
            <span className="text-sm font-medium text-zinc-600 dark:text-zinc-400">
              {section.title}
            </span>
          </div>

          {/* Project Title */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-black dark:text-white mb-6">
            {project.name}
          </h1>

          {/* Project Description */}
          <p className="text-lg sm:text-xl text-zinc-600 dark:text-zinc-400 mb-8">
            {project.description}
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-3">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 bg-[#0078D7] hover:bg-[#0078D7]/80 text-white rounded-xl font-medium transition-colors"
              >
                <ExternalLink className="w-4 h-4" />
                View Live Project
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 bg-zinc-200 dark:bg-zinc-700 hover:bg-zinc-300 dark:hover:bg-zinc-600 text-black dark:text-white rounded-xl font-medium transition-colors"
              >
                <Github className="w-4 h-4" />
                View on GitHub
              </a>
            )}
          </div>
        </motion.div>

        {/* Project Details Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="relative overflow-hidden bg-white dark:bg-zinc-900 border-2 border-zinc-200 dark:border-zinc-800 rounded-3xl p-8 sm:p-10 mb-8"
        >
          {/* Animated gradient background */}
          <motion.div
            animate={{
              background: [
                'radial-gradient(circle at 20% 50%, rgba(0, 120, 215, 0.08) 0%, transparent 50%)',
                'radial-gradient(circle at 80% 50%, rgba(0, 120, 215, 0.08) 0%, transparent 50%)',
                'radial-gradient(circle at 50% 80%, rgba(0, 120, 215, 0.08) 0%, transparent 50%)',
                'radial-gradient(circle at 20% 50%, rgba(0, 120, 215, 0.08) 0%, transparent 50%)',
              ],
            }}
            transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
            className="absolute inset-0 pointer-events-none"
          />

          <div className="relative space-y-8">
            {/* Technologies Section */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Tag className="w-5 h-5 text-[#0078D7]" />
                <h2 className="text-2xl font-heading font-bold text-black dark:text-white">
                  Technologies Used
                </h2>
              </div>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, index) => (
                  <motion.span
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.3 + index * 0.05 }}
                    className="px-4 py-2 bg-zinc-100 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-full text-sm font-medium text-zinc-700 dark:text-zinc-300 hover:border-[#0078D7] hover:text-[#0078D7] transition-colors"
                  >
                    {tag}
                  </motion.span>
                ))}
              </div>
            </div>

            {/* Project Overview Section */}
            <div>
              <h2 className="text-2xl font-heading font-bold text-black dark:text-white mb-4">
                Project Overview
              </h2>
              <div className="prose prose-zinc dark:prose-invert max-w-none">
                <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
                  This is where you can add detailed information about the project. Include:
                </p>
                <ul className="text-zinc-600 dark:text-zinc-400 space-y-2 mt-4">
                  <li>The problem this project solves</li>
                  <li>Key features and functionality</li>
                  <li>Technical challenges overcome</li>
                  <li>Your role and contributions</li>
                  <li>Results and impact</li>
                </ul>
              </div>
            </div>

            {/* Additional Info Section */}
            <div className="grid sm:grid-cols-2 gap-6 pt-6 border-t border-zinc-200 dark:border-zinc-800">
              <div>
                <h3 className="font-bold text-black dark:text-white mb-2">Category</h3>
                <p className="text-zinc-600 dark:text-zinc-400">{section.title}</p>
              </div>
              <div>
                <h3 className="font-bold text-black dark:text-white mb-2">Status</h3>
                <span className="inline-flex items-center gap-2 px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 rounded-full text-sm font-medium">
                  <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                  Active
                </span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Related Projects */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <h2 className="text-2xl font-heading font-bold text-black dark:text-white mb-6">
            More in {section.title}
          </h2>
          <div className="grid gap-4">
            {section.projects
              .filter((p) => p.slug !== projectSlug)
              .map((relatedProject, index) => (
                <motion.div
                  key={relatedProject.slug}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  onClick={() => router.push(`/work/${sectionId}/${relatedProject.slug}`)}
                  className="bg-white dark:bg-zinc-900 border-2 border-zinc-200 dark:border-zinc-800 hover:border-[#0078D7] rounded-2xl p-6 cursor-pointer transition-all hover:shadow-lg group"
                >
                  <h3 className="text-lg font-heading font-bold text-black dark:text-white mb-2 group-hover:text-[#0078D7] transition-colors">
                    {relatedProject.name}
                  </h3>
                  <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-3">
                    {relatedProject.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {relatedProject.tags.slice(0, 3).map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-2 py-1 bg-zinc-100 dark:bg-zinc-800 rounded-full text-xs text-zinc-600 dark:text-zinc-400"
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
    </div>
  );
}
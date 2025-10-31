// ==================== FILE 5: ProjectDetailPage.tsx ====================
// app/work/[sectionId]/[projectSlug]/page.tsx

'use client';

import { motion } from 'framer-motion';
import { useParams, useRouter } from 'next/navigation';
import { ArrowLeft, ExternalLink, Github, Calendar, Tag, Award, CheckCircle2, AlertCircle, Target, TrendingUp } from 'lucide-react';
import { workSections } from '@/components/work/data/workData';
import Image from 'next/image';

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
            className="text-[#3B82F6] hover:underline"
          >
            ← Back to Work
          </button>
        </div>
      </div>
    );
  }

  const Icon = section.icon;
  const isCertification = sectionId === 'certifications';

  return (
    <div className="min-h-screen py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Back Button */}
        <motion.button
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          onClick={() => router.push('/work')}
          className="flex items-center gap-2 text-[#3B82F6] hover:text-[#2563EB] mb-8 sm:mb-12 transition-colors group"
        >
          <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
          <span className="font-medium">Back to Work</span>
        </motion.button>

        {/* Project Header with Image */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Left: Project Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            {/* Category Badge */}
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-[#3B82F6] text-white">
                <Icon className="w-5 h-5" />
              </div>
              <span className="text-sm font-medium text-zinc-600 dark:text-zinc-400">
                {section.title}
              </span>
            </div>

            {/* Project Title */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black dark:text-white mb-6">
              {project.name}
            </h1>

            {/* Project Description */}
            <p className="text-lg sm:text-xl text-zinc-600 dark:text-zinc-400 mb-8">
              {project.description}
            </p>

            {/* Certification specific info */}
            {isCertification && (
              <div className="space-y-3 mb-8">
                {project.issueDate && (
                  <div className="flex items-center gap-2 text-sm text-zinc-600 dark:text-zinc-400">
                    <Calendar className="w-4 h-4 text-[#3B82F6]" />
                    <span>Issued: {project.issueDate}</span>
                  </div>
                )}
                {project.expiryDate && (
                  <div className="flex items-center gap-2 text-sm text-zinc-600 dark:text-zinc-400">
                    <Calendar className="w-4 h-4 text-[#3B82F6]" />
                    <span>Expires: {project.expiryDate}</span>
                  </div>
                )}
                {project.credentialId && (
                  <div className="flex items-center gap-2 text-sm text-zinc-600 dark:text-zinc-400">
                    <Award className="w-4 h-4 text-[#3B82F6]" />
                    <span>Credential ID: {project.credentialId}</span>
                  </div>
                )}
              </div>
            )}

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-3">
              {isCertification && project.certificateUrl && (
                <a
                  href={project.certificateUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-6 py-3 bg-[#3B82F6] hover:bg-[#2563EB] text-black rounded-xl font-medium transition-colors"
                >
                  <Award className="w-4 h-4" />
                  View Certificate
                </a>
              )}
              {!isCertification && project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-6 py-3 bg-[#3B82F6] hover:bg-[#2563EB] text-black rounded-xl font-medium transition-colors"
                >
                  <ExternalLink className="w-4 h-4" />
                  View Live Project
                </a>
              )}
              {!isCertification && project.githubUrl && (
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

          {/* Right: Project Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="relative rounded-2xl overflow-hidden h-64 sm:h-80 md:h-96 shadow-2xl group"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#3B82F6]/40 to-[#2563EB]/40 mix-blend-multiply z-10 group-hover:opacity-75 transition-opacity duration-300" />
            <Image
              src={project.image}
              alt={project.name}
              fill
              className="object-cover group-hover:scale-110 transition-transform duration-500"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-20" />
          </motion.div>
        </div>

        {/* Project Details Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="relative overflow-hidden bg-white dark:bg-zinc-900 border-2 border-zinc-200 dark:border-zinc-800 rounded-3xl p-8 sm:p-10 mb-8"
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

          <div className="relative space-y-8">
            {/* Technologies Section */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Tag className="w-5 h-5 text-[#3B82F6]" />
                <h2 className="text-2xl font-bold text-black dark:text-white">
                  Technologies Used
                </h2>
              </div>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, index) => (
                  <motion.span
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.4 + index * 0.05 }}
                    className="px-4 py-2 bg-zinc-100 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-full text-sm font-medium text-zinc-700 dark:text-zinc-300 hover:border-[#3B82F6] hover:text-[#3B82F6] transition-colors"
                  >
                    {tag}
                  </motion.span>
                ))}
              </div>
            </div>

            {/* Problem Statement */}
            {!isCertification && project.details.problem !== 'N/A' && (
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <AlertCircle className="w-5 h-5 text-[#3B82F6]" />
                  <h2 className="text-2xl font-bold text-black dark:text-white">
                    The Problem
                  </h2>
                </div>
                <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
                  {project.details.problem}
                </p>
              </div>
            )}

            {/* Key Features */}
            {!isCertification && project.details.features.length > 0 && (
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <CheckCircle2 className="w-5 h-5 text-[#3B82F6]" />
                  <h2 className="text-2xl font-bold text-black dark:text-white">
                    Key Features
                  </h2>
                </div>
                <ul className="space-y-3">
                  {project.details.features.map((feature, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.5 + index * 0.1 }}
                      className="flex items-start gap-3 text-zinc-600 dark:text-zinc-400"
                    >
                      <CheckCircle2 className="w-5 h-5 text-[#3B82F6] flex-shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            )}

            {/* Technical Challenges */}
            {!isCertification && project.details.challenges.length > 0 && (
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <Target className="w-5 h-5 text-[#3B82F6]" />
                  <h2 className="text-2xl font-bold text-black dark:text-white">
                    Technical Challenges Overcome
                  </h2>
                </div>
                <ul className="space-y-3">
                  {project.details.challenges.map((challenge, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.6 + index * 0.1 }}
                      className="flex items-start gap-3 text-zinc-600 dark:text-zinc-400"
                    >
                      <div className="w-2 h-2 bg-[#3B82F6] rounded-full flex-shrink-0 mt-2" />
                      <span>{challenge}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            )}

            {/* My Role */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Icon className="w-5 h-5 text-[#3B82F6]" />
                <h2 className="text-2xl font-bold text-black dark:text-white">
                  {isCertification ? 'Skills Acquired' : 'My Role & Contributions'}
                </h2>
              </div>
              <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
                {project.details.role}
              </p>
            </div>

            {/* Results & Impact */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <TrendingUp className="w-5 h-5 text-[#3B82F6]" />
                <h2 className="text-2xl font-bold text-black dark:text-white">
                  Results & Impact
                </h2>
              </div>
              <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
                {project.details.impact}
              </p>
            </div>

            {/* Additional Info Section - Only for non-certifications */}
            {!isCertification && (
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
            )}
          </div>
        </motion.div>

        {/* Related Projects */}
        {section.projects.length > 1 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <h2 className="text-2xl font-bold text-black dark:text-white mb-6">
              More in {section.title}
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {section.projects
                .filter((p) => p.slug !== projectSlug)
                .map((relatedProject, index) => (
                  <motion.div
                    key={relatedProject.slug}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                    onClick={() => router.push(`/work/${sectionId}/${relatedProject.slug}`)}
                    className="bg-white dark:bg-zinc-900 border-2 border-zinc-200 dark:border-zinc-800 hover:border-[#3B82F6] rounded-2xl overflow-hidden cursor-pointer transition-all hover:shadow-lg group"
                  >
                    {/* Project Image */}
                    <div className="relative h-40 overflow-hidden">
                      <Image
                        src={relatedProject.image}
                        alt={relatedProject.name}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    </div>

                    {/* Project Info */}
                    <div className="p-4">
                      <h3 className="text-lg font-bold text-black dark:text-white mb-2 group-hover:text-[#3B82F6] transition-colors line-clamp-1">
                        {relatedProject.name}
                      </h3>
                      <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-3 line-clamp-2">
                        {relatedProject.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {relatedProject.tags.slice(0, 2).map((tag, tagIndex) => (
                          <span
                            key={tagIndex}
                            className="px-2 py-1 bg-zinc-100 dark:bg-zinc-800 rounded-full text-xs text-zinc-600 dark:text-zinc-400"
                          >
                            {tag}
                          </span>
                        ))}
                        {relatedProject.tags.length > 2 && (
                          <span className="px-2 py-1 text-xs text-zinc-500">
                            +{relatedProject.tags.length - 2}
                          </span>
                        )}
                      </div>
                    </div>
                  </motion.div>
                ))}
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
}
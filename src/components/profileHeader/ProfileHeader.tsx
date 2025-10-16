'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import TypingAnimation from '@/components/TypingAnimation';

interface ProfileHeaderProps {
  showImage?: boolean;
}

export default function ProfileHeader({ showImage = true }: ProfileHeaderProps) {
  const [showIntro, setShowIntro] = useState(false);
  const [showRole, setShowRole] = useState(false);

  const handleWelcomeComplete = () => {
    setTimeout(() => {
      setShowIntro(true);
    }, 1000);
  };

  const handleIntroComplete = () => {
    setTimeout(() => {
      setShowRole(true);
    }, 800);
  };

  return (
    <div className="relative">
      <div className="max-w-6xl mx-auto">
        {/* Two-column layout: Image + Text */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left: Profile Image */}
          {showImage && (
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex justify-center lg:justify-end order-1 lg:order-1"
            >
              <div className="relative group">
                {/* Glowing border container */}
                <div className="relative">
                  {/* Animated glow effect */}
                  <motion.div
                    className="absolute -inset-1 rounded-3xl"
                    animate={{
                      boxShadow: [
                        '0 0 20px rgba(0, 255, 136, 0.3)',
                        '0 0 40px rgba(0, 255, 136, 0.5)',
                        '0 0 20px rgba(0, 255, 136, 0.3)',
                      ],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: 'easeInOut',
                    }}
                  >
                    <div className="absolute inset-0 rounded-3xl border-2 border-accent/50" />
                  </motion.div>

                  {/* Profile Image */}
                  <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 rounded-3xl overflow-hidden bg-zinc-900">
                    <Image
                      src="/images/profile.jpg" // Replace with your actual image path
                      alt="Ayodeji Dennis Oluwatunla - Fullstack Software Engineer"
                      fill
                      className="object-cover"
                      priority
                      sizes="(max-width: 768px) 256px, (max-width: 1024px) 320px, 384px"
                    />
                    
                    {/* Gradient overlay on hover */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>

                  {/* Corner accents */}
                  <div className="absolute -top-2 -left-2 w-6 h-6 border-t-2 border-l-2 border-accent rounded-tl-xl" />
                  <div className="absolute -top-2 -right-2 w-6 h-6 border-t-2 border-r-2 border-accent rounded-tr-xl" />
                  <div className="absolute -bottom-2 -left-2 w-6 h-6 border-b-2 border-l-2 border-accent rounded-bl-xl" />
                  <div className="absolute -bottom-2 -right-2 w-6 h-6 border-b-2 border-r-2 border-accent rounded-br-xl" />
                </div>

                {/* Floating accent behind image */}
                <motion.div
                  animate={{
                    scale: [1, 1.1, 1],
                    rotate: [0, 5, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                  className="absolute -z-10 top-8 -right-8 w-32 h-32 bg-accent/10 rounded-full blur-3xl"
                />
              </div>
            </motion.div>
          )}

          {/* Right: Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="space-y-6 order-2 lg:order-2 text-center lg:text-left"
          >
            {/* Welcome Message */}
            <div>
              <TypingAnimation
                text="Welcome to my bio page, where you get to know more about me."
                speed={40}
                onComplete={handleWelcomeComplete}
                enableSound={true}
                className="text-xl sm:text-2xl md:text-3xl font-heading font-semibold text-zinc-300 leading-relaxed"
              />
            </div>

            {/* Name & Title */}
            {showIntro && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="space-y-3"
              >
                <TypingAnimation
                  text="I'm Ayodeji Dennis Oluwatunla — a fullstack engineer passionate about crafting digital experiences that inspire and empower people."
                  speed={35}
                  onComplete={handleIntroComplete}
                  enableSound={true}
                  className="text-lg sm:text-xl md:text-2xl text-zinc-400 leading-relaxed"
                />
              </motion.div>
            )}

            {/* Professional Title Badge */}
            {showRole && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                className="inline-block"
              >
                <div className="relative group">
                  {/* Background glow */}
                  <motion.div
                    className="absolute inset-0 rounded-2xl bg-gradient-to-r from-accent/20 to-emerald-500/20 blur-xl"
                    animate={{
                      scale: [1, 1.05, 1],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: 'easeInOut',
                    }}
                  />
                  
                  {/* Badge content */}
                  <div className="relative px-6 py-4 bg-white/5 backdrop-blur-sm border border-accent/30 rounded-2xl">
                    <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-3">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                        <span className="text-sm font-medium text-zinc-400">
                          Available for Projects
                        </span>
                      </div>
                      <div className="hidden sm:block w-px h-4 bg-zinc-700" />
                      <span className="text-lg font-heading font-bold bg-gradient-to-r from-accent to-emerald-400 bg-clip-text text-transparent">
                        Fullstack Software Engineer & Creative Technologist
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
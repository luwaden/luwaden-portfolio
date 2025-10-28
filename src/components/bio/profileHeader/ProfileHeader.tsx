'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import TypingAnimation from '@/components/TypingAnimation';

interface ProfileHeaderProps {
  showImage?: boolean;
}

export default function ProfileHeader({ showImage = true }: ProfileHeaderProps) {
  const [isWelcomeComplete, setIsWelcomeComplete] = useState(false);
  const [isIntroComplete, setIsIntroComplete] = useState(false);
  const [showIntro, setShowIntro] = useState(false);
  const [showRole, setShowRole] = useState(false);

  const welcomeText =
    "Welcome to my bio page, where you get to know more about me.";
  const introText =
    "I'm Ayodeji Dennis Oluwatunla, a full-stack software engineer and creative technologist dedicated to building intuitive, high-performance digital solutions that empower people and organizations to achieve more.";

  const handleWelcomeComplete = () => {
    setIsWelcomeComplete(true);
    setTimeout(() => {
      setShowIntro(true);
    }, 1000);
  };

  const handleIntroComplete = () => {
    setIsIntroComplete(true);
    setTimeout(() => {
      setShowRole(true);
    }, 1000);
  };

  return (
    <div className="relative">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left: Profile Image */}
          {showImage && (
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex justify-center lg:justify-end"
            >
              <div className="relative group">
                <div className="relative">
                  {/* Animated blue glow effect */}
                  <motion.div
                    className="absolute -inset-1 rounded-3xl"
                    animate={{
                      boxShadow: [
                        '0 0 20px rgba(0, 151, 178, 0.3)',
                        '0 0 40px rgba(0, 151, 178, 0.5)',
                        '0 0 20px rgba(0, 151, 178, 0.3)',
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
                      src="https://res.cloudinary.com/dergk96ic/image/upload/v1761650699/Gemini_Generated_Image_8go2748go2748go2_iel77r.png"
                      alt="Ayodeji Dennis Oluwatunla - Fullstack Software Engineer"
                      fill
                      className="object-cover"
                      priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>

                  {/* Corner accents */}
                  <div className="absolute -top-2 -left-2 w-6 h-6 border-t-2 border-l-2 border-accent rounded-tl-xl" />
                  <div className="absolute -top-2 -right-2 w-6 h-6 border-t-2 border-r-2 border-accent rounded-tr-xl" />
                  <div className="absolute -bottom-2 -left-2 w-6 h-6 border-b-2 border-l-2 border-accent rounded-bl-xl" />
                  <div className="absolute -bottom-2 -right-2 w-6 h-6 border-b-2 border-r-2 border-accent rounded-br-xl" />
                </div>

                {/* Floating blue accent behind image */}
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
                  className="absolute -z-10 top-8 -right-8 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl"
                />
              </div>
            </motion.div>
          )}

          {/* Right: Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="space-y-6 text-center lg:text-left"
          >
            {/* Step 1: Welcome Message */}
            <div className="min-h-[80px] sm:min-h-[100px]">
              {!isWelcomeComplete ? (
                <TypingAnimation
                  text={welcomeText}
                  speed={40}
                  onComplete={handleWelcomeComplete}
                  enableSound={true}
                  className="text-xl sm:text-2xl md:text-3xl font-heading font-semibold text-zinc-700 dark:text-zinc-300 leading-relaxed"
                />
              ) : (
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  className="text-xl sm:text-2xl md:text-3xl font-heading font-semibold text-zinc-700 dark:text-zinc-300 leading-relaxed"
                >
                  {welcomeText}
                </motion.p>
              )}
            </div>

            {/* Step 2: Introduction */}
            {showIntro && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="space-y-3 min-h-[60px] sm:min-h-[80px]"
              >
                {!isIntroComplete ? (
                  <TypingAnimation
                    text={introText}
                    speed={35}
                    onComplete={handleIntroComplete}
                    enableSound={true}
                    className="text-lg sm:text-xl md:text-2xl text-zinc-600 dark:text-zinc-400 leading-relaxed"
                  />
                ) : (
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                    className="text-lg sm:text-xl md:text-2xl text-zinc-600 dark:text-zinc-400 leading-relaxed"
                  >
                    {introText}
                  </motion.p>
                )}
              </motion.div>
            )}

            {/* Step 3: Role Badge */}
            {showRole && (
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{
                  duration: 0.7,
                  ease: [0.25, 0.46, 0.45, 0.94],
                }}
                className="flex justify-center lg:justify-start pt-2"
              >
                <div className="relative group inline-block">
                  {/* Blue glow background */}
                  <motion.div
                    className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-400/20 to-blue-600/20 blur-xl"
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
                  <div className="relative px-6 py-4 bg-zinc-100/80 dark:bg-white/5 backdrop-blur-sm border border-zinc-300 dark:border-blue-500/30 rounded-2xl">
                    <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-3">
                      <div className="flex items-center gap-2">
                        <motion.div
                          className="w-2 h-2 rounded-full bg-blue-500"
                          animate={{
                            scale: [1, 1.2, 1],
                            opacity: [1, 0.7, 1],
                          }}
                          transition={{
                            duration: 1.5,
                            repeat: Infinity,
                            ease: 'easeInOut',
                          }}
                        />
                       <span className="text-sm font-medium text-zinc-600 dark:text-zinc-400">
                        Open to Collaborations
                      </span>
                      </div>
                      <div className="hidden sm:block w-px h-4 bg-zinc-400 dark:bg-zinc-700" />
                     <span className="text-base sm:text-lg font-heading font-bold bg-gradient-to-r from-accent to-blue-500 bg-clip-text text-transparent">
                      Full-Stack Software Engineer & Creative Technologist
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

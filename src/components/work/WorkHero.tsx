'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function WorkHero() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className="mb-16 sm:mb-20"
    >
      <div className="relative overflow-hidden bg-white dark:bg-zinc-900 border-2 border-zinc-200 dark:border-zinc-800 rounded-3xl h-[300px] sm:h-[350px] lg:h-[400px]">
        {/* Animated gradient background */}
        <motion.div
          animate={{
            background: [
              'radial-gradient(circle at 20% 50%, rgba(0, 120, 215, 0.15) 0%, transparent 50%)',
              'radial-gradient(circle at 80% 50%, rgba(0, 120, 215, 0.15) 0%, transparent 50%)',
              'radial-gradient(circle at 50% 80%, rgba(0, 120, 215, 0.15) 0%, transparent 50%)',
              'radial-gradient(circle at 20% 50%, rgba(0, 120, 215, 0.15) 0%, transparent 50%)',
            ],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
          className="absolute inset-0 pointer-events-none"
        />

        <div className="relative h-full flex flex-col lg:flex-row items-center gap-6 p-6 sm:p-8 lg:p-12">
          {/* Text Content */}
          <div className="space-y-3 sm:space-y-4 z-10 flex-1">
            <motion.h1
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-black dark:text-white leading-tight"
            >
              Welcome to my work station
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-base sm:text-lg lg:text-xl text-zinc-600 dark:text-zinc-400"
            >
              Explore how I'm positively impacting hundreds of lives through my craft
            </motion.p>
          </div>

          {/* Image with Gradient - Landscape style - Flex to the right */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="relative h-full w-full lg:w-[400px] xl:w-[450px] flex-shrink-0 ml-auto hidden lg:block"
          >
            <div className="relative h-full rounded-2xl overflow-hidden">
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#0078D7]/20 via-transparent to-[#0078D7]/30 z-10" />
              
              {/* Image placeholder - replace with your actual image */}
              <div className="w-full h-full bg-gradient-to-br from-zinc-200 to-zinc-300 dark:from-zinc-700 dark:to-zinc-800 flex items-center justify-center">
                <span className="text-zinc-500 dark:text-zinc-400 text-base font-medium">
                  Your Photo Here
                </span>
              </div>
              
              {/* Uncomment and use this when you have an image */}
              {/* <Image
                src="/your-photo.jpg"
                alt="Profile"
                fill
                className="object-cover"
                priority
              /> */}
            </div>

            {/* Decorative elements */}
            <motion.div
              animate={{
                scale: [1, 1.1, 1],
                rotate: [0, 5, 0],
              }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute -top-4 -right-4 w-20 h-20 bg-[#0078D7]/20 rounded-full blur-2xl"
            />
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                rotate: [0, -5, 0],
              }}
              transition={{ duration: 5, repeat: Infinity }}
              className="absolute -bottom-4 -left-4 w-24 h-24 bg-[#0078D7]/10 rounded-full blur-3xl"
            />
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
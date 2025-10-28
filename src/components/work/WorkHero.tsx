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
      <div className="relative overflow-hidden bg-white dark:bg-zinc-900 border-2 border-zinc-200 dark:border-zinc-800 rounded-3xl">
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

        <div className="relative flex flex-col lg:flex-row items-center gap-6 lg:gap-8 p-6 sm:p-8 lg:p-12">
          {/* Text Content */}
          <div className="space-y-3 sm:space-y-4 z-10 flex-1 w-full lg:w-auto text-center lg:text-left">
            <motion.h1
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-heading font-bold text-black dark:text-white leading-tight"
            >
              Welcome to my work station
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-base sm:text-lg lg:text-xl text-zinc-600 dark:text-zinc-400 max-w-xl lg:max-w-none"
            >
              Explore how I'm positively impacting hundreds of lives through my craft
            </motion.p>
          </div>

          {/* Image Section - Responsive across all screens */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="relative w-full lg:w-[400px] xl:w-[480px] flex-shrink-0"
          >
            {/* Image container with aspect ratio */}
            <div className="relative w-full h-[250px] sm:h-[300px] lg:h-[280px] xl:h-[320px] rounded-2xl overflow-hidden group">
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-accent/20 via-transparent to-accent/30 z-10 group-hover:opacity-80 transition-opacity duration-300" />
              
              {/* Image */}
              <Image
                src="https://res.cloudinary.com/dergk96ic/image/upload/v1760616756/Day_2_w-Ron_Mike-150_vigpaf.jpg"
                alt="Ayodeji Dennis Oluwatunla at work"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 400px, 480px"
              />

              {/* Hover border effect */}
              <div className="absolute inset-0 border-2 border-accent/0 group-hover:border-accent/50 rounded-2xl transition-colors duration-300 z-20" />
            </div>

            {/* Decorative floating elements */}
            <motion.div
              animate={{
                scale: [1, 1.1, 1],
                rotate: [0, 5, 0],
              }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -top-4 -right-4 w-16 h-16 sm:w-20 sm:h-20 bg-accent/20 rounded-full blur-2xl"
            />
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                rotate: [0, -5, 0],
              }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -bottom-4 -left-4 w-20 h-20 sm:w-24 sm:h-24 bg-accent/10 rounded-full blur-3xl"
            />

            {/* Corner accent decorations */}
            <div className="absolute -top-2 -right-2 w-6 h-6 border-t-2 border-r-2 border-accent rounded-tr-xl opacity-60" />
            <div className="absolute -bottom-2 -left-2 w-6 h-6 border-b-2 border-l-2 border-accent rounded-bl-xl opacity-60" />
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
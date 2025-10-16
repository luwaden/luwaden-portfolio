'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ReactNode } from 'react';

interface AnimatedButtonProps {
  href: string;
  icon: ReactNode;
  children: ReactNode;
  subtitle?: string;
  delay?: number;
}

export default function AnimatedButton({
  href,
  icon,
  children,
  subtitle,
  delay = 0,
}: AnimatedButtonProps) {
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
    >
      <Link href={href}>
        <motion.div
          whileHover={{ scale: 1.05, y: -5 }}
          whileTap={{ scale: 0.95 }}
          className="group relative overflow-hidden bg-white dark:bg-zinc-900 border-2 border-black dark:border-accent rounded-xl p-6 cursor-pointer transition-all duration-300 hover:shadow-2xl hover:shadow-accent/20"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-accent/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          
          <div className="relative flex items-center gap-4">
            <motion.div
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.6 }}
              className="text-accent"
            >
              {icon}
            </motion.div>
            
            <div className="flex-1">
              <div className="text-lg font-heading font-bold text-black dark:text-white mb-1">
                {children}
              </div>
              {subtitle && (
                <div className="text-sm text-zinc-600 dark:text-zinc-400">
                  {subtitle}
                </div>
              )}
            </div>
            
            <motion.div
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="text-accent"
            >
              →
            </motion.div>
          </div>
        </motion.div>
      </Link>
    </motion.div>
  );
}
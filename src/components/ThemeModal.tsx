'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '@/context/ThemeContext';
import { Sun, Moon } from 'lucide-react';

interface ThemeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ThemeModal({ isOpen, onClose }: ThemeModalProps) {
  const { setTheme } = useTheme();

  const handleThemeChoice = (choice: 'light' | 'dark') => {
    setTheme(choice);
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-40"
            onClick={onClose}
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-50 w-full max-w-md"
          >
            <div className="bg-white dark:bg-zinc-900 rounded-2xl p-8 shadow-2xl border border-zinc-200 dark:border-zinc-800">
              <h2 className="text-2xl font-heading font-bold mb-2 text-black dark:text-white">
                Choose Your Theme
              </h2>
              <p className="text-zinc-600 dark:text-zinc-400 mb-6">
                Would you like to switch to light theme?
              </p>
              
              <div className="flex gap-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => handleThemeChoice('light')}
                  className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-accent hover:bg-accent-dark text-black rounded-lg font-medium transition-colors"
                >
                  <Sun className="w-5 h-5" />
                  Yes, Light
                </motion.button>
                
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => handleThemeChoice('dark')}
                  className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-zinc-200 dark:bg-zinc-800 hover:bg-zinc-300 dark:hover:bg-zinc-700 text-black dark:text-white rounded-lg font-medium transition-colors"
                >
                  <Moon className="w-5 h-5" />
                  No, Dark
                </motion.button>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
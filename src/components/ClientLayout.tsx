'use client';

import { ReactNode } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation';
import CursorFollower from './CursorFollower';
import FloatingNav from './FloatingNav';
import { useEffect } from 'react';
import { initializeAudio } from '@/lib/typingSound';


interface ClientLayoutProps {
  children: ReactNode;
}

export default function ClientLayout({ children }: ClientLayoutProps) {
  const pathname = usePathname();
 useEffect(() => {
    const handleFirstInteraction = () => {
      initializeAudio();
      document.removeEventListener('click', handleFirstInteraction);
      document.removeEventListener('keydown', handleFirstInteraction);
      document.removeEventListener('touchstart', handleFirstInteraction);
    };
    
    document.addEventListener('click', handleFirstInteraction, { once: true });
    document.addEventListener('keydown', handleFirstInteraction, { once: true });
    document.addEventListener('touchstart', handleFirstInteraction, { once: true });
    
    return () => {
      document.removeEventListener('click', handleFirstInteraction);
      document.removeEventListener('keydown', handleFirstInteraction);
      document.removeEventListener('touchstart', handleFirstInteraction);
    };
  }, []);
  return (
    <>
      <CursorFollower />
      <div className="min-h-screen transition-colors duration-300">
        <AnimatePresence mode="wait">
          <motion.div
            key={pathname}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{
              type: 'spring',
              stiffness: 260,
              damping: 20,
            }}
          >
            {children}
          </motion.div>
        </AnimatePresence>
        <FloatingNav />
      </div>
    </>
  );
}
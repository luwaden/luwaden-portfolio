'use client';

import { motion, useMotionValue, useSpring } from 'framer-motion';
import { useEffect } from 'react';

export default function CursorFollower() {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 25, stiffness: 150 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX - 10);
      cursorY.set(e.clientY - 10);
    };

    window.addEventListener('mousemove', moveCursor);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
    };
  }, [cursorX, cursorY]);

  return (
    <motion.div
      className="fixed top-0 left-0 w-5 h-5 rounded-full pointer-events-none z-50 mix-blend-difference"
      style={{
        x: cursorXSpring,
        y: cursorYSpring,
        backgroundColor: '#00FF88',
      }}
    >
      <div className="absolute inset-0 rounded-full bg-accent animate-ping opacity-75" />
    </motion.div>
  );
}
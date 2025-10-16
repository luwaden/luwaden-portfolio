'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { playTypingSound } from '@/lib/typingSound';

interface TypingAnimationProps {
  text: string;
  delay?: number;
  speed?: number;
  onComplete?: () => void;
  className?: string;
  enableSound?: boolean;
}

export default function TypingAnimation({
  text,
  delay = 0,
  speed = 50,
  onComplete,
  className = '',
  enableSound = true,
}: TypingAnimationProps) {
  const [displayedText, setDisplayedText] = useState('');
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      let currentIndex = 0;
      
      const interval = setInterval(() => {
        if (currentIndex <= text.length) {
          setDisplayedText(text.slice(0, currentIndex));
          
          // Play typing sound every 3 characters
          if (enableSound && currentIndex % 3 === 0) {
            playTypingSound();
          }
          
          currentIndex++;
        } else {
          clearInterval(interval);
          setIsComplete(true);
          if (onComplete) {
            onComplete();
          }
        }
      }, speed);

      return () => clearInterval(interval);
    }, delay);

    return () => clearTimeout(timer);
  }, [text, delay, speed, onComplete, enableSound]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className={className}
    >
      {displayedText}
      {!isComplete && (
        <motion.span
          animate={{ opacity: [1, 0] }}
          transition={{ duration: 0.5, repeat: Infinity, repeatType: 'reverse' }}
          className="inline-block ml-1"
        >
          |
        </motion.span>
      )}
    </motion.div>
  );
}
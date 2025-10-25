import { useState } from 'react';
import { motion } from 'framer-motion';
import TypingAnimation from '@/components/TypingAnimation';

interface TaglineSectionProps {
  onComplete?: () => void;
}

export default function TaglineSection({ onComplete }: TaglineSectionProps) {
  const [isTypingComplete, setIsTypingComplete] = useState(false);
  const [showBorder, setShowBorder] = useState(false);
  const text = "I build human-centered digital experiences that connect technology with creativity.";

  const handleComplete = () => {
    setIsTypingComplete(true);
    setTimeout(() => setShowBorder(true), 300);
    if (onComplete) {
      setTimeout(() => onComplete(), 1000);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="text-center relative px-4"
    >
      <div className="relative inline-block">
        {!isTypingComplete ? (
          <TypingAnimation
            text={text}
            speed={35}
            onComplete={handleComplete}
            enableSound={true}
            className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-zinc-700 dark:text-zinc-300 font-normal leading-relaxed max-w-4xl"
          />
        ) : (
          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-zinc-700 dark:text-zinc-300 font-normal leading-relaxed max-w-4xl">
            {text}
          </p>
        )}
        
        {/* Glowing border frame */}
        {showBorder && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="absolute -inset-4 sm:-inset-6 rounded-2xl pointer-events-none"
          >
            {/* Animated border gradient */}
            <motion.div
              className="absolute inset-0 rounded-2xl"
              style={{
                background: 'linear-gradient(90deg, transparent, rgba(0, 120, 215, 0.4), transparent)',
                backgroundSize: '200% 100%',
              }}
              animate={{ backgroundPosition: ['0% 0%', '200% 0%'] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
            />
            
            {/* Glow effect */}
            <motion.div
              className="absolute inset-0 rounded-2xl border-2 border-accent/30"
              animate={{
                boxShadow: [
                  '0 0 20px rgba(0, 120, 215, 0.3)',
                  '0 0 40px rgba(0, 120, 215, 0.5)',
                  '0 0 20px rgba(0, 120, 215, 0.3)',
                ],
              }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            />
            
            {/* Corner accents */}
            <div className="absolute top-0 left-0 w-3 h-3 sm:w-4 sm:h-4 border-t-2 border-l-2 border-accent rounded-tl-lg" />
            <div className="absolute top-0 right-0 w-3 h-3 sm:w-4 sm:h-4 border-t-2 border-r-2 border-accent rounded-tr-lg" />
            <div className="absolute bottom-0 left-0 w-3 h-3 sm:w-4 sm:h-4 border-b-2 border-l-2 border-accent rounded-bl-lg" />
            <div className="absolute bottom-0 right-0 w-3 h-3 sm:w-4 sm:h-4 border-b-2 border-r-2 border-accent rounded-br-lg" />
          </motion.div>
        )}
      </div>
    </motion.div>
  );
}
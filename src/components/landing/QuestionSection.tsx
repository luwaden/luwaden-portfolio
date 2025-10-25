import { useState } from 'react';
import { motion } from 'framer-motion';
import TypingAnimation from '@/components/TypingAnimation';

interface QuestionSectionProps {
  onComplete?: () => void;
}

export default function QuestionSection({ onComplete }: QuestionSectionProps) {
  const [isTypingComplete, setIsTypingComplete] = useState(false);
  const text = "What would you like to know about me?";

  const handleComplete = () => {
    setIsTypingComplete(true);
    if (onComplete) onComplete();
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="text-center px-4"
    >
      {!isTypingComplete ? (
        <TypingAnimation
          text={text}
          speed={45}
          onComplete={handleComplete}
          enableSound={true}
          className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-heading font-semibold text-black dark:text-white"
        />
      ) : (
        <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-heading font-semibold text-black dark:text-white">
          {text}
        </p>
      )}
    </motion.div>
  );
}
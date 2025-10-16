import { useState } from 'react';
import { motion } from 'framer-motion';
import TypingAnimation from '@/components/TypingAnimation';
import { getTimeBasedGreeting } from '@/lib/typingSound';

interface GreetingSectionProps {
  onComplete?: () => void;
}

export default function GreetingSection({ onComplete }: GreetingSectionProps) {
  const [isTypingComplete, setIsTypingComplete] = useState(false);
  const greeting = getTimeBasedGreeting();
  const text = `${greeting}, thank you for checking by my page.`;

  const handleComplete = () => {
    setIsTypingComplete(true);
    if (onComplete) onComplete();
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="text-center"
    >
      {!isTypingComplete ? (
        <TypingAnimation
          text={text}
          speed={40}
          onComplete={handleComplete}
          enableSound={true}
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-heading font-bold text-white px-4 leading-tight"
        />
      ) : (
        <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-heading font-bold text-white px-4 leading-tight">
          {text}
        </p>
      )}
    </motion.div>
  );
}
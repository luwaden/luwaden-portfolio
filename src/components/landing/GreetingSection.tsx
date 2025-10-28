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
  const text = `${greeting},\nthank you for checking by my page.`;
  
  const handleComplete = () => {
    setIsTypingComplete(true);
    if (onComplete) onComplete();
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className={`${
        isTypingComplete 
          ? 'flex items-center gap-6 md:gap-8' 
          : 'flex flex-col items-center gap-6'
      } transition-all duration-700`}
    >
      {/* Circular Image */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ 
          scale: 1, 
          opacity: 1,
        }}
        transition={{ duration: 0.5 }}
        className={`${
          isTypingComplete 
            ? 'w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-56 lg:h-56 xl:w-64 xl:h-64' 
            : 'w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32'
        } transition-all duration-700 flex-shrink-0`}
      >
        <img
          src="https://res.cloudinary.com/dergk96ic/image/upload/v1761650699/Gemini_Generated_Image_8go2748go2748go2_iel77r.png"
          alt="Profile"
          className="w-full h-full object-cover rounded-full border-4 border-gray-200 dark:border-gray-700 shadow-lg"
        />
      </motion.div>

      {/* Text Content */}
      <div className={isTypingComplete ? 'flex-1 text-left' : 'text-center'}>
        {!isTypingComplete ? (
          <TypingAnimation
            text={text}
            speed={80}
            onComplete={handleComplete}
            enableSound={true}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-heading font-bold text-black dark:text-white px-4 leading-tight whitespace-pre-line"
          />
        ) : (
          <motion.p 
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-heading font-bold text-black dark:text-white px-4 leading-tight whitespace-pre-line"
          >
            {text}
          </motion.p>
        )}
      </div>
    </motion.div>
  );
}
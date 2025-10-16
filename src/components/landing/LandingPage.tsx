'use client';

import { useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import GreetingSection from '@/components/landing/GreetingSection';
import TaglineSection from '@/components/landing/TaglineSection';
import QuestionSection from '@/components/landing/QuestionSection';
import NavigationButtons from '@/components/landing/NavigationButtons';
import AnimatedBackground from '@/components/landing/AnimatedBackground';

export default function LandingPage() {
  const [showGreeting, setShowGreeting] = useState(true);
  const [showTagline, setShowTagline] = useState(false);
  const [showQuestion, setShowQuestion] = useState(false);
  const [showButtons, setShowButtons] = useState(false);



  const handleGreetingComplete = () => {
    setTimeout(() => {
      setShowTagline(true);
    }, 1000);
  };

  const handleTaglineComplete = () => {
    setTimeout(() => {
      setShowQuestion(true);
    }, 1000);
  };

  const handleQuestionComplete = () => {
    setTimeout(() => {
      setShowButtons(true);
    }, 1000);
  };

  return (
    <div className="min-h-screen relative overflow-hidden bg-black">
      <AnimatedBackground />

      {/* Main content with parallax */}
      <motion.div
        
        className="relative min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 py-12"
      >
        <div className="max-w-5xl w-full space-y-12 sm:space-y-16 md:space-y-20 lg:space-y-24">
          {showGreeting && <GreetingSection onComplete={handleGreetingComplete} />}
          {showTagline && <TaglineSection onComplete={handleTaglineComplete} />}
          {showQuestion && <QuestionSection onComplete={handleQuestionComplete} />}
          {showButtons && <NavigationButtons />}
        </div>
      </motion.div>
    </div>
  );
}
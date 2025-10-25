import { useState } from 'react';
import { motion } from 'framer-motion';
import ScrollReveal from '@/components/ScrollReveal';
import TypingAnimation from '@/components/TypingAnimation';

export default function AboutSection() {
  const [isTypingComplete, setIsTypingComplete] = useState(false);

  return (
    <ScrollReveal delay={0.2}>
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-black dark:text-white mb-3">
              About Me
            </h2>
            <div className="h-1 w-24 bg-gradient-to-r from-accent to-accent/70 rounded-full mx-auto" />
          </motion.div>
        </div>

        <div className="space-y-6 text-zinc-700 dark:text-zinc-300 leading-relaxed">
          {!isTypingComplete ? (
            <TypingAnimation
              text="I'm a fullstack software engineer with over 3 years of experience building scalable and visually rich web applications. My core strength lies in the JavaScript ecosystem — particularly Next.js, React, TypeScript, Node.js, Express.js, MongoDB, Supabase, and Tailwind CSS."
              speed={20}
              onComplete={() => setIsTypingComplete(true)}
              enableSound={false}
              className="text-lg sm:text-xl"
            />
          ) : (
            <>
              <p className="text-lg sm:text-xl">
                I'm a <span className="text-accent font-semibold">fullstack software engineer</span> with over 3 years of experience building scalable and visually rich web applications. My core strength lies in the JavaScript ecosystem — particularly{' '}
                <span className="text-black dark:text-white font-medium">Next.js, React, TypeScript, Node.js, Express.js, MongoDB, Supabase, and Tailwind CSS</span>.
              </p>

              <p className="text-lg sm:text-xl">
                Beyond engineering, I'm an <span className="text-accent font-semibold">innovator and storyteller</span>. I co-founded an R&D company that collaborated with an MIT professor, and I've led several projects at the intersection of technology, design, and education.
              </p>

              <p className="text-lg sm:text-xl">
                My background in <span className="text-accent font-semibold">Archaeology</span> (B.A., University of Ibadan) has strengthened my research and analytical mindset — helping me build products with{' '}
                <span className="text-black dark:text-white font-medium">human understanding at their core</span>.
              </p>

              <p className="text-lg sm:text-xl">
                Over the years, I've also contributed to <span className="text-black dark:text-white font-medium">education, community management, and media</span> — from teaching in Nigerian schools to managing tech programs and creating voiceovers and visual campaigns for brands.
              </p>
            </>
          )}
        </div>
      </div>
    </ScrollReveal>
  );
}
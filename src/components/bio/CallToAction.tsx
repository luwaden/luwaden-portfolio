import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import ScrollReveal from '@/components/ScrollReveal';

export default function CallToAction() {
  return (
    <ScrollReveal delay={0.5}>
      <div className="text-center space-y-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-2xl sm:text-3xl md:text-4xl font-heading font-semibold text-zinc-700 dark:text-zinc-300 mb-8">
            Curious to see how my journey translates into{' '}
            <span className="text-accent">impact</span>?
          </p>
        </motion.div>

        <Link href="/work">
          <motion.button
            whileHover={{ scale: 1.05, y: -5 }}
            whileTap={{ scale: 0.95 }}
            className="group relative overflow-hidden px-8 sm:px-10 py-4 sm:py-5 bg-gradient-to-r from-accent to-blue-600 hover:from-blue-600 hover:to-accent text-white rounded-full font-heading font-bold text-lg sm:text-xl transition-all duration-300 shadow-2xl shadow-accent/30"
          >
            {/* Shine effect on hover */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
              animate={{
                x: ['-200%', '200%'],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: 'linear',
              }}
            />
            
            <span className="relative flex items-center gap-3">
              Check out some of my work
              <motion.div
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <ArrowRight className="w-6 h-6" />
              </motion.div>
            </span>
          </motion.button>
        </Link>
      </div>
    </ScrollReveal>
  );
}
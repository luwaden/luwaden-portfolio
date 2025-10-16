import { motion } from 'framer-motion';

export default function BioAnimatedBackground() {
  return (
    <>
      {/* Animated gradient background */}
      <div className="absolute inset-0">
        <motion.div
          animate={{
            background: [
              'radial-gradient(circle at 20% 30%, rgba(0, 120, 215, 0.15) 0%, transparent 50%)',
              'radial-gradient(circle at 80% 70%, rgba(0, 120, 215, 0.15) 0%, transparent 50%)',
              'radial-gradient(circle at 50% 50%, rgba(0, 120, 215, 0.12) 0%, transparent 50%)',
              'radial-gradient(circle at 30% 80%, rgba(0, 120, 215, 0.15) 0%, transparent 50%)',
              'radial-gradient(circle at 20% 30%, rgba(0, 120, 215, 0.15) 0%, transparent 50%)',
            ],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: 'linear',
          }}
          className="absolute inset-0"
        />
      </div>

      {/* Floating accent elements */}
      <motion.div
        animate={{
          y: [0, -30, 0],
          x: [0, 20, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute top-40 right-20 w-40 h-40 bg-accent/15 rounded-full blur-3xl"
      />

      <motion.div
        animate={{
          y: [0, 30, 0],
          x: [0, -20, 0],
          scale: [1, 1.15, 1],
        }}
        transition={{
          duration: 13,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute bottom-40 left-20 w-52 h-52 bg-accent/10 rounded-full blur-3xl"
      />

      {/* Bottom ambient light */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={{
            opacity: [0.03, 0.08, 0.03],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-accent/10 to-transparent"
        />
      </div>
    </>
  );
}
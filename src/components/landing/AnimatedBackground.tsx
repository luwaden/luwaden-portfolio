import { motion } from 'framer-motion';

export default function AnimatedBackground() {
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
          y: [0, -40, 0],
          x: [0, 30, 0],
          rotate: [0, 15, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute top-20 right-10 w-32 h-32 sm:w-40 sm:h-40 bg-accent/20 rounded-full blur-3xl"
      />

      <motion.div
        animate={{
          y: [0, 40, 0],
          x: [0, -30, 0],
          rotate: [0, -15, 0],
          scale: [1, 1.15, 1],
        }}
        transition={{
          duration: 13,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute bottom-20 left-10 w-40 h-40 sm:w-52 sm:h-52 bg-accent/15 rounded-full blur-3xl"
      />

      <motion.div
        animate={{
          y: [0, -30, 0],
          x: [0, -20, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute top-1/2 left-1/4 w-28 h-28 sm:w-36 sm:h-36 bg-white/5 rounded-full blur-3xl"
      />

      {/* Ambient light effects */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={{
            opacity: [0.03, 0.08, 0.03],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute top-0 left-0 right-0 h-1/3 bg-gradient-to-b from-accent/10 to-transparent"
        />
        <motion.div
          animate={{
            opacity: [0.03, 0.08, 0.03],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 2,
          }}
          className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-accent/10 to-transparent"
        />
      </div>
    </>
  );
}
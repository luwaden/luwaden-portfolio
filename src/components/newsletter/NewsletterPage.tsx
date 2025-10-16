'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Check, Sparkles } from 'lucide-react';

export default function NewsletterPage() {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsLoading(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsLoading(false);
    setIsSubmitted(true);
    setEmail('');
  };

  return (
    <div className="min-h-screen relative overflow-hidden flex items-center justify-center px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20">
      {/* Animated background */}
      <div className="absolute inset-0">
        <motion.div
          animate={{
            background: [
              'radial-gradient(circle at 0% 0%, rgba(0, 255, 136, 0.1) 0%, transparent 50%)',
              'radial-gradient(circle at 100% 100%, rgba(0, 255, 136, 0.1) 0%, transparent 50%)',
              'radial-gradient(circle at 100% 0%, rgba(0, 255, 136, 0.1) 0%, transparent 50%)',
              'radial-gradient(circle at 0% 100%, rgba(0, 255, 136, 0.1) 0%, transparent 50%)',
              'radial-gradient(circle at 0% 0%, rgba(0, 255, 136, 0.1) 0%, transparent 50%)',
            ],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: 'linear',
          }}
          className="absolute inset-0"
        />
        
        {/* Floating particles */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-accent rounded-full"
            initial={{
              x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000),
              y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 1000),
              opacity: 0,
            }}
            animate={{
              y: [null, Math.random() * -200 - 100],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              delay: Math.random() * 5,
            }}
          />
        ))}
      </div>

      <div className="relative max-w-2xl w-full">
        <AnimatePresence mode="wait">
          {!isSubmitted ? (
            <motion.div
              key="form"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="space-y-6 sm:space-y-8"
            >
              {/* Header */}
              <div className="text-center space-y-3 sm:space-y-4">
                <motion.div
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                  className="inline-block"
                >
                  <div className="p-3 sm:p-4 bg-gradient-to-br from-accent to-emerald-600 rounded-2xl text-white shadow-2xl shadow-accent/30">
                    <Mail className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12" />
                  </div>
                </motion.div>
                
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-black dark:text-white px-4">
                  Stay Updated
                </h1>
                
                <p className="text-lg sm:text-xl text-zinc-600 dark:text-zinc-400 max-w-lg mx-auto px-4">
                  Subscribe to my newsletter for insights on web development, design, and technology
                </p>
              </div>

              {/* Form */}
              <motion.form
                onSubmit={handleSubmit}
                className="relative"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
              >
                <div className="relative bg-white dark:bg-zinc-900 border-2 border-zinc-200 dark:border-zinc-800 rounded-2xl p-2 shadow-xl focus-within:border-accent dark:focus-within:border-accent transition-colors">
                  <div className="flex flex-col sm:flex-row gap-2">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email address"
                      required
                      className="flex-1 px-4 sm:px-6 py-3 sm:py-4 bg-transparent text-black dark:text-white placeholder:text-zinc-400 dark:placeholder:text-zinc-600 outline-none text-base sm:text-lg"
                    />
                    
                    <motion.button
                      type="submit"
                      disabled={isLoading}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-6 sm:px-8 py-3 sm:py-4 bg-accent hover:bg-accent-dark text-black font-heading font-bold rounded-xl transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 whitespace-nowrap text-sm sm:text-base"
                    >
                      {isLoading ? (
                        <>
                          <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                            className="w-5 h-5 border-2 border-black border-t-transparent rounded-full"
                          />
                          <span className="hidden sm:inline">Subscribing...</span>
                        </>
                      ) : (
                        <>
                          <Sparkles className="w-4 h-4 sm:w-5 sm:h-5" />
                          Subscribe
                        </>
                      )}
                    </motion.button>
                  </div>
                </div>
              </motion.form>

              {/* Benefits */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4"
              >
                {[
                  { icon: '💡', text: 'Weekly insights' },
                  { icon: '🚀', text: 'Project updates' },
                  { icon: '🎯', text: 'Tech tips & tricks' },
                ].map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                    className="flex items-center gap-3 px-3 sm:px-4 py-2 sm:py-3 bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl"
                  >
                    <span className="text-xl sm:text-2xl">{benefit.icon}</span>
                    <span className="text-xs sm:text-sm font-medium text-zinc-700 dark:text-zinc-300">
                      {benefit.text}
                    </span>
                  </motion.div>
                ))}
              </motion.div>

              {/* Privacy note */}
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
                className="text-center text-xs sm:text-sm text-zinc-500 dark:text-zinc-500 px-4"
              >
                No spam, ever. Unsubscribe anytime.
              </motion.p>
            </motion.div>
          ) : (
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="text-center space-y-4 sm:space-y-6 py-12"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: 'spring', stiffness: 200, damping: 15 }}
                className="inline-block"
              >
                <div className="relative">
                  <div className="p-4 sm:p-6 bg-gradient-to-br from-accent to-emerald-600 rounded-full text-white shadow-2xl shadow-accent/30">
                    <Check className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16" />
                  </div>
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: [1, 1.5, 1] }}
                    transition={{ duration: 1, delay: 0.3 }}
                    className="absolute inset-0 bg-accent rounded-full opacity-20 blur-xl"
                  />
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="space-y-3 sm:space-y-4 px-4"
              >
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-black dark:text-white">
                  Thank you for subscribing!
                </h2>
                <p className="text-lg sm:text-xl text-zinc-600 dark:text-zinc-400 max-w-md mx-auto">
                  You'll receive the latest updates and insights straight to your inbox.
                </p>
              </motion.div>

              <motion.button
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                onClick={() => setIsSubmitted(false)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-4 sm:px-6 py-2 sm:py-3 bg-zinc-100 dark:bg-zinc-800 hover:bg-zinc-200 dark:hover:bg-zinc-700 text-black dark:text-white rounded-lg font-medium transition-colors text-sm sm:text-base"
              >
                Subscribe another email
              </motion.button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
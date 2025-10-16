'use client';

import { motion } from 'framer-motion';
import { Mail, MessageSquare, Linkedin, Github, Twitter } from 'lucide-react';
import ScrollReveal from '@/components/ScrollReveal';

const contactMethods = [
  {
    icon: Mail,
    label: 'Send Email',
    value: 'your.email@example.com',
    href: 'mailto:your.email@example.com',
    gradient: 'from-accent to-emerald-600',
    primary: true,
  },
  {
    icon: MessageSquare,
    label: 'Chat on WhatsApp',
    value: '+234 XXX XXX XXXX',
    href: 'https://wa.me/234XXXXXXXXXX',
    gradient: 'from-green-500 to-emerald-600',
    primary: true,
  },
];

const socialLinks = [
  {
    icon: Linkedin,
    label: 'LinkedIn',
    href: 'https://linkedin.com/in/yourprofile',
    color: 'hover:text-blue-500',
  },
  {
    icon: Github,
    label: 'GitHub',
    href: 'https://github.com/yourusername',
    color: 'hover:text-purple-500',
  },
  {
    icon: Twitter,
    label: 'Twitter',
    href: 'https://twitter.com/yourhandle',
    color: 'hover:text-sky-500',
  },
];

export default function HirePage() {
  return (
    <div className="min-h-screen relative overflow-hidden flex items-center justify-center px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20">
      {/* Animated gradient background */}
      <div className="absolute inset-0">
        <motion.div
          animate={{
            background: [
              'radial-gradient(circle at 20% 50%, rgba(0, 255, 136, 0.15) 0%, transparent 50%)',
              'radial-gradient(circle at 80% 50%, rgba(0, 255, 136, 0.15) 0%, transparent 50%)',
              'radial-gradient(circle at 50% 80%, rgba(0, 255, 136, 0.15) 0%, transparent 50%)',
              'radial-gradient(circle at 20% 50%, rgba(0, 255, 136, 0.15) 0%, transparent 50%)',
            ],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'linear',
          }}
          className="absolute inset-0"
        />
      </div>

      <div className="relative max-w-4xl w-full">
        {/* Header */}
        <ScrollReveal>
          <div className="text-center space-y-4 sm:space-y-6 mb-12 sm:mb-16">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-black dark:text-white">
              Let's Work Together
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
              If you'd like to hire me, kindly send me an email or chat me up on WhatsApp
            </p>
          </div>
        </ScrollReveal>

        {/* Primary contact methods */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mb-8 sm:mb-12">
          {contactMethods.map((method, index) => {
            const Icon = method.icon;
            return (
              <ScrollReveal key={index} delay={index * 0.1}>
                <a
                  href={method.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <motion.div
                    whileHover={{ scale: 1.05, y: -5 }}
                    whileTap={{ scale: 0.95 }}
                    className="group relative overflow-hidden bg-white dark:bg-zinc-900 border-2 border-zinc-200 dark:border-zinc-800 hover:border-accent dark:hover:border-accent rounded-2xl p-6 sm:p-8 transition-all duration-300 hover:shadow-2xl hover:shadow-accent/20"
                  >
                    <div className={`absolute inset-0 bg-gradient-to-br ${method.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
                    
                    <div className="relative flex flex-col items-center text-center space-y-3 sm:space-y-4">
                      <div className={`p-3 sm:p-4 rounded-2xl bg-gradient-to-br ${method.gradient} text-white shadow-lg`}>
                        <Icon className="w-6 h-6 sm:w-8 sm:h-8" />
                      </div>
                      
                      <div>
                        <h3 className="text-xl sm:text-2xl font-heading font-bold text-black dark:text-white mb-2">
                          {method.label}
                        </h3>
                        <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400 break-all">
                          {method.value}
                        </p>
                      </div>
                      
                      <motion.div
                        animate={{ x: [0, 5, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                        className="text-accent font-bold text-xl"
                      >
                        →
                      </motion.div>
                    </div>
                  </motion.div>
                </a>
              </ScrollReveal>
            );
          })}
        </div>

        {/* Social links */}
        <ScrollReveal delay={0.4}>
          <div className="text-center">
            <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-4">
              Or connect with me on social media
            </p>
            
            <div className="flex items-center justify-center gap-3 sm:gap-4">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                    className={`p-3 rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 ${social.color} transition-colors`}
                    title={social.label}
                  >
                    <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
                  </motion.a>
                );
              })}
            </div>
          </div>
        </ScrollReveal>

        {/* Availability badge */}
        <ScrollReveal delay={0.6}>
          <div className="mt-8 sm:mt-12 flex justify-center">
            <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 bg-accent/10 border border-accent/20 rounded-full">
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-2 h-2 rounded-full bg-accent"
              />
              <span className="text-xs sm:text-sm font-medium text-black dark:text-white">
                Available for new projects
              </span>
            </div>
          </div>
        </ScrollReveal>
      </div>

      {/* Floating elements */}
      <motion.div
        animate={{
          y: [0, -30, 0],
          x: [0, 20, 0],
          rotate: [0, 10, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-10 sm:top-20 right-5 sm:right-10 w-20 h-20 sm:w-24 sm:h-24 bg-accent/20 rounded-full blur-2xl"
      />
      
      <motion.div
        animate={{
          y: [0, 30, 0],
          x: [0, -20, 0],
          rotate: [0, -10, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-10 sm:bottom-20 left-5 sm:left-10 w-24 h-24 sm:w-32 sm:h-32 bg-accent/15 rounded-full blur-2xl"
      />
    </div>
  );
}
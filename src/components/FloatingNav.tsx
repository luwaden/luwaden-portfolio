'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, User, Briefcase, Mail, BookOpen, Sun, Moon } from 'lucide-react';
import { useTheme } from '@/context/ThemeContext';

const navItems = [
  { href: '/', icon: Home, label: 'Home' },
  { href: '/bio', icon: User, label: 'Bio' },
  { href: '/work', icon: Briefcase, label: 'Work' },
  { href: '/hire', icon: Mail, label: 'Hire' },
  { href: '/newsletter', icon: BookOpen, label: 'Newsletter' },
];

function FloatingNav() {
  const pathname = usePathname();
  const { theme, toggleTheme } = useTheme();

  return (
    <motion.nav
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.5, type: 'spring', stiffness: 260, damping: 20 }}
      className="fixed bottom-6 left-1/2 -translate-x-1/2 z-40"
    >
      <div className="bg-white/90 dark:bg-zinc-900/90 backdrop-blur-lg border border-zinc-200 dark:border-zinc-800 rounded-full px-4 py-3 shadow-2xl">
        <div className="flex items-center gap-2">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            const Icon = item.icon;
            
            return (
              <Link key={item.href} href={item.href}>
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className={`relative p-3 rounded-full transition-colors ${
                    isActive
                      ? 'bg-accent text-black'
                      : 'text-zinc-600 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-800'
                  }`}
                  title={item.label}
                >
                  <Icon className="w-5 h-5" />
                  {isActive && (
                    <motion.div
                      layoutId="activeNav"
                      className="absolute inset-0 bg-accent rounded-full -z-10"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </motion.div>
              </Link>
            );
          })}
          
          <div className="w-px h-6 bg-zinc-300 dark:bg-zinc-700 mx-2" />
          
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={toggleTheme}
            className="p-3 rounded-full text-zinc-600 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
            title="Toggle theme"
          >
            {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </motion.button>
        </div>
      </div>
    </motion.nav>
  );
}

export default FloatingNav;
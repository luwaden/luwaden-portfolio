import { motion } from 'framer-motion';
import { User, Briefcase, Mail, BookOpen } from 'lucide-react';

export default function NavigationButtons() {
  const buttons = [
    {
      href: '/bio',
      icon: <User className="w-5 h-5 sm:w-6 sm:h-6" />,
      label: 'Check my Bio',
      subtitle: 'Learn who I am',
    },
    {
      href: '/work',
      icon: <Briefcase className="w-5 h-5 sm:w-6 sm:h-6" />,
      label: 'Check out my Work',
      subtitle: "See what I've built",
    },
    {
      href: '/hire',
      icon: <Mail className="w-5 h-5 sm:w-6 sm:h-6" />,
      label: 'Hire Me',
      subtitle: "Let's collaborate",
    },
    {
      href: '/newsletter',
      icon: <BookOpen className="w-5 h-5 sm:w-6 sm:h-6" />,
      label: 'Subscribe to my Newsletter',
      subtitle: 'Stay updated',
    },
  ];

  // Each button appears 1s apart
  const delays = [0, 1, 2, 3];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 max-w-4xl mx-auto px-4 items-stretch auto-rows-fr">
      {buttons.map((button, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 30, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{
            duration: 1, // make each fade-in take 1 second
            delay: delays[index], // each button waits 1s more than the last
            ease: 'easeOut',
          }}
          className="h-full"
        >
          <motion.a
            href={button.href}
            whileHover={{ scale: 1.05, y: -8 }}
            whileTap={{ scale: 0.98 }}
            className="group relative flex flex-col h-full overflow-hidden bg-zinc-100/80 dark:bg-white/5 backdrop-blur-sm border border-zinc-300 dark:border-white/10 hover:border-accent/50 rounded-2xl p-6 sm:p-8 transition-all duration-300"
          >
            {/* Hover gradient overlay */}
            <motion.div className="absolute inset-0 bg-gradient-to-br from-accent/10 via-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

            {/* Glow effect on hover */}
            <motion.div
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              style={{ boxShadow: 'inset 0 0 40px rgba(0, 120, 215, 0.1)' }}
            />

            <div className="relative flex items-center gap-4 flex-1">
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
                className="flex-shrink-0 p-3 sm:p-4 bg-accent/10 group-hover:bg-accent/20 rounded-xl transition-colors duration-300"
              >
                <div className="text-accent">{button.icon}</div>
              </motion.div>

              <div className="flex-1 min-w-0">
                <h3 className="text-base sm:text-lg font-heading font-bold text-black dark:text-white mb-1 group-hover:text-accent transition-colors duration-300">
                  {button.label}
                </h3>
                <p className="text-sm text-zinc-600 dark:text-zinc-400 group-hover:text-zinc-500 dark:group-hover:text-zinc-300 transition-colors duration-300">
                  {button.subtitle}
                </p>
              </div>

              <motion.div
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="flex-shrink-0 text-accent text-2xl font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              >
                →
              </motion.div>
            </div>

            <motion.div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-accent to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
          </motion.a>
        </motion.div>
      ))}
    </div>
  );
}

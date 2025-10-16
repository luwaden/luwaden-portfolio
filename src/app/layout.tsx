import type { Metadata } from 'next';
import { Inter, DM_Sans } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/context/ThemeContext';
import ClientLayout from '@/components/ClientLayout';

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
});

const dmSans = DM_Sans({ 
  subsets: ['latin'],
  variable: '--font-dm-sans',
});

export const metadata: Metadata = {
  title: 'Portfolio | Fullstack Engineer & Creative Designer',
  description: 'Explore the work of a fullstack software engineer specializing in Next.js, React, and TypeScript. Building human-centered digital experiences.',
  keywords: ['portfolio', 'fullstack engineer', 'web developer', 'Next.js', 'React', 'TypeScript'],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${dmSans.variable} font-sans antialiased`}>
        <ThemeProvider>
          <ClientLayout>
            {children}
          </ClientLayout>
        </ThemeProvider>
      </body>
    </html>
  );
}
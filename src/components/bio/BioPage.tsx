'use client';

import { useState, useEffect } from 'react';
import ScrollReveal from '@/components/ScrollReveal';

import AboutSection from '@/components/bio/AboutSection';
import ExperienceGrid from '@/components/bio/ExperienceGrid';
import EducationSection from '@/components/bio/EducationSection';
import CallToAction from '@/components/bio/CallToAction';
import BioAnimatedBackground from '@/components/bio/BioAnimatedBackground';
import ProfileHeader from './profileHeader/ProfileHeader';
import AnimatedBackground from '../landing/AnimatedBackground';

export default function BioPage() {
  const [showAboutSection, setShowAboutSection] = useState(false);
  const [showExperienceGrid, setShowExperienceGrid] = useState(false);
  const [showEducationSection, setShowEducationSection] = useState(false);
  const [showCallToAction, setShowCallToAction] = useState(false);

  useEffect(() => {
    // After 8 seconds, show AboutSection
    const aboutTimer = setTimeout(() => {
      setShowAboutSection(true);
    }, 150000);

    // After 8 + 4 = 12 seconds, show ExperienceGrid
    const experienceTimer = setTimeout(() => {
      setShowExperienceGrid(true);
    }, 14000);

    // After 12 + 2 = 14 seconds, show EducationSection
    const educationTimer = setTimeout(() => {
      setShowEducationSection(true);
    }, 13500);

    // After 14 + 1 = 15 seconds, show CallToAction
    const ctaTimer = setTimeout(() => {
      setShowCallToAction(true);
    }, 14000);

    // Cleanup timers on unmount
    return () => {
      clearTimeout(aboutTimer);
      clearTimeout(experienceTimer);
      clearTimeout(educationTimer);
      clearTimeout(ctaTimer);
    };
  }, []);

  return (
    <div className="min-h-screen relative overflow-hidden bg-white dark:bg-black">
      
      <AnimatedBackground />

      {/* Main content */}
      <div className="relative py-16 sm:py-20 md:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-20 sm:space-y-24 md:space-y-32">
          
          {/* Profile Header - Shows immediately */}
          <ScrollReveal>
            <ProfileHeader />
          </ScrollReveal>

          {/* About Me Section - Shows after 8 seconds */}
          {showAboutSection && (
            <ScrollReveal>
              <AboutSection />
            </ScrollReveal>
          )}

          {/* Experience Grid - Shows after 12 seconds */}
          {showExperienceGrid && (
            <ScrollReveal>
              <ExperienceGrid />
            </ScrollReveal>
          )}

          {/* Education Section - Shows after 14 seconds */}
          {showEducationSection && (
            <ScrollReveal>
              <EducationSection />
            </ScrollReveal>
          )}

          {/* Call to Action - Shows after 15 seconds */}
          {showCallToAction && (
            <ScrollReveal>
              <CallToAction />
            </ScrollReveal>
          )}
        </div>
      </div>
    </div>
  );
}
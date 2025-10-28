'use client';

import ScrollReveal from '@/components/ScrollReveal';

import AboutSection from '@/components/bio/AboutSection';
import ExperienceGrid from '@/components/bio/ExperienceGrid';
import EducationSection from '@/components/bio/EducationSection';
import CallToAction from '@/components/bio/CallToAction';
import BioAnimatedBackground from '@/components/bio/BioAnimatedBackground';
import ProfileHeader from './profileHeader/ProfileHeader';
import AnimatedBackground from '../landing/AnimatedBackground';

export default function BioPage() {
  return (
    <div className="min-h-screen relative overflow-hidden bg-white dark:bg-black">
      
         <AnimatedBackground />

      {/* Main content */}
      <div className="relative py-16 sm:py-20 md:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-20 sm:space-y-24 md:space-y-32">
          
          {/* Profile Header */}
          <ScrollReveal>
            <ProfileHeader />
          </ScrollReveal>

          {/* About Me Section */}
          <AboutSection />

          {/* Experience Grid */}
          <ExperienceGrid />

          {/* Education Section */}
          <EducationSection />

          {/* Call to Action */}
          <CallToAction />
        </div>
      </div>
    </div>
  );
}
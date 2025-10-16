'use client';

import WorkHero from '@/components/work/WorkHero';
import WorkCard from '@/components/work/WorkCard';
import { workSections } from '@/components/work/data/workData';

export default function WorkPage() {
  return (
    <div className="min-h-screen py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto space-y-8 sm:space-y-12">
        {/* Hero Section */}
        <WorkHero />

        {/* Work Cards - Each appears 1 second after the previous */}
        <div className="space-y-6 sm:space-y-8">
          {workSections.map((section, index) => (
            <WorkCard
              key={section.id}
              title={section.title}
              icon={section.icon}
              description={section.description}
              projects={section.projects}
              sectionId={section.id}
              delay={1 + index * 1}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
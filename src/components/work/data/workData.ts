import { Code, Palette, FlaskConical, GraduationCap, Award } from 'lucide-react';
import { WorkSection } from '../types/work';

export const workSections: WorkSection[] = [
  {
    id: 'software',
    title: 'Software Development',
    icon: Code,
    description: 'Building scalable web applications and digital products',
    projects: [
      {
        name: 'EduTech Platform',
        slug: 'edutech-platform',
        description: 'A comprehensive learning management system built with Next.js and Supabase',
        tags: ['Next.js', 'TypeScript', 'Supabase', 'TailwindCSS'],
        liveUrl: '#',
        githubUrl: '#',
      },
      {
        name: 'Startup Dashboard',
        slug: 'startup-dashboard',
        description: 'Analytics and management dashboard for early-stage startups',
        tags: ['React', 'Node.js', 'MongoDB', 'Express'],
        liveUrl: '#',
        githubUrl: '#',
      },
      {
        name: 'Corporate Landing Pages',
        slug: 'corporate-landing-pages',
        description: 'High-converting landing pages for Nigerian companies',
        tags: ['Next.js', 'Framer Motion', 'TailwindCSS'],
        liveUrl: '#',
      },
    ],
  },
  {
    id: 'media',
    title: 'Media & Design Strategy',
    icon: Palette,
    description: 'Creative direction, voiceovers, and video editing',
    projects: [
      {
        name: 'Brand Campaign Videos',
        slug: 'brand-campaign-videos',
        description: 'Video editing and post-production for top Nigerian brands',
        tags: ['Video Editing', 'Motion Graphics', 'Branding'],
        liveUrl: '#',
      },
      {
        name: 'Voiceover Projects',
        slug: 'voiceover-projects',
        description: 'Professional voiceovers for commercials and corporate videos',
        tags: ['Voice Acting', 'Audio Production'],
        liveUrl: '#',
      },
    ],
  },
  {
    id: 'research',
    title: 'Research & Innovation',
    icon: FlaskConical,
    description: 'Collaborative research with academic institutions',
    projects: [
      {
        name: 'Innovation Lab',
        slug: 'innovation-lab',
        description: 'Co-founded research company focused on technological innovation',
        tags: ['R&D', 'Innovation', 'Strategy'],
      },
      {
        name: 'MIT Collaboration',
        slug: 'mit-collaboration',
        description: 'Research partnership with MIT professor on emerging technologies',
        tags: ['Academic Research', 'Technology'],
      },
    ],
  },
  {
    id: 'education',
    title: 'Education & Community',
    icon: GraduationCap,
    description: 'Teaching, program administration, and community building',
    projects: [
      {
        name: 'Primary Education',
        slug: 'primary-education',
        description: 'Teaching across various primary schools in Nigeria',
        tags: ['Teaching', 'Curriculum', 'Mentorship'],
      },
      {
        name: 'Community Programs',
        slug: 'community-programs',
        description: 'Program administration and community management initiatives',
        tags: ['Leadership', 'Management', 'Community'],
      },
    ],
  },
  {
    id: 'certifications',
    title: 'Certifications & Credentials',
    icon: Award,
    description: 'Professional certifications and achievements earned',
    projects: [
      {
        name: 'AWS Certified Solutions Architect',
        slug: 'aws-solutions-architect',
        description: 'Amazon Web Services cloud architecture certification',
        tags: ['AWS', 'Cloud Computing', 'Architecture'],
        liveUrl: '#',
      },
      {
        name: 'Google Project Management Certificate',
        slug: 'google-project-management',
        description: 'Professional certificate in project management methodologies',
        tags: ['Project Management', 'Agile', 'Leadership'],
        liveUrl: '#',
      },
      {
        name: 'HubSpot Content Marketing Certification',
        slug: 'hubspot-content-marketing',
        description: 'Digital marketing and content strategy certification',
        tags: ['Marketing', 'Content Strategy', 'SEO'],
        liveUrl: '#',
      },
      {
        name: 'Meta Front-End Developer Certificate',
        slug: 'meta-frontend-developer',
        description: 'Professional certification in modern front-end development',
        tags: ['React', 'JavaScript', 'UI/UX'],
        liveUrl: '#',
      },
    ],
  },
];
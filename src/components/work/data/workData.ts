import { Code, Palette, FlaskConical, GraduationCap, Award } from 'lucide-react';
import { WorkSection } from '../types/work';

export const workSections: WorkSection[] = [
  {
    id: 'software',
    title: 'Software Development',
    icon: Code,
    description: 'Building scalable web applications and digital products',
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800',
    projects: [
      {
        name: 'EduTech Platform',
        slug: 'edutech-platform',
        description: 'A comprehensive learning management system built with Next.js and Supabase',
        image: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=800',
        tags: ['Next.js', 'TypeScript', 'Supabase', 'TailwindCSS'],
        liveUrl: '#',
        githubUrl: '#',
        details: {
          problem: 'Traditional learning management systems were complex, expensive, and difficult to integrate with modern tools. Educational institutions needed an affordable, user-friendly platform that could scale with their needs.',
          features: [
            'Real-time collaborative learning spaces with video integration',
            'AI-powered progress tracking and personalized learning paths',
            'Interactive assessments with instant feedback',
            'Mobile-first responsive design for learning on-the-go',
            'Integration with popular education tools and APIs'
          ],
          challenges: [
            'Implementing real-time synchronization across thousands of concurrent users',
            'Optimizing video streaming performance for low-bandwidth connections',
            'Building a flexible permission system for different user roles',
            'Ensuring WCAG 2.1 AA accessibility compliance'
          ],
          role: 'Lead Full-Stack Developer - Architected the entire platform from scratch, led a team of 3 developers, implemented core features including the real-time collaboration system, and deployed the application to production serving 10,000+ active users.',
          impact: 'Successfully onboarded 50+ educational institutions within the first 6 months, improved student engagement by 40%, and reduced administrative workload by 60%. The platform now serves over 10,000 active users across Nigeria.'
        }
      },
      {
        name: 'Startup Dashboard',
        slug: 'startup-dashboard',
        description: 'Analytics and management dashboard for early-stage startups',
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800',
        tags: ['React', 'Node.js', 'MongoDB', 'Express'],
        liveUrl: '#',
        githubUrl: '#',
        details: {
          problem: 'Early-stage startups struggle to track metrics, manage teams, and visualize growth data without expensive enterprise tools. They needed an affordable, all-in-one solution.',
          features: [
            'Real-time analytics dashboard with customizable widgets',
            'Team collaboration tools with task management',
            'Financial tracking and runway calculations',
            'Integration with popular tools (Stripe, Slack, Google Workspace)',
            'Automated reporting and data visualization'
          ],
          challenges: [
            'Handling large volumes of time-series data efficiently',
            'Creating a flexible widget system that could be customized per user',
            'Implementing secure authentication with multiple OAuth providers',
            'Optimizing database queries for complex aggregations'
          ],
          role: 'Full-Stack Developer - Built the entire backend API, designed the database schema, implemented real-time data processing, and created reusable React components for the dashboard interface.',
          impact: 'Helped 25+ startups gain better visibility into their metrics, resulting in data-driven decision making. Reduced time spent on reporting by 70% and increased team productivity by 35%.'
        }
      },
      {
        name: 'Corporate Landing Pages',
        slug: 'corporate-landing-pages',
        description: 'High-converting landing pages for Nigerian companies',
        image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800',
        tags: ['Next.js', 'Framer Motion', 'TailwindCSS'],
        liveUrl: '#',
        details: {
          problem: 'Nigerian companies needed professional, fast-loading landing pages that could compete with international standards while reflecting local market needs and cultural nuances.',
          features: [
            'Blazing-fast page loads with Next.js static generation',
            'Smooth animations and micro-interactions with Framer Motion',
            'Mobile-first responsive design optimized for Nigerian internet speeds',
            'SEO optimization with meta tags and structured data',
            'A/B testing integration for conversion optimization'
          ],
          challenges: [
            'Optimizing images and assets for slow internet connections',
            'Creating culturally relevant designs that appeal to Nigerian audiences',
            'Implementing analytics while respecting user privacy',
            'Balancing visual appeal with performance'
          ],
          role: 'Frontend Developer & Designer - Designed and developed landing pages from concept to deployment, collaborated with marketing teams on conversion strategies, and provided ongoing performance optimization.',
          impact: 'Created 15+ landing pages with an average conversion rate improvement of 45%. Pages consistently score 95+ on Google Lighthouse performance tests.'
        }
      },
    ],
  },
  {
    id: 'media',
    title: 'Media & Design Strategy',
    icon: Palette,
    description: 'Creative direction, voiceovers, and video editing',
    image: 'https://images.unsplash.com/photo-1492619375914-88005aa9e8fb?w=800',
    projects: [
      {
        name: 'Brand Campaign Videos',
        slug: 'brand-campaign-videos',
        description: 'Video editing and post-production for top Nigerian brands',
        image: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=800',
        tags: ['Video Editing', 'Motion Graphics', 'Branding'],
        liveUrl: '#',
        details: {
          problem: 'Nigerian brands needed high-quality video content that could compete with international standards while maintaining authentic local appeal and storytelling.',
          features: [
            'Professional video editing using Adobe Premiere Pro and After Effects',
            'Custom motion graphics and animated brand elements',
            'Color grading and audio mastering',
            'Multi-platform optimization (social media, TV, web)',
            'Storyboarding and creative direction'
          ],
          challenges: [
            'Working with limited raw footage to create compelling narratives',
            'Balancing brand guidelines with creative innovation',
            'Meeting tight deadlines without compromising quality',
            'Optimizing videos for different platforms and formats'
          ],
          role: 'Video Editor & Creative Director - Led the entire post-production process, collaborated with brands on creative concepts, managed a team of motion graphics artists, and ensured brand consistency across all deliverables.',
          impact: 'Produced 50+ brand videos that generated over 5 million views across platforms. Helped clients achieve 60% increase in brand awareness and 35% boost in engagement rates.'
        }
      },
      {
        name: 'Voiceover Projects',
        slug: 'voiceover-projects',
        description: 'Professional voiceovers for commercials and corporate videos',
        image: 'https://images.unsplash.com/photo-1590602847861-f357a9332bbc?w=800',
        tags: ['Voice Acting', 'Audio Production'],
        liveUrl: '#',
        details: {
          problem: 'Companies needed authentic Nigerian voices that could deliver professional quality for commercials, documentaries, and corporate videos while maintaining cultural authenticity.',
          features: [
            'Professional voice recording in multiple Nigerian languages',
            'Audio editing and mastering',
            'Character voice acting for animations',
            'Multiple takes and revisions included',
            'Fast turnaround time (24-48 hours)'
          ],
          challenges: [
            'Maintaining vocal consistency across long recording sessions',
            'Adapting tone and style for different brand personalities',
            'Delivering broadcast-quality audio from a home studio',
            'Managing multiple projects with overlapping deadlines'
          ],
          role: 'Voice Actor & Audio Producer - Provided voice acting services, recorded and edited all audio, collaborated with directors on character development, and delivered final masters ready for broadcast.',
          impact: 'Completed 100+ voiceover projects for major Nigerian brands including banks, telecoms, and consumer goods companies. Recognized for authentic delivery that resonates with Nigerian audiences.'
        }
      },
    ],
  },
  {
    id: 'research',
    title: 'Research & Innovation',
    icon: FlaskConical,
    description: 'Collaborative research with academic institutions',
    image: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=800',
    projects: [
      {
        name: 'Innovation Lab',
        slug: 'innovation-lab',
        description: 'Co-founded research company focused on technological innovation',
        image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800',
        tags: ['R&D', 'Innovation', 'Strategy'],
        details: {
          problem: 'Nigeria lacked dedicated innovation spaces where researchers, entrepreneurs, and technologists could collaborate on solving local challenges with technology.',
          features: [
            'Physical innovation space with prototyping facilities',
            'Research collaboration platform',
            'Mentorship programs connecting experts with innovators',
            'Funding facilitation for promising projects',
            'Community events and knowledge sharing sessions'
          ],
          challenges: [
            'Securing funding and partnerships in the early stages',
            'Building credibility in the academic and business communities',
            'Balancing research focus with commercial viability',
            'Attracting and retaining top talent'
          ],
          role: 'Co-Founder & Research Director - Established the company vision and mission, built partnerships with academic institutions, led research initiatives, managed operations, and secured funding from international organizations.',
          impact: 'Successfully incubated 12 innovation projects, published 5 research papers, and created employment for 15+ researchers and engineers. The lab has become a recognized hub for technology innovation in the region.'
        }
      },
      {
        name: 'MIT Collaboration',
        slug: 'mit-collaboration',
        description: 'Research partnership with MIT professor on emerging technologies',
        image: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=800',
        tags: ['Academic Research', 'Technology'],
        details: {
          problem: 'There was a need to bridge the gap between cutting-edge research happening at institutions like MIT and practical applications in emerging markets like Nigeria.',
          features: [
            'Joint research on AI applications for developing economies',
            'Knowledge transfer programs',
            'Co-authored academic papers',
            'Pilot projects testing research in real-world scenarios',
            'Student exchange and mentorship opportunities'
          ],
          challenges: [
            'Coordinating across different time zones and work cultures',
            'Adapting research methodologies to local contexts',
            'Securing ethics approvals for research involving human subjects',
            'Translating academic research into practical applications'
          ],
          role: 'Research Collaborator - Facilitated the partnership, conducted field research in Nigeria, co-authored research papers, implemented pilot projects, and presented findings at international conferences.',
          impact: 'Co-published 3 peer-reviewed papers, presented research at 2 international conferences, and successfully piloted AI-driven solutions that are now being scaled across West Africa.'
        }
      },
    ],
  },
  {
    id: 'education',
    title: 'Education & Community',
    icon: GraduationCap,
    description: 'Teaching, program administration, and community building',
    image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800',
    projects: [
      {
        name: 'Primary Education',
        slug: 'primary-education',
        description: 'Teaching across various primary schools in Nigeria',
        image: 'https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=800',
        tags: ['Teaching', 'Curriculum', 'Mentorship'],
        details: {
          problem: 'Many Nigerian primary schools struggled with engaging modern teaching methods that could capture students\' attention and improve learning outcomes.',
          features: [
            'Interactive lesson plans incorporating technology',
            'Hands-on science and technology demonstrations',
            'Student-centered learning approaches',
            'Parent-teacher collaboration programs',
            'Assessment methods focused on understanding over memorization'
          ],
          challenges: [
            'Working with limited resources and technology',
            'Managing large class sizes (40+ students)',
            'Bridging learning gaps from inconsistent previous education',
            'Engaging students with diverse learning abilities'
          ],
          role: 'Primary School Teacher - Taught mathematics, science, and basic computer skills, developed engaging lesson plans, mentored junior teachers, and organized extracurricular technology clubs.',
          impact: 'Taught 500+ students across 5 schools, improved average test scores by 30%, and inspired 50+ students to pursue STEM education. Many former students are now in secondary school excelling in science and technology subjects.'
        }
      },
      {
        name: 'Community Programs',
        slug: 'community-programs',
        description: 'Program administration and community management initiatives',
        image: 'https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=800',
        tags: ['Leadership', 'Management', 'Community'],
        details: {
          problem: 'Local communities lacked organized programs that could bring people together, develop skills, and create positive social impact.',
          features: [
            'Skills development workshops (coding, design, business)',
            'Mentorship matching programs',
            'Community events and networking opportunities',
            'Youth empowerment initiatives',
            'Volunteer coordination and management'
          ],
          challenges: [
            'Securing sustainable funding for programs',
            'Maintaining participant engagement over time',
            'Measuring and demonstrating program impact',
            'Coordinating volunteers and managing logistics'
          ],
          role: 'Program Manager - Designed and implemented community programs, recruited and managed volunteers, secured partnerships with local organizations, managed budgets, and tracked program outcomes.',
          impact: 'Managed 10+ community programs reaching 1,000+ participants, facilitated 200+ mentorship connections, and helped 50+ community members start their own businesses or advance their careers.'
        }
      },
    ],
  },
  {
    id: 'certifications',
    title: 'Certifications & Credentials',
    icon: Award,
    description: 'Professional certifications and achievements earned',
    image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800',
    projects: [
      {
        name: 'AWS Certified Solutions Architect',
        slug: 'aws-solutions-architect',
        description: 'Amazon Web Services cloud architecture certification',
        image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800',
        tags: ['AWS', 'Cloud Computing', 'Architecture'],
        certificateUrl: '#',
        issueDate: 'March 2024',
        expiryDate: 'March 2027',
        credentialId: 'AWS-SAA-2024-12345',
        details: {
          problem: 'N/A',
          features: [],
          challenges: [],
          role: 'Demonstrated expertise in designing and deploying scalable, highly available, and fault-tolerant systems on AWS. Mastered core AWS services including EC2, S3, RDS, Lambda, and CloudFormation.',
          impact: 'Enabled me to architect cloud solutions for clients, reducing infrastructure costs by 40% and improving application performance and reliability.'
        }
      },
      {
        name: 'Google Project Management Certificate',
        slug: 'google-project-management',
        description: 'Professional certificate in project management methodologies',
        image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800',
        tags: ['Project Management', 'Agile', 'Leadership'],
        certificateUrl: '#',
        issueDate: 'January 2024',
        credentialId: 'GOOGLE-PM-2024-67890',
        details: {
          problem: 'N/A',
          features: [],
          challenges: [],
          role: 'Completed comprehensive training in project management fundamentals, agile methodologies, risk management, and stakeholder communication. Learned to use industry-standard tools and frameworks.',
          impact: 'Applied project management best practices to deliver projects 25% faster while maintaining quality. Successfully managed 5+ complex projects with cross-functional teams.'
        }
      },
      {
        name: 'HubSpot Content Marketing Certification',
        slug: 'hubspot-content-marketing',
        description: 'Digital marketing and content strategy certification',
        image: 'https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?w=800',
        tags: ['Marketing', 'Content Strategy', 'SEO'],
        certificateUrl: '#',
        issueDate: 'November 2023',
        credentialId: 'HUBSPOT-CM-2023-11223',
        details: {
          problem: 'N/A',
          features: [],
          challenges: [],
          role: 'Mastered content marketing strategies, SEO optimization, content distribution, and performance measurement. Learned to create content that drives traffic, engagement, and conversions.',
          impact: 'Increased organic traffic for client websites by 150%, improved content engagement rates by 80%, and generated 3x more qualified leads through strategic content marketing.'
        }
      },
      {
        name: 'Meta Front-End Developer Certificate',
        slug: 'meta-frontend-developer',
        description: 'Professional certification in modern front-end development',
        image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800',
        tags: ['React', 'JavaScript', 'UI/UX'],
        certificateUrl: '#',
        issueDate: 'September 2023',
        credentialId: 'META-FE-2023-44556',
        details: {
          problem: 'N/A',
          features: [],
          challenges: [],
          role: 'Completed intensive training in React, JavaScript ES6+, HTML/CSS, responsive design, and version control. Built multiple real-world projects demonstrating proficiency in modern front-end development.',
          impact: 'Enhanced development skills leading to 40% faster project delivery, improved code quality, and ability to build production-ready React applications that scale.'
        }
      },
    ],
  },
];

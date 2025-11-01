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
      name: 'ORBIT',
      slug: 'orbit-platform',
      description: 'An EdTech and career clarity platform empowering learners with guided pathways and job readiness tools.',
      image: 'https://res.cloudinary.com/dergk96ic/image/upload/v1761996109/orbit-logo-white_ekzqm7.png',
      tags: ['Next.js', 'TypeScript', 'TailwindCSS', 'Accessibility'],
      liveUrl: 'https://www.getorbit.org',
      githubUrl: '#',
      details: {
        problem: 'Learners in Africa struggle to navigate tech career paths due to fragmented learning resources and lack of clarity around job readiness.',
        features: [
          'Interactive career roadmap and guided learning paths',
          'Responsive, accessible frontend architecture',
          'Integration with course APIs and mentorship modules',
          'Fast-loading pages optimized for performance and SEO',
          'Scalable UI components built with TypeScript and TailwindCSS'
        ],
        challenges: [
          'Maintaining accessibility across multiple breakpoints',
          'Ensuring consistent UX during content-heavy page loads',
          'Designing modular components for future scalability'
        ],
        role: 'Frontend Developer - Built responsive UIs, implemented design system, and ensured WCAG-compliant accessibility using Next.js and TypeScript.',
        impact: 'Enabled 2,000+ learners to access structured career resources, improving learning outcomes and job readiness among users across Nigeria.'
      }
    },
    {
      name: 'DAWB ',
      slug: 'dawb-platform',
      description: 'A live-learning EdTech platform providing data analytics training with integrated LMS features.',
      image: 'https://res.cloudinary.com/dergk96ic/image/upload/v1761996328/Dawb_logo_letters_v4y3fr.png',
      tags: ['Next.js', 'TypeScript', 'Supabase', 'TailwindCSS', 'Power BI'],
      liveUrl: 'https://www.dawblearn.org',
      githubUrl: '#',
      details: {
        problem: 'IT trainees lacked a live-interactive environment for data analytics learning, mentorship, and portfolio-building in one platform.',
        features: [
          'Live class integration with real-time updates',
          'Student dashboard and course progress tracking',
          'Admin panel for managing cohorts and content',
          'Integration with Power BI and SQL for analytics practice',
          'Scalable Supabase backend with secure authentication'
        ],
        challenges: [
          'Implementing seamless live-class scheduling and updates',
          'Designing CI/CD pipelines for frequent deployments',
          'Balancing scalability and cost during early growth phase'
        ],
        role: 'Full-Stack Developer & Program Lead - Architected and deployed the LMS platform, managed Supabase backend, led a 3-month data analytics bootcamp, and maintained CI/CD pipelines.',
        impact: 'Trained 20+ learners in data analytics, achieving 90% course completion rate, and established DAWB as a trusted live-learning platform in Nigeria.'
      }
    },
    {
      name: 'Alaafia',
      slug: 'alaafia-finance',
      description: 'A fintech platform empowering Nigerian market women with microloans and financial education.',
      image: 'https://res.cloudinary.com/dergk96ic/image/upload/v1761995598/Black_White_Minimal_Simple_Modern_Letter_A_Arts_Gallery_Logo_sx90ef.png',
      tags: ['Next.js', 'TailwindCSS', 'Microfinance', 'UI Design'],
      liveUrl: 'https://www.alaafiahq.com',
      githubUrl: '#',
      details: {
        problem: 'Millions of nano-business owners lack access to credit and financial literacy, leaving them excluded from formal financial systems.',
        features: [
          'Fast-loading landing page for onboarding users',
          'Educational resources for financial literacy',
          'Microloan request and management dashboard (MVP)',
          'Simple UI optimized for low-end devices and browsers'
        ],
        challenges: [
          'Building and deploying under 24 hours for a product demo',
          'Designing a clear, culturally relevant UX for local users',
          'Optimizing for mobile-first access and low bandwidth'
        ],
        role: 'Full-Stack Developer - Designed and developed the web app MVP, implemented platform architecture, and handled deployment using Next.js.',
        impact: 'Delivered a functional prototype in 24 hours, enabling the client to secure stakeholder interest and pilot financial inclusion initiatives for market women.'
      }
    },
    {
      name: 'Plus Incubation Hub (PIH)',
      slug: 'plus-incubation-hub',
      description: 'Official website for a tech innovation hub supporting startups and entrepreneurs.',
      image: 'https://res.cloudinary.com/dergk96ic/image/upload/v1761996406/WhatsApp_Image_2025-03-22_at_23.52.08_raacgs.jpg',
      tags: ['HTML', 'Bootstrap', 'JavaScript', 'Google Apps Script'],
      liveUrl: 'https://www.plusincubationhub.com',
      githubUrl: '#',
      details: {
        problem: 'The company needed a fast, professional website to highlight programs, partners, and events while automating newsletter subscriptions.',
        features: [
          'Responsive multi-section layout with Bootstrap 5',
          'Automated newsletter signup integrated with Google Sheets',
          'Event showcase and partner carousel sections',
          'Simple CMS-like content update workflow'
        ],
        challenges: [
          'Integrating Google Apps Script automation with static pages',
          'Designing an intuitive and mobile-first layout',
          'Meeting short contract deadlines for delivery'
        ],
        role: 'Contract Full-Stack Developer - Built and deployed the official site, automated subscriber workflow, and optimized assets for fast loading.',
        impact: 'Delivered a functional site under deadline, improving engagement tracking and brand visibility for the innovation hub.'
      }
    },
    {
      name: 'Prox Aids',
      slug: 'prox-aids-ecommerce',
      description: 'An e-commerce VTU platform providing airtime, data, and bill payment services.',
      image: 'https://res.cloudinary.com/dergk96ic/image/upload/v1761995897/prox_logo_hokzsu.png',
      tags: ['Next.js', 'E-commerce', 'Business Management'],
      liveUrl: 'https://www.prox.com.ng',
      githubUrl: '#',
      details: {
        problem: 'Customers needed a reliable and simple way to purchase airtime, data, and pay bills without delays or platform errors.',
        features: [
          'User dashboard with transaction history',
          'Automated payments and wallet top-up system',
          'Secure API integrations with telecom providers',
          'Admin tools for user management and transaction monitoring'
        ],
        challenges: [
          'Maintaining 99% uptime for payment operations',
          'Managing customer support and service reliability',
          'Optimizing backend integrations for transaction speed'
        ],
        role: 'Business Manager & Full-Stack Developer - Oversaw platform operations, handled payment API integrations, managed 500+ customer accounts, and ensured platform reliability.',
        impact: 'Increased customer retention to 85%, achieving over 500 active users and maintaining consistent transaction uptime across services.'
      }
    }
  ]
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
        liveUrl: 'https://drive.google.com/drive/folders/1paleL4EATBBvx--HZRjvDSZ9RN2qxXpj?usp=sharing',
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
  title: 'Education',
  icon: GraduationCap,
  description: 'Teaching across nursery and primary schools, nurturing young learners through foundational education and digital literacy',
  image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800',
  projects: [
    {
      name: 'Ambassador Nursery & Primary School',
      slug: 'ambassador-nursery-primary-school',
      description: 'Taught kindergarten and nursery classes while introducing after-school learning programs for primary pupils.',
      image: 'https://images.unsplash.com/photo-1596495577886-d920f1fb7238?w=800',
      tags: ['Early Childhood Education', 'Lesson Design', 'Mentorship'],
      details: {
        problem: 'Young learners required personalized teaching to strengthen literacy and numeracy skills, while the school needed creative approaches to sustain student engagement.',
        features: [
          'Taught Kindergarten and Nursery 5 classes with a focus on phonics, reading comprehension, and basic numeracy',
          'Organized after-school lessons for 25 primary pupils to reinforce classroom learning',
          'Introduced early technology exposure through visual and interactive learning aids',
          'Developed child-friendly learning materials for pupils with varying learning paces'
        ],
        challenges: [
          'Maintaining engagement among very young learners with short attention spans',
          'Balancing multiple class levels while ensuring quality learning experiences',
          'Creating affordable but effective teaching aids within limited school resources'
        ],
        role: 'Class Teacher — Taught foundational subjects, managed lesson delivery and assessment, and provided individualized academic support to pupils.',
        impact: 'Taught over 40 pupils across kindergarten and nursery levels, improving literacy readiness and confidence. After-school lessons led to measurable progress in Mathematics and English proficiency among primary pupils.'
      }
    },
    {
      name: 'Abied Nursery & Primary School',
      slug: 'abied-nursery-primary-school',
      description: 'Taught final-year primary pupils, focusing on academic excellence and computer literacy.',
      image: 'https://images.unsplash.com/photo-1596496051296-2d1d06c2c23b?w=800',
      tags: ['Primary Education', 'STEM', 'Exam Preparation', 'Digital Literacy'],
      details: {
        problem: 'Graduating pupils needed targeted academic preparation and practical technology exposure to succeed in common entrance examinations and secondary education.',
        features: [
          'Taught Primary 6 class of 10 pupils core subjects including Mathematics, English, and Basic Science',
          'Prepared students for common entrance examinations with mock tests and revision programs',
          'Introduced basic computer literacy and practical Microsoft Excel training sessions',
          'Designed lesson notes and visual aids to improve comprehension and retention'
        ],
        challenges: [
          'Bridging knowledge gaps from earlier class levels',
          'Adapting lessons for both exam preparation and digital literacy',
          'Limited access to computers for practical sessions'
        ],
        role: 'Primary 6 Class Teacher — Led academic instruction, examination preparation, and hands-on computer lessons for final-year pupils.',
        impact: 'Improved examination readiness across all pupils, with 100% successfully gaining admission into secondary schools. Introduced 10 students to basic computer use and Microsoft Excel, enhancing digital competence at an early stage.'
      }
    },
    {
      name: 'Faith Cush Nursery & Primary School',
      slug: 'faith-cush-nursery-primary-school',
      description: 'Delivered engaging, personalized instruction to early primary pupils in Ibadan, Oyo State.',
      image: 'https://images.unsplash.com/photo-1603575448762-df5b0d1ccf58?w=800',
      tags: ['Primary Education', 'Child Development', 'Creative Learning'],
      details: {
        problem: 'Primary 3 pupils needed a more interactive and nurturing learning approach to sustain interest and comprehension across core subjects.',
        features: [
          'Taught Mathematics, English, and Science to 5 primary pupils in a personalized setting',
          'Used play-based and storytelling approaches to simplify complex concepts',
          'Encouraged reading culture through daily comprehension and oral presentation exercises',
          'Monitored academic progress through weekly performance evaluations'
        ],
        challenges: [
          'Small class size requiring individualized teaching plans',
          'Maintaining consistent motivation among young pupils',
          'Designing creative learning strategies without digital tools'
        ],
        role: 'Primary School Teacher — Developed and delivered interactive lesson plans tailored to learners’ individual needs.',
        impact: 'Enhanced literacy and numeracy confidence among all 5 pupils. Parents reported noticeable improvement in reading fluency and classroom participation.'
      }
    },
    {
      name: 'Private Home Tutoring',
      slug: 'private-home-tutoring',
      description: 'Delivered personalized home lessons for primary and junior secondary students from three different families.',
      image: 'https://images.unsplash.com/photo-1604881991720-f91add269bed?w=800',
      tags: ['Home Tutoring', 'Personalized Learning', 'Assessment'],
      details: {
        problem: 'Parents sought additional academic support for their children outside school hours to strengthen foundational understanding and performance.',
        features: [
          'Provided one-on-one academic tutoring across Mathematics, English, and Basic Science',
          'Developed personalized learning schedules for each learner',
          'Monitored progress through weekly tests and feedback sessions',
          'Collaborated with parents to address specific learning challenges'
        ],
        challenges: [
          'Adapting teaching style to diverse home environments and learning speeds',
          'Balancing time across multiple households',
          'Sustaining student focus in informal learning settings'
        ],
        role: 'Private Tutor — Provided tailored academic guidance to six pupils from three families, ensuring steady academic growth through customized lesson plans and continuous evaluation.',
        impact: 'Improved pupils’ grades by an average of 25% within three months of consistent tutoring. Strengthened parents’ trust in home-based learning and improved learner confidence and discipline.'
      }
    }
  ]
},


   {
    id: 'ngo & community',
    title: 'NGO & Community',
    icon: GraduationCap,
    description: 'Teaching, program administration, and community building',
    image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800',
    projects: [
      {
        name: 'Primary community',
        slug: 'primary-community',
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
            'Bridging learning gaps from inconsistent previous community',
            'Engaging students with diverse learning abilities'
          ],
          role: 'Primary School Teacher - Taught mathematics, science, and basic computer skills, developed engaging lesson plans, mentored junior teachers, and organized extracurricular technology clubs.',
          impact: 'Taught 500+ students across 5 schools, improved average test scores by 30%, and inspired 50+ students to pursue STEM community. Many former students are now in secondary school excelling in science and technology subjects.'
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

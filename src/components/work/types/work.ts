// components/work/types/work.ts

import { LucideIcon } from 'lucide-react';

export interface ProjectDetails {
  problem: string;
  features: string[];
  challenges: string[];
  role: string;
  impact: string;
}

export interface Project {
  name: string;
  slug: string;
  description: string;
  image: string;
  tags: string[];
  liveUrl?: string;
  githubUrl?: string;
  certificateUrl?: string;
  issueDate?: string;
  expiryDate?: string;
  credentialId?: string;
  details: ProjectDetails;
}

export interface WorkSection {
  id: string;
  title: string;
  icon: LucideIcon;
  description: string;
  image: string;
  projects: Project[];
}
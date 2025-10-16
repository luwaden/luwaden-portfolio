export type Project = {
  name: string;
  description: string;
  tags: string[];
  liveUrl?: string;
  githubUrl?: string;
  slug: string; // For URL routing
};

export type WorkSection = {
  id: string;
  title: string;
  icon: React.ElementType;
  description: string;
  projects: Project[];
};
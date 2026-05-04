export interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  liveUrl: string;
  githubUrl: string;
  image: string;
}

export interface Skill {
  name: string;
  level: number;
  category: "frontend" | "backend" | "tools" | "other";
}

export interface SocialLink {
  label: string;
  url: string;
  icon: string;
}

export interface Profile {
  name: string;
  title: string;
  bio: string;
  email: string;
  location: string;
  avatar: string;
  resumeUrl: string;
  socials: SocialLink[];
}

export interface Achievement {
  title: string;
  description: string;
  icon: string;
}
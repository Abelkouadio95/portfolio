export type SkillLevel = "intermédiaire" | "avancé" | "expert";

export type SkillCategory =
  | "data"
  | "languages"
  | "frontend"
  | "backend"
  | "tools"
  | "db"
  | "ov";

export interface Skill {
  name: string;
  level: SkillLevel;
  category: SkillCategory;
}

export interface Experience {
  title: string;
  company: string;
  location?: string;
  period: string;
  description: string;
  details?: string[];
  technologies?: string[];
}

export interface Education {
  degree: string;
  institution: string;
  location: string;
  period: string;
  description: string;
  mention?: string;
  relevantCourses?: string[];
}

export interface CaseStudy {
  context: string;
  problem: string;
  solution: string;
  results: string[];
}

export interface Project {
  id: string;
  title: string;
  shortDescription: string;
  longDescription: string[];
  imageSrc: string;
  tags?: string[];
  features?: string[];
  demoUrl?: string;
  sourceUrl?: string;
  category?: string;
  caseStudy?: CaseStudy;
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  date: string;
  description: string;
  skills: string[];
  tools: string[];
  imageUrl: string;
  credentialUrl?: string;
  category: 'data-analysis' | 'web-development' | 'machine-learning' | 'language' | 'python'| 'other';
}
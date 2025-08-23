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
}

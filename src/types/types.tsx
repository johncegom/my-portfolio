// Use PascalCase for interface and type names
export interface ProjectType {
  id: string;
  image: string;
  title: string;
  text: string;
  technologies: string;
  link: string;
  repo: string;
  textVie: string;
  type: string;
}

export type SkillType = string;

// Use arrays directly instead of creating a type alias for an array
export type SkillsType = SkillType[];

export type ProjectsType = ProjectType[];

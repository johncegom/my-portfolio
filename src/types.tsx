export interface project {
  id: string;
  image: string;
  title: string;
  text: string;
  technologies: string;
  link: string;
  repo: string;
  textVie: string;
}

export type skill = string;

export type skills = skill[];

export type projects = project[];

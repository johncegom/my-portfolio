import Project from "../common/Project";
import { ProjectsType } from "../../types/types";

interface ProjectsProps {
  projects: ProjectsType;
  language?: string;
}

const Projects = ({ projects, language = "English" }: ProjectsProps) => {
  return (
    <section id="projects">
      <div className="container m-auto px-4">
        <h2 className="text-2xl font-semibold">
          {language === "English" ? "Projects" : "Dự Án"}
        </h2>
        <div className="flex gap-6 mt-10 flex-wrap">
          {projects.map<JSX.Element>((project, index) => (
            <Project key={index} project={project} language={language} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

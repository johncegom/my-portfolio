import Project from "../common/Project";
import { projects } from "../../types/types";

interface ProjectsType {
  projects: projects;
  language?: string;
}

const Projects = ({ projects, language = "English" }: ProjectsType) => {
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

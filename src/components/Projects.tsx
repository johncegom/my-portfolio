import Project from "./Project";
import { projects } from "../types";

interface ProjectsType {
  projects: projects;
}

const Projects = ({ projects }: ProjectsType) => {
  return (
    <section id="projects">
      <div className="container m-auto px-4">
        <h2 className="text-2xl font-semibold">Projects</h2>
        <div className="flex gap-10 mt-10 flex-wrap">
          {projects.map<JSX.Element>((project, index) => {
            return <Project key={index} project={project} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;

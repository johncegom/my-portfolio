import Project from "../common/Project";
import { ProjectsType } from "../../types/types";
import { SupportedLanguage } from "../../translations/translation";
import { useTranslation } from "../../hooks/useTranslation";

interface ProjectsProps {
  projects: ProjectsType;
  language?: SupportedLanguage;
}

const Projects = ({ projects, language = "English" }: ProjectsProps) => {
  const { translate } = useTranslation(language);

  return (
    <section id="projects">
      <div className="container m-auto px-4">
        <h2 className="text-2xl font-semibold">
          {translate("projects", "title")}
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

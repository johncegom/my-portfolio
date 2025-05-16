import Project from "../common/Project";
import { ProjectsType } from "../../types/types";
import { SupportedLanguage } from "../../translations/translation";
import { useTranslation } from "../../hooks/useTranslation";
import { ProjectsLayoutSkeleton } from "../common/ProjectSkeleton";

interface ProjectsProps {
  projects: ProjectsType;
  language?: SupportedLanguage;
  loading: boolean;
}

const Projects = ({
  projects,
  loading,
  language = "English",
}: ProjectsProps) => {
  const { translator } = useTranslation(language);
  const projectsTranslation = translator("projects");

  return (
    <section id="projects">
      <div className="container m-auto px-4">
        <h2 className="text-2xl font-semibold">
          {projectsTranslation("title")}
        </h2>
        {loading ? (
          <ProjectsLayoutSkeleton count={3} />
        ) : (
          <div className="flex gap-6 mt-10 flex-wrap">
            {projects.map<JSX.Element>((project, index) => (
              <Project
                key={`project-${index}`}
                project={project}
                language={language}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;

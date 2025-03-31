import { useState } from "react";
import { useTranslation } from "../../hooks/useTranslation";
import { SupportedLanguage } from "../../translations/translation";
import { ProjectType } from "../../types/types";
import { ProjectImageFallback, ProjectImageSkeleton } from "./ProjectSkeleton";

interface ProjectProps {
  project: ProjectType;
  language?: SupportedLanguage;
}

const Project = ({ project, language = "English" }: ProjectProps) => {
  const { translate } = useTranslation(language);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  return (
    <div className="md:flex-[1_380px] border border-gray-500 rounded-md p-5 flex flex-col shadow-black/50 shadow-lg relative gap-6">
      <a href={project.link} target="_blank" rel="noopener noreferrer">
        {!imageLoaded && <ProjectImageSkeleton />}
        {imageError && <ProjectImageFallback title={project.title} />}
        <img
          className="w-full h-auto lg:aspect-video lg:object-contain"
          src={project.image}
          alt={`${project.title} screenshot`}
          loading="lazy"
          onLoad={() => setImageLoaded(true)}
          onError={() => setImageError(true)}
        />
      </a>
      <a href={project.link} target="_blank">
        <h3 className="text-2xl font-semibold">{project.title}</h3>
      </a>
      <p className="text-gray-400 text-sm">
        {language === "English" ? project.text : project.textVie}
      </p>
      <p className="text-gray-300 technologies text-sm mt-auto">
        <span className="font-semibold">{project.technologies}</span>
      </p>
      <div className="flex justify-evenly gap-3">
        <a
          href={project.link}
          target="_blank"
          className="flex flex-1 py-3 px-1 text-center justify-center items-center rounded-full bg-gradient-to-t from-red-500 to-orange-500 hover:from-red-700 hover:to-orange-700 cursor-pointer"
        >
          {translate("project", "preview")}
        </a>
        <a
          href={project.repo}
          target="_blank"
          className="flex flex-1 py-3 px-1 text-center justify-center items-center border rounded-full hover:border-gray-500 hover:text-orange-500 cursor-pointer"
        >
          {translate("project", "github")}
        </a>
      </div>
      <div className="absolute right-0 top-0 bg-[#EA403F] text-[#FFFE4E] py-2 px-4 rounded-tr-sm hover:cursor-default">
        {project.type || "Solo Project"}
      </div>
    </div>
  );
};

export default Project;

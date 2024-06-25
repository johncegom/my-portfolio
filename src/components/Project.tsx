import { project } from "../types";

interface ProjectType {
  project: project;
  language?: string;
}

const Project = ({ project, language = "English" }: ProjectType) => {
  return (
    <div className="md:flex-[1_1_30%] border border-gray-500 rounded-md p-5 flex flex-col justify-between shadow-black/50 shadow-lg relative">
      <a href={project.link} target="_blank">
        <img
          className="w-full h-auto block ml-auto mr-auto"
          src={project.image}
          alt="Project Images"
        />
      </a>
      <a href={project.link} target="_blank">
        <h3 className="text-2xl font-semibold mt-6">{project.title}</h3>
      </a>
      <p className="text-gray-400 text-sm mt-2">
        {language === "English" ? project.text : project.textVie}
      </p>
      <p className="text-gray-300 mt-10 technologies text-sm">
        <span className="font-semibold">{project.technologies}</span>
      </p>
      <div className="flex justify-evenly mt-6 gap-3">
        <a
          href={project.link}
          target="_blank"
          className="flex flex-1 py-3 px-1 text-center justify-center items-center rounded-full bg-gradient-to-t from-red-500 to-orange-500 hover:from-red-700 hover:to-orange-700 cursor-pointer"
        >
          {language === "English" ? "Live Preview" : "Xem Bản Mẫu"}
        </a>
        <a
          href={project.repo}
          target="_blank"
          className="flex flex-1 py-3 px-1 text-center justify-center items-center border rounded-full hover:border-gray-500 hover:text-orange-500 cursor-pointer"
        >
          {language === "English" ? "Checkout Github" : "Xem Mã Nguồn"}
        </a>
      </div>
      <div className="absolute right-0 top-0 bg-[#EA403F] text-[#FFFE4E] py-2 px-4 rounded-tr-sm hover:cursor-default">
        {project.type || "Solo Project"}
      </div>
    </div>
  );
};

export default Project;

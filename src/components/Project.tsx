import { project } from "../types";

interface ProjectType {
  project: project;
}

const Project = ({ project }: ProjectType) => {
  return (
    <div className="flex-[1_1_25%] border border-gray-500 rounded-md p-5 flex flex-col justify-between">
      <img
        className="w-full h-auto block ml-auto mr-auto"
        src={project.image}
        alt="Project Images"
      />
      <h3 className="text-2xl font-semibold mt-6">{project.title}</h3>
      <p className="text-gray-400 text-sm mt-2">{project.text}</p>
      <p className="text-gray-300">
        <span className="font-bold">Technologies: </span>
        <span className="font-semibold">{project.technologies}</span>
      </p>
      <div className="flex justify-evenly mt-6 gap-3">
        <a
          href={project.link}
          target="_blank"
          className="flex flex-1 py-3 px-1 text-center justify-center items-center rounded-full bg-gradient-to-t from-red-500 to-orange-500 hover:from-red-700 hover:to-orange-700 cursor-pointer"
        >
          Live Preview
        </a>
        <a
          href={project.repo}
          target="_blank"
          className="flex flex-1 py-3 px-1 text-center justify-center items-center border rounded-full hover:border-orange-500 hover:text-orange-500 cursor-pointer"
        >
          Checkout Github
        </a>
      </div>
    </div>
  );
};

export default Project;

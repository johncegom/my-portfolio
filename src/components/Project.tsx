interface ProjectTypes {
  image: string;
  title: string;
  text: string;
}

const Project = ({ image, title, text }: ProjectTypes) => {
  return (
    <section>
      <div className="border border-gray-500 rounded-md p-5">
        <img className="w-full h-auto" src={image} alt="Project Images" />
        <h3 className="text-2xl font-semibold mt-6">{title}</h3>
        <p className="text-gray-400 text-sm mt-2">{text}</p>
        <div className="flex justify-evenly mt-6 gap-3">
          <button className="px-6 py-3 rounded-full bg-gradient-to-t from-blue-500 to-cyan-500 hover:from-blue-700 hover:to-cyan-700">
            Live Preview
          </button>
          <button className="px-6 py-3 border rounded-full hover:border-blue-500 hover:text-blue-500">
            Checkout Github
          </button>
        </div>
      </div>
    </section>
  );
};

export default Project;

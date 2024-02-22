import VnFlag from "../assets/vn-flag.svg";
interface BannerTypes {
  avatar: string;
}

const Banner = ({ avatar }: BannerTypes) => {
  return (
    <main>
      <div className="container m-auto px-4 py-10 flex flex-col lg:flex-row gap-6 cursor-default">
        <div>
          <div className="flex justify-center flex-col">
            <h1 className="font-bold text-3xl flex flex-row gap-2">
              Hi, I'm Minh Duong
              <img src={VnFlag} className="w-10" />
            </h1>
            <h1 className="font-bold text-3xl mt-1 gradient-text">
              Software Engineer
            </h1>
          </div>
          <p className="mt-4 text-gray-400 text-justify">
            Seasoned Software Engineer with 3 years of expertise in Telecom
            projects. I've thrived in cross-functional teams, collaborating
            seamlessly to deliver high-quality software solutions.
          </p>
          <p className="mt-1 text-gray-400 text-justify">
            Now, I'm eager to transition to Frontend Developer, driven by my
            passion for crafting visually compelling user experiences. Let's
            collaborate and build something extraordinary together!
          </p>
        </div>
        <div className="relative w-72 flex items-center">
          <img
            src={avatar}
            alt="Profile's avatar"
            className="relative z-10 border-2 left-auto hidden lg:block lg:left-10 border-orange-300 rounded-full w-[150px] h-[150px] lg:w-44 lg:h-40 object-cover object-top"
          />
        </div>
      </div>
    </main>
  );
};

export default Banner;

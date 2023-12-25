interface BannerTypes {
  avatar: string;
}

const Banner = ({ avatar }: BannerTypes) => {
  return (
    <main>
      <div className="container m-auto px-4 py-10 flex gap-6">
        <div>
          <h1 className="font-bold text-3xl">Hello I'm Minh Duong</h1>
          <h1 className="font-bold text-3xl mt-1 gradient-text">
            Software Engineer
          </h1>
          <p className="mt-4 text-gray-400">
            Seasoned Software Engineer with 3 years of expertise in Telecom
            projects. I've thrived in cross-functional teams, collaborating
            seamlessly to deliver high-quality software solutions. Now, I'm
            eager to transition to Frontend Developer, driven by my passion for
            crafting visually compelling user experiences. Let's collaborate and
            build something extraordinary together!
          </p>
        </div>
        <div className="relative w-72 flex items-center">
          <img
            src={avatar}
            alt="Profile's avatar"
            className="relative z-10 border-2 border-orange-300 rounded-full w-44 h-40 object-cover object-top"
          />
        </div>
      </div>
    </main>
  );
};

export default Banner;

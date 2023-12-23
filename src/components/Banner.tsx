interface BannerTypes {
  avatar: string;
}

const Banner = ({ avatar }: BannerTypes) => {
  return (
    <main>
      <section>
        <div className="container m-auto px-4 py-10 flex gap-6">
          <div>
            <h1 className="font-bold text-3xl">Hello I'm Minh Duong</h1>
            <h1 className="font-bold text-3xl mt-1 gradient-text">
              Software Engineer
            </h1>
            <p className="mt-4 text-gray-400">
              A seasoned Software Engineer with 3 years of expertise in Telecom
              projects. I've thrived in cross-functional teams, collaborating
              seamlessly to deliver high-quality software solutions. Now, I'm
              eager to transition to Frontend development, driven by my passion
              for crafting visually compelling user experiences. Let's
              collaborate and build something extraordinary together!
            </p>
          </div>
          <div className="relative w-72 flex items-center">
            <img
              src={avatar}
              alt="Profile's avatar"
              className="relative z-10 border-2 border-orange-300 rounded-tl-full rounded-br-full rounded-bl-md rounded-tr-md w-full overflow-hidden object-cover"
            />
          </div>
        </div>
      </section>
    </main>
  );
};

export default Banner;

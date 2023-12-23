interface BannerTypes {
  avatar: string;
  avatarbg: string;
}

const Banner = ({ avatar, avatarbg }: BannerTypes) => {
  return (
    <main>
      <section>
        <div className="container m-auto px-4 py-10 flex gap-6">
          <div>
            <h1 className="font-bold text-3xl">Hello I'm Minh Duong</h1>
            <h1 className="font-bold text-3xl mt-1 gradient-text">
              Software Engineering
            </h1>
            <p className="mt-4 text-gray-400">
              I'm a seasoned software engineer with 3 years of expertise in
              Telecom projects. I've thrived in cross-functional teams,
              collaborating seamlessly to deliver high-quality software
              solutions. Now, I'm eager to transition to frontend development,
              driven by my passion for crafting visually compelling user
              experiences. Let's collaborate and build something extraordinary
              together!
            </p>
          </div>
          <div className="relative">
            <img
              src={avatar}
              alt="Profile's avatar"
              width={520}
              className="relative z-10"
            />
            <img src={avatarbg} className="absolute top-0 left-12 z-0" />
          </div>
        </div>
      </section>
    </main>
  );
};

export default Banner;

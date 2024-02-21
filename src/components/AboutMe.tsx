const AboutMe = () => {
  return (
    <section id="aboutme" className="py-8">
      <div className="container m-auto px-4">
        <h2 className="text-2xl font-semibold">About Me</h2>
        <div className="ml-10 mt-12 relative before:absolute before:top-1 before:left-4 before:bottom-0 before:w-1 before:bg-white">
          <div className="ml-10 mb-7 relative before:w-4 before:h-4 before:bg-gradient-to-t before:from-red-500 before:to-orange-500 before:absolute before:rounded-full before:-left-[30px] before:top-1">
            <h3 className="absolute -left-20 text-lg font-semibold">2020</h3>
            <h4 className="font-bold text-lg text-gray-300">
              DEK Technologies
            </h4>
            <p>Started as fresher Telecommunication Application Developer.</p>
          </div>
          <div className="ml-10 mb-7 relative before:w-4 before:h-4 before:bg-gradient-to-t before:from-red-500 before:to-orange-500 before:absolute before:rounded-full before:-left-[30px] before:top-1">
            <h3 className="absolute -left-20 text-lg font-semibold">2021</h3>
            <h4 className="font-bold text-lg text-gray-300">
              Can Tho University
            </h4>
            <p>
              Graduated with a Engineer's degree in Information Technology (High
              Quality Program).
            </p>
          </div>
          <div className="ml-10 mb-7 relative before:w-4 before:h-4 before:bg-gradient-to-t before:from-red-500 before:to-orange-500 before:absolute before:rounded-full before:-left-[30px] before:top-1">
            <h3 className="absolute -left-20 text-lg font-semibold">2023</h3>
            <h4 className="font-bold text-lg text-gray-300">
              DEK Technologies
            </h4>
            <p>
              Experienced Telecommunication Application Developer, achieved
              proficiency in Erlang. Notably, contribute to project success by
              efficiently training newcomers in Session Initiation Protocol
              (SIP) for faster onboarding.
            </p>
            <p>
              Have acted as Scrum Master around 1 year, invested time and effort
              into researching and implementing the Scrum framework, achieving
              notable improvements in optimizing the team's way of working.
            </p>
          </div>
          <div className="ml-10 mb-7 relative before:w-4 before:h-4 before:bg-gradient-to-t before:from-red-500 before:to-orange-500 before:absolute before:rounded-full before:-left-[30px] before:top-1">
            <h3 className="absolute -left-20 text-lg font-semibold">Now</h3>
            <h4 className="font-bold text-lg text-gray-300">Self-Taught</h4>
            <p>
              Embarking on a journey into Frontend Developer, applying technical
              prowess to create captivating user interfaces.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;

interface AboutMeType {
  language?: string;
}

const AboutMe = ({ language = "English" }: AboutMeType) => {
  return (
    <section id="aboutme" className="py-8">
      <div className="container m-auto px-4">
        <h2 className="text-2xl font-semibold">
          {language === "English" ? "About Me" : "Về Tôi"}
        </h2>
        <div className="ml-10 mt-12 relative before:absolute before:top-1 before:left-4 before:bottom-0 before:w-1 before:bg-white">
          <div className="ml-10 mb-7 relative before:w-4 before:h-4 before:bg-gradient-to-t before:from-red-500 before:to-orange-500 before:absolute before:rounded-full before:-left-[30px] before:top-1">
            <h3 className="absolute -left-20 text-lg font-semibold">2020</h3>
            <h4 className="font-bold text-lg text-gray-300">
              DEK Technologies
            </h4>
            <p>
              {language === "English"
                ? "Started as fresher Telecommunication Application Developer."
                : "Chập chững bước vào ngành với vai trò là Telecommunication Application Developer."}
            </p>
          </div>
          <div className="ml-10 mb-7 relative before:w-4 before:h-4 before:bg-gradient-to-t before:from-red-500 before:to-orange-500 before:absolute before:rounded-full before:-left-[30px] before:top-1">
            <h3 className="absolute -left-20 text-lg font-semibold">2021</h3>
            <h4 className="font-bold text-lg text-gray-300">
              Can Tho University
            </h4>
            <p>
              {language === "English"
                ? "Graduated with a Engineer's degree in Information Technology (HighQuality Program)."
                : "Tốt nghiệp bằng kỹ sư chuyên ngành Công Nghệ Thông Tin (Chương Trình Chất Lượng Cao)."}
            </p>
          </div>
          <div className="ml-10 mb-7 relative before:w-4 before:h-4 before:bg-gradient-to-t before:from-red-500 before:to-orange-500 before:absolute before:rounded-full before:-left-[30px] before:top-1">
            <h3 className="absolute -left-20 text-lg font-semibold">2023</h3>
            <h4 className="font-bold text-lg text-gray-300">
              DEK Technologies
            </h4>
            <p>
              {language === "English"
                ? "Experienced Telecommunication Application Developer, achieved proficiency in Erlang. Notably, contribute to project success by efficiently training newcomers in Session Initiation Protocol (SIP) for faster onboarding."
                : "Trở thành một kỹ sư phần mềm kinh nghiệm trong lĩnh vực Viễn Thông, đạt được thành tựu thành thạo về Erlang. Mình cũng có làm trainer cho dự án, góp phần thành công cho dự án khi đã đào tạo các bạn mới vào kiến thức về Session Initiation Protocol (SIP) để các bạn có phần nào đó kiến thức phục vụ cho công việc."}
            </p>
            <p>
              {language === "English"
                ? "Have acted as Scrum Master around 1 year, invested time and effort into researching and implementing the Scrum framework, achieving notable improvements in optimizing the team's way of working."
                : "Mình cũng có thử sức với vai trò Scrum Master trong thời gian 1 năm. Mình có giành thời gian ra để tìm hiểu thêm về Scrum và cách để triển khai nó vào đội nhóm hiện tại, và mình cũng một phần nào đó đạt được việc cân bằng khối lượng công việc của các thành viên trong nhóm cũng như là thống nhất được cách làm việc phù hợp với đội nhóm vào thời điểm đó."}
            </p>
          </div>
          <div className="ml-10 mb-7 relative before:w-4 before:h-4 before:bg-gradient-to-t before:from-red-500 before:to-orange-500 before:absolute before:rounded-full before:-left-[30px] before:top-1">
            <h3 className="absolute -left-20 text-lg font-semibold">Now</h3>
            <h4 className="font-bold text-lg text-gray-300">
              {language === "English" ? "Self-Taught" : "Tự Học"}
            </h4>
            <p>
              {language === "English"
                ? "Embarking on a journey into Frontend Developer, applying technical prowess to create captivating user interfaces."
                : "Mình bắt đầu hành trình mới với vai trò Frontend Developer, mong muốn được học hỏi và áp dụng các kỹ thuật điêu luyện để tạo ra một giao diện bắt mắt và một trải nghiệm người dùng tuyệt vời."}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;

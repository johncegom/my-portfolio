import VnFlag from "../../assets/vn-flag.svg";
interface BannerProps {
  avatar: string;
  language?: string;
}

const Banner = ({ avatar, language = "English" }: BannerProps) => {
  if (language === "English")
    return (
      <main>
        <div className="container m-auto px-4 py-10 flex flex-col lg:flex-row gap-6 cursor-default">
          <div className="md:w-5/6">
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
          <div className="self-center md:w-1/6">
            <img
              src={avatar}
              alt="Profile's avatar"
              className="hidden lg:block rounded-lg lg:w-44 lg:h-40 object-cover object-top mx-auto"
            />
          </div>
        </div>
      </main>
    );
  if (language === "Vietnamese")
    return (
      <main>
        <div className="container m-auto px-4 py-10 flex flex-col lg:flex-row gap-6 cursor-default">
          <div className="md:w-5/6">
            <div className="flex justify-center flex-col">
              <h1 className="font-bold text-3xl flex flex-row gap-2">
                Xin chào, mình là Hoàng Minh
                <img src={VnFlag} className="w-10" />
              </h1>
              <h1 className="font-bold text-3xl mt-1 gradient-text">
                Software Engineer
              </h1>
            </div>
            <p className="mt-4 text-gray-400 text-justify">
              Kỹ sư phần mềm với hơn 3 năm kinh nghiệm ở các dự án Viễn Thông.
              Mình đã làm việc trong cross-functional team, hợp tác và phát
              triển cùng các thành viên để có thể tạo ra các giải pháp phần mềm
              chất lượng cao.
            </p>
            <p className="mt-1 text-gray-400 text-justify">
              Ở hiện tại, sau một khoảng thời gian làm việc, mình đã nhận ra
              niềm đam mê thật sự của mình nằm ở việc tạo ra các sản phẩm có
              giao diện thu hút và tạo ra một trải nghiệm người dùng tuyệt vời,
              do đó mình hiện tại đang chuyển qua vị trí mới là Frontend
              Developer. Nếu bạn đang tìm kiếm một người để làm việc cùng, thì
              mình mong chúng ta có thể tạo ra một sản phẩm thật tuyệt vời cùng
              nhau!
            </p>
          </div>
          <div className="self-center md:w-1/6">
            <img
              src={avatar}
              alt="Profile's avatar"
              className="hidden lg:block rounded-lg lg:w-44 lg:h-40 object-cover object-top mx-auto"
            />
          </div>
        </div>
      </main>
    );
};

export default Banner;

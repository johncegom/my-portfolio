import Gmail from "../../assets/gmail.svg";

interface ContactProps {
  language: string;
}

const Contact = ({ language }: ContactProps) => {
  return (
    <section id="contact" className="py-8">
      <div className="container m-auto px-4 text-center">
        <h2 className="text-2xl font-semibold">
          {language === "English" ? "Get In Touch" : "Liên Lạc"}
        </h2>

        <p className="mt-3 mr-auto ml-auto md:w-3/5">
          {language === "English"
            ? "Currently exploring new opportunities. If you have a role that fits or want to connect, I'm available. Excited about the potential for collaborations and discovering how my skills can contribute to your team's success."
            : "Hiện tại mình đang tìm kiếm cơ hội mới với vai trò là Frontend Developer. Nếu có vị trí phù hợp hoặc chỉ muốn kết nối với nhau, mình vẫn rất sẵn lòng. Mình hứng khởi về các tiềm năng hợp tác trong tương lai cũng như chờ đợi cơ hội để các kỹ năng của mình được khai phá và góp phần vào sự thành công chung của đội nhóm và của dự án."}
        </p>
        <div className="mt-5">
          <ul className="flex justify-center">
            <a
              href="mailto:johncegom2013@gmail.com"
              target="_blank"
              className="flex justify-center w-max p-5 border rounded-md hover:bg-white transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-500"
            >
              <img src={Gmail} className="w-16" />
            </a>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Contact;

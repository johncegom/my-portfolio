import Facebook from "../assets/facebook.svg";
import LinkedIn from "../assets/linkedin.svg";
import Gmail from "../assets/gmail.svg";

const Contact = () => {
  return (
    <section id="contact" className="py-8">
      <div className="container m-auto px-4">
        <h2 className="text-2xl font-semibold">Get In Touch</h2>
        <p className="mt-3">
          Currently exploring new opportunities. If you have a role that fits or
          want to connect, I'm available. Excited about the potential for
          collaborations and discovering how my skills can contribute to your
          team's success.
        </p>
        <div className="mt-5">
          <ul className="grid grid-cols-4 gap-2">
            <li className="border border-orange-500 rounded-3xl flex justify-center shadow-black/50 shadow-lg p-10">
              <a
                href="https://www.linkedin.com/in/minh-duong-saiko/"
                target="_blank"
                className=""
              >
                <img src={LinkedIn} className="w-16" />
              </a>
            </li>
            <li className="col-span-2 border border-orange-500 rounded-3xl flex justify-center shadow-black/50 shadow-lg p-10">
              <a
                href="mailto:johncegom2013@gmail.com"
                target="_blank"
                className=""
              >
                <img src={Gmail} className="w-16" />
              </a>
            </li>
            <li className="border border-orange-500 rounded-3xl flex justify-center shadow-black/50 shadow-lg p-10">
              <a href="https://www.facebook.com/johncegom/" target="_blank">
                <img src={Facebook} className="w-16" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Contact;

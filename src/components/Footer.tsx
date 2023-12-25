import Facebook from "../assets/facebook.svg";
import LinkedIn from "../assets/linkedin.svg";

const Footer = () => {
  return (
    <footer>
      <div className="container m-auto flex justify-between px-4 py-6">
        <div>
          <p className="text-gray-300 text-sm">Powered by Minh Duong</p>
        </div>
        <div>
          <ul className="flex gap-5">
            <li>
              <a href="https://www.facebook.com/johncegom/" target="_blank">
                <img src={Facebook} className="w-6" />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/minh-duong-saiko/"
                target="_blank"
              >
                <img src={LinkedIn} className="w-6" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import { Link } from "react-scroll";
import Resume from "../assets/DuongNguyenHoangMinh_CV.pdf";

const Header = () => {
  return (
    <header className="shadow-black/20 shadow-md">
      <div className="container m-auto px-4 py-6">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="font-semibold ml-4 text-xl cursor-pointer text-dancing-script text-gray-200">
              MD
            </h1>
          </div>
          <div>
            <ul className="flex gap-4">
              <li>
                <Link
                  to="projects"
                  spy={true}
                  smooth={true}
                  duration={500}
                  className="text-gray-300 hover:text-white cursor-pointer"
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  to="aboutme"
                  spy={true}
                  smooth={true}
                  duration={500}
                  className="text-gray-300 hover:text-white cursor-pointer"
                >
                  About Me
                </Link>
              </li>
              <li>
                <Link
                  to="contact"
                  spy={true}
                  smooth={true}
                  duration={500}
                  className="text-gray-300 hover:text-white cursor-pointer hidden"
                >
                  Contact
                </Link>
              </li>
              <li>
                <a
                  className="p-2 rounded border border-white text-white hover:font-bold shadow-black/30 shadow-lg hover:border-2 hover:shadow-white hover:shadow-sm"
                  href={Resume}
                  download="DuongNguyenHoangMinh_CV.pdf"
                >
                  Resume
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

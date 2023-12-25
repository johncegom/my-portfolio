import { Link } from "react-scroll";

const Header = () => {
  return (
    <header className="bg-gradient-to-t from-red-500 to-orange-500">
      <div className="container m-auto px-4 py-6">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="font-bold text-xl cursor-pointer">My Portfolio</h1>
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
                  className="text-gray-300 font-semibold hover:text-white cursor-pointer"
                >
                  About Me
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

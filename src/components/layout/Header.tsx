import { Link } from "react-scroll";
import Resume from "../../assets/DuongNguyenHoangMinh_CV.pdf";
import { useTranslation } from "../../hooks/useTranslation";
import { SupportedLanguage } from "../../translations/translation";

interface HeaderProps {
  switchLanguage: () => void;
  language?: SupportedLanguage;
}

const Header = ({ switchLanguage, language = "English" }: HeaderProps) => {
  const { translate } = useTranslation(language);

  return (
    <header className="shadow-black/20 shadow-md">
      <div className="container m-auto px-4 py-6">
        <div className="flex justify-between">
          <h1 className="font-semibold text-xl cursor-pointer text-dancing-script text-gray-200">
            MinD
          </h1>
          <ul className="flex gap-3">
            <li>
              <button
                onClick={() => {
                  switchLanguage();
                }}
              >
                {language.slice(0, 3).toLocaleUpperCase()}
              </button>
            </li>
            <li className="hidden md:inline">
              <Link
                to="projects"
                spy={true}
                smooth={true}
                duration={500}
                className="text-gray-300 hover:text-white cursor-pointer"
              >
                {translate("header", "projects")}
              </Link>
            </li>
            <li className="hidden md:inline">
              <Link
                to="aboutme"
                spy={true}
                smooth={true}
                duration={500}
                className="text-gray-300 hover:text-white cursor-pointer"
              >
                {translate("header", "about")}
              </Link>
            </li>
            <li>
              <Link
                to="contact"
                spy={true}
                smooth={true}
                duration={500}
                className="text-gray-300 hover:text-white cursor-pointer"
              >
                {translate("header", "contact")}
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
    </header>
  );
};

export default Header;

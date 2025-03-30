import { useTranslation } from "../../hooks/useTranslation";
import { SupportedLanguage } from "../../translations/translation";

interface FooterProps {
  language?: SupportedLanguage;
}

const Footer = ({ language = "English" }: FooterProps) => {
  const { translate } = useTranslation(language);

  return (
    <footer>
      <div className="container m-auto flex justify-between px-4 py-6">
        <div>
          <p className="text-gray-300 text-xl text-dancing-script font-semibold">
            {translate("footer", "poweredBy")}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

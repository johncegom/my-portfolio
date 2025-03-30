import { useTranslation } from "../../hooks/useTranslation";
import { SupportedLanguage } from "../../translations/translation";

interface AboutMeProps {
  language?: SupportedLanguage;
}

const AboutMe = ({ language = "English" }: AboutMeProps) => {
  const { translate } = useTranslation(language);

  return (
    <section id="aboutme" className="py-8">
      <div className="container m-auto px-4">
        <h2 className="text-2xl font-semibold">
          {translate("about", "title")}
        </h2>
        <div className="ml-10 mt-12 relative before:absolute before:top-1 before:left-4 before:bottom-0 before:w-1 before:bg-white">
          <div className="ml-10 mb-7 relative before:w-4 before:h-4 before:bg-gradient-to-t before:from-red-500 before:to-orange-500 before:absolute before:rounded-full before:-left-[30px] before:top-1">
            <h3 className="absolute -left-20 text-lg font-semibold">2020</h3>
            <h4 className="font-bold text-lg text-gray-300">
              DEK Technologies
            </h4>
            <p>{translate("about", "milestone1")}</p>
          </div>
          <div className="ml-10 mb-7 relative before:w-4 before:h-4 before:bg-gradient-to-t before:from-red-500 before:to-orange-500 before:absolute before:rounded-full before:-left-[30px] before:top-1">
            <h3 className="absolute -left-20 text-lg font-semibold">2021</h3>
            <h4 className="font-bold text-lg text-gray-300">
              Can Tho University
            </h4>
            <p>{translate("about", "milestone2")}</p>
          </div>
          <div className="ml-10 mb-7 relative before:w-4 before:h-4 before:bg-gradient-to-t before:from-red-500 before:to-orange-500 before:absolute before:rounded-full before:-left-[30px] before:top-1">
            <h3 className="absolute -left-20 text-lg font-semibold">2023</h3>
            <h4 className="font-bold text-lg text-gray-300">
              DEK Technologies
            </h4>
            <p>{translate("about", "milestone3a")}</p>
            <p>{translate("about", "milestone3b")}</p>
          </div>
          <div className="ml-10 mb-7 relative before:w-4 before:h-4 before:bg-gradient-to-t before:from-red-500 before:to-orange-500 before:absolute before:rounded-full before:-left-[30px] before:top-1">
            <h3 className="absolute -left-20 text-lg font-semibold">Now</h3>
            <h4 className="font-bold text-lg text-gray-300">
              {language === "English" ? "Self-Taught" : "Tự Học"}
            </h4>
            <p>{translate("about", "milestone4")}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;

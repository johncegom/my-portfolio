import VnFlag from "../../assets/vn-flag.svg";
import { useTranslation } from "../../hooks/useTranslation";
import { SupportedLanguage } from "../../translations/translation";
interface BannerProps {
  avatar: string;
  language?: SupportedLanguage;
}

const Banner = ({ avatar, language = "English" }: BannerProps) => {
  const { translator } = useTranslation(language);
  const bannerTranslation = translator("banner");

  return (
    <main>
      <div className="container m-auto px-4 py-10 flex flex-col lg:flex-row gap-6 cursor-default">
        <div className="md:w-5/6">
          <div className="flex justify-center flex-col">
            <h1 className="font-bold text-3xl flex flex-row gap-2">
              {bannerTranslation("greeting")}
              <img src={VnFlag} className="w-10" />
            </h1>
            <h1 className="font-bold text-3xl mt-1 gradient-text">
              {bannerTranslation("role")}
            </h1>
          </div>
          <p className="mt-4 text-gray-400 text-justify">
            {bannerTranslation("introduction")}
          </p>
          <p className="mt-1 text-gray-400 text-justify">
            {bannerTranslation("introduction1")}
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

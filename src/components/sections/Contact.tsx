import Gmail from "../../assets/gmail.svg";
import { useTranslation } from "../../hooks/useTranslation";
import { SupportedLanguage } from "../../translations/translation";

interface ContactProps {
  language?: SupportedLanguage;
}

const Contact = ({ language = "English" }: ContactProps) => {
  const { translator } = useTranslation(language);
  const contactTranslation = translator("contact");

  return (
    <section id="contact" className="py-8">
      <div className="container m-auto px-4 text-center">
        <h2 className="text-2xl font-semibold">
          {contactTranslation("title")}
        </h2>

        <p className="mt-3 mr-auto ml-auto md:w-3/5">
          {contactTranslation("introduction")}
        </p>
        <div className="mt-5">
          <ul className="flex justify-center">
            <a
              href="mailto:johncegom2013@gmail.com"
              target="_blank"
              className="flex justify-center w-max p-5 border rounded-md hover:bg-white transition ease-in-out hover:-contactTranslation-cale-110 duration-500"
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

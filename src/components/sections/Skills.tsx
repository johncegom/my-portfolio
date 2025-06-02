import { useTranslation } from "../../hooks/useTranslation";
import { SupportedLanguage } from "../../translations/translation";
import { SkillsType } from "../../types/types";
import Skill from "../common/Skill";

interface SkillsProps {
  skills: SkillsType;
  language?: SupportedLanguage;
}

const Skills = ({ skills, language = "English" }: SkillsProps) => {
  const { translator } = useTranslation(language);
  const skillsTranslation = translator("skills");

  return (
    <section>
      <div className="container m-auto px-4 py-14">
        <h2 className="text-2xl font-semibold">{skillsTranslation("title")}</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-5 w-[80%]">
          {skills.map<JSX.Element>((skill, index) => (
            <Skill key={index} skill={skill} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

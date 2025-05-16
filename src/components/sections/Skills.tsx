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
        <div className="flex mt-3 w-[80%] flex-wrap gap-4">
          {skills.map<JSX.Element>((skill, index) => (
            <Skill key={index} skill={skill} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

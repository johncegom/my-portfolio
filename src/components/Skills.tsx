import { skills } from "../types";
import Skill from "./Skill";

interface SkillsType {
  skills: skills;
  language?: string;
}

const Skills = ({ skills, language = "English" }: SkillsType) => {
  return (
    <section>
      <div className="container m-auto px-4 py-14">
        <h2 className="text-2xl font-semibold">
          {language === "English" ? "Skills" : "Kỹ Năng"}
        </h2>
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

import { skill } from "../../types/types";

interface SkillType {
  skill: skill;
}

const Skill = ({ skill }: SkillType) => {
  return (
    <div className="ml-2 flex-[1_1_25%]">
      <p className="text-sm md:text-lg font-bold before:w-4 before:h-4 before:bg-gradient-to-t before:from-red-500 before:to-orange-500 before:block before:rounded-full before:align-middle before:mt-1 md:before:mt-2 before:-left-5 before:absolute relative left-3 cursor-default">
        {skill}
      </p>
    </div>
  );
};

export default Skill;

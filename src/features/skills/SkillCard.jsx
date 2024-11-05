import React from "react";
import PageTitle from "../../ui/PageTitle";
import Spinner from "../../ui/Spinner";
import { useSkill } from "./useSkill";
import SkillItem from "./SkillItem";

const SkillCard = () => {
  const { isLoading, skills } = useSkill();
  if (isLoading) return <Spinner />;
  return (
    <div>
      <PageTitle titleOne="Skills, Experiece and Tools" />
      {skills && (
        <ul className="grid shadow-lg grid-cols-1 sm:grid-cols-4 gap-4 mb-4 bg-stone-100 m-1 p-4 list-none">
          {skills.map((skill) => (
            <li key={skill?.id}>
              <SkillItem item={skill?.name} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SkillCard;

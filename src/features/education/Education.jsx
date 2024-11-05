import React from "react";
import { useEducation } from "./useEducation";
import EducationCard from "./EducationCard";
import Spinner from "../../ui/Spinner";

const Education = ({ showWork }) => {
  const { isLoading: isLoadingOne, education } = useEducation();
  if (isLoadingOne) return <Spinner />;

  return (
    !showWork &&
    education && (
      <div className="flex mb-4 bg-stone-100 m-1 animate-fadeIn">
        <ul className="space-y-4 shadow-lg">
          {education.map((item) => (
            <EducationCard key={item.id} item={item} />
          ))}
        </ul>
      </div>
    )
  );
};

export default Education;

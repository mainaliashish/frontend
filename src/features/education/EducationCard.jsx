import React from "react";

const EducationCard = ({ item }) => {
  const {
    course,
    institute,
    yearCompleted,
    description,
    fullAddress,
    overallGrade,
    coreModules,
  } = item;
  return (
    <li className="border-b border-gray-400 last:border-none mb-4 hover:bg-stone-200 p-4 m-2 transition-all">
      <div className="flex justify-between">
        <h3 className="text-xl font-semibold text-blue-600">{institute}</h3>
        <h3 className="font-semibold text-normal">{course}</h3>
      </div>
      <h3 className="font-semibold text-sm">{fullAddress}</h3>
      <div className="flex justify-between text-center">
        <p className="py-2">
          Overall Grade:{" "}
          <span className="font-semibold text-green-800">{overallGrade}</span>
        </p>
      </div>
      <p className="text-stone-600 text-sm font-semibold py-2">
        <span className="font-semibold">Year of completion :</span>{" "}
        {yearCompleted}
      </p>
      {coreModules && (
        <p className="text-stone-700 mt-2 text-justify">
          <span className="font-semibold tracking-wide leading-5">
            Core Modules :
          </span>{" "}
          {coreModules}
        </p>
      )}
      {description && (
        <p className="text-stone-700 mt-2 text-justify tracking-wide leading-5 text-base">
          <span className="font-semibold">Description :</span> {description}
        </p>
      )}
    </li>
  );
};

export default EducationCard;

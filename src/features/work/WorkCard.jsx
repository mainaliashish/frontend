import React from "react";
import Language from "../../ui/Language";

const WorkCard = ({ item }) => {
  const {
    role,
    companyName,
    startDate,
    endDate,
    description,
    companyAddress,
    languages,
    isCurrentCompany,
  } = item;
  return (
    <li className="border-b border-gray-400 last:border-none mb-4 hover:bg-stone-200 p-4 m-2">
      <div className="flex justify-between">
        <h3 className="text-xl font-semibold text-blue-600">{companyName}</h3>
        <h3 className="font-semibold text-sm">{role}</h3>
      </div>
      <h3 className="font-semibold text-sm">{companyAddress}</h3>
      <div className="flex justify-between text-center">
        <p className="py-2">
          Start Date:{" "}
          <span className="font-semibold text-sm text-stone-600">
            {startDate}
          </span>
        </p>
      </div>
      {endDate === "Present" && isCurrentCompany ? (
        <span className="font-semibold text-green-600">
          Currently working here
        </span>
      ) : (
        <p className="text-stone-600 text-sm font-semibold">
          <span className="font-semibold">End Date :</span> {endDate}
        </p>
      )}
      {languages && (
        <p className="text-stone-700 mt-2 text-justify">
          <span className="font-semibold">
            Programming Languages and Experience :
          </span>{" "}
          {<Language languages={languages} />}
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

export default WorkCard;

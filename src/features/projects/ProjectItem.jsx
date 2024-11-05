import React from "react";
import Language from "../../ui/Language";
import { PiGithubLogoBold } from "react-icons/pi";

const ProjectItem = ({ item }) => {
  const { title, description, languages, githubUrl } = item;
  return (
    <ul>
      <li className="animate-fadeIn border-b border-gray-400 last:border-none mb-4 hover:bg-stone-200 p-4 m-2">
        <div className="flex justify-between">
          <h3 className="text-xl font-semibold text-gray-600 flex text-center items-center">
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 flex items-center text-center gap-1"
            >
              <PiGithubLogoBold />
              {title}
            </a>
          </h3>
        </div>
        {languages && (
          <p className="text-stone-700 mt-2 text-justify">
            <span className="font-semibold">
              Programming Languages and Experience :
            </span>{" "}
            {<Language languages={languages} />}
          </p>
        )}
        {description && (
          <p className="text-stone-700 mt-2 text-justify">
            <span className="font-semibold">Description:</span> {description}
          </p>
        )}
      </li>
    </ul>
  );
};

export default ProjectItem;

import React from "react";
import { useProject } from "./useProject";
import Spinner from "../../ui/Spinner";
import ProjectItem from "./ProjectItem";
import PageTitle from "../../ui/PageTitle";

const ProjectCard = () => {
  const { isLoading, projects } = useProject();
  if (isLoading) return <Spinner />;
  return (
    <>
      <PageTitle titleOne="Personal Projects" />
      {projects && (
        <ul className="shadow-lg grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4 bg-stone-100 m-1 p-4 list-none">
          {projects.map((item) => (
            <li key={item.id}>
              <ProjectItem item={item} />
            </li>
          ))}
        </ul>
      )}
      <p className="mx-3 text-center font-semibold">
        To view more project, please visit my github page :
        <a
          href="https://github.com/mainaliashish"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline"
        >
          &nbsp;Ashish Mainali Github &nbsp;
        </a>
      </p>
    </>
  );
};

export default ProjectCard;

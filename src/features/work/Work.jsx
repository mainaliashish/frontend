import React from "react";
import { useWork } from "./useWork";
import WorkCard from "./WorkCard";
import Spinner from "../../ui/Spinner";

const Work = ({ showWork }) => {
  const { isLoading: isLoadingTwo, work } = useWork();
  if (isLoadingTwo) return <Spinner />;
  return (
    showWork &&
    work && (
      <div className="flex mb-4 bg-stone-100 m-1 animate-fadeIn">
        <ul className="space-y-4 shadow-lg">
          {work.map((item) => (
            <WorkCard key={item.id} item={item} />
          ))}
        </ul>
      </div>
    )
  );
};

export default Work;

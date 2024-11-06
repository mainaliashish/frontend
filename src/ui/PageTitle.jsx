import React from "react";
import TypeAnimationText from "./TypeAnimationText";
const PageTitle = ({ titleOne, titleTwo, setShowWork }) => {
  return (
    <>
      <div className="flex items-center justify-between text-stone-700 bg-stone-200 m-1 py-5 sm:py-0 px-5 mb-5">
        <div className="sm:my-4">
          <h1
            className={`text-xl uppercase font-semibold md:text-2xl ${
              setShowWork
                ? "hover:bg-stone-200 hover:cursor-pointer hover:text-stone-500"
                : ""
            }`}
            onMouseEnter={() => setShowWork(false)}
          >
            <TypeAnimationText text={titleOne} />
          </h1>
        </div>
        {titleTwo && (
          <div className="sm:my-4">
            <h1
              className={`text-xl uppercase font-semibold md:text-2xl ${
                setShowWork
                  ? "hover:bg-stone-200 hover:cursor-pointer hover:text-stone-500"
                  : ""
              }`}
              onMouseEnter={() => setShowWork(true)}
            >
              <TypeAnimationText text={titleTwo} />
            </h1>
          </div>
        )}
      </div>
    </>
  );
};

export default PageTitle;

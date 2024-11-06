import React, { useState } from "react";
import { useHobbies } from "../hobbies/useHobbies";
import Spinner from "../../ui/Spinner";

const HobbiesCard = () => {
  const { isLoading, hobbies } = useHobbies();
  const [currentHobby, setCurrentHobby] = useState(0);
  if (isLoading) return <Spinner />;
  return (
    <>
      <div className="max-w-max">
        <div className="bg-stone-100 justify-between items-center p-4 border border-r-2 border-stone-300 shadow-md h-auto mb-6">
          <div className="sm:grid sm:grid-cols-3 gap-2 border-stone-300">
            {hobbies.map((hobby) => (
              <button
                key={hobby.id}
                className={`p-2 m-1 shadow-lg transition-all capitalize border tracking-wide leading-5 border-stone-600 rounded-md font-semibold ${
                  hobby.id - 1 === currentHobby
                    ? "bg-blue-700 text-blue-100 hover:bg-blue-700 hover:text-blue-200"
                    : "bg-white"
                }`}
                onClick={() => setCurrentHobby(hobby.id - 1)}
              >
                {hobby.title}
              </button>
            ))}
          </div>
          <p className="mt-4 animate-fadeIn p-4 text-justify text-base text-stone-800 tracking-wide leading-7">
            {hobbies?.at(currentHobby).description}
          </p>
        </div>
      </div>
    </>
  );
};

export default HobbiesCard;

import React from "react";
import { useExtraProfile } from "./useExtraInfo";
import Spinner from "../../ui/Spinner";
const ExtraInfoCard = () => {
  const { isLoading, extraProfile } = useExtraProfile();
  if (isLoading) return <Spinner />;
  return (
    <>
      <div className="animate-fadeIn mb-2 py-4">
        <div className="bg-stone-100 justify-between items-center p-4 border border-r-2 border-stone-300 shadow-md">
          <p className="relative text-center font-bold uppercase">
            General Biography&nbsp;
            <span className="text-center rounded-full absolute top-[-9px] inline-flex items-center bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">
              <span className="animate-bounce">🔥</span> Exclusive
            </span>
          </p>
          <p className="p-4 text-justify tracking-wide leading-7 text-normal">
            {extraProfile?.description}
          </p>
        </div>
      </div>
      <div className="animate-fadeIn mb-4">
        <div className="bg-stone-100 justify-between items-center p-4 border border-r-2 border-stone-300 shadow-md">
          <p className="text-center font-semibold uppercase">
            Research publication
          </p>
          <p className="p-4 text-justify tracking-wide leading-7 text-normal">
            {extraProfile?.research}
          </p>
        </div>
      </div>
    </>
  );
};

export default ExtraInfoCard;

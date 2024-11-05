import React from "react";

const AppFooter = () => {
  return (
    <div className="flex items-center text-center justify-between p-2 m-3  bg-stone-200 text-stone-700">
      <p className="text-center">copyright &#174; {new Date().getFullYear()}</p>
      <p>
        Designed with <span className="text-red-500">❤️</span> by Ashish Mainali
      </p>
    </div>
  );
};

export default AppFooter;

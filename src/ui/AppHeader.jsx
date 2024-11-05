import React from "react";
import { NavLink } from "react-router-dom";
import TypeAnimationText from "./TypeAnimationText";
const AppHeader = () => {
  return (
    <header className="flex items-center justify-between bg-stone-200 p-2 m-3 uppercase sm:px-6 text-stone-700">
      <NavLink to="/" className="tracking-[5px]">
        <TypeAnimationText text="Ashish Mainali" speed={5} />
      </NavLink>
      <div className="flex items-center justify-end">
        <span className="px-3">
          <NavLink to="home">Home</NavLink>
        </span>
        <span className="px-3">
          <NavLink to="about">About</NavLink>
        </span>
        <span className="px-3">
          <NavLink to="projects">Project</NavLink>
        </span>
        <span className="px-3">
          <NavLink to="skills">Skills</NavLink>
        </span>
        <span className="px-3">
          <NavLink to="contact">Contact</NavLink>
        </span>
      </div>
    </header>
  );
};

export default AppHeader;

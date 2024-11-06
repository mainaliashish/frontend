import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import TypeAnimationText from "./TypeAnimationText";
import HeaderNavLink from "./HeaderNavLink";
import { SUPPORTED_LANGUAGES } from "../utils/constants";
import lang from "../utils/languageConstants";

const AppHeader = () => {
  const [languageKey, setLanguageKey] = useState("en");
  function handleLanguageChange(e) {
    setLanguageKey(e.target.value);
  }
  return (
    <>
      <nav className="bg-stone-200 m-3 p-2 text-stone-700 sm:px-6 uppercase text-normal font-semibold">
        <div className="hidden sm:flex items-center justify-between">
          <NavLink to="/" className="tracking-[5px] flex items-center">
            <TypeAnimationText text="Ashish Mainali" speed={5} />
            <span className="text-3xl font-semibold animate-wave">🇳🇵</span>
          </NavLink>
          <div className="flex items-center justify-end">
            <span className="px-3">
              <HeaderNavLink to="home" navTitle={lang[languageKey].home} />
            </span>
            <span className="px-3">
              <HeaderNavLink to="about" navTitle={lang[languageKey].about} />
            </span>
            <span className="px-3">
              <HeaderNavLink
                to="projects"
                navTitle={lang[languageKey].projects}
              />
            </span>
            <span className="px-3">
              <HeaderNavLink to="skills" navTitle={lang[languageKey].skills} />
            </span>
            <span className="px-3">
              <HeaderNavLink
                to="contact"
                navTitle={lang[languageKey].contact}
              />
            </span>

            <select
              className="mx-1 border text-normal uppercase border-stone-600 hover:bg-stone-300 bg-stone-200 text-center items-center"
              onChange={handleLanguageChange}
            >
              {SUPPORTED_LANGUAGES.map((lang) => (
                <option
                  value={lang.identifier}
                  key={lang.identifier}
                  className="border-none text-2xl font-semibold text-stone-700"
                >
                  {lang.name} &nbsp;
                  {lang.flag}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="flex sm:hidden items-center justify-center space-x-4 py-2">
          <HeaderNavLink
            to="home"
            navTitle={lang[languageKey].home}
            customClassName={true}
          />
          <HeaderNavLink
            to="about"
            navTitle={lang[languageKey].about}
            customClassName={true}
          />
          <HeaderNavLink
            to="projects"
            navTitle={lang[languageKey].projects}
            customClassName={true}
          />
          <HeaderNavLink
            to="skills"
            navTitle={lang[languageKey].skills}
            customClassName={true}
          />
          <HeaderNavLink
            to="contact"
            navTitle={lang[languageKey].contact}
            customClassName={true}
          />
          <div className="flex text-center items-center justify-center">
            <select
              className="mx-1 border flex text-normal uppercase border-stone-600 hover:bg-stone-300 bg-stone-200"
              onChange={handleLanguageChange}
            >
              {SUPPORTED_LANGUAGES.map((lang) => (
                <option
                  value={lang.identifier}
                  key={lang.identifier}
                  className="border-none"
                >
                  {lang.flag}
                </option>
              ))}
            </select>
          </div>
        </div>
      </nav>
    </>
  );
};

export default AppHeader;

import React from "react";
import { NavLink } from "react-router-dom";

const HeaderNavLink = ({ customClassName, to, navTitle }) => {
  const mobileNavClass =
    "px-3 py-1 text-stone-700 bg-stone-200 rounded-full text-sm transition duration-200";
  return (
    <NavLink className={customClassName === true ? mobileNavClass : ""} to={to}>
      {navTitle}
    </NavLink>
  );
};

export default HeaderNavLink;

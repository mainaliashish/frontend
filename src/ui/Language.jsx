import React from "react";

const Language = ({ languages }) => {
  return languages.split(",").map((lang, index, array) => (
    <span key={index}>
      {lang.toUpperCase()}
      {index < array.length - 1 ? "," : ""}
    </span>
  ));
};

export default Language;

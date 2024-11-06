import React from "react";

const SocialLink = ({ profileUrl, linkText, children }) => {
  return (
    <a
      href={profileUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="text-blue-600 hover:text-blue-900 sm:flex flex gap-3 px-8 sm:px-0 items-center text-center sm:items-center sm:text-center sm:gap-1 font-semibold"
    >
      {children}
    </a>
  );
};

export default SocialLink;

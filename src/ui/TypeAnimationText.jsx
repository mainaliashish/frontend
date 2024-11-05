import React from "react";
import { TypeAnimation } from "react-type-animation";

const TypeAnimationText = ({ text, speed = 10 }) => {
  return (
    <TypeAnimation
      sequence={[text, 1000]}
      wrapper="span"
      speed={speed}
      style={{ fontSize: "1em", display: "inline-block" }}
      repeat={Infinity}
      cursor={false}
    />
  );
};

export default TypeAnimationText;

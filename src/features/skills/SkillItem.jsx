import React from "react";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";

const SkillItem = ({ item }) => {
  return (
    <div className="animate-fadeIn flex text-center items-center gap-1 border font-semibold text-stone-700 border-stone-200 p-4 hover:bg-stone-200 transition-all">
      <MdOutlineKeyboardDoubleArrowRight />
      {item}
    </div>
  );
};

export default SkillItem;

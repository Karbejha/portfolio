import React from "react";

const ProjectTag = ({ name, label, onClick, isSelected }) => {
  const buttonStyles = isSelected
    ? "text-white border-primary-500"
    : "text-[#ADB7BE] border-slate-600 hover:border-white";

  return (
    <button
      type="button"
      className={`${buttonStyles} rounded-full border-2 px-6 py-3 text-xl cursor-pointer`}
      onClick={() => onClick(name)}
      aria-pressed={isSelected}
    >
      {label}
    </button>
  );
};

export default ProjectTag;

import React from "react";
import { motion } from "framer-motion";

const variants = {
  default: { width: 0 },
  active: { width: "calc(100% - 0.75rem)" },
};

const TabButton = ({
  active,
  selectTab,
  children,
  controls,
  id,
  onKeyDown,
  tabIndex,
}) => {
  const buttonClasses = active ? "text-white" : "text-[#ADB7BE]";

  return (
    <button
      id={id}
      type="button"
      role="tab"
      aria-selected={active}
      aria-controls={controls}
      tabIndex={tabIndex}
      onClick={selectTab}
      onKeyDown={onKeyDown}
    >
      <span className={`me-3 font-semibold hover:text-white ${buttonClasses}`}>
        {children}
      </span>
      <motion.div
        layout
        initial={{ width: 0 }}
        animate={{ width: active ? "calc(100% - 0.75rem)" : 0 }}
        variants={variants}
        className="h-1 bg-primary-500 mt-2 me-3"
      />
    </button>
  );
};

export default TabButton;

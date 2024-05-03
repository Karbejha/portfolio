import React from "react";
import { motion } from "framer-motion";

const variants = {
  default: { width: 0 },
  active: { width: "calc(100% - 0.75rem)" },
};

const TabButton = ({ active, selectTab, children }) => {
  const buttonClasses = active ? "text-white" : "text-[#ADB7BE]";

  return (
    <button onClick={selectTab}>
      <p className={`mr-3 font-semibold hover:text-white ${buttonClasses}`}>
        {children}
      </p>
      <motion.div
        layout
        initial={{ width: 0 }} // Set initial width on server
        animate={{ width: active ? "calc(100% - 0.75rem)" : 0 }}
        variants={variants}
        className="h-1 bg-primary-500 mt-2 mr-3"
      />
    </button>
  );
};

export default TabButton;

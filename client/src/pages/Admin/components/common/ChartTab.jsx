import React, { useState } from "react";

const ChartTab = () => {
  const [selected, setSelected] = useState("optionOne");

  const options = [
    { key: "optionOne", label: "Monthly" },
    { key: "optionTwo", label: "Quarterly" },
    { key: "optionThree", label: "Annually" },
  ];

  return (
    <div className="flex items-center gap-0.5 rounded-lg bg-gray-100 p-0.5 dark:bg-gray-900">
      {options.map((option) => (
        <button
          key={option.key}
          onClick={() => setSelected(option.key)}
          className={`px-3 py-2 font-medium w-full rounded-md text-theme-sm hover:text-gray-900 dark:hover:text-white 
            ${
              selected === option.key
                ? "shadow-theme-xs text-gray-900 dark:text-white bg-white dark:bg-gray-800"
                : "text-gray-500 dark:text-gray-400"
            }`}
        >
          {option.label}
        </button>
      ))}
    </div>
  );
};

export default ChartTab;

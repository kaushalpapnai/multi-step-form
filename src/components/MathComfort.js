import React, { useContext, useState } from "react";
import Formcontext from "../formcontext/formContext";

const MathComfort = ({ nextPage }) => {
  const mathLevels = [
    { id: 1, label: "Introductory", content: "5 × 1/2 = ?" },
    { id: 2, label: "Foundational", content: "3x + 5 = 4" },
    { id: 3, label: "Intermediate", content: "x = (-b ± √(b^2 - 4ac)) / 2a" },
    { id: 4, label: "Advanced", content: "∫x^2 dx = ?" },
  ];

  const { mathLevel, setMathLevel } = useContext(Formcontext);

  const handleLevelSelection = (levelId) => {
    setMathLevel(levelId);
  };

  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-col justify-center items-center mb-10">
        <div className="flex flex-col items-center mb-5">
          <h1 className="text-2xl font-bold mb-6">
            What is your math comfort level?
          </h1>
          <p className="text-gray-600 mb-8">
            Choose the highest level you feel confident in — you can always
            adjust later.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {mathLevels.map((level) => (
            <button
              key={level.id}
              className={`border border-gray-100 px-4 py-12 rounded-md  ${
                mathLevel === level.id
                  ? "shadow-[0px_0px_6px_0px_rgba(0,0,0,0.2)] border border-orange-200"
                  : "border-gray-200 "
              } hover:border-orange-200 hover:shadow-[0px_0px_6px_0px_rgba(0,0,0,0.2)]  hover:transition-colors`}
              onClick={() => handleLevelSelection(level.id)}
            >
              <h2 className="text-lg font-bold mb-2">{level.label}</h2>
              <p className="text-sm">{level.content}</p>
            </button>
          ))}
        </div>
      </div>
      <button
          className={`bg-black text-white px-9 py-2 mt-2 rounded-md  transition-colors ${!mathLevel ? 'bg-opacity-20 hover:bg-opacity-20' : 'hover:bg-opacity-70'}`}
          onClick={() => nextPage()}
          disabled={!mathLevel}
        >
          Continue
        </button>
    </div>
  );
};

export default MathComfort;

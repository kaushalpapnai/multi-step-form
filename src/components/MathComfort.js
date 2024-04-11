import React, { useContext, useState } from "react";
import Formcontext from "../formcontext/formContext";

const MathComfort = ({ nextPage }) => {
  const mathLevels = [
    {
      id: 1,
      label: "Introductory",
      mathLevel: "Airthmatic",
      content: "5 × 1/2 = ?",
    },
    {
      id: 2,
      label: "Foundational",
      mathLevel: "Basic Algebra",
      content: "3x + 5 = 4",
    },
    {
      id: 3,
      label: "Intermediate",
      mathLevel: "intermediate algebra",
      content: "x = (-b ± √(b^2 - 4ac)) / 2a",
    },
    { id: 4, label: "Advanced", mathLevel: "Calculus", content: "∫x^2 dx = ?" },
  ];

  const { mathLevel, setMathLevel } = useContext(Formcontext);

  const handleLevelSelection = (levelId) => {
    setMathLevel(levelId);
  };

  return (
    <div className="flex flex-col items-center  mt-3  mb-28">
      <div className="w-full lg:mb-10 lg:mt-5 flex flex-col items-center mt-5">
        <div className="text-center w-[90%]">
          <h1 className="text-2xl md:text-3xl font-medium mb-4">
            What is your math comfort level?
          </h1>
        </div>
        <div className="text-center w-[90%]">
          <p className="text-gray-600 mb-8">
            Choose the highest level you feel confident in you can always
            adjust later.
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 min-w-[80%] sm:mb-5 md:w-[70%] lg:mb-10  sm:w-[90%] lg:w-full lg:grid-cols-4  sm:grid-cols-2  gap-4 ">
        {mathLevels.map((level) => (
          <button
            key={level.id}
            className={`border border-gray-100 px-4 py-8 w-full rounded-md ${
              mathLevel === level.id
                ? "shadow-[0px_0px_6px_0px_rgba(0,0,0,0.2)] border border-orange-200"
                : "border-gray-200"
            } hover:border-orange-200 hover:shadow-[0px_0px_6px_0px_rgba(0,0,0,0.2)]  hover:transition-colors`}
            onClick={() => handleLevelSelection(level.id)}
          >
            <p className="text-sm mb-4">{level.content}</p>
            <p className="text-sm">{level.mathLevel}</p>
            <h2 className="text-gray-400">{level.label}</h2>
          </button>
        ))}
      </div>
      <button
        className={`bg-black left-5 right-5 bottom-6 fixed max-w-[20.8rem] sm:static md:w-[12rem] md:min-w-[10rem] sm:min-w-[19.5rem] sm:mt-5 text-white px-9 py-3 rounded-md transition-colors ${
          !mathLevel ? "bg-gray-200 hover:bg-gray-200" : "hover:bg-opacity-70"
        } mx-auto max-w-[90%]`}
        onClick={() => nextPage()}
        disabled={!mathLevel}
      >
        Continue
      </button>
    </div>
  );
};

export default MathComfort;

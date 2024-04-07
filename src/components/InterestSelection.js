import React, { useContext, useState } from "react";
import Formcontext from "../formcontext/formContext";

const InterestSelection = ({ nextPage }) => {
  const interests = [
    {
      id: 1,
      label: "Learning specific skills to advance my career",
      icon: "📈",
    },
    { id: 2, label: "Exploring new topics I'm interested in", icon: "🌍" },
    { id: 3, label: "Refreshing my math foundations", icon: "➕" },
    { id: 4, label: "Exercising my brain to stay sharp", icon: "🧠" },
    { id: 5, label: "Something else", icon: "🤔" },
  ];

  const { interestSelection, setInterestSelection } = useContext(Formcontext);

  const handleInterestSelection = (interestId) => {
    setInterestSelection(interestId);
  };

  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="text-2xl font-bold mb-6">
        Which are you most interested in?
      </h1>
      <p className="text-gray-600 mb-8">
        Choose just one. This will help us get you started (but won't limit your
        experience).
      </p>
      <div className="w-full flex flex-col">
        {interests.map((interest) => (
          <button
            key={interest.id}
            className={`flex items-center justify-start px-4 py-3 m-2 border border-gray-100 rounded-md ${
              interestSelection === interest.id
                ? "shadow-[0px_0px_6px_0px_rgba(0,0,0,0.2)] border border-orange-200"
                : "border-gray-200"
            } hover:border-orange-200 hover:shadow-[0px_0px_6px_0px_rgba(0,0,0,0.2)]  hover:transition-colors`}
            onClick={() => handleInterestSelection(interest.id)}
          >
            <span className="mr-2">{interest.icon}</span>
            {interest.label}
          </button>
        ))}
      </div>
      <button
        className={`bg-black text-white px-9 py-2 mt-2 rounded-md transition-colors ${
          !interestSelection ? "bg-opacity-20" : "hover:bg-opacity-70"
        }`}
        onClick={() => nextPage()}
        disabled={!interestSelection}
      >
        Continue
      </button>
    </div>
  );
};

export default InterestSelection;

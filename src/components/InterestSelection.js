import React, { useContext, useState } from "react";
import Formcontext from "../formcontext/formContext";

const InterestSelection = ({ nextPage }) => {
  const interests = [
    {
      id: 1,
      label: "Learning specific skills to advance my career",
      url: "https://assets-modified.embeddables.com/UkI2pO4KD0xXQLHkN1GG%2FGraph_39027869147636407.png",
    },
    {
      id: 2,
      label: "Exploring new topics I'm interested in",
      url: "https://assets-modified.embeddables.com/UkI2pO4KD0xXQLHkN1GG%2FEarth_5370636675847549.png",
    },
    {
      id: 3,
      label: "Refreshing my math foundations",
      url: "https://assets-modified.embeddables.com/UkI2pO4KD0xXQLHkN1GG%2FFrame%2020246_6536191683530861.png",
    },
    {
      id: 4,
      label: "Exercising my brain to stay sharp",
      url: "https://assets-modified.embeddables.com/UkI2pO4KD0xXQLHkN1GG%2FTarget_581125172755395.png",
    },
    {
      id: 5,
      label: "Excelling in school",
      url: "https://assets-modified.embeddables.com/UkI2pO4KD0xXQLHkN1GG%2FJournal_20580300146781294.png",
    },
    {
      id: 6,
      label: "Something else",
      url: "https://assets-modified.embeddables.com/UkI2pO4KD0xXQLHkN1GG%2FThinking_5002528999156994.png",
    },
  ];

  const { interestSelection, setInterestSelection } = useContext(Formcontext);

  const handleInterestSelection = (interestId) => {
    setInterestSelection(interestId);
  };

  return (
    <div className="flex flex-col justify-center items-center mt-8 mb-28 p-2  ">
      <div className="flex justify-center items-center text-center ">
        <h1 className="text-2xl font-medium mb-5 mt-3">
          Which are you most interested in?
        </h1>
      </div>
      <div className="flex justify-center items-center w-[90%] sm:w-[90%] text-center lg:w-full">
        <p className="text-gray-600 mb-5">
          Choose just one. This will help us get you started (but won't limit
          your experience).
        </p>
      </div>
      <div className="w-[90%] flex flex-col justify-center items-center box-border">
        {interests.map((interest) => (
          <button
            key={interest.id}
            className={`flex items-center w-[95%] h-[4.5rem] justify-start px-4 py-5  border border-gray-100 rounded-md ${
              interestSelection === interest.id
                ? "shadow-[0px_0px_6px_0px_rgba(0,0,0,0.2)] border border-orange-200"
                : "border-gray-200"
            } hover:border-orange-200 hover:shadow-[0px_0px_6px_0px_rgba(0,0,0,0.2)] m-2 hover:transition-colors`}
            onClick={() => handleInterestSelection(interest.id)}
          >
            <img className="w-6 mr-5" src={interest.url} alt="icon"></img>
            <span className="font-normal text-start text-sm text-gray-800">
                {interest.label}
              </span>
          </button>
        ))}
      </div>
      <button
        className={`bg-black left-5 right-5 bottom-6 fixed max-w-[21rem] sm:static md:w-[12rem] md:min-w-[10rem] sm:min-w-[19.5rem] sm:mt-5 text-white px-9 py-3 rounded-md transition-colors ${
          !interestSelection
            ? "bg-gray-200 hover:bg-gray-200"
            : "hover:bg-opacity-70"
        } mx-auto max-w-[90%]`}
        onClick={() => nextPage()}
        disabled={!interestSelection}
      >
        Continue
      </button>
    </div>
  );
};

export default InterestSelection;

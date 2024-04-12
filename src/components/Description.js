// Describes the user's characteristics or preferences.

import React, { useContext } from "react";
import Formcontext from "../formcontext/formContext";

const Description = ({ nextPage }) => {
  const { setDescription, description } = useContext(Formcontext);

  const userTypes = [
    {
      id: 1,
      label: "Student or soon to be enrolled",
      url: "https://assets-modified.embeddables.com/UkI2pO4KD0xXQLHkN1GG%2FLife-Stage%3DStudent_830823629321515.png",
    },
    {
      id: 2,
      label: "Professional pursuing a career",
      url: "https://assets-modified.embeddables.com/UkI2pO4KD0xXQLHkN1GG%2FLife-Stage%3DProfessional_3183921264115743.png",
    },
    {
      id: 3,
      label: "Parent of a school-age child",
      url: "https://assets-modified.embeddables.com/UkI2pO4KD0xXQLHkN1GG%2FLife-Stage%3DParent_6858243195481246.png",
    },
    {
      id: 4,
      label: "Lifelong learner",
      url: "https://assets-modified.embeddables.com/UkI2pO4KD0xXQLHkN1GG%2FExport_Retired%20(1)_42157333845339884.png",
    },
    {
      id: 5,
      label: "Teacher",
      url: "https://assets-modified.embeddables.com/UkI2pO4KD0xXQLHkN1GG%2FLife-Stage%3DTeacher_3477887921150866.png",
    },
    {
      id: 6,
      label: "Other",
      url: "https://assets-modified.embeddables.com/UkI2pO4KD0xXQLHkN1GG%2FLife-Stage%3DOther_39497974702587735.png",
    },
  ];

  const handleTypeSelection = (typeId) => {
    setDescription(typeId);
  };

  return (
    <div className="flex flex-col justify-center items-center mb-24  sm:mt-5 md:mt-0 mt-3 p-2">
      <div className="flex justify-center items-center text-center">
        <h1 className="text-2xl font-medium mb-5 mt-3 md:font-bold md:text-3xl ">
          Which describes you best?
        </h1>
      </div>
      <div className="flex justify-center items-center w-[70%] text-center sm:w-full">
        <p className="text-gray-600 mb-5">
          This will help us personalize your experience.
        </p>
      </div>
      <div className="w-[90%] flex flex-col justify-center items-center box-border md:w-[57%]">
        {userTypes.map((type) => (
          <button
            key={type.id}
            className={`flex items-center w-full h-[4.5rem] justify-start px-4 py-5 border border-gray-100 rounded-md ${
              description === type.id
                ? "shadow-[0px_0px_6px_0px_rgba(0,0,0,0.2)] border border-orange-200"
                : "border-gray-200"
            } hover:border-orange-200 hover:shadow-[0px_0px_6px_0px_rgba(0,0,0,0.2)] hover:transition-colors  m-2`}
            onClick={() => handleTypeSelection(type.id)}
          >
            <img className="w-6 mr-5" src={type.url} alt="icon"></img>
            <span className="text-start">
              {type.label.split(" ").length === 1 ? (
                <span className="font-normaltext-sm text-gray-800">
                  {type.label}
                </span>
              ) : (
                <>
                  <span className="font-normal  text-sm mr-1 text-gray-800">
                    {type.label.split(" ")[0]}{" "}
                  </span>
                  <span className="text-sm w-full text-gray-500">
                    {type.label.substring(type.label.indexOf(" ") + 1)}
                  </span>
                </>
              )}
            </span>
          </button>
        ))}
      </div>
      <button
        className={`bg-black left-5 right-5 bottom-6 fixed max-w-[20.5rem] sm:static md:w-[12rem] md:min-w-[10rem] sm:min-w-[19.5rem] sm:mt-5 text-white px-9 py-3 rounded-md transition-colors ${
          !description ? "bg-gray-200 hover:bg-gray-200" : "hover:bg-opacity-70"
        } mx-auto max-w-[90%]`}
        onClick={() => nextPage()}
        disabled={!description}
      >
        Continue
      </button>
    </div>
  );
};

export default Description;

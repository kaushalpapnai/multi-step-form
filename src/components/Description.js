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
    <div className="border border-green-400 flex flex-col justify-center items-center mb-24 p-2 mt-4">
      <h1 className="text-2xl font-bold mb-5 mt-3">
        Which describes you best?
      </h1>
      <p className="text-gray-600 mb-5">
        This will help us personalize your experience.
      </p>
      <div className="w-[90%] border border-red-400 flex flex-col justify-center items-center box-border">
        {userTypes.map((type) => (
          <button
            key={type.id}
            className={`flex items-center justify-start px-4 py-5 border border-gray-100 rounded-md ${
              description === type.id
                ? "shadow-[0px_0px_6px_0px_rgba(0,0,0,0.2)] border border-orange-200"
                : "border-red-400"
            } hover:border-orange-200 hover:shadow-[0px_0px_6px_0px_rgba(0,0,0,0.2)] hover:transition-colors w-full m-2`}
            onClick={() => handleTypeSelection(type.id)}
          >
            <img className="w-6 mr-3" src={type.url} alt="icon"></img>
            {type.label.split(" ").length === 1 ? (
              <span className="font-normal text-sm text-gray-800">{type.label}</span>
            ) : (
              <>
                <span className="font-normal text-sm mr-1 text-gray-800">{type.label.split(" ")[0]} </span>
                <span className="text-sm text-gray-500">{type.label.substring(type.label.indexOf(" ") + 1)}</span>
              </>
            )}
          </button>
        ))}
      </div>
      <div className=" border-none flex justify-center sm:static  fixed bottom-0 h-20 bg-white w-full">
        <button
          className={`bg-black bottom-6  min-w-[21rem] sm:min-w-[19.5rem] sm:mt-5 h-[60%] text-white px-9 py-3 rounded-md transition-colors ${
            !description
              ? "bg-opacity-10 hover:bg-opacity-10"
              : "hover:bg-opacity-70"
          }`}
          onClick={() => nextPage()}
          disabled={!description}
        >
          Continue
        </button>
      </div>
    </div>
  );
};

export default Description;

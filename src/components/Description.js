// Describes the user's characteristics or preferences.

import React from "react";
import { useContext } from "react";
import Formcontext from "../formcontext/formContext";

const Description = ({nextPage}) => {
  // const [selectedType, setSelectedType] = useState(null);


  const userTypes = [
    { id: 1, label: "Student or soon to be enrolled", icon: "👨‍🎓" },
    { id: 2, label: "Professional pursuing a career", icon: "👩‍💼" },
    { id: 3, label: "Parent of a school-age child", icon: "👦" },
    { id: 4, label: "Lifelong learner", icon: "🧑‍🏫" },
    { id: 5, label: "Teacher", icon: "👩‍🏫" },
    { id: 6, label: "Other", icon: "👱‍♂️" },
  ];

  const handleTypeSelection = (typeId) => {
    setDescription(typeId);
  };

  const { setDescription, description } = useContext(Formcontext);

  return (
    <>  
        <h1 className="text-2xl font-bold mb-5">Which describes you best?</h1>
        <p className="text-gray-600 mb-5">
          This will help us personalize your experience.
        </p>
        <div className="w-[80%] flex flex-col justify-center items-center box-border">
          {userTypes.map((type) => (
            <button
             
              key={type.id}
              className={`flex items-center justify-start px-4 py-3 border border-gray-100 rounded-md ${
                description === type.id
                  ? " shadow-[0px_0px_6px_0px_rgba(0,0,0,0.2)] border border-orange-200 "
                  : " border-gray-200"
              } hover:border-orange-200 hover:shadow-[0px_0px_6px_0px_rgba(0,0,0,0.2)]  hover: transition-colors w-full m-2 `}
              onClick={() => handleTypeSelection(type.id)}
            >
              <span className="mr-2">{type.icon}</span>
              {type.label}
            </button>
          ))}
        </div>
        <button
          className={`bg-black text-white px-9 py-2 rounded-md  transition-colors ${!description ? 'bg-opacity-20 hover:bg-opacity-20' : 'hover:bg-opacity-70'}`}
          onClick={() => nextPage()}
          disabled={!description}
        >
          Continue
        </button>
       
    </>
  );
};

export default Description;

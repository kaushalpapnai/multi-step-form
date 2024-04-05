// Describes the user's characteristics or preferences.

import React from "react";
import { useState } from "react";

const Description = () => {
  const [selectedType, setSelectedType] = useState(null);

  const userTypes = [
    { id: 1, label: "Student or soon to be enrolled", icon: "👨‍🎓" },
    { id: 2, label: "Professional pursuing a career", icon: "👩‍💼" },
    { id: 3, label: "Parent of a school-age child", icon: "👦" },
    { id: 4, label: "Lifelong learner", icon: "🧑‍🏫" },
    { id: 5, label: "Teacher", icon: "👩‍🏫" },
    { id: 6, label: "Other", icon: "👱‍♂️" },
  ];

  const handleTypeSelection = (typeId) => {
    setSelectedType(typeId);
  };

  return (
    <>
      <div className=" border border-red-500">
      <h1 className="text-2xl font-bold mb-6">Which describes you best?</h1>
          <p className="text-gray-600 mb-8">
            This will help us personalize your experience.
          </p>
        {userTypes.map((type) => (
          <button
            key={type.id}
            className={`flex items-center justify-start px-4 py-2 rounded-md ${
              selectedType === type.id
                ? "bg-green-500 text-white"
                : "bg-gray-200 text-gray-800"
            } hover:bg-green-600 hover:text-white transition-colors`}
            onClick={() => handleTypeSelection(type.id)}
          >
            <span className="mr-2">{type.icon}</span>
            {type.label}
          </button>
        ))}
      </div>
    </>
  );
};

export default Description;

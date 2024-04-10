import React, { useState } from "react";
import image from "../materials/MathFoundation.gif";

const LearningPathOptions = () => {
  const [selectedOption, setSelectedOption] = useState(0);

  const handleClick = (option) => {
    setSelectedOption(option);
  };

  return (
    <div className="flex flex-col items-center  h-screen justify-center">
      <h2 className=" md:text-3xl lg:text-3xl text-lg sm:text-2xl font-bold mb-8">
        Learning paths based on your answers
      </h2>
      <p className="text-gray-500 mb-8 text-sm sm:text-sm">
        Choose one to get started. You can switch anytime.
      </p>
      <div className="flex flex-col max-w-[28rem] md:max-w-[100%] lg:max-w-[80%] md:flex-row justify-center items-center">
        <div
          className={`bg-white relative rounded-lg p-6 md:w-[50%] h-[90%] flex justify-center items-center m-2 cursor-pointer border border-gray-200
          ${
            selectedOption === 1
              ? "shadow-md border-orange-200"
              : "border-gray-200"
          } 
          hover:border-orange-200 hover:shadow-md hover:transition-colors`}
          onClick={() => handleClick(1)}
        >
          <span className="px-3 py-1 absolute -top-3 left-1/2 transform -translate-x-1/2 bg-yellow-600 text-black text-xs rounded-full">
            MOST POPULAR
          </span>
          <div className="mr-1 h-full">
            <h3 className="text-md font-bold sm:text-lg">Foundational Math</h3>
            <p className="text-gray-500 text-sm sm:text-base">
              Your foundational skills in algebra, geometry, and probability.
            </p>
          </div>
          <img
            src={image}
            className="w-[35%] "
            alt="Foundational Math"
          />
        </div>
        <div
          className={`bg-white rounded-lg p-5  md:w-[50%] md:h-[90%] sm:h-[50%]  flex justify-center m-2 cursor-pointer items-center border border-gray-200
          ${
            selectedOption === 2
              ? "shadow-md border-orange-200"
              : "border-gray-200"
          } 
          hover:border-orange-200 hover:shadow-md hover:transition-colors`}
          onClick={() => handleClick(2)}
        >
          <div className=" mr-1 h-full ">
            <h3 className="text-md font-bold sm:text-lg ">Mathematical Thinking</h3>
            <p className="text-gray-500 text-sm  sm:text-base">
              Build your foundational skills in algebra, geometry, and
              probability.
            </p>
          </div>
          <img
            src={image}
            className="w-[35%] "
            alt="Mathematical Thinking"
          />
        </div>
      </div>
    </div>
  );
};

export default LearningPathOptions;

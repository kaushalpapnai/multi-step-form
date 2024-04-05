import React, { useState } from "react";
import Description from "./Description";
import InterestSelection from "./InterestSelection";
import LearningPathways from "./LearningPathways";
import MathComfort from "./MathComfort";
import ProgressIndicator from "./ProgressIndicator";
import ResultDisplay from "./ResultDisplay";
import Confirmation from "./Confirmation";

const Form = () => {
  const [element, setElement] = useState(1);

  const nextPage = () => {
    console.log("continue section" + element);
    setElement(element + 1);
  };

  const previousPage = () => {
    console.log("previous section" + element);
    setElement(element - 1);
  };

  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <div className="bg-white p-8 rounded-lg shadow-md flex flex-col justify-center items-center">
          <div className="">
            {element === 1 && <Description />}
            {element === 2 && <InterestSelection />}
            {element === 3 && <Confirmation />}
            {element === 4 && <MathComfort />}
            {element === 5 && <ProgressIndicator />}
            {element === 6 && <LearningPathways />}
            {element === 7 && <ResultDisplay />}
          </div>
          {element > 1 ? (
            <button
              className="bg-green-500 text-white px-4 py-2 rounded-md mt-8 hover:bg-green-600 transition-colors"
              onClick={() => previousPage()}
            >
              back
            </button>
          ) : (
            <button
              className="bg-green-700 text-white px-4 py-2 rounded-md mt-8"
              disabled
            >
              back
            </button>
          )}
          {element < 7 ? (
            <button
              className="bg-green-500 text-white px-4 py-2 rounded-md mt-8 hover:bg-green-600 transition-colors"
              onClick={() => nextPage()}
            >
              Continue
            </button>
          ) : (
            <button className="bg-green-800 text-white px-4 py-2 rounded-md mt-8 ">
              Continue
            </button>
          )}
        </div>
      </div>
    </>
  );
};

export default Form;

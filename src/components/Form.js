import React, { useState } from "react";
import Description from "./Description";
import InterestSelection from "./InterestSelection";
import LearningPathways from "./LearningPathways";
import MathComfort from "./MathComfort";
import ProgressIndicator from "./ProgressIndicator";
import ResultDisplay from "./ResultDisplay";
import Confirmation from "./Confirmation";
import { useContext } from "react";
import Formcontext from "../formcontext/formContext";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';

const Form = () => {
  const { element, setElement, barWidth, setBarWidth } =
    useContext(Formcontext);

  const previousPage = () => {
    setElement(element - 1);
    if (barWidth > 14.287) {
      setBarWidth(barWidth - 14.287);
    }
  };

  const nextPage = () => {
    setElement(element + 1);
    if (barWidth < 100) {
      setBarWidth(barWidth + 14.287);
    }
  };

  return (
    <>
      <div className=" flex flex-col items-center justify-center min-h-screen">
      {/* <FontAwesomeIcon icon={faArrowLeft} /> */}
        <div className=" w-[70%] h-full flex items-center justify-center">
          {element > 1 ? (
            <button
              className="p-2 flex justify-center "
              onClick={() => previousPage()}
            >
               <FontAwesomeIcon className="hover:text-stone-500" icon={faChevronLeft}/>
            </button>
          ) : null}
          <div className="bg-gray-300 w-full h-1 ">
            <div
              className=" bg-green-600 h-full"
              style={{ width: barWidth + "%" }}
            ></div>
          </div>
        </div>
        <div className="w-[60%] flex flex-col justify-center items-center p-2 mt-4">
          {element === 1 && <Description nextPage={nextPage} />}
          {element === 2 && <InterestSelection nextPage={nextPage} />}
          {element === 3 && <Confirmation nextPage={nextPage} />}
          {element === 4 && <MathComfort nextPage={nextPage} />}
          {element === 5 && <ProgressIndicator nextPage={nextPage} />}
          {element === 6 && <LearningPathways nextPage={nextPage} />}
          {element === 7 && <ResultDisplay nextPage={nextPage} />}
        </div>
      </div>
    </>
  );
};

export default Form;

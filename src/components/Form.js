import React, { useState, useEffect } from "react";
import Description from "./Description";
import InterestSelection from "./InterestSelection";
import LearningPathways from "./LearningPathways";
import MathComfort from "./MathComfort";
import ProgressIndicator from "./ProgressIndicator";
import ResultDisplay from "./ResultDisplay";
import Confirmation from "./Confirmation";
import { useContext } from "react";
import Formcontext from "../formcontext/formContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";

const Form = () => {
  const { element, setElement, barWidth, setBarWidth } = useContext(
    Formcontext
  );
  const [loading, setLoading] = useState(true);

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

  useEffect(() => {
    if (element === 6) {
      setTimeout(() => {
        setLoading(false);
      }, 3000); // take loading time of 2 seconds to simulate the time when we fetch real data from API
    }
  }, [element]);

  return (
    <>
      <div className="relative">
        <div className="absolute  top-0 left-0 w-full h-9 mt-3 md:mt-6 flex  items-center justify-center">
          <div className="w-[70%] flex items-center justify-center ">
            {element > 1 && (
              <button
                className="p-2 flex justify-center "
                onClick={() => previousPage()}
              >
                <FontAwesomeIcon
                  className="hover:text-stone-500"
                  icon={faChevronLeft}
                />
              </button>
            )}
            <div className="bg-gray-300 w-full h-1 ">
              <div
                className="bg-green-600 h-full"
                style={{ width: barWidth + "%" }}
              ></div>
            </div>
          </div>
        </div>

        <div className="pt-8 md:pt-16">
          {element <= 5 ? (
            <div className=" flex flex-col items-center">
              <div className="md:w-[80%]">
                {element === 1 && <Description nextPage={nextPage} />}
                {element === 2 && <InterestSelection nextPage={nextPage} />}
                {element === 3 && <Confirmation nextPage={nextPage} />}
                {element === 4 && <MathComfort nextPage={nextPage} />}
                {element === 5 && <ProgressIndicator nextPage={nextPage} />}
              </div>
            </div>
          ) : (
            <div className=" flex flex-col items-center justify-center h-[30rem]">
              {loading ? (
                element === 6 && <LearningPathways />
              ) : (
                <ResultDisplay />
              )}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Form;

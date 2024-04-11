import React from "react";
import Pulley from "../materials/Pulley";

const Confirmation = ({ nextPage }) => {
  return (
    <div className="flex flex-col justify-center items-center mt-8 md:w-full ">
      <div className="flex flex-col md:flex-row md:w-full lg:flex-row  justify-center items-center w-full max-w-screen-lg p-4">
        <div className="w-[50%] lg:w-1/2 flex justify-center mb-4 lg:mb-0 lg:order-1">
          {/* Add responsive styling to the Pulley component */}
          <div className="w-full sm:w-3/4 md:w-full lg:w-full max-w-xs">
            <Pulley />
          </div>
        </div>
        <div className="w-full md:w-1/2 lg:w-1/2 flex flex-col items-center text-center md:text-left lg:text-left lg:order-2">
          <h1 className="text-2xl md:text-3xl font-bold mb-4">
            Learning on Brilliant is effective and fun
          </h1>
          <p className="text-gray-600 mb-8">
            Brilliant gets you hands-on to help improve your professional skills
            and knowledge. You'll interact with concepts and solve fun problems
            in math, science, and computer science.
          </p>
        </div>
      </div>
      <button
        className={`bg-black left-5 right-5 bottom-6 fixed sm:static md:w-[12rem] md:min-w-[10rem] sm:min-w-[19.5rem] sm:mt-5 hover:bg-opacity-70 text-white px-9 py-3 rounded-md transition-colors mx-auto max-w-[21rem]`}
        onClick={() => nextPage()}
      >
        Continue
      </button>
    </div>
  );
};

export default Confirmation;

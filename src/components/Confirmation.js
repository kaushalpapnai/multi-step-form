import React from "react";
import Pulley from "../materials/Pulley";

const Confirmation = ({ nextPage }) => {
  return (
    <div className=" flex flex-col justify-center  items-center">
      <div className="flex items-center h-96 ">
        <div className=" object-contain  w-[20rem] h-full mr-20 ">
         <Pulley/>
        </div>
        <div className=" h-full w-[70%] flex justify-center flex-col">
          <h1 className="text-2xl font-bold mb-4">You're in the right place</h1>
          <p className="text-gray-600 mb-8">
            Brilliant gets you hands-on to help improve your professional skills
            and knowledge. You'll interact with concepts and solve fun problems
            in math, science, and computer science.
          </p>
        </div>
      </div>
      <button
        className="bg-black text-white px-9 py-2 rounded-md hover:bg-opacity-70 transition-colors"
        onClick={() => nextPage()}
      >
        Continue
      </button>
    </div>
  );
};

export default Confirmation;

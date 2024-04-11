import React from "react";
import image1 from "../materials/image1.jpeg";

const ProgressIndicator = ({ nextPage }) => {
  return (
    <div className="flex flex-col items-center mb-24 md:mt-10">
      <div className="flex flex-col md:mb-5 md:flex-row items-center justify-center">
        <div className="w-full md:w-1/2  flex items-center justify-center">
          <img
            src={image1}
            className="w-[19rem] h-fit mt-10 md:mt-0 sm:w-[20rem] "
            alt="Progress"
          />
        </div>
        <div className="w-full md:w-1/2 p-6 flex  flex-col">
          <div className="text-start md:mb-6 ">
            <h2 className="text-2xl text-center md:text-start md:text-2xl text-gray-800 md:w-full font-bold">
              You're on your way!
            </h2>
          </div>
          <div className="mb-4">
            <div className="flex space-x-2">
              {[1, 2, 3, 4, 5].map((star, index) => (
                <svg
                  key={index}
                  className="w-6 h-6 text-orange-400 hidden md:block"
                  viewBox="0 0 24 24"
                  fill="orange"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              ))}
            </div>
          </div>
          <div className="flex justify-center md:static ">
            <p className="text-gray-800 w-[95%] sm:w-[70%] md:w-full text-center italic text-sm  md:text-start">
              "Brilliant’s interactive lessons will start at your level and help
              you advance. Interactive learning has been shown to be 6x more
              effective than watching lecture videos."
            </p>
          </div>
          {/* Conditionally render the "Jacob S." paragraph only on medium and large screens */}
          <p className="text-gray-800 mt-4 hidden md:block">— Jacob S.</p>
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

export default ProgressIndicator;

import React from 'react';

const LearningPathOptions = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h2 className="text-3xl font-bold mb-6">Learning paths based on your answers</h2>
      <p className="text-gray-500 mb-8">
        Choose one to get started. You can switch anytime.
      </p>
      <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-md">
        <div className="flex justify-between items-center mb-4">
          <span className="px-3 py-1 bg-yellow-500 text-white rounded-full text-xs font-bold">
            MOST POPULAR
          </span>
          <button className="px-4 py-2 bg-blue-500 text-white rounded-full text-xs font-bold">
            Get Started
          </button>
        </div>
        <div className="flex items-center mb-4">
          <div className="w-10 h-10 bg-blue-500 rounded-full mr-4 flex items-center justify-center">
            <svg
              className="w-6 h-6 text-white"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M12 8V16"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M8 12H16"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <h3 className="text-xl font-bold">Foundational Math Build</h3>
        </div>
        <p className="text-gray-500">
          your foundational skills in algebra, geometry, and probability.
        </p>
      </div>
      <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-md mt-6">
        <div className="flex items-center mb-4">
          <div className="w-10 h-10 bg-blue-500 rounded-full mr-4 flex items-center justify-center">
            <svg
              className="w-6 h-6 text-white"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M12 8V16"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M8 12H16"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <h3 className="text-xl font-bold">Mathematical Thinking</h3>
        </div>
        <p className="text-gray-500">
          Build your foundational skills in algebra, geometry, and probability.
        </p>
      </div>
    </div>
  );
};

export default LearningPathOptions;
import React from 'react';

const ProgressIndicator = () => {
  return (
    <div >
      <div className="relative w-full max-w-md">
        <div>
          <div className="flex justify-center mb-6">
            <div className="bg-red-500 rounded-full w-16 h-16 flex items-center justify-center">
              <svg
                className="w-8 h-8 text-white"
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
                  d="M12 16V12"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M12 8H12.01"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
          <h2 className="text-2xl font-bold text-center mb-4">You're on your way!</h2>
          <div className="flex justify-center mb-6">
            <div className="flex space-x-2">
              {[1, 2, 3, 4, 5].map((star, index) => (
                <svg
                  key={index}
                  className="w-6 h-6 text-yellow-400"
                  viewBox="0 0 24 24"
                  fill="none"
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
          <p className="text-gray-500 text-center">
            "Through its engaging and well-structured courses, Brilliant has taught me mathematical concepts that I previously struggled to understand. I now feel confident approaching both technical job interviews and real world problem solving situations."
          </p>
          <p className="text-gray-500 text-right mt-4">— Jacob S.</p>
        </div>
      </div>
    </div>
  );
};

export default ProgressIndicator;
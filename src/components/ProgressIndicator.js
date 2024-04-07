import React from 'react';
import image1 from '../materials/image1.jpeg'

const ProgressIndicator = ({nextPage}) => {
  return (
    <div className='flex flex-col items-center'>
      <div className="  flex">
        <div className=' w-[45%]'>
          <img src={image1} ></img>
        </div>
        <div className='w-[55%] p-12'>
          <h2 className="text-2xl font-bold mb-4">You're on your way!</h2>
          <div className=" mb-6">
            <div className="flex space-x-2">
              {[1, 2, 3, 4, 5].map((star, index) => (
                <svg
                  key={index}
                  className="w-6 h-6 text-orange-400"
                  viewBox="0 0 24 24"
                  fill='orange'
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
          <p className="text-gray-500 ">
            "Through its engaging and well-structured courses, Brilliant has taught me mathematical concepts that I previously struggled to understand. I now feel confident approaching both technical job interviews and real world problem solving situations."
          </p>
          <p className="text-gray-500 mt-4">— Jacob S.</p>
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

export default ProgressIndicator;
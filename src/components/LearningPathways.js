import React from 'react';

const LearningPathRecommendations = ({nextPage}) => {
  return (
    <div>
      <div >
        <div className="flex justify-center mb-6">
          <div className="w-12 h-12 bg-yellow-500 rounded-full" />
        </div>
        <h2 className="text-2xl font-bold text-center mb-4">
          Finding learning path recommendations for you based on your responses
        </h2>
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

export default LearningPathRecommendations;
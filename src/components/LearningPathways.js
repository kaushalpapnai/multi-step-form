import React from 'react';
import RollingGif from "../materials/rolling.gif"

const LearningPathRecommendations = () => {
  return (
      <div className='flex flex-col justify-center items-center '>
          <div className="w-[15%] mb-5" >
            <img src={RollingGif}></img>
          </div>
        <h2 className="text-2xl font-bold text-center mb-4">
          Finding learning path recommendations for you based on your responses
        </h2>
      </div>
  );
};

export default LearningPathRecommendations;
import React, { useContext, useState } from 'react';
import Formcontext from '../formcontext/formContext';

const MathComfort = () => {

  const mathLevels = [
    { id: 1, label: 'Introductory', content: '5 × 1/2 = ?' },
    { id: 2, label: 'Foundational', content: '3x + 5 = 4' },
    { id: 3, label: 'Intermediate', content: 'x = (-b ± √(b^2 - 4ac)) / 2a' },
    { id: 4, label: 'Advanced', content: '∫x^2 dx = ?' },
  ];

   const {mathLevel,setMathLevel} = useContext(Formcontext) 

  const handleLevelSelection = (levelId) => {
    setMathLevel(levelId);
  };

  return (
    <div >
      <div >
        <h1 className="text-2xl font-bold mb-6">What is your math comfort level?</h1>
        <p className="text-gray-600 mb-8">
          Choose the highest level you feel confident in — you can always adjust later.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {mathLevels.map((level) => (
            <button
              key={level.id}
              className={`bg-gray-200 text-gray-800 px-4 py-6 rounded-md hover:bg-green-500 hover:text-white transition-colors ${
                mathLevel === level.id ? 'bg-green-500 text-white' : ''
              }`}
              onClick={() => handleLevelSelection(level.id)}
            >
              <h2 className="text-lg font-bold mb-2">{level.label}</h2>
              <p className="text-sm">{level.content}</p>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MathComfort;
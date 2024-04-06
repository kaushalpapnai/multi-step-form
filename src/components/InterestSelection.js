import React, { useContext, useState } from 'react';
import Formcontext from '../formcontext/formContext';

const InterestSelection = () => {

  const interests = [
    { id: 1, label: 'Learning specific skills to advance my career', icon: '📈' },
    { id: 2, label: 'Exploring new topics I\'m interested in', icon: '🌍' },
    { id: 3, label: 'Refreshing my math foundations', icon: '➕' },
    { id: 4, label: 'Exercising my brain to stay sharp', icon: '🧠' },
    { id: 5, label: 'Something else', icon: '🤔' },
  ];

  const {interestSelection,setInterestSelection} = useContext(Formcontext)

  const handleInterestSelection = (interestId) => {
    setInterestSelection(interestId);
  };

  return (
      <div>
        <h1 className="text-2xl font-bold mb-6">Which are you most interested in?</h1>
        <p className="text-gray-600 mb-8">Choose just one. This will help us get you started (but won't limit your experience).</p>
        <div>
          {interests.map((interest) => (
            <button
              key={interest.id}
              className={`flex items-center justify-start px-4 py-2 rounded-md ${
                interestSelection === interest.id
                  ? 'bg-green-500 text-white'
                  : 'bg-gray-200 text-gray-800'
              } hover:bg-green-600 hover:text-white transition-colors`}
              onClick={() => handleInterestSelection(interest.id)}
            >
              <span className="mr-2">{interest.icon}</span>
              {interest.label}
            </button>
          ))}
        </div>
      </div>
  );
};

export default InterestSelection;
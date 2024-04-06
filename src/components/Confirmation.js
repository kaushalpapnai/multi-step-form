import React from 'react';

const Confirmation = () => {
  return (
      <div>
        <div className="flex flex-col items-center">
          <div className="relative h-32 w-32 mb-6">
            <div className="absolute left-0 top-0 h-full w-full flex items-center justify-center">
              <div className="bg-green-500 rounded-full h-20 w-20 flex items-center justify-center text-white text-2xl font-bold">
                16k
              </div>
            </div>
            <img
              src="/pulley.svg"
              alt="Pulley"
              className="h-full w-full object-contain"
            />
          </div>
          <h1 className="text-2xl font-bold mb-4">You're in the right place</h1>
          <p className="text-gray-600 mb-8">
            Brilliant gets you hands-on to help improve your professional skills and knowledge. You'll interact with concepts and solve fun problems in math, science, and computer science.
          </p>
        </div>
      </div>
  );
};

export default Confirmation;
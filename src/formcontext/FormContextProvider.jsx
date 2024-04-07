import React, { useState } from "react";
import Formcontext from "./formContext";

const FormContextProvider = ({ children }) => {
  const [description, setDescription] = useState(null);
  const [interestSelection, setInterestSelection] = useState(null);
  const [mathLevel, setMathLevel] = useState(null);
  const [element, setElement] = useState(1);
  const [barWidth, setBarWidth] = useState(14.287);


  return (
    <Formcontext.Provider
      value={{
        description,
        setDescription,
        interestSelection,
        setInterestSelection,
        mathLevel,
        setMathLevel,
        element,
        setElement,
        barWidth,
        setBarWidth
      }}
    >
      {children}
    </Formcontext.Provider>
  );
};

export default FormContextProvider;

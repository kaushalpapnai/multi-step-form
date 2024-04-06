import React, { useState } from "react";
import Formcontext from "./formContext";

const FormContextProvider = ({ children }) => {
  const [description, setDescription] = useState(null);
  const [interestSelection, setInterestSelection] = useState(null);
  const [mathLevel, setMathLevel] = useState(null);

  return (
    <Formcontext.Provider
      value={{
        description,
        setDescription,
        interestSelection,
        setInterestSelection,
        mathLevel,
        setMathLevel
      }}
    >
      {children}
    </Formcontext.Provider>
  );
};

export default FormContextProvider;

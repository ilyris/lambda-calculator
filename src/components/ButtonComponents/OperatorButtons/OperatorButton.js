import React from "react";

const OperatorButton = ({operators, handleOperators, calculateSum}) => {
  return (
    <>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      <button onClick={ (event) => operators.value !== '=' ? handleOperators(event.target.value) : calculateSum(event.target.value)} value={operators.value}>{operators.char}</button>
    </>
  );
};

export default OperatorButton;

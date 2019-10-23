import React from "react";

const NumberButton = ({numbers,handleOperations, handleFirstNumber}) => {
let firstNumber = 0;
let lastNumber = 0;
  return (
    <>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      <button className="Numbers"id={`Value${numbers}`} onClick ={handleFirstNumber} value={numbers} >{numbers}</button>
    </>
  );
};
 export default NumberButton;
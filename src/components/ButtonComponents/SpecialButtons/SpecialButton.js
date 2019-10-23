import React from "react";

const SpecialButton = ({specialCharacters,handleOperations}) => {
  return (
    <>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      <button onClick={handleOperations} value={specialCharacters} >{specialCharacters}</button>
    </>
  );
};
export default SpecialButton

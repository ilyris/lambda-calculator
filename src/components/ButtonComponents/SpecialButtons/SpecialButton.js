import React from "react";

const SpecialButton = ({specialCharacters}) => {
  return (
    <>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      <button>{specialCharacters}</button>
    </>
  );
};
export default SpecialButton

import React from "react";

const OperatorButton = ({operators}) => {
  return (
    <div>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      <button value={operators.value}>{operators.char}</button>
    </div>
  );
};

export default OperatorButton;

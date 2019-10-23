import React,{useState} from "react";
import OpateratorButton from './OperatorButton';
//import any components needed

//Import your array data to from the provided data file
import {operators} from '../../../data';

const Operators = ({calculateSum,handleOperators}) => {
  // STEP 2 - add the imported data to state
  const [operatorsState, setOperators] = useState(operators);
  let mapKey = 0;
  return (
    <div className="OperatorsContainer">
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/}
       {operatorsState.map(  operators => {
        return(
          <OpateratorButton
          handleOperators={handleOperators}
          calculateSum={calculateSum}
            key={mapKey++}
            operators={operators}
          />
        );
       })}
    </div>
  );
};
export default Operators;

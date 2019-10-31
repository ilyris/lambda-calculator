import React,{useState} from "react";
import {specials} from '../../../data';
//import any components needed
import SpecialsButton from './SpecialButton';
//Import your array data to from the provided data file

const Specials = ({handleOperations}) => {
  // STEP 2 - add the imported data to state
  const [specialsState, setSpecialsState] = useState(specials);
  let key = 0;
  return (
    <div className="SpecialsContainer">
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/}
       {specialsState.map( specialCharacters => {
         return(
           <SpecialsButton
           key={key++}
              handleOperations={handleOperations}
              specialCharacters={specialCharacters}
           />
         );
       })}
    </div>
  );
};
export default Specials
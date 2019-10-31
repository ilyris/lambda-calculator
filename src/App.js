import React,{useState, useEffect} from "react";
import "./App.css";
import "./index.css";
import Numbers from './components/ButtonComponents/NumberButtons/Numbers';
import Operators from './components/ButtonComponents/OperatorButtons/Operators';
import Specials from './components/ButtonComponents/SpecialButtons/Specials';
import Displays from './components/DisplayComponents/Display';
// STEP 4 - import the button and display components
// Don't forget to import any extra css/scss files you build into the correct component

// Logo has already been provided for you. Do the same for the remaining components
import Logo from "./components/DisplayComponents/Logo";

function App() {
  const [display, setDisplay] = useState('');
  let [sum, setSum] = useState('');
  const [firstNumber, setFirstNumber] = useState('');
  const [lastNumber, setLastNumber] = useState('');
  const [operator, setOperator] = useState('');

  let firstNewNumber;

  // STEP 5 - After you get the components displaying using the provided data file, write your state hooks here.
  // Once the state hooks are in place write some functions to hold data in state and update that data depending on what it needs to be doing
  // Your functions should accept a parameter of the the item data being displayed to the DOM (ie - should recieve 5 if the user clicks on
  // the "5" button, or the operator if they click one of those buttons) and then call your setter function to update state.
  // Don't forget to pass the functions (and any additional data needed) to the components as props


  const handleOperations = (event) => {
    setDisplay(event.target.value);
  }
  const handleFirstNumber = (event) => {
    if(firstNumber === '') {
      setFirstNumber(event.target.value);
      setDisplay(event.target.value);
    }else if(firstNumber !== '') {
      setLastNumber(event.target.value);
      setDisplay(event.target.value);
    }
  }

  const handleLastNumber = (event) => {
    // setLastNumber(event.target.value);
    setDisplay(event.target.value);
  }

  const handleOperators = (eventsValue) => {
    setOperator(eventsValue);
    setDisplay(eventsValue);
    // Couldn't console.log in here as our setter functions are asynchronous so it was fucking up my logging -.-

  }

  const calculateSum = (eventValue) => {
    setOperator(eventValue);
    if(operator === '/') {
      setSum(Number(firstNumber) / Number(lastNumber));
      strinifySum();
    }
    if(operator === '*') {
      setSum(Number(firstNumber) * Number(lastNumber));
      strinifySum();
    }
    if(operator === '-') {
      setSum(Number(firstNumber) - Number(lastNumber));
      strinifySum();
    }
    if(operator === '+') {
      setSum(Number(firstNumber) + Number(lastNumber));
      console.log(sum);
      strinifySum();

    }
  }
  console.log(sum);
  const strinifySum = () => {
    setDisplay(sum.toString());
    console.log(sum);
  }
  return (
    <div className="container">
      <Logo />
      <div className="App">
        {/* STEP 4 - Render your components here and be sure to properly import/export all files */}
        <Displays display={display} />
        <div className="ButtonContainers" onClick={(event) => event.stopPropagation}>
          <Specials handleOperations={handleOperations}/>
          <Numbers handleLastNumber={handleLastNumber} handleFirstNumber={handleFirstNumber}/>
          <Operators calculateSum={calculateSum} handleOperators={handleOperators} />
        </div>
      </div>
    </div>
  );
}

export default App;

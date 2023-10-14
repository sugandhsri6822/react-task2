// src/Calculator.js
import React, { useState } from 'react';
import './Calculator.css';

const Calculator = () => {
  // State for keeping track of the calculator display content
  const [display, setDisplay] = useState('');

  // Function to handle button clicks
  const handleButtonClick = (value) => {
    if (value === '=') {
      try {
        setDisplay(eval(display));
      } catch (error) {
        setDisplay('Error');
      }
    } else if (value === 'C') {
      setDisplay('');
    } else {
      setDisplay(display + value);
    }
  };

  return (
    <div className="calculator">
      <div className="calculator-display">
        {display}
      </div>
      <div className="calculator-buttons">
        <div className="calculator-button-row">
          <button onClick={() => handleButtonClick('7')}>7</button>
          <button onClick={() => handleButtonClick('8')}>8</button>
          <button onClick={() => handleButtonClick('9')}>9</button>
          <button onClick={() => handleButtonClick('+')}>+</button>
        </div>
        <div className="calculator-button-row">
          <button onClick={() => handleButtonClick('4')}>4</button>
          <button onClick={() => handleButtonClick('5')}>5</button>
          <button onClick={() => handleButtonClick('6')}>6</button>
          <button onClick={() => handleButtonClick('-')}>-</button>
        </div>
        <div className="calculator-button-row">
          <button onClick={() => handleButtonClick('1')}>1</button>
          <button onClick={() => handleButtonClick('2')}>2</button>
          <button onClick={() => handleButtonClick('3')}>3</button>
          <button onClick={() => handleButtonClick('*')}>*</button>
        </div>
        <div className="calculator-button-row">
          <button onClick={() => handleButtonClick('0')}>0</button>
          <button onClick={() => handleButtonClick('.')}>.</button>
          <button onClick={() => handleButtonClick('=')}>=</button>
          <button onClick={() => handleButtonClick('/')}>/</button>
        </div>
        <div className="calculator-button-row">
          <button onClick={() => handleButtonClick('C')}>C</button>
        </div>
      </div>
    </div>
  );
};

export default Calculator;

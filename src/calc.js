import React, { useState } from 'react';
import './Style.css'
import './calc.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';

function Calculator() {
  const [displayValue, setDisplayValue] = useState('');

  const appendToDisplay = (value) => {
    setDisplayValue((prevValue) => prevValue + value);
  };

  const clearDisplay = () => {
    setDisplayValue('');
  };

  const deleteLastCharacter = () => {
    setDisplayValue((prevValue) => prevValue.slice(0, -1));
  };

  const evaluateExpression = () => {
    let result;
    try {
      result = eval(displayValue);
    } catch (error) {
      result = 'Error';
    }
    setDisplayValue(result.toString());
  };

  return (
    <div>
    <body>
        
       
    <div className="container">
      <div className="form_box">
        <div className="grid">
          <input
            className="Display calc-button"
            type="text"
            value={displayValue}
            readOnly
          />
          <button className="calc-button" onClick={clearDisplay}>
            AC
          </button>
          <button className="calc-button" onClick={() => appendToDisplay('%')}>
            %
          </button>
          <button
            className="calc-button"
            onClick={() => deleteLastCharacter('<~')}
          >
            {'<~'}
          </button>
          <button className="calc-button" onClick={() => appendToDisplay('/')}>
            /
          </button>
          <button className="calc-button" onClick={() => appendToDisplay('7')}>
            7
          </button>
          <button className="calc-button" onClick={() => appendToDisplay('8')}>
            8
          </button>
          <button className="calc-button" onClick={() => appendToDisplay('9')}>
            9
          </button>
          <button className="calc-button" onClick={() => appendToDisplay('*')}>
            *
          </button>
          <button className="calc-button" onClick={() => appendToDisplay('4')}>
            4
          </button>
          <button className="calc-button" onClick={() => appendToDisplay('5')}>
            5
          </button>
          <button className="calc-button" onClick={() => appendToDisplay('6')}>
            6
          </button>
          <button className="calc-button" onClick={() => appendToDisplay('-')}>
            -
          </button>
          <button className="calc-button" onClick={() => appendToDisplay('1')}>
            1
          </button>
          <button className="calc-button" onClick={() => appendToDisplay('2')}>
            2
          </button>
          <button className="calc-button" onClick={() => appendToDisplay('3')}>
            3
          </button>
          <button className="calc-button" onClick={() => appendToDisplay('+')}>
            +
          </button>
          <button className="calc-button zero" onClick={() => appendToDisplay('0')}>
            0
          </button>
          <button className="calc-button" onClick={() => appendToDisplay('.')}>
            .
          </button>
          <button className="calc-button large-button" onClick={evaluateExpression}>
          =
        </button>
        </div>
       
      </div>
    </div>
    
    </body>
    </div>
  );
}

export default Calculator;

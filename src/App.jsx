import React, { useState } from 'react';

function App() {
  const [display, setDisplay] = useState('0');
  const [previousValue, setPreviousValue] = useState(null);
  const [operation, setOperation] = useState(null);

  const handleNumberClick = (number) => {
    setDisplay(display === '0' ? String(number) : display + number);
  };

  const handleOperatorClick = (operator) => {
    if (previousValue === null) {
      setPreviousValue(parseFloat(display));
      setDisplay('0');
      setOperation(operator);
    } else {
      handleCalculate();
      setPreviousValue(parseFloat(display));
      setDisplay('0');
      setOperation(operator);
    }
  };

  const handleCalculate = () => {
    if (previousValue === null || operation === null) return;

    let result;
    const currentValue = parseFloat(display);

    switch (operation) {
      case '+':
        result = previousValue + currentValue;
        break;
      case '-':
        result = previousValue - currentValue;
        break;
      case '*':
        result = previousValue * currentValue;
        break;
      case '/':
        result = previousValue / currentValue;
        break;
      default:
        return;
    }

    setDisplay(String(result));
    setPreviousValue(null);
    setOperation(null);
  };

  const handleClear = () => {
    setDisplay('0');
    setPreviousValue(null);
    setOperation(null);
  };

  const handleDecimal = () => {
    if (!display.includes('.')) {
      setDisplay(display + '.');
    }
  };

  const handleToggleSign = () => {
    setDisplay(String(parseFloat(display) * -1));
  };

  const handleTripleZero = () => {
    handleNumberClick('000');
  };

  return (
    <div className="calculator">
      <div className="display">{display}</div>
      <div className="buttons">
        <button onClick={handleClear}>C</button>
        <button onClick={handleToggleSign}>+/-</button>
        <button onClick={() => handleOperatorClick('%')}>%</button>
        <button onClick={() => handleOperatorClick('/')}>/</button>
        <button onClick={() => handleNumberClick(7)}>7</button>
        <button onClick={() => handleNumberClick(8)}>8</button>
        <button onClick={() => handleNumberClick(9)}>9</button>
        <button onClick={() => handleOperatorClick('*')}>*</button>
        <button onClick={() => handleNumberClick(4)}>4</button>
        <button onClick={() => handleNumberClick(5)}>5</button>
        <button onClick={() => handleNumberClick(6)}>6</button>
        <button onClick={() => handleOperatorClick('-')}>-</button>
        <button onClick={() => handleNumberClick(1)}>1</button>
        <button onClick={() => handleNumberClick(2)}>2</button>
        <button onClick={() => handleNumberClick(3)}>3</button>
        <button onClick={() => handleOperatorClick('+')}>+</button>
        <button onClick={() => handleNumberClick(0)}>0</button>
        <button onClick={handleTripleZero}>000</button>
        <button onClick={handleDecimal}>.</button>
        <button onClick={handleCalculate}>=</button>
      </div>
    </div>
  );
}

export default App;

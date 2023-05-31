import React, { useState } from 'react';
import * as math from 'mathjs';

const Calculator = () => {
  const [displayValue, setDisplayValue] = useState('0');

  const handleClick = (value) => {
    const lastChar = displayValue.slice(-1);
    const operators = ['÷', '×', '-', '+'];
  
    if (value === '=') {
      calculateResult();
    } else if (value === 'AC') {
      handleClear();
      setDisplayValue('0');
    } else if (value === '+/-') {
      handleNegate();
    } else if (value === '%') {
      handlePercentage();
    } else if (operators.includes(lastChar) && operators.includes(value)) {
      // Replace the last operator with the new one
      setDisplayValue((prevValue) => prevValue.slice(0, -1) + value);
    } else if (displayValue === 'Syntax ERROR') {
      setDisplayValue(value);
    } else {
      if (displayValue === 'Syntax ERROR') {
        setDisplayValue(value);
      } else {
        let newDisplayValue;
        if (displayValue === '0' && value !== '.') {
          newDisplayValue = value;
        } else {
          newDisplayValue = displayValue + value;
        }
        const operands = newDisplayValue.split(/÷|×|-|\+/);
        const lastOperand = operands[operands.length - 1];
        if (lastOperand.replace(/[^0-9]/g, '').length <= 11) {
          setDisplayValue(newDisplayValue);
        }
      }
    }
  };
  
  
  
  

  const handleClear = () => {
    setDisplayValue('');
  };

  const handleNegate = () => {
    try {
      const negatedValue = math.evaluate(`-1 * (${displayValue})`);
      setDisplayValue(String(negatedValue));
    } catch (error) {
      setDisplayValue('Syntax ERROR');
    }
  };

  const handlePercentage = () => {
    try {
      const percentageValue = math.evaluate(`(${displayValue}) / 100`);
      setDisplayValue(String(percentageValue));
    } catch (error) {
      setDisplayValue('Syntax ERROR');
    }
  };

  const calculateResult = () => {
    try {
      let expression = displayValue.replace(/÷/g, '/').replace(/×/g, '*');
      const result = math.evaluate(expression);
      const formattedResult = Number(result.toFixed(6)); // Limiting to 6 decimal places
      setDisplayValue(String(formattedResult));
    } catch (error) {
      setDisplayValue('Syntax ERROR');
    }
  };

  return (
    <div className="flex justify-center items-center h-screen body">
      

      
















      <div className="box">

<div className="camera"></div>
<div className="inner" >




<div className="w-80 bg-black rounded-lg shadow-lg mt-8 mb-4">
        <div
          className="text-white text-right text-4xl mb-8 overflow-hidden break-all h-20 mx-3"
          style={{ display: 'flex', flexDirection: 'column-reverse', minHeight: '9rem' }}
        >
          <div>{displayValue || '0'}</div>
        </div>
        <div className="grid grid-cols-4 gap-3  mx-2">
          <button
            className="col-span-1 bg-[#9f9f9f] text-black text-2xl w-14 h-14 rounded-full "
            onClick={() => handleClick('AC')}
          >
            AC
          </button>
          <button
            className="col-span-1 bg-[#9f9f9f] text-black text-2xl w-14 h-14 rounded-full "
            onClick={() => handleClick('+/-')}
          >
            +/-
          </button>
          <button
            className="bg-[#9f9f9f] text-black text-2xl w-14 h-14 rounded-full "
            onClick={() => handleClick('%')}
          >
            %
          </button>
          <button
            className="bg-[#f69906] text-white text-2xl w-14 h-14 rounded-full "
            onClick={() => handleClick('÷')}
          >
            ÷
          </button>
          <button
            className="bg-[#313131] text-white text-2xl w-14 h-14 rounded-full "
            onClick={() => handleClick('7')}
          >
            7
          </button>
          <button
            className="bg-[#313131] text-white text-2xl w-14 h-14 rounded-full "
            onClick={() => handleClick('8')}
          >
            8
          </button>
          <button
            className="bg-[#313131] text-white text-2xl w-14 h-14 rounded-full "
            onClick={() => handleClick('9')}
          >
            9
          </button>
          <button
            className="bg-[#f69906] text-white text-2xl w-14 h-14 rounded-full "
            onClick={() => handleClick('×')}
          >
            ×
          </button>
          <button
            className="bg-[#313131] text-white text-2xl w-14 h-14 rounded-full "
            onClick={() => handleClick('4')}
          >
            4
          </button>
          <button
            className="bg-[#313131] text-white text-2xl w-14 h-14 rounded-full "
            onClick={() => handleClick('5')}
          >
            5
          </button>
          <button
            className="bg-[#313131] text-white text-2xl w-14 h-14 rounded-full "
            onClick={() => handleClick('6')}
          >
            6
          </button>
          <button
            className="bg-[#f69906] text-white text-2xl w-14 h-14 rounded-full "
            onClick={() => handleClick('-')}
          >
            −
          </button>
          <button
            className="bg-[#313131] text-white text-2xl w-14 h-14 rounded-full "
            onClick={() => handleClick('1')}
          >
            1
          </button>
          <button
            className="bg-[#313131] text-white text-2xl w-14 h-14 rounded-full "
            onClick={() => handleClick('2')}
          >
            2
          </button>
          <button
            className="bg-[#313131] text-white text-2xl w-14 h-14 rounded-full "
            onClick={() => handleClick('3')}
          >
            3
          </button>
          <button
            className="bg-[#f69906] text-white text-2xl w-14 h-14 rounded-full "
            onClick={() => handleClick('+')}
          >
            +
          </button>
          <button
            className="col-span-2 bg-[#313131] text-white text-2xl w-31 h-14 rounded-full "
            onClick={() => handleClick('0')}
          >
            0
          </button>
          <button
            className="bg-[#313131] text-white text-2xl w-14 h-14 rounded-full "
            onClick={() => handleClick('.')}
          >
            .
          </button>
          <button
            className="bg-[#f69906] text-white text-3xl w-14 h-14 rounded-full "
            onClick={calculateResult}
          >
            =
          </button>
        </div>
      </div>





  <div className="island-popup">
   

    
    </div>
  </div>
</div>

<div className="btn btn1"></div>
<div className="btn btn2"></div>
<div className="btn btn3"></div>
<div className="btn rightBtn"></div>








  


  
  
 
  
    



















      
    </div>



  );
};

export default Calculator;

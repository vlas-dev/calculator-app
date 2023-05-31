import React, { useState } from "react";
import * as math from "mathjs";

const Calculator = () => {
  const [displayValue, setDisplayValue] = useState("0");

  const handleClick = (value) => {
    const lastChar = displayValue.slice(-1);
    const operators = ["÷", "×", "-", "+"];

    if (value === "=") {
      calculateResult();
    } else if (value === "AC") {
      handleClear();
      setDisplayValue("0");
    } else if (value === "+/-") {
      handleNegate();
    } else if (value === "%") {
      handlePercentage();
    } else if (operators.includes(lastChar) && operators.includes(value)) {
      // Replace the last operator with the new one
      setDisplayValue((prevValue) => prevValue.slice(0, -1) + value);
    } else if (displayValue === "Invalid") {
      setDisplayValue(value);
    } else {
      if (displayValue === "Invalid") {
        setDisplayValue(value);
      } else {
        let newDisplayValue;
        if (displayValue === "0" && value !== ".") {
          newDisplayValue = value;
        } else {
          newDisplayValue = displayValue + value;
        }
        const operands = newDisplayValue.split(/÷|×|-|\+/);
        const lastOperand = operands[operands.length - 1];
        if (lastOperand.replace(/[^0-9]/g, "").length <= 11) {
          setDisplayValue(newDisplayValue);
        }
      }
    }
  };

  const handleClear = () => {
    setDisplayValue("");
  };

  const handleNegate = () => {
    try {
      const negatedValue = math.evaluate(`-1 * (${displayValue})`);
      setDisplayValue(String(negatedValue));
    } catch (error) {
      setDisplayValue("Invalid");
    }
  };

  const handlePercentage = () => {
    try {
      const percentageValue = math.evaluate(`(${displayValue}) / 100`);
      setDisplayValue(String(percentageValue));
    } catch (error) {
      setDisplayValue("Invalid");
    }
  };

  const calculateResult = () => {
    try {
      let expression = displayValue.replace(/÷/g, "/").replace(/×/g, "*");
      const result = math.evaluate(expression);
      const formattedResult = Number(result.toFixed(6)); // Limiting to 6 decimal places
      setDisplayValue(String(formattedResult));
    } catch (error) {
      setDisplayValue("Invalid");
    }
  };

  return (
    <div className="flex justify-center items-center h-screen body">
      <div className="box">
        <div className="camera"></div>
        <div className="inner">
          <div className="signal-bar">
            <div class="time">9:41</div>
            <div className="icon-container">
              {/* Signal icon */}
              <svg
                class="icon"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 30 20"
                fill="white"
                stroke="none"
              >
                <rect
                  x="0"
                  y="9"
                  width="3"
                  height="2"
                  rx="1"
                  ry="1"
                  fill="white"
                />
                <rect
                  x="8"
                  y="6"
                  width="3"
                  height="5"
                  rx="1"
                  ry="1"
                  fill="white"
                />
                <rect
                  x="16"
                  y="3"
                  width="3"
                  height="8"
                  rx="1"
                  ry="1"
                  fill="white"
                />
                <rect
                  x="24"
                  y="0"
                  width="3"
                  height="11"
                  rx="1"
                  ry="1"
                  fill="white"
                />
              </svg>
            </div>
          </div>

          <div className="wifi-bar">
            {/* WiFi icon */}
            <svg
              className="icon"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 12.55a11 11 0 0 1 14.08 0"></path>
              <path d="M1.42 9a16 16 0 0 1 21.16 0"></path>
              <path d="M8.53 16.11a6 6 0 0 1 6.95 0"></path>
              <line x1="12" y1="20" x2="12" y2="20"></line>
            </svg>
          </div>

          <div className="battery-icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M4 7V17H20V7H4Z"></path>
              <line x1="23" y1="11" x2="23" y2="13"></line>
              <rect
                x="4"
                y="8"
                width="14"
                height="8"
                rx="1"
                ry="1"
                fill="currentColor"
              ></rect>
            </svg>
          </div>

          <div className="w-80 bg-black rounded-lg shadow-lg mt-8 mb-4">
            <div
              className="text-white text-right text-4xl mb-8 overflow-hidden break-all h-20 mx-3"
              style={{
                display: "flex",
                flexDirection: "column-reverse",
                minHeight: "9rem",
              }}
            >
              <div>{displayValue || "0"}</div>
            </div>
            <div className="grid grid-cols-4 gap-3 mx-2">
              <button
                className="col-span-1 bg-[#9f9f9f] text-black text-2xl w-14 h-14 rounded-full active:bg-[#c4c3c6]"
                onClick={() => handleClick("AC")}
              >
                AC
              </button>
              <button
                className="col-span-1 bg-[#9f9f9f] text-black text-2xl w-14 h-14 rounded-full active:bg-[#c4c3c6]"
                onClick={() => handleClick("+/-")}
              >
                +/-
              </button>
              <button
                className="bg-[#9f9f9f] text-black text-2xl w-14 h-14 rounded-full active:bg-[#c4c3c6]"
                onClick={() => handleClick("%")}
              >
                %
              </button>
              <button
                className="bg-[#f5841b] text-white text-2xl w-14 h-14 rounded-full  focus:bg-[#ffb639]"
                onClick={() => handleClick("÷")}
              >
                ÷
              </button>
              <button
                className="bg-[#313131] text-white text-2xl w-14 h-14 rounded-full active:bg-[#4e4d4e]"
                onClick={() => handleClick("7")}
              >
                7
              </button>
              <button
                className="bg-[#313131] text-white text-2xl w-14 h-14 rounded-full  active:bg-[#4e4d4e]"
                onClick={() => handleClick("8")}
              >
                8
              </button>
              <button
                className="bg-[#313131] text-white text-2xl w-14 h-14 rounded-full  active:bg-[#4e4d4e]"
                onClick={() => handleClick("9")}
              >
                9
              </button>
              <button
                className="bg-[#f5841b] text-white text-2xl w-14 h-14 rounded-full focus:bg-[#ffb639]"
                onClick={() => handleClick("×")}
              >
                ×
              </button>
              <button
                className="bg-[#313131] text-white text-2xl w-14 h-14 rounded-full  active:bg-[#4e4d4e]"
                onClick={() => handleClick("4")}
              >
                4
              </button>
              <button
                className="bg-[#313131] text-white text-2xl w-14 h-14 rounded-full  active:bg-[#4e4d4e]"
                onClick={() => handleClick("5")}
              >
                5
              </button>
              <button
                className="bg-[#313131] text-white text-2xl w-14 h-14 rounded-full  active:bg-[#4e4d4e]"
                onClick={() => handleClick("6")}
              >
                6
              </button>
              <button
                className="bg-[#f5841b] text-white text-2xl w-14 h-14 rounded-full  focus:bg-[#ffb639]"
                onClick={() => handleClick("-")}
              >
                −
              </button>
              <button
                className="bg-[#313131] text-white text-2xl w-14 h-14 rounded-full  active:bg-[#4e4d4e]"
                onClick={() => handleClick("1")}
              >
                1
              </button>
              <button
                className="bg-[#313131] text-white text-2xl w-14 h-14 rounded-full  active:bg-[#4e4d4e]"
                onClick={() => handleClick("2")}
              >
                2
              </button>
              <button
                className="bg-[#313131] text-white text-2xl w-14 h-14 rounded-full  active:bg-[#4e4d4e]"
                onClick={() => handleClick("3")}
              >
                3
              </button>
              <button
                className="bg-[#f5841b] text-white text-2xl w-14 h-14 rounded-full  focus:bg-[#ffb639]"
                onClick={() => handleClick("+")}
              >
                +
              </button>
              <button
                className="col-span-2 bg-[#313131] text-white text-2xl  h-14 rounded-full  active:bg-[#4e4d4e] flex flex-col justify-center pl-5"
                onClick={() => handleClick("0")}
              >
                0
              </button>
              <button
                className="bg-[#313131] text-white text-2xl w-14 h-14 rounded-full  active:bg-[#4e4d4e]"
                onClick={() => handleClick(".")}
              >
                .
              </button>
              <button
                className="bg-[#f5841b] text-white text-2xl w-14 h-14 rounded-full active:bg-[#ffb639]"
                onClick={calculateResult}
              >
                =
              </button>
            </div>
          </div>

          <div className="island-popup"></div>
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

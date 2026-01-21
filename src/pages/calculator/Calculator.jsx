import React, { useState } from "react";

const Calculator = () => {
  const [input, setInput] = useState("");

  const handleClick=(value) => {
    setInput((prev) => prev + value);
    };
  const handleClear=()=>{
    setInput("");
  }


  const handleEqual = () => {
    try {
      setInput(eval(input).toString());
    } catch {
      setInput("Error");
    }
  };

 
  const topButtons = ["C", "%"];
  const buttons = ["7","8","9","/","4","5","6","*","1","2","3","-","0",".","=","+"];

  return (
    <div className="w-72 mx-auto mt-20 rounded-lg shadow-lg overflow-hidden bg-gray-100">
      <div className="bg-gray-100 text-black text-3xl p-4 text-right font-bold min-h-[60px]">
        {input || "0"}
      </div>

      <div className="grid grid-cols-2 gap-1 p-1">
        {topButtons.map(btn => (
          <button
            key={btn}
            onClick={btn === "C" ? handleClear : () => handleClick(btn)}
            className={`text-white font-bold text-xl py-3 rounded-lg transition ${
              btn === "C" ? "bg-red-700 hover:bg-red-800" : "bg-green-700 hover:bg-green-800"
            }`}
          >
            {btn}
          </button>
        ))}
      </div>

   

      <div className="grid grid-cols-4 gap-1 p-1">
        {buttons.map(btn => (
          <button
            key={btn}
            onClick={btn === "=" ? handleEqual : () => handleClick(btn)}
            className={`text-xl font-bold py-4 rounded-lg transition ${
              ["+", "-", "*", "/", "="].includes(btn)
                ? "bg-black text-white hover:bg-gray-400"
                : "bg-gray-100 text-black hover:bg-gray-200"
            }`}
          >
            {btn}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Calculator;
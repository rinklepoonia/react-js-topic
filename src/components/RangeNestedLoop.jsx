import React, { useState } from "react";

const RangeNestedLoop = () => {
  const [startValue, setStartValue] = useState("");
  const [endValue, setEndValue] = useState("");
  const [exponent, setExponent] = useState("");
  const [error, setError] = useState("");
  const [rangeTable, setRangeTable] = useState([]);

  const handleStartChange = (e) => {
    const value = e.target.value;
    setStartValue(value);
    setError("");
  };
  const handleEndChange = (e) => {
    const value = e.target.value;
    setEndValue(value);
    setError("");
  };
  const handleExponentChange = (e) => {
    const value = e.target.value;
    setExponent(value);
    setError("");
  };
  const handleClick = (e) => {
    e.preventDefault();

    // Convert values to numbers
    const start = parseInt(startValue);
    const end = parseInt(endValue);
    const exp = parseInt(exponent);

    if (startValue < 0 || startValue > 10) {
      setError("start value must be between 0 and 10.");
      return;
    }
    if (endValue < 0 || endValue > 10) {
      setError("start value must be between 0 and 10.");
      return;
    }
    if (exponent < 0 || exponent > 10) {
      setError("start value must be between 0 and 10.");
      return;
    }
    // Generate range table
    const table = [];
    for (let i = start; i <= end; i++) {
      const result = Math.pow(i, exp);
      table.push(`${i}^${exp} = ${result}`);
    }

    setRangeTable(table);
    setError(""); // Clear error if inputs are valid
  };
  return (
    <div className="container px-3 mx-auto">
      <h3 className="text-black text-3xl font-bold mb-5 text-center">
        Range table
      </h3>
      <form action="" className="flex items-center flex-col gap-4">
        <div className="flex gap-3">
          <label
            htmlFor="startValue"
            className="text-lg text-black font-normal"
          >
            Start number
          </label>
          <input
            required
            id="startValue"
            value={startValue}
            onChange={handleStartChange}
            type="number"
            className="border border-solid border-black"
          />
          {error && <div className="text-red-900 p-2 rounded-md">{error}</div>}
        </div>
        <div className="flex gap-3">
          <label htmlFor="endValue" className="text-lg text-black font-normal">
            end number
          </label>
          <input
            required
            id="endValue"
            value={endValue}
            onChange={handleEndChange}
            type="number"
            className="border border-solid border-black"
          />
          {error && <div className="text-red-900 p-2 rounded-md">{error}</div>}
        </div>
        <div className="flex gap-3">
          <label htmlFor="exponent" className="text-lg text-black font-normal">
            Exponent
          </label>
          <input
            required
            id="exponent"
            value={exponent}
            onChange={handleExponentChange}
            type="number"
            className="border border-solid border-black"
          />
          {error && <div className="text-red-900 p-2 rounded-md">{error}</div>}
        </div>
        <button
          onClick={handleClick}
          className="bg-blue-400 text-white px-5 py-2 max-w-fit rounded-lg"
        >
          click
        </button>
      </form>
      {/* Render the results */}
      {rangeTable.length > 0 && (
        <div className="mt-5">
          <h4 className="text-xl font-bold">Results:</h4>
          <ul className="list-none decoration-none pl-5">
            {rangeTable.map((result, index) => (
              <li key={index}>{result}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default RangeNestedLoop;

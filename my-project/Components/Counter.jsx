import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };
  const handleDecrement = () => {
    setCount(count - 1);
  };
  const handleReset = () => {
    setCount(0);
  };
  return (
    <div className="gap-6">
      <p className="bg-amber-600 w-20 border justify-items-center rounded-3xl m-auto mt-14 text-6xl font-extrabold text-white justify-center place-center ">
        {count}
      </p>
      <div className="w-[30%] bg-green-500 ">
        <button className="cursor-pointer  " onClick={handleIncrement}>
          Increment
        </button>
        <button className="cursor-pointer mx-5" onClick={handleDecrement}>
          Decrement
        </button>
        <button onClick={handleReset} className="cursor-pointer">
          Reset
        </button>
      </div>
    </div>
  );
};

export default Counter;

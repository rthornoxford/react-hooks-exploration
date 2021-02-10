import React, { useState } from "react";

const UseStateExample = () => {
  // counters
  const [count1, setCount1] = useState(10);
  const [count2, setCount2] = useState(20);

  return (
    <div>
      <header>
        <button
          onClick={() => {
            setCount1(count1 + 2);
          }}
        >
          Counter 1
        </button>
        <button
          onClick={() => {
            setCount2(count2 + 1);
          }}
        >
          Counter 1
        </button>
        <h3>Count 1: {count1}</h3>
        <h3>Count 2: {count2}</h3>
      </header>
    </div>
  );
};

export default UseStateExample;

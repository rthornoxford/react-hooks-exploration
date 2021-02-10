import React, { useState, useCallback } from "react";
import ReactMemo from "../components/ReactMemo";
import Square from "../components/Square";

const UseCallbackExample = () => {
  const [count, setCount] = useState(0);
  const favoriteNums = [7, 21, 37];

  const increment = useCallback(
    (n) => {
      setCount((c) => c + n);
    },
    [setCount]
  );

  return (
    <div>
      <ReactMemo increment={increment} />
      <div>count: {count}</div>

      {
        // the onclick function is passed down into the square function so that
        // it is not recreated each time
        favoriteNums.map((n) => {
          return <Square increment={increment} n={n} key={n} />;
        })
      }
    </div>
  );
};

export default UseCallbackExample;

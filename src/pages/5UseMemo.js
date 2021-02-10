import React, { useState, useCallback, useMemo } from "react";
import useFetch from "../useFetch";

const UseMemoExample = () => {
  const [count, setCount] = useState(0);
  const url = "https://api.kanye.rest/";
  const { data } = useFetch(url);

  // notice the empty array, this function could be lifted outside the
  //    component,  but if it did have depenedencies this is how it's done

  const computeLongestWord = useCallback((obj) => {
    if (!obj) {
      console.log("no object!!!");
      return [];
    }

    const jsObj = JSON.parse(obj);

    console.log("computing longest word ==>", jsObj);

    let longestWord = "";

    JSON.parse(obj)
      .quote.split(" ")
      .forEach((word) => {
        if (word.length > longestWord.length) {
          longestWord = word;
        }
      });
    return longestWord;
  }, []);

  // without a callback, this runs everytime b/c computeLongestWord
  //    is recreated each time
  // since we are passing data into computeLongestWord
  //    we could technically move it out of the component function
  //    and it then only be created once when mounted
  const longestWord = useMemo(() => computeLongestWord(data), [
    data,
    computeLongestWord,
  ]);

  return (
    <div>
      <div>count: {count}</div>
      <button onClick={() => setCount(count + 1)}>increment</button>
      <div>{longestWord}</div>
    </div>
  );
};

export default UseMemoExample;

import React, { useEffect, useState, useRef, useLayoutEffect } from "react";
import useFetch from "../useFetch";
import useForm from "../useForm";
import useMeasure from "../useMeasure";

const UseRefExample = () => {
  // practice input focusing
  const [values, setValues] = useForm({ name: "" });

  // used for changing the fetched data
  const [count, setCount] = useState(0);

  const [showHello, setShowHello] = useState(true);

  // fetch data for text with different pixel widths
  const { data, loading } = useFetch(`http://numbersapi.com/${count}/trivia`);

  // input field DOM reference
  const inputRef = useRef();

  // useLayoutEffect since the fetch changes the width of the text container
  const [factoidRect, factoidRef] = useMeasure(data);

  return (
    <div>
      <button onClick={() => inputRef.current.focus()}>focus</button>
      <input
        name="name"
        ref={inputRef}
        type="text"
        value={values.name}
        onChange={setValues}
        placeholder="name"
      />
      <pre>{JSON.stringify(factoidRect, null, 2)}</pre>
      <button onClick={() => setCount((c) => c + 1)}>Show Hello</button>
      <div style={{ display: "flex" }}>
        <div ref={factoidRef}>{!data ? "loading..." : data}</div>
      </div>
    </div>
  );
};

export default UseRefExample;

import React, { useEffect, useState } from "react";
import useFetch from "../useFetch";
import useForm from "../useForm";

const UseEffectExample = () => {
  const [values, setValues] = useForm({
    email: "",
    password: "",
    firstName: "",
  });

  // retrieves local storage but only once with () =>
  const [count, setCount] = useState(() =>
    JSON.parse(localStorage.getItem("count") || 0)
  );

  //   Only runs when password changes
  useEffect(() => {
    console.log("render");
  }, [values.password]);

  //   Only runs once, with cleanup function
  useEffect(() => {
    console.log("runs on load");
    return () => {
      console.log("runs when component unmounts");
    };
  }, []);

  // set to storage whenever count changes
  useEffect(() => {
    localStorage.setItem("count", JSON.stringify(count));
  }, [count]);

  const { data, loading } = useFetch(`http://numbersapi.com/${count}/trivia`);

  const clearLocalStorage = () => {
    setCount(0);
  };
  return (
    <>
      {loading ? "Loading..." : data}
      <button onClick={() => setCount((c) => c + 1)}>Counter</button>
      <button onClick={clearLocalStorage}>Clear Local Storage</button>
      <div>
        <label>Email: </label>
        <input
          placeholder="email"
          name="email"
          value={values.email}
          onChange={setValues}
        />
      </div>
      <div>
        <label>Password: </label>
        <input
          placeholder="password"
          type="password"
          name="password"
          value={values.password}
          onChange={setValues}
        />
      </div>
      <div>
        <label>First Name: </label>
        <input
          placeholder="First Name"
          name="firstName"
          value={values.firstName}
          onChange={setValues}
        />
      </div>
    </>
  );
};

export default UseEffectExample;

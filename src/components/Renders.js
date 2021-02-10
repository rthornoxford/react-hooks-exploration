import React, { useRef } from "react";

const Renders = (renders) => {
  // show the number of times this component has rendered
  const numRenders = useRef(0);
  console.log("hello renders: ", renders.current++);

  return <div>{numRenders} Renders!!!</div>;
};

export default Renders;

import { useState, useRef, useLayoutEffect } from "react";

const useMeasure = (deps) => {
  // for storing bounding client rect
  const [rect, setRect] = useState({});

  //
  const measureRef = useRef();

  // synchronously fires after DOM mutations
  useLayoutEffect(() => {
    setRect(measureRef.current.getBoundingClientRect());
  }, [deps]);

  return [rect, measureRef];
};

export default useMeasure;

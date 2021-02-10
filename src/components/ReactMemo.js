import React from "react";
import { useCountRenders } from "../useCountRenders";

// using useCallback so increment doesn't change every time
const ReactMemo = React.memo(({ increment }) => {
  useCountRenders();
  return <button onClick={() => increment(5)}>hello</button>;
});

export default ReactMemo;

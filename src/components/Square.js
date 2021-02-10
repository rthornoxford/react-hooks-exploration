import React from "react";
import { useCountRenders } from "../useCountRenders";

// using useCallback so increment doesn't change every time
const Square = React.memo(({ n, increment }) => {
  useCountRenders();
  return <button onClick={() => increment(n)}>{n}</button>;
});

export default Square;

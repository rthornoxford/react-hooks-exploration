import React, { useContext } from "react";
import UserContext from "../UserContext";
import login from "../utils/login";

const UseContextExample = () => {
  const { user, setUser } = useContext(UserContext);
  return (
    <div>
      <pre>{JSON.stringify(user, null, 2)}</pre>

      {!!user ? (
        <button onClick={() => setUser(null)}>logout</button>
      ) : (
        <button
          onClick={async () => {
            const currentUser = await login();
            setUser(currentUser);
          }}
        >
          login
        </button>
      )}
    </div>
  );
};

export default UseContextExample;

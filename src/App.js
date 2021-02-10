import "./App.css";
import React, { useMemo, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import UseStateExample from "./pages/1UseState";
import UseEffectExample from "./pages/2UseEffect";
import Navbar from "./components/Navbar";
import UseRefExample from "./pages/3UseRef";
import UseCallbackExample from "./pages/4UseCallback";
import UseMemoExample from "./pages/5UseMemo";
import UseReducerExample from "./pages/6UseReducer";
import UseContextExample from "./pages/7UseContext";
import UserContext from "./UserContext";

function App() {
  // const [msg, setMsg] = useState("hello from context");

  //  memo the app context if it gets heavy
  // const msgProvider = useMemo(() => ({ myAppContext, setMyAppContext }), [
  //   msg,
  //   setMsg,
  // ]);

  //  create user state
  const [user, setUser] = useState(null);

  //  run only when the user state changes not every time
  const userProvider = useMemo(() => ({ user, setUser }), [user, setUser]);

  return (
    <div className="App-header">
      <Router>
        <UserContext.Provider value={userProvider}>
          <Navbar />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/use-state">
              <UseStateExample />
            </Route>
            <Route path="/use-effect">
              <UseEffectExample />
            </Route>
            <Route path="/use-ref">
              <UseRefExample />
            </Route>
            <Route path="/use-callback">
              <UseCallbackExample />
            </Route>
            <Route path="/use-memo">
              <UseMemoExample />
            </Route>
            <Route path="/use-reducer">
              <UseReducerExample />
            </Route>
            <Route path="/use-context">
              <UseContextExample />
            </Route>
          </Switch>
        </UserContext.Provider>
      </Router>
    </div>
  );
}

export default App;

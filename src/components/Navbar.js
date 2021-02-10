import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <div className="nav-center">
        <Link to="/">
          <h2>Home</h2>
        </Link>
        <ul className="nav-links">
          <li>
            <Link to="/use-state">useState Example</Link>
          </li>
          <li>
            <Link to="/use-effect">useEffect Example</Link>
          </li>
          <li>
            <Link to="/use-ref">useRef Example</Link>
          </li>
          <li>
            <Link to="/use-callback">useCallback Example</Link>
          </li>
          <li>
            <Link to="/use-memo">useMemo Example</Link>
          </li>
          <li>
            <Link to="/use-reducer">useReducer Example</Link>
          </li>
          <li>
            <Link to="/use-context">useContext Example</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

import React from "react";
import navCss from "./Header.module.css";
const Header = () => {
  return (
    <div className={navCss.mainHeader}>
      <nav>
        <h2>
          <span className={navCss.spanCol}>F</span>orm
          <span className={navCss.spanCol}>V</span>alidation
        </h2>
        <ul>
          <li>
            <span className={navCss.spanCol}>H</span>ome
          </li>
          <li>
            <span className={navCss.spanCol}>C</span>ontact
          </li>
          <li>
            <span className={navCss.spanCol}>A</span>bout
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;

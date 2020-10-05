import React from "react";

function Header({ toggleDarkMode, darkMode }) {
  return (
    <div className="header">
      <div>
        <label className="switch">
          <input type="checkbox" checked={darkMode} onChange={toggleDarkMode} />
          <span className="slider round"></span>
        </label>
      </div>
      <div className="header__heading">
        <h1 style={{ color: darkMode ? "#fff" : "#000" }}>
          The Task Remainder
        </h1>
      </div>
    </div>
  );
}

export default Header;

import React from "react";

function Stats({ complete, darkMode, incomplete }) {
  return (
    <div className="stats">
      <div
        className="stats__complete"
        style={{ color: darkMode ? "#fff" : "#000" }}
      >
        <h1>{complete}</h1>
        <p>TASKS COMPLETE</p>
      </div>
      <div
        className="stats__incomplete"
        style={{ color: darkMode ? "#fff" : "#000" }}
      >
        <h1>{incomplete}</h1>
        <p>TASKS REMAINING</p>
      </div>
    </div>
  );
}

export default Stats;

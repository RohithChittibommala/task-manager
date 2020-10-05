import React from "react";
function Task({
  text,
  complete,
  darkMode,
  index,
  handleTaskComplete,
  handleTaskDelete,
}) {
  return (
    <div
      className={"task"}
      style={{ backgroundColor: !darkMode ? "#dae1f0" : "#999" }}
    >
      <input
        type="checkbox"
        checked={complete}
        className="checkbox-round"
        onChange={() => handleTaskComplete(index)}
      />
      <p
        style={{
          textDecoration: complete ? "line-through" : null,
          color: darkMode ? "#fff" : "#000",
        }}
        className="task__p"
      >
        {text}
      </p>
      <i
        className="fa fa-trash icon fa-2x"
        onClick={() => handleTaskDelete(index)}
      ></i>
    </div>
  );
}

export default Task;

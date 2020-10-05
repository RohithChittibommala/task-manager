import React, { useState } from "react";
import "./App.css";
import Header from "./Header";
import Stats from "./Stats";
import Task from "./Task";

function App() {
  const getFromLocalStorage = JSON.parse(localStorage.getItem("tasks"));
  const [tasks, setTasks] = useState(getFromLocalStorage || []);
  const [text, setText] = useState("");
  const [darkMode, setDarkMode] = useState(false);
  const handleKeyDown = ({ target, charCode }) => {
    if (charCode === 13) {
      const taskList = [...tasks, { text: target.value, complete: false }];
      console.log(taskList);
      localStorage.setItem("tasks", JSON.stringify(taskList));
      setTasks(taskList);
      setText("");
    }
  };
  const handleDarkModeToggle = () => {
    console.log("toggle dark mode is called");
    setDarkMode((darkMode) => !darkMode);
  };
  const handleTaskComplete = (index) => {
    const taskList = [...tasks];
    taskList[index].complete = !taskList[index].complete;
    localStorage.setItem("tasks", JSON.stringify(taskList));
    setTasks(taskList);
  };
  const handleTaskDelete = (index) => {
    const taskList = tasks.filter((task, ind) => ind !== index);
    localStorage.setItem("tasks", JSON.stringify(taskList));
    setTasks(taskList);
  };
  let complete, incomplete;
  complete = tasks.filter((task) => task.complete === true).length;
  incomplete = tasks.length - complete;

  return (
    <div
      className="app"
      style={{ backgroundColor: darkMode ? "#072540" : "#e9ecf3" }}
    >
      <Header toggleDarkMode={handleDarkModeToggle} darkMode={darkMode} />
      <div
        className="app__body"
        style={{ backgroundColor: darkMode ? "#183d5d" : null }}
      >
        <Stats
          complete={complete}
          darkMode={darkMode}
          incomplete={incomplete}
        />
        {tasks.map(({ text, complete }, index) => (
          <Task
            key={index}
            text={text}
            darkMode={darkMode}
            index={index}
            complete={complete}
            handleTaskComplete={handleTaskComplete}
            handleTaskDelete={handleTaskDelete}
          />
        ))}
        <input
          className="app__input"
          type="text"
          value={text}
          onChange={({ target }) => setText(target.value)}
          placeholder={"add a task"}
          onKeyPress={handleKeyDown}
        />
      </div>
    </div>
  );
}

export default App;

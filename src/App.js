import Header from "./components/Header";
import { useState } from "react";
import Tasks from "./components/Tasks";

function App() {
  const [tasks, setTask] = useState([
    {
      id: 1,
      text: "Dorctors Appointent ",
      day: "feb 5th at 3:30pm",
      reminder: true,
    },
    {
      id: 2,
      text: "famaily Appointent ",
      day: "feb 5th at 3:30pm",
      reminder: true,
    },
    {
      id: 3,
      text: "friend Appointent ",
      day: "feb 5th at 3:30pm",
      reminder: true,
    },
  ]);

  //delete task

  const deleteTask = (id) => {
    setTask(tasks.filter((task) => task.id !== id));
    console.log("delete " + id);
  };

  //Toggle Reminder
  const toggleReminder = (id) => {
    setTask(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
      )
    );
    console.log(id);
  };

  return (
    <div className="container">
      <Header />
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />
      ) : (
        "No Task to show"
      )}
    </div>
  );
}

export default App;

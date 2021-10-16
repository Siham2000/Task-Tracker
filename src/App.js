import Header from "./components/Header";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";
import Footer from "./components/Footer";
import About from "./components/About";

function App() {
  const [showAddTask, setSohwoTask] = useState(false);
  const [tasks, setTask] = useState([]);

  useEffect(() => {
    const getTasks = async () => {
      const tasksfromServer = await fetchTasks();

      setTask(tasksfromServer);
      console.log(tasksfromServer);
    };
    getTasks();
  }, []);

  //fetch tasks
  const fetchTasks = async () => {
    const res = await fetch("http://localhost:5000/tasks");
    const data = await res.json();
    return data;
  };

  //fetch task
  const fetchTask = async (id) => {
    const res = await fetch(`http://localhost:5000/tasks/${id}`);
    const data = await res.json();
    return data;
  };

  //add task
  const addTask = async (task) => {
    const res = await fetch("http://localhost:5000/tasks", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(task),
    });

    const data = await res.json();
    setTask([...tasks, data]);

    // const id = Math.floor(Math.random() * 1000) + 1;
    // const newTask = {
    //   id,
    //   ...task,
    // };
    // setTask([...tasks, newTask]);
  };

  //delete task
  const deleteTask = async (id) => {
    await fetch(`http://localhost:5000/tasks/${id}`, {
      method: "DELETE",
    });
    setTask(tasks.filter((task) => task.id !== id));
    console.log("delete " + id);
  };

  //Toggle Reminder
  const toggleReminder = async (id) => {
    const taskToggle = await fetchTask(id);
    const updateTask = { ...taskToggle, reminder: !taskToggle.reminder };
    const res = await fetch(`http://localhost:5000/tasks/${id}`, {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(updateTask),
    });

    const data = await res.json();
    setTask(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: !data.reminder } : task
      )
    );
    console.log(id);
  };

  return (
    <Router>
      <div className="container">
        <Header
          onAdd={() => setSohwoTask(!showAddTask)}
          showAddTask={showAddTask}
        />

        <Route
          path="/"
          exact
          render={(props) => (
            <>
              {showAddTask && <AddTask onAdd={addTask} />}
              {tasks.length > 0 ? (
                <Tasks
                  tasks={tasks}
                  onDelete={deleteTask}
                  onToggle={toggleReminder}
                />
              ) : (
                "No Task to show"
              )}
            </>
          )}
        />
        <Route path="/about" component={About} />
        {/* <About /> */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;

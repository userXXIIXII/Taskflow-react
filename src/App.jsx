import { useState } from 'react'
import TaskForm from "./components/TaskForm"
import TaskList from "./components/TaskList"
import './App.css'

function App() {
  const [tasks, setTasks] = useState([]);

  function addTask(newTask) {
    setTasks([...tasks, newTask]);
  }

  function deleteTask(id) {
  setTasks(tasks.filter((task) => task.id !== id));
  }

  return (
    <main className='app'>
      <h1>TaskFlow</h1>
      <p>Gestionnaire de tâches créé avec React</p>

      <TaskForm onAddTask={addTask} />
      <TaskList tasks={tasks} onDeleteTask={deleteTask} />
    </main>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

import { Navbar } from './components/Navbar/Navbar';
import { ToDoList } from './components/Lists/ToDoList';
import { NewTasks } from './components/Tasks/NewTask';
import { AddTask } from './components/Buttons/AddTask';

function App() {
  const [selected, setSelected] = useState("doing");
  const [actions, setActions] = useState("Home");
  const [statusInput, setStatusInput] = useState({
    id: 0,
    title: "",
    description: "",
    status: "do"
  });

  const [tasks, setTasks] = useState([{}]);

  const didMount = () => {
    const tasks = localStorage.getItem("tasks");
    if (tasks) {
      setTasks(JSON.parse("tasks"));
    } else {
      setTasks([{}]);
    }
  }

  return (
    <div className="App">
      <header>
        <h1>Monsan Note</h1>
      </header>

      <main>
        <Navbar setSelected={setSelected} />

        <ToDoList tasks={tasks} selected={selected}/>

        {actions === "NewTask" &&
          <NewTasks statusInput={statusInput} setStatusInput={setStatusInput} />
        }
      </main>       

      <footer className="add-button">
        <AddTask actions={actions} setActions={setActions} statusInput={statusInput} setStatusInput={setStatusInput} tasks={tasks} setTasks={setTasks}/>
      </footer>
    </div>
  );
}

export default App;

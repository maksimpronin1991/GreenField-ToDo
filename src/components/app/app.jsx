import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { StartPage } from '../../pages/start-page/start-page'
import { MainPage } from '../../pages/main-page/main-page'
import { ErrorPage } from '../../pages/error-page/error-page'
import { AddTaskPage } from '../../pages/add-task-page/add-page'
import { ChangeTaskPage } from '../../pages/change-task-page/change-task'
import { useState } from 'react'

function App() {

  const [task, setTasks] = useState([

  ]);


  const handleAddTask = (newTask) => {
    setTasks([...task, newTask]);
    localStorage.setItem("tasks", JSON.stringify([...task, newTask]));
  };

  const handleDeleteTask = (taskId) => {
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(updatedTasks);
    localStorage.setItem("tasks", JSON.stringify(updatedTasks)); 
  };

  const handleChangeTask = (changedTask) => {
    const updatedTasks = tasks.map((task) =>
      task.id === changedTask.id ? changedTask : task
  );
  setTasks(updatedTasks);
  localStorage.setItem("tasks", JSON.stringify(updatedTasks));
};

const handleChangeStatus = (taskId) => {
  const updatedTasks = tasks.map((task) =>
    task.id === taskId ? { ...task, completed: !task.completed } : task
  );
  setTasks(updatedTasks);
  localStorage.setItem("tasks", JSON.stringify(updatedTasks));
};

const tasks = JSON.parse(localStorage.getItem("tasks"));

  return (
    <BrowserRouter>

      <Routes>
        <Route path="/" element={<StartPage />} />
        <Route path="/add" element={<AddTaskPage onAddTask={handleAddTask} />} />
        <Route path="/change/:taskId" element={<ChangeTaskPage tasks={tasks} onChange={handleChangeTask} />} />
        <Route path='/main' element={<MainPage tasks={tasks} onDelete={handleDeleteTask} onHandleChangeStatus={handleChangeStatus} />} />
        <Route path='*' element={<ErrorPage />} />
      </Routes>


    </BrowserRouter>
  )
}

export default App

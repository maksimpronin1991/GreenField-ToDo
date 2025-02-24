import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { StartPage } from '../../pages/start-page/start-page'
import { MainPage } from '../../pages/main-page/main-page'
import { ErrorPage } from '../../pages/error-page/error-page'
import { AddTaskPage } from '../../pages/add-task-page/add-page'
import { ChangeTaskPage } from '../../pages/change-task-page/change-task'
import { useState } from 'react'

function App() {

  const [task, setTasks] = useState([]);

  const handleAddTask = (newTask) => {
    setTasks([...task, newTask]);
    localStorage.setItem("tasks", JSON.stringify([...task, newTask]));
    
};

const tasks =  JSON.parse(localStorage.getItem("tasks"));




  return (
      <BrowserRouter>

      <Routes>
        <Route path="/" element={<StartPage />} />
        <Route path="/add" element={<AddTaskPage onAddTask={handleAddTask}/>}/>
        <Route path="/change/:taskId" element={<ChangeTaskPage/>}/>
        <Route path='/main/:filter' element={<MainPage tasks={tasks} />} />
        <Route path='*' element={<ErrorPage/>} />
      </Routes>


      </BrowserRouter>
  )
}

export default App

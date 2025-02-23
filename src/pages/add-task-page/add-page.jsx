import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

// eslint-disable-next-line react/prop-types
export function AddTaskPage({ onAddTask }) {

    const navigate = useNavigate();

    const [formData, setFormData]=useState({
        taskTitle: "",
        taskDescription: "",
        taskUrgency: "urgent",
        taskImportance: "important"
    })

    const fieldChangeHandler = (evt) => {
        const {name, value} = evt.target;
        setFormData({...formData, [name]: value});
    }

    const handleSaveTask = (evt) => {
        evt.preventDefault(); // Предотвращаем стандартное поведение формы

        if (!formData.taskTitle.trim()) {
            alert("Название задачи не может быть пустым!");
            return;
        }

        const newTask = {
            id: Date.now(), // Уникальный ID
            title: formData.taskTitle,
            description: formData.taskDescription,
            urgency: formData.taskUrgency,
            importance: formData.taskImportance,
            completed: false
        };

        onAddTask(newTask); // Передаем задачу в родительский компонент
        navigate("/main/all"); // Перенаправляем на главную страницу
    };

    const getTaskColor = (urgency, importance) => {
        if (urgency === "urgent" && importance === "important") return "#ffcccc";
        if (urgency === "not-urgent" && importance === "important") return "#ccffcc";
        if (urgency === "urgent" && importance === "not-important") return "#ccccff";
        if (urgency === "not-urgent" && importance === "not-important") return "#ffffcc";
        return "#ffffff"; 
    }

    return (
        <div id="taskModal" className="modal">
            <div className="modal-content">
            <Link to="/main/all" className="close">×</Link>
                <h2 id="modalTitle">Add Task</h2>
                <form id="taskForm" onSubmit={handleSaveTask}>
                    <label htmlFor="taskTitle">Title:</label>
                    <input type="text" id="taskTitle" name="taskTitle" required="" value={formData.taskTitle} onChange={fieldChangeHandler} />
                    <label htmlFor="taskDescription">Description:</label>
                    <textarea id="taskDescription" name="taskDescription" value={formData.taskDescription} onChange={fieldChangeHandler}/>
                    <label htmlFor="taskUrgency">Urgency:</label>
                    <select id="taskUrgency" name="taskUrgency"  value={formData.taskUrgency} onChange={fieldChangeHandler}>
                        <option value="urgent" >Urgent</option>
                        <option value="not-urgent" >Not Urgent</option>
                    </select>
                    <label htmlFor="taskImportance">Importance:</label>
                    <select id="taskImportance" name="taskImportance" value={formData.taskImportance} onChange={fieldChangeHandler}>
                        <option value="important">Important</option>
                        <option value="not-important">Not Important</option>
                    </select>

                    <div className="task-color-preview" style={{
                        backgroundColor: getTaskColor(formData.taskUrgency, formData.taskImportance),
                        height: '25px',
                        marginTop: '10px',
                        borderRadius: '5px',
                    }}></div>

                    <button type="submit" id="saveTask">
                        Save Task
                    </button>
                </form>
            </div>
        </div>
    )
}
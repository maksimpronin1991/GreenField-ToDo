import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export function ChangeTaskPage() {
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
    
        useEffect(() => {
            console.log("Updated formData:", formData);
        }, [formData]);
    
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
                    <form id="taskForm">
                        <label htmlFor="taskTitle">Title:</label>
                        <input type="text" id="taskTitle" name="taskTitle" required="" value={formData.taskTitle} onChange={fieldChangeHandler} />
                        <label htmlFor="taskDescription">Description:</label>
                        <textarea id="taskDescription" name="taskDescription" value={formData.taskDescription} onChange={fieldChangeHandler}/>
                        <label htmlFor="taskUrgency">Urgency:</label>
                        <select id="taskUrgency" name="taskUrgency" onChange={fieldChangeHandler}>
                            <option value="urgent" >Urgent</option>
                            <option value="not-urgent" >Not Urgent</option>
                        </select>
                        <label htmlFor="taskImportance">Importance:</label>
                        <select id="taskImportance" name="taskImportance" onChange={fieldChangeHandler}>
                            <option value="important">Important</option>
                            <option value="not-important">Not Important</option>
                        </select>
    
                        <div className="task-color-preview" style={{
                            backgroundColor: getTaskColor(formData.taskUrgency, formData.taskImportance),
                            height: '25px',
                            marginTop: '10px',
                            borderRadius: '5px',
                        }}></div>
    
                        <Link to="/main/all" type="submit" id="saveTask">
                            Save Task
                        </Link>
                    </form>
                </div>
            </div>
        )
    }
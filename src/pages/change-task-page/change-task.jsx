/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

export function ChangeTaskPage({ tasks, onChange }) {
    const { taskId } = useParams();
    const navigate = useNavigate();
    const task = tasks.find((task) => task.id === Number(taskId));

    const [formData, setFormData] = useState({
        taskTitle: task?.title || "",
        taskDescription: task?.description || "",
        taskUrgency: task?.urgency || "urgent",
        taskImportance: task?.importance || "important",
    });

    useEffect(() => {
        if (task) {
            setFormData({
                taskTitle: task.title,
                taskDescription: task.description,
                taskUrgency: task.urgency,
                taskImportance: task.importance,
            });
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [ taskId, tasks]); 

    const fieldChangeHandler = (evt) => {
        const { name, value } = evt.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSaveTask = (evt) => {
        evt.preventDefault();

        if (!task) {
            console.error("Task not found");
            return;
        }

        const changedTask = {
            id: task.id,
            title: formData.taskTitle,
            description: formData.taskDescription,
            urgency: formData.taskUrgency,
            importance: formData.taskImportance,
            completed: task.completed || false,
        };

        onChange(changedTask); 
        navigate("/main/all"); 
    };

    const getTaskColor = (urgency, importance) => {
        if (urgency === "urgent" && importance === "important") return "#ffcccc";
        if (urgency === "not-urgent" && importance === "important") return "#ccffcc";
        if (urgency === "urgent" && importance === "not-important") return "#ccccff";
        if (urgency === "not-urgent" && importance === "not-important") return "#ffffcc";
        return "#ffffff";
    };

    if (!task) {
        return <div>Task not found</div>;
    }

    return (
        <div id="taskModal" className="modal">
            <div className="modal-content">
                <Link to="/main/all" className="close">×</Link>
                <h2 id="modalTitle">Edit Task</h2>
                <form id="taskForm" onSubmit={handleSaveTask}>
                    <label htmlFor="taskTitle">Title:</label>
                    <input
                        type="text"
                        id="taskTitle"
                        name="taskTitle"
                        required
                        value={formData.taskTitle}
                        onChange={fieldChangeHandler}
                    />
                    <label htmlFor="taskDescription">Description:</label>
                    <textarea
                        id="taskDescription"
                        name="taskDescription"
                        value={formData.taskDescription}
                        onChange={fieldChangeHandler}
                    />
                    <label htmlFor="taskUrgency">Urgency:</label>
                    <select
                        id="taskUrgency"
                        name="taskUrgency"
                        value={formData.taskUrgency}
                        onChange={fieldChangeHandler}
                    >
                        <option value="urgent">Urgent</option>
                        <option value="not-urgent">Not Urgent</option>
                    </select>
                    <label htmlFor="taskImportance">Importance:</label>
                    <select
                        id="taskImportance"
                        name="taskImportance"
                        value={formData.taskImportance}
                        onChange={fieldChangeHandler}
                    >
                        <option value="important">Important</option>
                        <option value="not-important">Not Important</option>
                    </select>

                    <div
                        className="task-color-preview"
                        style={{
                            backgroundColor: getTaskColor(formData.taskUrgency, formData.taskImportance),
                            height: "25px",
                            marginTop: "10px",
                            borderRadius: "5px",
                        }}
                    ></div>

                    <button type="submit" id="saveTask">
                        Save Task
                    </button>
                </form>
            </div>
        </div>
    );
}
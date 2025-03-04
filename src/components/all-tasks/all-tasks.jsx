import { useState } from "react";
import { Link } from "react-router-dom";
import { Task } from "../task/task";

// eslint-disable-next-line react/prop-types
export function AllTasks({ tasks, onDelete, onHandleChangeStatus }) {
    const [filter, setFilter] = useState("all"); 

    // eslint-disable-next-line react/prop-types
    const filteredTasks = tasks.filter((task) => {
        if (filter === "just-do-it") {
            return  task.urgency === "urgent" && task.importance === "important";
        } else if (filter === "completed") {
            return task.completed;
        } else {
            return true;
        }
    });

    const handleFilterClick = (filterType) => {
        setFilter(filterType);
    };

    return (
        <div className="all-tasks">
            <h2 className="all-tasks-title">Tasks</h2>
            <div className="all-tasks_controls">
                <Link to="/add" className="add-task-btn">Add</Link>
                <div className="filter-controls">
                    <a
                        className={`filter-btn ${filter === "all" ? "active" : ""}`}
                        onClick={() => handleFilterClick("all")}
                        data-filter="all"
                    >
                        All
                    </a>
                    <a
                        className={`filter-btn ${filter === "just-do-it" ? "active" : ""}`}
                        onClick={() => handleFilterClick("just-do-it")}
                        data-filter="just-do-it"
                    >
                        Just do it
                    </a>
                    <a
                        className={`filter-btn ${filter === "completed" ? "active" : ""}`}
                        onClick={() => handleFilterClick("completed")}
                        data-filter="completed"
                    >
                        Completed
                    </a>
                </div>
            </div>
            <ul id="all-tasks-list">
                {filteredTasks.map((task) => (
                    <Task
                        key={task.id}
                        id={task.id}
                        title={task.title}
                        description={task.description}
                        urgency={task.urgency}
                        importance={task.importance}
                        completed={task.completed}
                        onDelete={onDelete}
                        onHandleChangeStatus={onHandleChangeStatus}
                    />
                ))}
            </ul>
        </div>
    );
}
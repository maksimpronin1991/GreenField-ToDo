import { Link } from "react-router-dom";
import { Task } from "../task/task";

// eslint-disable-next-line react/prop-types
export function AllTasks({tasks, onDelete}) {
    const allTasks = tasks

    return (
        <div className="all-tasks">
            <h2 className="all-tasks-title">All Tasks</h2>
            <div className="all-tasks_controls">
                <Link  to="/add"  className="add-task-btn">Add</Link>
                <div className="filter-controls">
                    <button className="filter-btn active" data-filter="all">
                        All
                    </button>
                    <button className="filter-btn" data-filter="just-do-it">
                        Just do it
                    </button>
                    <button className="filter-btn" data-filter="completed">
                        Completed
                    </button>
                </div>
            </div>
            <ul id="all-tasks-list">
            {allTasks.map((task) => (
                    <Task
                        key={task.id} // Уникальный ключ для React
                        id={task.id}
                        title={task.title}
                        description={task.description}
                        urgency={task.urgency}
                        importance={task.importance}
                        completed={task.completed}
                        onDelete={onDelete}
                    />
                ))}
            </ul>
        </div>
    )
}
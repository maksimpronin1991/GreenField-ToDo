import { Link } from "react-router-dom";
import { Task } from "../task/task";

export function AllTasks() {
    return (
        <div className="all-tasks">
            <h2 className="all-tasks-title">All Tasks</h2>
            <div className="all-tasks_controls">
                <Link  to="/add"  className="add-task-btn">Add</Link>
                <div className="filter-controls">
                    <button className="filter-btn active" data-filter="all">
                        All
                    </button>
                    <button className="filter-btn" data-filter="active">
                        Active
                    </button>
                    <button className="filter-btn" data-filter="completed">
                        Completed
                    </button>
                </div>
            </div>
            <ul id="all-tasks-list">
                <Task/>
            </ul>
        </div>
    )
}
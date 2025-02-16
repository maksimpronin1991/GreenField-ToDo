import { Link } from "react-router-dom";

export function ChangeTaskPage() {
    return (
        <div id="taskModal" className="modal">
            <div className="modal-content">
            <Link to="/main/all" className="close">×</Link>
                <h2 id="modalTitle">Edit Task</h2>
                <form id="taskForm">
                    <label htmlFor="taskTitle">Title:</label>
                    <input type="text" id="taskTitle" name="taskTitle" required="" />
                    <label htmlFor="taskDescription">Description:</label>
                    <textarea id="taskDescription" name="taskDescription" defaultValue={""} />
                    <label htmlFor="taskUrgency">Urgency:</label>
                    <select id="taskUrgency" name="taskUrgency">
                        <option value="urgent">Urgent</option>
                        <option value="not-urgent">Not Urgent</option>
                    </select>
                    <label htmlFor="taskImportance">Importance:</label>
                    <select id="taskImportance" name="taskImportance">
                        <option value="important">Important</option>
                        <option value="not-important">Not Important</option>
                    </select>
                    <Link to="/main/all" type="submit" id="saveTask">
                        Save Task
                    </Link>
                </form>
            </div>
        </div>
    )
}
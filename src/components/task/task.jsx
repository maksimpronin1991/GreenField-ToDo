import { Link } from "react-router-dom";

export function Task() {

    return (
        <li className="tasks-list-item">
            <div className="list-item-container">
                <div className="list-item-top">
                    <h3 className="list-item-title">Task1</h3>
                    <div className="list-item-controllers">
                        <label htmlFor="complete-checkbox">
                            Done
                            <input
                                type="checkbox"
                                className="complete-checkbox"
                                id="complete-checkbox"
                                name="complete-checkbox"
                            />
                        </label>
                        <Link to="/change/:taskId" className="edit-btn">Edit</Link>
                        <button className="delete-btn">Delete</button>
                    </div>
                </div>
                <p className="list-item-description">Wash my feet</p>
            </div>
        </li>
    )
}
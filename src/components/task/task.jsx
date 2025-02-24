/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

// eslint-disable-next-line no-unused-vars
export function Task( { title, description}) {



    return (
        <li className="tasks-list-item">
            <div className="list-item-container">
                <div className="list-item-top">
                    <h3 className="list-item-title">{title}</h3>
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
                <p className="list-item-description">{description}</p>
            </div>
        </li>
    )
}
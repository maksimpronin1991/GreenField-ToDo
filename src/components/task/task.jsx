/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";


export function Task({ id, title, description, urgency, importance, completed, onDelete, onHandleChangeStatus }) {

    const getTaskColor = (urgency, importance) => {
        if (urgency === "urgent" && importance === "important") return "#ffcccc";
        if (urgency === "not-urgent" && importance === "important") return "#ccffcc";
        if (urgency === "urgent" && importance === "not-important") return "#ccccff";
        if (urgency === "not-urgent" && importance === "not-important") return "#ffffcc";
        return "#ffffff";
    }


    const handleDelete = () => {
        onDelete(id);
    }

    const handleCheckboxChange = () => {
        onHandleChangeStatus(id)
    }


    return (
        <li className="tasks-list-item" style={{
            backgroundColor: getTaskColor(urgency, importance)

        }}>
            <div className="list-item-container">
                <div className="list-item-top">
                    <h3 className="list-item-title">{title}</h3>
                    <div className="list-item-controllers">
                        <div className="buttonContainer">
                            <Link to={`/change/${id}`} className="edit-btn" >Edit</Link>
                            <a className="delete-btn" onClick={handleDelete}>Delete</a>
                        </div>

                        <label htmlFor="complete-checkbox" className="completeCheckbox">
                            Done
                            <input
                                type="checkbox"
                                id="complete-checkbox"
                                name="complete-checkbox"
                                checked={completed}
                                onChange={handleCheckboxChange}
                            />

                        </label>
                    </div>
                </div>
                <p className="list-item-description">{description}</p>
            </div>
        </li>
    )
}
/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";


export function Task( { title, description, urgency, importance}) {

    const getTaskColor = (urgency, importance) => {
        if (urgency === "urgent" && importance === "important") return "#ffcccc";
        if (urgency === "not-urgent" && importance === "important") return "#ccffcc";
        if (urgency === "urgent" && importance === "not-important") return "#ccccff";
        if (urgency === "not-urgent" && importance === "not-important") return "#ffffcc";
        return "#ffffff"; 
    }


    return (
        <li className="tasks-list-item"style={{
            backgroundColor: getTaskColor(urgency, importance),

        }}>
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
/* eslint-disable react/prop-types */


export function Task( {id, title, description, urgency, importance,onDelete}) {

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

    const handleChange = () => {
        onchange(id)
    }

    return (
        <li className="tasks-list-item"style={{
            backgroundColor: getTaskColor(urgency, importance)

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
                        <button className="edit-btn" onClick={handleChange}>Edit</button>
                        <button className="delete-btn" onClick={handleDelete}>Delete</button>
                    </div>
                </div>
                <p className="list-item-description">{description}</p>
            </div>
        </li>
    )
}
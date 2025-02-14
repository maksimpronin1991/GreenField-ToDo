import { Link } from "react-router-dom";

export function StartPage() {
    return (
        <div className="start-page">
            <h1>Welocome to Eisenhower Matrix To-Do List</h1>
            <Link to="/main/all" className="start-btn">Enter in your Matrix</Link>
        </div>
    )
}
import { AllTasks } from "../../components/all-tasks/all-tasks"
import { Matrix } from "../../components/matrix/matrix"
import "./main-page.css"



export function MainPage() {
    return (
        <div>
            <h1 className="main-title">Eisenhower Matrix To-Do List</h1>
            <div className="container">
                <AllTasks />
                <Matrix />
            </div>
        </div>
    )
}
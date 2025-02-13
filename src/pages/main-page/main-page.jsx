import { useParams } from "react-router-dom"
import { AllTasks } from "../../components/all-tasks/all-tasks"
import { Matrix } from "../../components/matrix/matrix"



export function MainPage() {
    const filter= useParams()
    console.log(filter)

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
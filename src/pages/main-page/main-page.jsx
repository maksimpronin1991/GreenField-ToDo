import { useParams } from "react-router-dom"
import { AllTasks } from "../../components/all-tasks/all-tasks"
import { Matrix } from "../../components/matrix/matrix"



// eslint-disable-next-line react/prop-types
export function MainPage( {tasks} ) {
    const allTasks = tasks

    const filter= useParams()
    console.log(filter)

    return (
        <div>
            <h1 className="main-title">Eisenhower Matrix To-Do List</h1>
            <div className="container">
                <AllTasks tasks={allTasks} />
                <Matrix tasks={allTasks}/>
            </div>
        </div>
    )
}
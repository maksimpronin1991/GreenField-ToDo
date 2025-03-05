import { useParams } from "react-router-dom"
import { AllTasks } from "../../components/all-tasks/all-tasks"
import { Matrix } from "../../components/matrix/matrix"



// eslint-disable-next-line react/prop-types
export function MainPage({ tasks, onDelete, onHandleChangeStatus }) {
    const allTasks = tasks


    const filter = useParams()
    console.log(filter)

    return (
        <div className="main-page">
            <h1 id="all" className="main-title">Eisenhower Matrix To-Do List</h1>
            <div className="matrix-nav">
                    <a href="#all" className="matrix-nav-btn" data-target="all-tasks">All Tasks</a>
                    <a href="#red" className="matrix-nav-btn" data-target="urgent-important">Urgent & Important</a>
                    <a href="#green" className="matrix-nav-btn" data-target="not-urgent-important">Not Urgent & Important</a>
                    <a href="#blue" className="matrix-nav-btn" data-target="urgent-not-important">Urgent & Not Important</a>
                    <a href="#yellow" className="matrix-nav-btn" data-target="not-urgent-not-important">Not Urgent & Not Important</a>
                </div>
            <div className="container">
                <AllTasks tasks={allTasks} onDelete={onDelete} onHandleChangeStatus={onHandleChangeStatus} />
                <Matrix tasks={allTasks} onDelete={onDelete} onHandleChangeStatus={onHandleChangeStatus} />
            </div>
        </div>
    )
}
import { Task } from "../task/task";

// eslint-disable-next-line react/prop-types
export function Matrix({ tasks, onDelete, onHandleChangeStatus }) {
    // eslint-disable-next-line react/prop-types
 const actualTasks = tasks.filter((task) => !task.completed);


  const urgentImportantTask = actualTasks.filter(
    (task) => task.urgency === "urgent" && task.importance === "important"
  )

  const notUrgentImportantTasks = actualTasks.filter(
    (task) => task.urgency === "not-urgent" && task.importance === "important"
  );

  const urgentNotImportantTasks = actualTasks.filter(
    (task) => task.urgency === "urgent" && task.importance === "not-important"
  );

  const notUrgentNotImportantTasks = actualTasks.filter(
    (task) => task.urgency === "not-urgent" && task.importance === "not-important"
  );


  return (<div className="matrix">
    <div className="quadrant urgent-important">
      <h2>Urgent &amp; Important (make it now)</h2>
      <ul id="urgent-important-list">
        {urgentImportantTask.map((task) => (
          <Task
            key={task.id}
            id={task.id}
            title={task.title}
            description={task.description}
            urgency={task.urgency}
            importance={task.importance}
            completed={task.completed}
            onDelete={onDelete}
            onHandleChangeStatus={onHandleChangeStatus}
          />
        ))}
      </ul>
    </div>
    <div className="quadrant not-urgent-important">
      <h2>Not Urgent &amp; Important (plane it)</h2>
      <ul id="not-urgent-important-list">
        {notUrgentImportantTasks.map((task) => (
          <Task
            key={task.id}
            id={task.id}
            title={task.title}
            description={task.description}
            urgency={task.urgency}
            importance={task.importance}
            completed={task.completed}
            onDelete={onDelete}
            onHandleChangeStatus={onHandleChangeStatus}
          />
        ))}
      </ul>
    </div>
    <div className="quadrant urgent-not-important">
      <h2>Urgent &amp; Not Important (delegate it)</h2>
      <ul id="urgent-not-important-list">
        {urgentNotImportantTasks.map((task) => (
          <Task
            key={task.id} 
            id={task.id}
            title={task.title}
            description={task.description}
            urgency={task.urgency}
            importance={task.importance}
            completed={task.completed}
            onDelete={onDelete}
            onHandleChangeStatus={onHandleChangeStatus}
          />
        ))}
      </ul>
    </div>
    <div className="quadrant not-urgent-not-important">
      <h2>Not Urgent &amp; Not Important (delete or put it aside)</h2>
      <ul id="not-urgent-not-important-list">
        {notUrgentNotImportantTasks.map((task) => (
          <Task
            key={task.id} 
            id={task.id}
            title={task.title}
            description={task.description}
            urgency={task.urgency}
            importance={task.importance}
            completed={task.completed}
            onDelete={onDelete}
            onHandleChangeStatus={onHandleChangeStatus}
          />
        ))}
      </ul>
    </div>
  </div>
  )
}
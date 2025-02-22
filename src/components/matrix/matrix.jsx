import { Task } from "../task/task";

export function Matrix(){
    return (<div className="matrix">
        <div className="quadrant urgent-important">
          <h2>Urgent &amp; Important (make it now)</h2>
          <ul id="urgent-important-list">
            <Task/>
          </ul>
        </div>
        <div className="quadrant not-urgent-important">
          <h2>Not Urgent &amp; Important (plane it)</h2>
          <ul id="not-urgent-important-list">
          <Task/>

          </ul>
        </div>
        <div className="quadrant urgent-not-important">
          <h2>Urgent &amp; Not Important (delegate it)</h2>
          <ul id="urgent-not-important-list">
          <Task/>
          <Task/>
          <Task/>
          <Task/>
          <Task/>
          <Task/>
          <Task/>
          </ul>
        </div>
        <div className="quadrant not-urgent-not-important">
          <h2>Not Urgent &amp; Not Important (delete or put it aside)</h2>
          <ul id="not-urgent-not-important-list">
          <Task/>

          </ul>
        </div>
      </div>
      
    )
}
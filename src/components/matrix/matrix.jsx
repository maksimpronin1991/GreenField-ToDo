
export function Matrix(){
    return (<div className="matrix">
        <div className="quadrant urgent-important">
          <h2>Urgent &amp; Important</h2>
          <ul id="urgent-important-list">
            <li className="tasks-list-item">
              <div className="list-item-container">
                <div className="list-item-top">
                  <h3 className="list-item-title">Task1</h3>
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
                    <button className="edit-btn">Edit</button>
                    <button className="delete-btn">Delete</button>
                  </div>
                </div>
                <p className="list-item-description">Wash my feet</p>
              </div>
            </li>
          </ul>
        </div>
        <div className="quadrant not-urgent-important">
          <h2>Not Urgent &amp; Important</h2>
          <ul id="not-urgent-important-list">
            <li className="tasks-list-item">
              <div className="list-item-container">
                <div className="list-item-top">
                  <h3 className="list-item-title">Task1</h3>
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
                    <button className="edit-btn">Edit</button>
                    <button className="delete-btn">Delete</button>
                  </div>
                </div>
                <p className="list-item-description">Wash my feet</p>
              </div>
            </li>
          </ul>
        </div>
        <div className="quadrant urgent-not-important">
          <h2>Urgent &amp; Not Important</h2>
          <ul id="urgent-not-important-list">
            <li className="tasks-list-item">
              <div className="list-item-container">
                <div className="list-item-top">
                  <h3 className="list-item-title">Task1</h3>
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
                    <button className="edit-btn">Edit</button>
                    <button className="delete-btn">Delete</button>
                  </div>
                </div>
                <p className="list-item-description">Wash my feet</p>
              </div>
            </li>
          </ul>
        </div>
        <div className="quadrant not-urgent-not-important">
          <h2>Not Urgent &amp; Not Important</h2>
          <ul id="not-urgent-not-important-list">
            <li className="tasks-list-item">
              <div className="list-item-container">
                <div className="list-item-top">
                  <h3 className="list-item-title">Task1</h3>
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
                    <button className="edit-btn">Edit</button>
                    <button className="delete-btn">Delete</button>
                  </div>
                </div>
                <p className="list-item-description">Wash my feet</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
      
    )
}
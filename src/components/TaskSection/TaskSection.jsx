import Cross from "../../../public/assets/icons/cross.svg";
import PropTypes from "prop-types"
import"./taskSection.css"
const taskArr=[
    {text:"lorem"}
  ]
const TaskSection = ({isTaskArr,isTaskId,setIsTaskArr}) => {
 console.log(isTaskArr);
 console.log(isTaskId);
 function deleteTask(index){
 let todo = isTaskArr.filter((item,i)=> i !==index)
 setIsTaskArr(todo)
 }
  return (
    <div className="container">
    <section className="taskList">
      {isTaskArr.map((item,index) => {
      isTaskId =isTaskId+1
        return (
          <div className="task" key={isTaskId}>
            <input type="checkbox" className="task-checkbox" id={isTaskId} />
            <label htmlFor={isTaskId} className="task-text">{item}</label>

            <span className="cross-btn" onClick={()=>deleteTask(index)}>
              <Cross />
            </span>
          </div>
        );
      })}
      {isTaskArr.length >0 && <div className="activeBar">
      <p className="taskListCount">{taskArr.length} items left</p>
      <nav className="navbar">
        <ul className="list">
          <li className="list-active">All</li>
          <li>Active</li>
          <li>Completed</li>
        </ul>
      </nav>
      <button className="clear">Clear Completed</button>
    <p className="footer-text">Drag and drop to reorder list</p>
    </div>}
    {isTaskArr.length>0 &&  <div className="media-bar">
      <ul className="list media-list">
          <li className="list-active">All</li>
          <li>Active</li>
          <li>Completed</li>
        </ul>
      </div>}
    </section>
  </div>
  )
}

export default TaskSection
TaskSection.propTypes={
    isTaskArr:PropTypes.array,
    isTaskId:PropTypes.number,
    setIsTaskArr:PropTypes.func
}
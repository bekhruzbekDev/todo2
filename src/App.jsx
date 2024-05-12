import "../src/style/main.css";
import MoonIcon from "../public/assets/icons/moon.svg";
import SummerIcon from "../public/assets/icons/summer.svg";
import Cross from "../public/assets/icons/cross.svg";
import{useState} from "react";

function App() {
  const [taskArr,getTask]=useState([]);
  const[isInputValue,setInputValue]= useState("")
  const [getDark, setISDark] = useState(false);
 function inputValue(e){
  let value =e.target.value
  setInputValue(value)
 }
 function task(){
  if(isInputValue.trim()!==""){
   getTask([...taskArr,isInputValue])
   setInputValue("") 
  }
 }
 function deleteTask(index){
  const todoArr = taskArr.filter((item,i)=> i !==index)
  getTask(todoArr)
 }
  function darkMode() {
    if (getDark == true) {
      setISDark(false);
    } else {
      setISDark(true);
    }
    localStorage.setItem("dark-mode", getDark); 
  }
  let bool = localStorage.getItem("dark-mode");
  return (
    <div className={bool == "true" ? "dark" : ""} id="wrapper">
      <header
        className={bool == "true" ? "header-dark" : "header-light"}
        id="header"
      >
        <div className="container header-container">
          <div className="title">
            <h1>TODO</h1>
            <span className="darkModeBtn" onClick={darkMode}>
              {bool == "true" ? <SummerIcon /> : <MoonIcon />}
            </span>
          </div>
          <div className="todo-input">
            <input type="checkbox" className="checkbox" onChange={task}/>
            <input type="text" placeholder="Create a new todo…"  onBlur={inputValue}/>
          </div>
        </div>
      </header>
      <div className="container">
        <section className="taskList">
          {taskArr.map((item,index) => {
            return (
              <div className="task" key={index}>
                <input type="checkbox" className="task-checkbox" id={index} />
                <label htmlFor={index} className="task-text">{item}</label>

                <span className="cross-btn" onClick={()=>deleteTask(index)}>
                  <Cross />
                </span>
              </div>
            );
          })}
          {taskArr.length >0 && <div className="activeBar">
          <p className="taskListCount">5 items left</p>
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
        {taskArr.length>0 &&  <div className="media-bar">
          <ul className="list media-list">
              <li className="list-active">All</li>
              <li>Active</li>
              <li>Completed</li>
            </ul>
          </div>}
        </section>
      </div>
    </div>
  );
}

export default App;


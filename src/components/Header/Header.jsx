import MoonIcon from "../../../public/assets/icons/moon.svg";
import SummerIcon from "../../../public/assets/icons/summer.svg";
import PropTypes from "prop-types";
import "./header.css"
const Header = ({ bool ,darkMode,setIsInputValue,task}) => {
  function inputValue(e){
    if(e.target.value !==""){
      setIsInputValue(e.target.value)
    }
   
  }
  function checkboxFun(e){
  if(e.target.checked);{
task()
setIsInputValue('')
  }
  
  }
  function checked(e){
    e.target.checked= false
  }
  return (
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
          <input type="checkbox" className="checkbox" onClick={checkboxFun} onBlur={checked}/>
          <input
            type="text"
            placeholder="Create a new todo…"
            onBlur={inputValue}
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
Header.propTypes = {
  bool: PropTypes.string,
  darkMode:PropTypes.func,
  setIsInputValue:PropTypes.func,
  task:PropTypes.func
};

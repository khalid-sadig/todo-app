import moonIcon from "../images/icon-moon.svg"
import AddTodo from "./AddTodo"
import ListTodo from "./ListTodo"

var todoStyle = {
    width: '90vw',
    margin: '0 auto',
    paddingTop: '5vh'
 
}
var flexContainer = {
    display: 'flex',
    justifyContent: "space-between",
}

var moonStyle = {
  height: "20px",
  width: "20px"
}

var styleHeader = {
  textTransform: "uppercase",
  letterSpacing: "0.3rem",
  color:"white"
  
}
function TodoApp(){
    return(
      <div style = {todoStyle}>
          <div style={flexContainer}>
            <h2 style ={styleHeader}>todo</h2>
            <img style = {moonStyle} src={moonIcon} alt ="toggle mode"/>
          </div>
          <AddTodo/>
          <ListTodo/>
      </div>
    )
}

export default TodoApp
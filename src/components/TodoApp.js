
import AddTodo from "./AddTodo"
import ListTodo from "./ListTodo"


function TodoApp(){
    return(
      <div className = {'TodoApp'}>
          <div className ={'flex-container'}>
            <h2 className ={'app-header'}>todo</h2>
            <img className = {'moon'} src={'../images/icon-moon.svg'} alt ="toggle mode"/>
          </div>
          <AddTodo/>
          <ListTodo/>
      </div>
    )
}

export default TodoApp
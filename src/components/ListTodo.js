import TodoItem  from "./TodoItem"

function ListTodo(props){
     
    return (
        <div className = {'ListTodo'}>
           {
               props.todoList.map((todo, index) => <TodoItem todoText ={todo.text} key ={todo.id} index = {index} onTodoDeletion = {props.onTodoDeletion} isChecked={todo.isChecked} onTaskStatusChange = {props.onTaskStatusChange}/>)
           }
            <div className = {'list-footer'}>
                <span>all</span>
                <span>active</span>
                <span>completed</span>
            </div>
        </div>
    )
}

export default ListTodo
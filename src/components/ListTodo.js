import TodoItem  from "./TodoItem"

function ListTodo(props){
     
    return (
        <div className = {'ListTodo'}>
           {
               props.todoList.map(
                   (todo, index) => {
                        if(props.filter === 'all'){
                            return (
                                <TodoItem 
                                    todoText ={todo.text}
                                    key ={index} 
                                    index = {index} 
                                    onTodoDeletion = {props.onTodoDeletion} 
                                    completed ={todo.completed} 
                                    onTaskStatusChange = {props.onTaskStatusChange}
                                />
                            )
                        }else if(props.filter === 'active'){
                            if(todo.completed)
                                return null
                            else
                                return (
                                    <TodoItem 
                                        todoText ={todo.text}
                                        key ={todo.id} 
                                        index = {index} 
                                        onTodoDeletion = {props.onTodoDeletion} 
                                        completed ={todo.completed} 
                                        onTaskStatusChange = {props.onTaskStatusChange}
                                    />
                                )
                        }else if(props.filter === 'completed'){
                            if(!todo.completed)
                                return null
                            else
                                return(
                                    <TodoItem 
                                        todoText ={todo.text}
                                        key ={todo.id} 
                                        index = {index} 
                                        onTodoDeletion = {props.onTodoDeletion} 
                                        completed ={todo.completed} 
                                        onTaskStatusChange = {props.onTaskStatusChange}
                                    />
                                )
                        }
                        return null
                   }
                   )
           }
            
        </div>
    )
}

export default ListTodo
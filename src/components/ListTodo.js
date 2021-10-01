import TodoItem  from "./TodoItem"

function ListTodo(){
    return (
        <div className = {'ListTodo'}>
            <TodoItem/>
            <TodoItem/>
            <TodoItem/>
            <TodoItem/>
            <TodoItem/>
            <div className = {'list-footer'}>
                <span>all</span>
                <span>active</span>
                <span>completed</span>
            </div>
        </div>
    )
}

export default ListTodo
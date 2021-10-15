

function AddTodo(props){

    function handleTodoTextChange(e){
        props.onTodoTextChange(e.target.value)
    }

    function handleSubmit(e){
        e.preventDefault()
        props.onAddTodo()
    }
    return (
        <div>
            <form onSubmit = {handleSubmit}>
                <input className={'AddTodo'} type="text" value={props.todoText} onChange={handleTodoTextChange}/>
                <button className = 'addButton'>Add Task</button>
            </form>
            
        </div>
    )
}

export default AddTodo

function TodoItem(props){
    const index = props.index

    function handleClick(){
        props.onTodoDeletion(index)
    }

    function handleTaskStatusChange(e){
        props.onTaskStatusChange(props.completed , index)
    }

    return (
        <div className = {'TodoItem'}>
            <div>
                <input  style ={{display: 'none'}} type ="checkbox"  id = {props.index} checked = {props.completed} onChange = {handleTaskStatusChange}/>
                <label htmlFor= {props.index}> {props.todoText} </label>
            </div>
            <button onClick ={handleClick}>Delete</button>
        </div>
    )
}

export default TodoItem
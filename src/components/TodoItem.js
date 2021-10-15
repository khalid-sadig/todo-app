
function TodoItem(props){

    function handleClick(){
        props.onTodoDeletion(props.index)
    }

    function handleTaskStatus(e){
        props.onTaskStatusChange(e.target.checked , props.index)
    }

    return (
        <div className = {'TodoItem'}>
            <div>
                <input   style ={{display : 'none'}}type ="checkbox"  id = {props.index} checked = {props.isChecked} onChange = {handleTaskStatus}/>
                <label htmlFor= {props.index}> {props.todoText} </label>
            </div>
            <button onClick ={handleClick}>Delete</button>
        </div>
    )
}

export default TodoItem
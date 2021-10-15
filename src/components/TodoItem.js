
function TodoItem(props){

    function handleClick(){
        props.onTodoDeletion(props.index)
    }

    return (
        <div className = {'TodoItem'}>
            <div>
                <input  type ="checkbox" />
                <span >{props.todoText}</span>
            </div>
            <button onClick ={handleClick}>delete</button>
        </div>
    )
}

export default TodoItem
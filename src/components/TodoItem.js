
function TodoItem(){
    return (
        <div className = {'TodoItem'}>
            <div>
                <input  type ="checkbox" />
                <span >some text</span>
            </div>
            <button>delete</button>
        </div>
    )
}

export default TodoItem

var addTodoStyle = {
    all: "unset",
    width: "80%",
    display:"block",
    margin: "auto",
    height: "100%",
    marginTop: "5vh",
    fontSize: "1rem",
    background: "transparent",
    color: 'white',
    borderBottom: "1px solid white"
}
function AddTodo(){
    return (
        <div>
            <input style={addTodoStyle} type="text" placeholder ="What needs to be done?"/>
        </div>
    )
}

export default AddTodo
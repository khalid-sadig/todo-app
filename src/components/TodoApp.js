import {useState} from 'react'
import AddTodo from "./AddTodo"
import ListTodo from "./ListTodo"


function TodoApp(){
  const [todoText, setTodoText] = useState('What needs to be done?')
  const [todoList, setTodoList] = useState([])

  function handleTodoTextChange(newTodoText){
    setTodoText(newTodoText)
  }

  function addTodo(){
    setTodoList((prev) => {
      return [...prev,{id: prev.length + 1, text: todoText, completed: false}]
    })

    setTodoText('')
  }

  function handleTodoDeletion(index){
    setTodoList(prev => {
      let newTodoList  = [...prev]
      newTodoList.splice(index, 1)
      return [...newTodoList]
    })
  }

  function handleTaskStatusChange(completed, index){
    setTodoList(prev => {
      let newTodoList = [...prev]
      newTodoList[index].completed = !completed
      return [...newTodoList]
    })  
  }
    return(
      <div className = {'TodoApp'}>
          <div className ={'flex-container'}>
            <h2 className ={'app-header'}>todo</h2>
            <img className = {'moon'} src={'../images/icon-moon.svg'} alt ="toggle mode"/>
          </div>
          <AddTodo todoText = {todoText} onTodoTextChange = {handleTodoTextChange} onAddTodo = {addTodo}/>
          <ListTodo todoList ={todoList} onTodoDeletion = {handleTodoDeletion} onTaskStatusChange = {handleTaskStatusChange}/>
      </div>
    )
}

export default TodoApp
import { useState } from "react";
import AddTodo from "./AddTodo";
import ListTodo from "./ListTodo";

function TodoApp() {
  const [todoText, setTodoText] = useState("What needs to be done?");
  const [todoList, setTodoList] = useState([]);
  const [filter, setFilter] = useState("all");

  function handleTodoTextChange(newTodoText) {
    setTodoText(newTodoText);
  }

  function addTodo() {
    setTodoList((prev) => {
      return [...prev, { text: todoText, completed: false }];
    });

    setTodoText("");
  }

  function handleTodoDeletion(index) {
    setTodoList((prev) => {
      let newTodoList = [...prev];
      newTodoList.splice(index, 1);
      return [...newTodoList];
    });
  }

  function handleTaskStatusChange(completed, index) {
    setTodoList((prev) => {
      let newTodoList = [...prev];
      newTodoList[index].completed = !completed;
      return [...newTodoList];
    });
  }

  function handleFilterClick(e) {
    setFilter(e.target.textContent);
  }
  return (
    <div className="TodoApp">
      <div className="background">
        <h2 className={"app-header"}>todo</h2>

        <AddTodo
          todoText={todoText}
          onTodoTextChange={handleTodoTextChange}
          onAddTodo={addTodo}
        />
      </div>
      <ListTodo
        filter={filter}
        todoList={todoList}
        onTodoDeletion={handleTodoDeletion}
        onTaskStatusChange={handleTaskStatusChange}
      />
      <div className={"filter"}>
        <button onClick={handleFilterClick}>all</button>
        <button onClick={handleFilterClick}>active</button>
        <button onClick={handleFilterClick}>completed</button>
      </div>
    </div>
  );
}

export default TodoApp;

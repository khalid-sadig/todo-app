import TodoApp from "./components/TodoApp"



function App() {
  return (
      <div className={'app'}>
        <img className ={'mobile-header'} src="./images/bg-mobile-light.jpg" alt="header"/>
        <img className = {'desktop-header'} src="./images/bg-desktop-light.jpg" alt="header"/>
                <TodoApp/>
        </div>
  );
}

export default App;

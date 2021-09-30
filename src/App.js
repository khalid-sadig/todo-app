import TodoApp from "./components/TodoApp"
import headerImage from "./images/bg-mobile-light.jpg" 


var headerStyle = {
backgroundImage:`url(${headerImage})`,
backgroundRepeat: "no-repeat",
height: "100vh",
maxWidth:"100%"
}



function App() {
  return (
      <div style={headerStyle}>
                <TodoApp/>
        </div>
  );
}

export default App;

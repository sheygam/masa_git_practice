import './App.css';
import LoginPage from './components/LoginPage';
import TodoList from './components/TodoList';

function App() {
  return (
    <div className="App">
<h2>Hello World</h2>
     <ul>
      <li>Home</li>
    </ul>

     <TodoList/>
     <LoginPage/>
    </div>
  );
}

export default App;

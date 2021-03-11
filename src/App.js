import './App.css';
import LoginPage from './components/LoginPage';
import TodoList from './components/TodoList';

function App() {
  return (
    <div className="App">
     <TodoList/>
     <LoginPage/>
    </div>
  );
}

export default App;

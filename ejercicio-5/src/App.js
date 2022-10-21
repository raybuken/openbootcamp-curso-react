import './App.css';
import TaskList from './components/container/TaskList'
import RegisterForm from './components/pure/forms/registerForm';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <TaskList/>

      </header>
    </div>
  );
}

export default App;

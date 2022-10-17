import './App.css';

import ContactList from './components/container/ContactList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className='card bg-dark'>
          <div className='card-header text-center'>
            Contact List
          </div>
          <div className='card-body'>
            <ContactList/>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [reverse, setReverse] = useState(false);
  const handleReverse = () => {
    setReverse(!reverse);
  };
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className={reverse ? 'App-logo' : 'App-logo reverse'} alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <button onClick={handleReverse}>Teste</button>
      </header>
    </div>
  );
}

export default App;

import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [counter, setCounter] = useState(0);
  useEffect(() => {
    console.log('ComponentDidUpdate');
  });
  useEffect(() => {
    console.log('ComponentDidMount');
  }, []);
  useEffect(() => {
    console.log('State changed: ', counter);
  }, [counter]);

  return (
    <div className="App">
      <h1>Contador {counter}</h1>
      {/* eslint-disable-next-line no-const-assign */}
      <button onClick={() => setCounter(counter + 1)}>+</button>
    </div>
  );
}

export default App;

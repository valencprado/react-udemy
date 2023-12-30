import logo from './logo.svg';
import './App.css';
import { Component } from 'react'

class App extends Component {
state = {
      name: "Valentina",
      counter: 0
    };

  handleClick = ()=>  {
    this.setState({ name: "teste" });
  }
  handleLink = (event) => {
    event.preventDefault();
    let {counter} = this.state;
    this.setState( {counter: counter + 1});
  }
  render() {
    const { name, counter } = this.state;
    return <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 onClick={this.handleClick}>
          {name} {counter}
        </h1>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
          onClick={this.handleLink}
        >
          Link
        </a>
      </header>
    </div>
  }
}

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//        <h1>
//         Olá mundo!
//        </h1>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;

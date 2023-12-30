import './App.css';
import { Component } from 'react'

class App extends Component {
  state = {
    counter: 0,
    posts: [
      {
        id: 1,
        title: "título 1",
        "description": "Olá"
      }, {
        id: 2,
        title: "título 2",
        "description": "Bom dia"
      }, {
        id: 3,
        title: "título 3",
        "description": "Prazer"
      }
    ]
  };
  timeoutUpdate = null;
  componentDidMount() {
    this.handleTimeout();
  }
  componentDidUpdate() {
    this.handleTimeout();
  }
  componentWillUnmount() {
    clearTimeout(this.timeoutUpdate);
  }
  handleTimeout = () => {
    const {posts, counter} = this.state;
    posts[0].title = "Mudança";
    this.timeoutUpdate = setTimeout(() => {
      // assim que o componente montar, busca dados na API
      // configuração do estado a partir disso
    this.setState({posts, counter: counter + 1});
    }, 1000);
  }

  render() {
    const { posts, counter } = this.state;
    return <div className="App">
      <p>{counter}</p>
      {posts.map((post) => (
        <div key={post.id}>
          <h2>{post.title}</h2>
          <p>{post.description}</p>
        </div>
      ))}
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

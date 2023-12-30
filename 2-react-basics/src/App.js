import './App.css';
import { Component } from 'react'

class App extends Component {
state = {
  posts: [
    {
      id: 1,
      title: "título 1",
      "description": "Olá"
    },    {
      id: 2,
      title: "título 2",
      "description": "Bom dia"
    },    {
      id: 3,
      title: "título 3",
      "description": "Prazer"
    },

  ]
    };
  render() {
    const { posts } = this.state;
    return <div className="App">
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

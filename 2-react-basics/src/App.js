import './App.css';
import { Component } from 'react'

class App extends Component {
  state = {
   
    posts: [
    ]
  };

 componentDidMount() {
  this.loadPosts();
  }

  loadPosts = async () => {
  const postsResponse = fetch('https://jsonplaceholder.typicode.com/posts')
    const photosResponse = fetch('https://jsonplaceholder.typicode.com/photos')
  const [posts, photos] = await Promise.all([postsResponse, photosResponse])

  const postsJson = await posts.json();
  const photosJson = await photos.json();
  const postsAndPhotos = postsJson.map((post, index) => {
    return {...post, cover: photosJson[index].url}
  })
  this.setState({posts: postsAndPhotos})
  }

  render() {
    const { posts, counter } = this.state;
    return <section className='container'>

    <div className="posts">
      <p>{counter}</p>
      {posts.map((post) => (
      <div className='post'>
        <img src={post.cover} alt='post cover'/>
        <div key={post.id} className='post-content'>
          <h2>{post.title}</h2>
          <p>{post.body}</p>
          </div>
          </div>

      ))}
    </div>
    </section>
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

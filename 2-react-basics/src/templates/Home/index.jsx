import './styles.css';
import { Component } from 'react'
import {Posts} from '../../components/Posts'
import {loadPosts} from '../../utils/loadPosts'

export class Home extends Component {
  state = {

    posts: [
    ]
  };

  async componentDidMount() {
    await this.loadPosts();
  }

  loadPosts = async () => {
    const postsAndPhotos = await loadPosts();
    this.setState({ posts: postsAndPhotos })
  }

  render() {
    const { posts } = this.state;
    return <section className='container'>
      <Posts posts={posts} />
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


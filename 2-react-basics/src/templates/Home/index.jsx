import './styles.css';
import { Component } from 'react'
import { loadPosts } from '../../utils/load-posts'
import { Posts } from '../../components/Posts'
import { Button } from '../../components/Button';
import { TextInput } from '../../components/TextInput';

export class Home extends Component {
  state = {

    posts: [
    ],
    allPosts: [],
    page: 0,
    postsPerPage: 20,
    searchValue: ''
  };

  async componentDidMount() {
    await this.loadPosts();
  }

  loadPosts = async () => {
    const { page, postsPerPage } = this.state;
    const postsAndPhotos = await loadPosts();
    this.setState({ posts: postsAndPhotos.slice(page, postsPerPage), allPosts: postsAndPhotos })
  }

  loadMorePosts = () => {
    // lógica de paginação
    const { page, postsPerPage, allPosts, posts } = this.state;
    const nextPage = page + postsPerPage;
    const nextPosts = allPosts.slice(nextPage, nextPage + postsPerPage);
    posts.push(...nextPosts);
    this.setState({ posts, page: nextPage });
  }

  handleChange = (e) => {
    const { value } = e.target;
    this.setState({ searchValue: value });
  }
  render() {
    const { posts, page, postsPerPage, allPosts, searchValue } = this.state;
    const noMorePosts = page + postsPerPage >= allPosts.length;
    const filteredPosts = !!searchValue ? allPosts.filter(post => {
      return post.title.toUpperCase().includes(searchValue.toUpperCase());
    }) : posts;

    return <section className='container'>
      <div className="search-container">
        {!!searchValue && (
            <h1>Search value: {searchValue}</h1>
        )}
        <TextInput
         searchValue={searchValue} 
         handleChange={this.handleChange} />
      </div>
      {filteredPosts.length > 0 && (
        <Posts posts={filteredPosts} />
      )}
      {filteredPosts.length === 0 && (
        <p>Não existem posts com esse nome. Tem certeza que é isso que está procurando?</p>
      )}
      <div className="button-container">
        {!searchValue && (
          <Button
            text="Load more posts"
            onClick={this.loadMorePosts}
            disabled={noMorePosts}
          />
        )}
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



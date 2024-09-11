import './App.css';
import {useEffect, useMemo, useRef, useState} from 'react'
import P from 'prop-types'

const Post = ({post, handleClick}) => {
  return (<div key={post.id}>
    <h1 style={{fontSize: '1rem'}} onClick={() => handleClick(post.title)}>{post.title}</h1>
    <p>{post.body}</p>
  </div>)
}
Post.propTypes = {
  post: P.shape({
    id: P.number,
    title: P.string,
    body: P.string
  }),
  handleClick: P.func,
}

function App() {
  const [posts, setPosts] = useState([])
  const [value, setValue] = useState('')
  const input = useRef(null)
console.log("Paai")

const handleClick = (value) => {
  setValue(value)
}

useEffect(() => {
fetch('https://jsonplaceholder.typicode.com/posts')
.then(r => r.json())
.then(r => setPosts(r))
}, [])

useEffect(() => {
  input.current.focus()

}, [value])
  return (
    <div className="App">
<p>
  <input ref={input} type="search" value={value} onChange={(e) => setValue(e.target.value)} />
</p>


    {useMemo(() => {
      return posts.length > 0 &&
      posts.map(post => {
        return <Post key={post.id} handleClick={handleClick} post={post}/>
       })
    }, [posts])
   }
    </div>
  );
}

export default App;

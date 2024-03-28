/* eslint-disable react/react-in-jsx-scope */
import { PostCard } from '../PostCard';
import p from 'prop-types'
import './styles.css';

export const Posts = ({ posts = [] }) => (
  <div className="posts">
    {posts.map(post => (
      <PostCard
        key={post.id}
        title={post.title}
        body={post.body}
        id={post.id}
        cover={post.cover}
      />
    ))}
  </div>
);
Posts.defaultProps = {
  posts: []
}


Posts.propTypes = {
  posts: p.arrayOf(p.shape({ title: p.string.isRequired,
    cover: p.string.isRequired,
    body: p.string.isRequired,}))
}

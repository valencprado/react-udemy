/* eslint-disable react/react-in-jsx-scope */
import './styles.css';
import p from 'prop-types';
export const PostCard = ({ title, cover, body }) => (
    <div className="post">
      <img src={cover} alt={title} />
      <div className="post-content">
        <h2>{title}</h2>
        <p>{body}</p>
      </div>
    </div>
  );

  PostCard.propTypes = {
    title: p.string.isRequired,
    cover: p.string.isRequired,
    body: p.string.isRequired,
  }

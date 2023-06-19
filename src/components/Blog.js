import { useState } from 'react';
import PropTypes from 'prop-types';

const Blog = ({ blog, handleLike, currentUser, handleDelete }) => {
  const [details, setDetails] = useState(false);

  const blogStyle = {
    paddingTop: 10,
    paddingLeft: 2,
    border: 'solid',
    borderWidth: 1,
    marginBottom: 5
  };

  function toggleDetails() {
    setDetails(!details);
  }

  async function likeBlog() {
    await handleLike({ ...blog, likes: ++blog.likes });
  }

  async function removeBlog() {
    if(window.confirm(`Remove ${blog.title} blog ?`)) {
      await handleDelete(blog.id);
    }
  }

  Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    currentUser: PropTypes.object.isRequired,
    handleDelete: PropTypes.func.isRequired,
    handleLike: PropTypes.func.isRequired,
  };

  return (
    <div style={blogStyle}>
      <div>
        {blog.title} {blog.author}
        <button onClick={toggleDetails}>view</button>
      </div>
      <div style={details ? { display: '' } : { display: 'none' }}>
        <a href={blog.url}>{blog.url}</a>
        <p>
          likes: {blog.likes}
          <button onClick={likeBlog}>like</button>
        </p>
        <p>{blog.user.name}</p>
        {
          blog.user.username === currentUser.username ?
            <button onClick={removeBlog} >remove</button> :
            null
        }
      </div>
    </div>
  );
};

export default Blog;
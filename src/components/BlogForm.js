import { useState } from 'react';
import PropTypes from 'prop-types';

const BlogForm = ({ handleCreate }) => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [url, setUrl] = useState('');

  async function createBlog(e) {
    e.preventDefault();
    await handleCreate({
      title,
      author,
      url
    });
    setTitle('');
    setAuthor('');
    setUrl('');
  }

  BlogForm.propTypes = {
    handleCreate: PropTypes.func.isRequired
  };

  return (
    <form  onSubmit={createBlog}>
      <div>
          title:
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div>
          author:
        <input
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
      </div>
      <div>
          url:
        <input
          value={url}
          onChange={(e) => setUrl(e.target.value)}
        />
      </div>
      <button type="submit" >create</button>
    </form>
  );
};

export default BlogForm;
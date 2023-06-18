import { useState } from "react";

const Blog = ({blog}) => {
  const [details, setDetails] = useState(false);

  const blogStyle = {
    paddingTop: 10,
    paddingLeft: 2,
    border: 'solid',
    borderWidth: 1,
    marginBottom: 5
  }

  function toggleDetails() {
    setDetails(!details);
  }

  return (
    <div style={blogStyle}>
      <div>
        {blog.title} {blog.author}
        <button onClick={toggleDetails}>view</button>
      </div>
      <div style={details ? { display: '' } : { display: 'none' }}>
        <p>{blog.url}</p>
        <p>
          likes: {blog.likes}
          <button>like</button>
        </p>
        <p>{blog.user.name}</p>
      </div>  
    </div>  
  );
}

export default Blog;
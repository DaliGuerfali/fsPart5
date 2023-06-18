import { useState, useEffect } from 'react';
import blogService from './services/blogs';
import loginService from './services/login';
import BlogForm from './components/BlogForm';
import BlogList from './components/BlogList';
import LoginForm from './components/LoginForm';
import Notification from './components/Notification';
import Togglable from './components/Togglable';

const App = () => {
  const [blogs, setBlogs] = useState([]);
  const [user, setUser] = useState(null);
  
  const [notification, setNotification] = useState(null);

  useEffect(() => {
    blogService.getAll().then(blogs => setBlogs(blogs));
    const  loggedUser = window.localStorage.getItem('loggedBlogAppUser');
    loggedUser && setUser(JSON.parse(loggedUser));
  }, [])


  async function handleLogin(credentials) {
    try {
      const response = await loginService.login(credentials);
      window.localStorage.setItem('loggedBlogAppUser', JSON.stringify(response));
      setUser(response);
    } catch(err) {
      console.log(err);
      setNotification({
        message: 'wrong username or password',
        class: 'error'
      });
    }
  }

  function handleLogout() {
    window.localStorage.removeItem('loggedBlogAppUser');
    setUser(null);
  }

  async function createBlog(blog) {
    blogService.setToken(user.token);
    try {
      await blogService.create(blog);
      const response = await blogService.getAll();
      setBlogs(response);
      setNotification({
        message: `${blog.title} by ${blog.author} added`,
        class: 'success'
      });
    } catch(err) {
      console.log(err);
      setNotification({
        message: 'failed to add blog',
        class: 'error'
      });
    }
  }

  

  if(user === null) {
    return (
      <div>
        <h2>Log in to application</h2>
        <Notification notif={notification} setNotification={setNotification}/>
          <LoginForm handleLogin={handleLogin}/>
      </div>
    );
  } else {
    return (
      <div>
        <h2>blogs</h2>
        <Notification notif={notification} setNotification={setNotification}/>
        <p>
          {user.name} logged in
          <button onClick={handleLogout} >logout</button>
        </p>
        <h2>Create New</h2>
        <Togglable buttonLabel="create new blog" >
          <BlogForm onCreate={createBlog}/>
        </Togglable>
        <BlogList blogs={blogs} user={user}/>
      </div>
  )
}
}

export default App
import { useState } from "react";


const LoginForm = ({ handleLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');  

  async function login(e) {
    e.preventDefault();    
    await handleLogin({ username, password });
    setUsername('');
    setPassword('');
  }
  
  return (
        <form onSubmit={login}>
          <div>
            username
            <input 
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              />
          </div>
          <div>
            password 
            <input 
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit" >login</button>
        </form>
    );
}

export default LoginForm;
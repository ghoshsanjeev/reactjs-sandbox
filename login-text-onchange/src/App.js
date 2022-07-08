import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  const [username, setUsername] = useState('');

  const changeUsername = (e) => {
    e.preventDefault();
    setUsername(e.target.value);
  }

  const login = (e) => {
    alert(username + " logged in!");
  }

  return (
    <div className="App">
      <br/><br/><br/>
      <h1>Sign In!</h1>
      <div>
        <div>
          username: <input type='text' onChange={changeUsername}/>
        </div>
        <div>
          password: <input type='password' />
        </div>
        <div><button onClick={login}>Login</button></div>
      </div>
    </div>
  );
}

export default App;

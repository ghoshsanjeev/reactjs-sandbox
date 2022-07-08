import logo from './logo.svg';
import './App.css';
import { createRef, useEffect, useRef } from 'react';

function App() {

  const usernameRef = useRef(null);

  const login = () => {
    alert(usernameRef.current.value + " logged in!");
  };

  useEffect(() => {
    console.log(usernameRef.current);
    usernameRef.current.focus();
  }, []);

  return (
    <div className="App">
      <br /><br /><br />
      <div>
        Username: <input type="text" placeholder="username" ref={usernameRef} />
      </div>
      <div>
        Password: <input type="password" placeholder="password" />
      </div>
      <div>
        <button type='submit' onClick={login}>Login</button>
      </div>
    </div>
  );
}

export default App;

import React, { useState } from 'react';

import auth from '../firebase';

const Login = ({ setSession }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      const response = await auth.signInWithEmailAndPassword(
        username,
        password
      );

      const { user } = response;

      setSession({
        isLoggedIn: true,
        currentUser: user
      });
    } catch (error) {
      setSession({
        isLoggedIn: false,
        currentUser: null,
        errorMessage: error.message
      });
    }
  };

  const handleRegister = async () => {
    try {
      const response = await auth.createUserWithEmailAndPassword(
        username,
        password
      );

      const { user } = response;

      setSession({
        isLoggedIn: true,
        currentUser: user
      });
    } catch (error) {
      setSession({
        isLoggedIn: false,
        currentUser: null,
        errorMessage: error.essage
      });
    }
  };

  const handleUsername = event => {
    setUsername(event.target.value);
  };

  const handlePassword = event => {
    setPassword(event.target.value);
  };

  return (
    <div>
     <main role="main" className="container" style={{marginTop:80}}>
     <div className="row">
     <div className="col-4"></div>
     <div className="col-4">
     <form>
     <div class="form-group">
     <label for="exampleInputEmail1">Email address</label><br></br>
     <input type="email" placeholder="Email" onChange={handleUsername} />
     <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
     </div>
     <div class="form-group">
     <label for="exampleInputPassword1">Password</label><br></br>
     <input type="password" placeholder="Password" onChange={handlePassword} />
     </div>
      <button type="button" onClick={handleLogin}>
        Login
      </button>
      <button type="button" onClick={handleRegister}>
        Register
      </button>
      </form>
      </div>
      </div>
      </main>
    </div>
  );
};

export default Login;


import React, { useState } from 'react';
import auth from '../firebase';
import Img from 'react-image'


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

    <div className="App">
      <main role="main" className="container" style={{ marginTop: 200 }}>
        <Img
          src={'data:image/png;base64,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'}
        />
        <div className="row">
          <div className="col-4"></div>
          <div className="col-4">
            <form>
              <div class="form-group">
                <label for="exampleInputEmail1"><h1 style={{ color: "red" }}>Email address</h1></label><br></br>
                <input type="email" placeholder="Email" onChange={handleUsername} />
                <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
              </div>
              <div class="form-group">
                <label for="exampleInputPassword1"><h1 style={{ color: "red" }}>Password</h1></label><br></br>
                <input type="password" placeholder="Password" onChange={handlePassword} />
              </div>
              <button type="button" onClick={handleLogin}>
                Login</button>
              <button type="button" onClick={handleRegister}>
                Register</button>
            </form>
          </div>
        </div>
      </main>
    </div>

  );
};

export default Login;


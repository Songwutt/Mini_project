import React, { useState, useEffect } from 'react';
import logo from './logo.svg';

import Login from './components/Login';
import auth from './firebase';

import './App.css';

function App() {
  const [session, setSession] = useState({
    isLoggedIn: false,
    currentUser: null,
    errorMessage: null
  });

  useEffect(() => {
    const handleAuth = auth.onAuthStateChanged(user => {
      if (user) {
        setSession({
          isLoggedIn: true,
          currentUser: user,
          errorMessage: null
        });
      }
    });

    return () => {
      handleAuth();
    };
  }, []);

  const handleLogout = () => {
    auth.signOut().then(response => {
      setSession({
        isLoggedIn: false,
        currentUser: null
      });
    });
  };

  return (
    <div className="App">
      {session.isLoggedIn ? (
        <header className="App-header">
          <h1>welcome To {session.currentUser && session.currentUser.email}</h1>
          <br></br>
          <button type="button" onClick={handleLogout}>
            Logout
          </button>
        </header>
      ) : (
        <Login setSession={setSession} />
      )}
    </div>
  );
}

export default App;
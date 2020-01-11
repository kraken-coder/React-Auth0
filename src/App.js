import React, { useContext } from 'react';
import 'bulma/css/bulma.css';
import AuthContext from './context/authContext';

const App = () => {
  const authContext = useContext(AuthContext);
  const { user, loading, loginWithRedirect, logout } = authContext;

  return (
    <div className='hero is-info is-fullheight'>
      <div className='hero-body'>
        <div className='container has-text-centered'>
          {!user && !loading && (
            <>
              <h1>Click Below!</h1>
              <button onClick={loginWithRedirect} className='button is-danger'>
                Login
              </button>
            </>
          )}
          {!loading && user && (
            <>
              <h1>You are now Logged in!</h1>
              <p>Hello {user.name}</p>
              <button
                onClick={() => logout({ returnTo: window.location.origin })}
                className='button is-small is-dark'
              >
                logout
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default App;

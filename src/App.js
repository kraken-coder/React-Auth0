import React, { useContext } from 'react';
import 'bulma/css/bulma.css';
import AuthContext from './context/authContext';

const App = () => {
  const authContext = useContext(AuthContext);
  const { user, loading, loginWithRedirect } = authContext;

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
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default App;

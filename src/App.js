import React, { useContext } from 'react';
import 'bulma/css/bulma.css';
import AuthContext from './context/authContext';

const App = () => {
  const authContext = useContext(AuthContext);

  return (
    <div className='hero is-info is-fullheight'>
      <div className='hero-body'>
        <div className='container has-text-centered'>
          <h1>Click Below!</h1>
          <button
            onClick={authContext.loginWithRedirect}
            className='button is-danger'
          >
            Login
          </button>
          <button
            onClick={console.log(process.env.REACT_APP_CLIENT_ID)}
            className='button is-danger'
          >
            Console log
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;

import React, { useContext } from 'react';
import { Redirect } from 'react-router-dom';
import { UserContext } from '../store/UserContext';

export default function Client() {
  const { user } = useContext(UserContext);

  return (
    <div className="container page page-client">
      <h2>Client-only page</h2>
      {user ? (
        <div> Hello, {user.name}</div>
      ) : (
        <Redirect
          to={{
            pathname: '/login',
            state: {
              reason: 'no-auth',
            },
          }}
        />
      )}
    </div>
  );
}

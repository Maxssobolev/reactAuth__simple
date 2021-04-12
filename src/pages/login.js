import React, { useContext } from 'react';
import { UserContext } from '../store/UserContext';
import { Redirect, useLocation } from 'react-router-dom';
export default function Login() {
  const data = useLocation();
  const { user, setUser } = useContext(UserContext);
  const action = user?.action;

  return (
    <div className="container page page-login">
      <h2>LogIn page</h2>
      {data.state ? <div>Вы должны быть авторизированы для просмотра этой страницы</div> : ''}
      {action && data.state ? <Redirect to="/client" /> : ''}
      {user ? (
        <button onClick={() => setUser(null)}>LogOut</button>
      ) : (
        <button
          onClick={() => {
            setUser({
              name: 'Anon',
              email: 'post@mail.ru',
              action: 'login',
            });
          }}>
          Enter
        </button>
      )}
    </div>
  );
}

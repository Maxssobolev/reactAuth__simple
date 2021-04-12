import React, { useContext } from 'react';
import { UserContext } from '../store/UserContext';

export default function Home() {
  const { user } = useContext(UserContext);

  return (
    <div className="container page page-home">
      <h2>Home page</h2>
    </div>
  );
}

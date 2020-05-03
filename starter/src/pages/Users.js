import React, { useState, useEffect, useContext } from 'react';

import api from '../api';

import { Context } from '../contexts/AuthContext';

export default function Users() {
  const [users, setUsers] = useState([]);

  const { handleLogout } = useContext(Context);

  useEffect(() => {
    (async () => {
      const { data } = await api.get('/users');

      setUsers(data);
    })();
  }, []);

  return (
    <>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.name} ({user.website})
          </li>
        ))}
      </ul>

      <button onClick={handleLogout} type="button">Sair</button>
    </>
  );
}

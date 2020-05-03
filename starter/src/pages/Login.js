import React, { useContext } from 'react';

import { Context } from '../contexts/AuthContext';

export default function Login() {
  const { authenticated, handleLogin } = useContext(Context);

  console.log(authenticated);

  return (
    <button onClick={handleLogin} type="button">
      Entrar
    </button>
  );
}

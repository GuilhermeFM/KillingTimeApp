import React, { useCallback, useState } from 'react';

import { useAuth } from '../../hooks/auth';

const Login: React.FC = () => {
  const [username, setUsername] = useState('');
  const { signIn } = useAuth();

  const handleSignIn = useCallback(() => {
    signIn(username);
  }, [signIn, username]);

  return (
    <div>
      <h1>Login</h1>
      <input type="text" onChange={(e) => setUsername(e.target.value)} />
      <input type="button" value="Entrar" onClick={handleSignIn} />
    </div>
  );
};

export default Login;

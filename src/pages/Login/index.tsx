import React, { useState, useCallback } from 'react';

import { useAuth } from '../../hooks/auth';

import Checkbox from '../../Components/Checkbox';
import facebook from '../../assets/facebook-logo.svg';
import google from '../../assets/google-logo.svg';

import { Container, Background } from './styles';

const Login: React.FC = () => {
  const { signIn } = useAuth();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = useCallback(
    (e: React.BaseSyntheticEvent) => {
      e.preventDefault();

      signIn(username, password);
    },
    [signIn, username, password],
  );

  return (
    <Container>
      <form>
        <h1>Welcome back</h1>
        <h4>Start the adventure</h4>
        <input
          type="text"
          placeholder="Username or email"
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit" onClick={handleSubmit}>
          Login
        </button>

        <div>
          <Checkbox>Remember me</Checkbox>
          <span>
            <a href="/">Forgot password?</a>
          </span>
        </div>

        <hr />

        <div>
          <button id="google" type="button">
            <img src={google} alt="login with google" />
            Login with Google
          </button>
          <button id="facebook" type="button">
            <img src={facebook} alt="login with facebook" />
            Login with Facebook
          </button>
        </div>
      </form>
      <Background />
    </Container>
  );
};

export default Login;

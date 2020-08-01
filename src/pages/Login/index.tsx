import React from 'react';

import Checkbox from '../../Components/Checkbox';

import facebook from '../../assets/facebook-logo.svg';
import google from '../../assets/google-logo.svg';

import { Container, Background } from './styles';

const Login: React.FC = () => {
  return (
    <Container>
      <form>
        <h1>Welcome back</h1>
        <h4>Start the adventure</h4>
        <input type="text" placeholder="Username or email" />
        <input type="text" placeholder="Password" />

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

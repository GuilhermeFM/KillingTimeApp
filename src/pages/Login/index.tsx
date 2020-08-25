import React from 'react';

import Checkbox from '../../Components/Checkbox';

import { Container } from './styles';

import logo from '../../assets/logomarca.png';

const Login: React.FC = () => {
  return (
    <Container>
      <img src={logo} alt="logo" />
      <p>Sign In To Admin</p>

      <form>
        <input type="text" placeholder="Email" />
        <input type="text" placeholder="Password" />

        <div>
          <Checkbox>Remember me</Checkbox>
          <a href="/#">Forget Password</a>
        </div>

        <input type="button" value="Sign In" />
      </form>

      <p>
        Don&#39;t have an account yet? <a href="/#">Sign Up</a>
      </p>
    </Container>
  );
};

export default Login;

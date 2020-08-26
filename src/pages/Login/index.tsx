import React from 'react';

import { Container, Input, Button, Checkbox } from './styles';

import logo from '../../assets/logomarca.png';

const Login: React.FC = () => {
  return (
    <Container>
      <img src={logo} alt="logo" />
      <p>Sign In To Admin</p>

      <form>
        <Input placeholder="Email" />
        <Input placeholder="Password" />

        <div>
          <Checkbox>Remember me</Checkbox>
          <a href="/#">Forget Password</a>
        </div>

        <Button value="Sign In" />
      </form>

      <p>
        Don&#39;t have an account yet? <a href="/#">Sign Up</a>
      </p>
    </Container>
  );
};

export default Login;

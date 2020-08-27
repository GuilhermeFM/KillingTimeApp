import React from 'react';

import { Container, Input, Button, Checkbox } from './styles';

import logo from '../../assets/logomarca.png';

const Login: React.FC = () => {
  return (
    <Container>
      <img src={logo} alt="logo" />

      <form>
        <p>Sign In To Admin</p>

        <Input type="text" placeholder="Email" />
        <Input type="password" placeholder="Password" />

        <div>
          <Checkbox>Remember me</Checkbox>
          <a href="/#">Forget Password</a>
        </div>

        <Button value="Sign In" />

        <p>
          Don&#39;t have an account yet? &nbsp;&nbsp;
          <a href="/#">Sign Up</a>
        </p>
      </form>
    </Container>
  );
};

export default Login;

import React from 'react';
import { Link } from 'react-router-dom';

import { Container, Input, Button, Checkbox } from './styles';

import logo from '../../assets/logo-2.png';

const SignIn: React.FC = () => {
  return (
    <Container>
      <img src={logo} alt="logo" />

      <form>
        <p>Sign In To Admin</p>

        <Input type="text" placeholder="Email" />
        <Input type="password" placeholder="Password" />

        <div>
          <Checkbox>Remember me</Checkbox>
          <Link to="/RecoverPassword">Forget Password</Link>
        </div>

        <Button value="Sign In" />

        <p>
          Don&#39;t have an account yet? &nbsp;&nbsp;
          <Link to="/SignUp">Sign Up</Link>
        </p>
      </form>
    </Container>
  );
};

export default SignIn;

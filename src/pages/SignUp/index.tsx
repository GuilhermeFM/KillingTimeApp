import React from 'react';
import { useHistory } from 'react-router-dom';

import {
  Container,
  Input,
  ButtonSignUp,
  ButtonCancel,
  Checkbox,
} from './styles';

import logo from '../../assets/logo-2.png';

const SignUp: React.FC = () => {
  const history = useHistory();

  return (
    <Container>
      <img src={logo} alt="logo" />

      <form>
        <p id="title">Sign Up</p>
        <p id="description">Enter your details to create your account:</p>

        <Input type="text" placeholder="Fullname" />
        <Input type="text" placeholder="Email" />
        <Input type="password" placeholder="Password" />
        <Input type="password" placeholder="Confirm Password" />

        <div id="terms">
          <Checkbox>I Agree the</Checkbox>
          <a href="/#">terms and conditions.</a>
        </div>

        <div id="controls">
          <ButtonSignUp value="Sign Up" />
          <ButtonCancel value="Cancel" onClick={() => history.push('/')} />
        </div>
      </form>
    </Container>
  );
};

export default SignUp;

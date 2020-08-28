import React from 'react';
import { Link, useHistory } from 'react-router-dom';

import {
  Container,
  Input,
  ButtonRequestPassword,
  ButtonCancel,
} from './styles';

import logo from '../../assets/logo-2.png';

const RecoverPassword: React.FC = () => {
  const history = useHistory();

  return (
    <Container>
      <img src={logo} alt="logo" />

      <form>
        <p id="title">Forgotten Password ?</p>
        <p id="description">Enter your email to reset your password</p>

        <Input type="text" placeholder="Email" />

        <div>
          <ButtonRequestPassword value="Request" />
          <ButtonCancel value="Cancel" onClick={() => history.push('/')} />
        </div>

        <p id="footer">
          Don&#39;t have an account yet? &nbsp;&nbsp;
          <Link to="/SignUp">Sign Up</Link>
        </p>
      </form>
    </Container>
  );
};

export default RecoverPassword;

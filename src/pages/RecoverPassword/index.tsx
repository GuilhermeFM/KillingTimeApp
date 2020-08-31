import React, { useRef, useCallback } from 'react';
import { Link, useHistory } from 'react-router-dom';

import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';

import validate from '../../validations/RecoverPassword';
import logo from '../../assets/logo-2.png';

import {
  Container,
  Input,
  ButtonRequestPassword,
  ButtonCancel,
} from './styles';

const RecoverPassword: React.FC = () => {
  const history = useHistory();
  const formRef = useRef<FormHandles>(null);

  const handleSubmit = useCallback(async (data) => {
    const errors = await validate(data);

    if (formRef.current) {
      formRef.current.setErrors(errors || {});
    }
  }, []);

  return (
    <Container>
      <img src={logo} alt="logo" />

      <Form ref={formRef} onSubmit={handleSubmit}>
        <p id="title">Forgotten Password ?</p>
        <p id="description">Enter your email to reset your password</p>

        <Input type="email" name="email" placeholder="Email" />

        <div id="buttons">
          <ButtonRequestPassword type="submit">Request</ButtonRequestPassword>
          <ButtonCancel type="button" onClick={() => history.push('/')}>
            Cancel
          </ButtonCancel>
        </div>

        <p id="footer">
          Don&#39;t have an account yet? &nbsp;&nbsp;
          <Link to="/SignUp">Sign Up</Link>
        </p>
      </Form>
    </Container>
  );
};

export default RecoverPassword;

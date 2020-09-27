import React, { useRef, useCallback } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FormHandles } from '@unform/core';

import { useToast } from '../../hooks/toast';
import * as service from '../../services/api';
import Form from '../../components/Forms/Vertical';
import Input from '../../components/Inputs/InputText';
import validate from '../../validations/RecoverPassword';
import logo from '../../assets/logo-2.png';

import { Container, ButtonRequestPassword, ButtonCancel } from './styles';

const RecoverPassword: React.FC = () => {
  const history = useHistory();
  const { addToast } = useToast();
  const formRef = useRef<FormHandles>(null);

  const handleSubmit = useCallback(
    async data => {
      const errors = await validate(data);

      if (errors) {
        formRef.current?.setErrors(errors);
        return;
      }

      try {
        const { email } = data;
        const { protocol, hostname, port } = window.location;

        await service.sendResetPasswordLink({
          email,
          remoteViewPath: `${protocol}//${hostname}:${port}/ResetPassword`,
        });

        history.push('/');

        addToast({
          title: 'Success',
          type: 'success',
          content: 'Password reset link sent.',
        });
      } catch (err) {
        addToast({ title: 'Error', type: 'error', content: err.message });
      }
    },
    [addToast, history],
  );

  return (
    <Container>
      <Form ref={formRef} onSubmit={handleSubmit}>
        <img id="logo" src={logo} alt="logo" />
        <p id="title">Forgotten Password ?</p>
        <p id="description">Enter your email to reset your password</p>

        <Input type="email" name="email" placeholder="Email" />

        <div id="formbuttons">
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

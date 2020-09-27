import React, { useRef, useCallback } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { FormHandles } from '@unform/core';

import * as service from '../../services/api';
import { useToast } from '../../hooks/toast';
import validate from '../../validations/ResetPassword';
import logo from '../../assets/logo-2.png';

import { Container, Form, Input, ButtonResetPassword } from './styles';
import IAPIError from '../../errors/APIError';

const ResetPassword: React.FC = () => {
  const history = useHistory();
  const { search } = useLocation();
  const query = new URLSearchParams(search);

  const { addToast } = useToast();
  const formRef = useRef<FormHandles>(null);

  const handleSubmit = useCallback(
    async data => {
      const errors = await validate(data);
      const { password } = data;

      if (errors) {
        formRef.current?.setErrors(errors);
        return;
      }

      try {
        const token = query.get('token');
        const email = query.get('email');

        if (!token || !email) {
          throw new IAPIError('Something went wrong');
        }

        await service.resetPassword({ email, password, token });

        history.push('/');

        addToast({
          title: 'Success',
          type: 'success',
          content: 'Password reset successful',
        });
      } catch (err) {
        addToast({ title: 'Error', type: 'error', content: err.message });
      }
    },
    [addToast, history, query],
  );

  return (
    <Container>
      <Form ref={formRef} onSubmit={handleSubmit}>
        <img id="logo" src={logo} alt="logo" />
        <p id="title">New Password</p>
        <p id="description">Enter your new password bellow</p>

        <Input type="password" name="password" placeholder="Password" />
        <Input
          type="password"
          name="passwordConfirmation"
          placeholder="Confirm password"
        />

        <div id="formbuttons">
          <ButtonResetPassword type="submit">Send</ButtonResetPassword>
        </div>
      </Form>
    </Container>
  );
};

export default ResetPassword;

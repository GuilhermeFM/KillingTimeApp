import React, { useRef, useState, useCallback } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { FormHandles } from '@unform/core';

import IAPIError from '../../errors/APIError';
import * as service from '../../services/api';
import { useToast } from '../../hooks/toast';
import validate from '../../validations/ResetPassword';
import logo from '../../assets/logo-2.png';

import { Container, Form, Input, ButtonResetPassword } from './styles';

const ResetPassword: React.FC = () => {
  const history = useHistory();
  const { addToast } = useToast();
  const { search } = useLocation();
  const query = new URLSearchParams(search);

  const formRef = useRef<FormHandles>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = useCallback(
    async data => {
      const errors = await validate(data);
      const { password } = data;

      if (errors) {
        formRef.current?.setErrors(errors);
      } else {
        formRef.current?.setErrors({});

        setLoading(true);

        try {
          const token = query.get('token');

          if (!token) {
            throw new IAPIError('Something went wrong');
          }

          const message = await service.resetPassword({ password, token });
          addToast({ title: 'Attention !', type: 'info', content: message });
          history.push('/');
        } catch (err) {
          addToast({ title: 'Error', type: 'error', content: err.message });
        }

        setLoading(false);
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
          <ButtonResetPassword
            type="submit"
            loading={loading}
            disabled={loading}
          >
            Send
          </ButtonResetPassword>
        </div>
      </Form>
    </Container>
  );
};

export default ResetPassword;

import React, { useRef, useCallback } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FormHandles } from '@unform/core';

import validate from '../../validations/SignIn';
import IAPIError from '../../errors/APIError';
import { useToast } from '../../hooks/toast';
import { useAuth } from '../../hooks/auth';
import logo from '../../assets/logo-2.png';

import { Container, Form, Input, Button, Checkbox } from './styles';

const SignIn: React.FC = () => {
  const { replace } = useHistory();
  const { signIn } = useAuth();
  const { addToast } = useToast();
  const formRef = useRef<FormHandles>(null);

  const handleSubmit = useCallback(
    async data => {
      const errors = await validate(data);

      if (formRef.current) {
        formRef.current.setErrors(errors || {});
      }

      const { email, password, rememberMe } = data;
      if (!errors) {
        try {
          await signIn(email, password, rememberMe);
          replace('/Dashboard');
        } catch (err) {
          if (err instanceof IAPIError) {
            addToast({
              type: 'error',
              title: 'Not Authorized',
              content: (err as IAPIError).message,
            });
          } else {
            addToast({
              type: 'error',
              title: 'Internal Server Error',
            });
          }
        }
      }
    },
    [addToast, replace, signIn],
  );

  return (
    <Container>
      <Form ref={formRef} onSubmit={handleSubmit}>
        <img id="logo" src={logo} alt="logo" />
        <p id="title">Sign In To Admin</p>
        <p id="description">Enter your details to login to your account:</p>

        <Input type="email" name="email" placeholder="Email" />
        <Input type="password" name="password" placeholder="Password" />

        <div id="formextracontrols">
          <Checkbox name="rememberMe">Remember me</Checkbox>
          <Link to="/RecoverPassword">Forget Password</Link>
        </div>

        <div id="formbuttons">
          <Button type="submit">Sign In</Button>
        </div>

        <p id="footer">
          Don&#39;t have an account yet? &nbsp;&nbsp;
          <Link to="/SignUp">Sign Up</Link>
        </p>
      </Form>
    </Container>
  );
};

export default SignIn;

import React, { useRef, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { FormHandles } from '@unform/core';

import Form from '../../Components/Forms/Vertical';
import validate from '../../validations/SignIn';
import { useAuth } from '../../hooks/auth';
import logo from '../../assets/logo-2.png';

import { Container, Input, Button, Checkbox } from './styles';

const SignIn: React.FC = () => {
  const { signIn } = useAuth();
  const formRef = useRef<FormHandles>(null);

  const handleSubmit = useCallback(
    async (data) => {
      const errors = await validate(data);

      if (formRef.current) {
        formRef.current.setErrors(errors || {});
      }

      const { email, password, rememberMe } = data;
      if (!errors) {
        await signIn(email, password, rememberMe);
      }
    },
    [signIn],
  );

  return (
    <Container>
      <Form ref={formRef} onSubmit={handleSubmit}>
        <img id="logo" src={logo} alt="logo" />
        <p id="title">Sign In To Admin</p>

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

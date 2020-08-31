import React, { useRef, useCallback } from 'react';
import { Link } from 'react-router-dom';

import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';

import validate from '../../validations/SignUp';
import logo from '../../assets/logo-2.png';

import { Container, Input, Button, Checkbox } from './styles';

const SignIn: React.FC = () => {
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
        <p>Sign In To Admin</p>

        <Input type="email" name="email" placeholder="Email" />
        <Input type="password" name="password" placeholder="Password" />

        <div id="placeholder">
          <Checkbox>Remember me</Checkbox>
          <Link to="/RecoverPassword">Forget Password</Link>
        </div>

        <Button type="submit">Sign In</Button>

        <p>
          Don&#39;t have an account yet? &nbsp;&nbsp;
          <Link to="/SignUp">Sign Up</Link>
        </p>
      </Form>
    </Container>
  );
};

export default SignIn;

import React, { useCallback, useRef } from 'react';
import { useHistory } from 'react-router-dom';

import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';

import validate from '../../validations/SignUp';
import logo from '../../assets/logo-2.png';

import {
  Container,
  Input,
  ButtonSignUp,
  ButtonCancel,
  Checkbox,
} from './styles';

const SignUp: React.FC = () => {
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
        <p id="title">Sign Up</p>
        <p id="description">Enter your details to create your account:</p>

        <Input type="text" name="fullname" placeholder="Full name" />
        <Input type="email" name="email" placeholder="Email" />
        <Input type="password" name="password" placeholder="Password" />
        <Input
          type="password"
          name="passwordConfirmation"
          placeholder="Confirm password"
        />

        <div id="terms">
          <Checkbox>I Agree the</Checkbox>
          <a href="/#">terms and conditions.</a>
        </div>

        <div id="controls">
          <ButtonSignUp type="submit">Sign Up</ButtonSignUp>
          <ButtonCancel type="button" onClick={() => history.push('/')}>
            Cancel
          </ButtonCancel>
        </div>
      </Form>
    </Container>
  );
};

export default SignUp;
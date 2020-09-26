import React, { useRef, useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import { FormHandles } from '@unform/core';

import { signUp } from '../../services/api';
import { useToast } from '../../hooks/toast';
import validate from '../../validations/SignUp';
import logo from '../../assets/logo-2.png';

import {
  Container,
  Form,
  Input,
  ButtonSignUp,
  ButtonCancel,
  Checkbox,
} from './styles';

const SignUp: React.FC = () => {
  const history = useHistory();
  const { addToast } = useToast();
  const formRef = useRef<FormHandles>(null);

  const handleSubmit = useCallback(
    async data => {
      const errors = await validate(data);
      const { fullname, email, password } = data;

      if (errors) {
        formRef.current?.setErrors(errors);
        return;
      }

      try {
        await signUp({ fullname, email, password });
        history.push('/');
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

        <div id="formextracontrols">
          <Checkbox name="agreeToTerms">I Agree.</Checkbox>
          <a href="/#">Terms and conditions</a>
        </div>

        <div id="formbuttons">
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

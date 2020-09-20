import React, { useRef, useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import { FormHandles } from '@unform/core';

import api from '../../services/api';
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
    async (data) => {
      const errors = await validate(data);
      const { fullname, email, password, agreeToTerms } = data;

      if (formRef.current) {
        formRef.current.setErrors(errors || {});
      }

      if (!errors && agreeToTerms) {
        try {
          const requestParams = { fullname, email, password };
          const response = await api.post('authenticate/SignUp', requestParams);
          const { status, message } = response.data;

          if (status === 200) {
            history.push('/');
          }

          addToast({
            title: status !== 200 ? 'Error' : 'Success',
            type: status !== 200 ? 'error' : 'success',
            content: message,
          });
        } catch (err) {
          addToast({
            title: 'Error',
            type: 'error',
            content: 'Internal server error',
          });
        }
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

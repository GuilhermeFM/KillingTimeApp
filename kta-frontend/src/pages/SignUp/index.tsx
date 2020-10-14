import React, { useRef, useCallback, useState } from 'react';
import { useSpring, ReactSpringHook, useChain } from 'react-spring';
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
  const [loading, setLoading] = useState(false);

  const formRef = useRef<FormHandles>(null);
  const cancelButtonSpringRef = useRef<ReactSpringHook>({} as ReactSpringHook);
  const signUpButtonSpringRef = useRef<ReactSpringHook>({} as ReactSpringHook);

  const cancelButtonSprings = useSpring({
    opacity: loading ? 0 : 1,
    display: loading ? 'none' : 'initial',
    config: { duration: 10 },
    ref: cancelButtonSpringRef,
  });

  const signUpButtonSprings = useSpring({
    width: loading ? '100%' : '45%',
    config: { duration: 10 },
    ref: signUpButtonSpringRef,
  });

  const chainRefs = loading
    ? [cancelButtonSpringRef, signUpButtonSpringRef]
    : [signUpButtonSpringRef, cancelButtonSpringRef];

  useChain(chainRefs);

  const handleSubmit = useCallback(
    async data => {
      const errors = await validate(data);
      const { fullname, email, password } = data;

      if (errors) {
        formRef.current?.setErrors(errors);
      } else {
        formRef.current?.setErrors({});

        setLoading(true);

        try {
          const { protocol, hostname, port } = window.location;
          const redirectUrl = `${protocol}//${hostname}:${port}/ConfirmEmail`;

          const signUpParams = { fullname, email, password, redirectUrl };
          const message = await signUp(signUpParams);

          addToast({ title: 'Attention', type: 'info', content: message });
        } catch (err) {
          addToast({ title: 'Error', type: 'error', content: err.message });
        }

        setLoading(false);
      }
    },
    [addToast],
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
          <ButtonSignUp
            type="submit"
            loading={loading}
            style={signUpButtonSprings}
            disabled={loading}
          >
            Sign Up
          </ButtonSignUp>
          <ButtonCancel
            type="button"
            onClick={() => history.push('/')}
            style={cancelButtonSprings}
          >
            Cancel
          </ButtonCancel>
        </div>
      </Form>
    </Container>
  );
};

export default SignUp;

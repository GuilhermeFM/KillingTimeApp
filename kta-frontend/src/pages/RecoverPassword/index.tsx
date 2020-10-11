import React, { useRef, useState, useCallback } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FormHandles } from '@unform/core';
import { useSpring, useChain, ReactSpringHook } from 'react-spring';

import { useToast } from '../../hooks/toast';
import * as service from '../../services/api';
import validate from '../../validations/RecoverPassword';

import logo from '../../assets/logo-2.png';
import Form from '../../components/Forms/Vertical';
import Input from '../../components/Inputs/InputText';

import { Container, ButtonRequestPassword, ButtonCancel } from './styles';

const RecoverPassword: React.FC = () => {
  const history = useHistory();
  const { addToast } = useToast();
  const [loading, setLoading] = useState(false);

  const formRef = useRef<FormHandles>(null);

  const cancelButtonSpringsRef = useRef<ReactSpringHook>({} as ReactSpringHook);
  const requestButtonSpringsRef = useRef<ReactSpringHook>(
    {} as ReactSpringHook,
  );

  const cancelButtonSprings = useSpring({
    opacity: loading ? 0 : 1,
    display: loading ? 'none' : 'initial',
    config: { duration: 10 },
    ref: cancelButtonSpringsRef,
  });

  const requestButtonSprings = useSpring({
    width: loading ? '100%' : '45%',
    config: { duration: 10 },
    ref: requestButtonSpringsRef,
  });

  const chainRefs = loading
    ? [cancelButtonSpringsRef, requestButtonSpringsRef]
    : [requestButtonSpringsRef, cancelButtonSpringsRef];

  useChain(chainRefs);

  const handleSubmit = useCallback(
    async data => {
      const errors = await validate(data);

      if (errors) {
        formRef.current?.setErrors(errors);
        return;
      }

      try {
        setLoading(true);

        const { email } = data;
        const { protocol, hostname, port } = window.location;

        await service.sendResetPasswordLink({
          email,
          redirectUrl: `${protocol}//${hostname}:${port}/ResetPassword`,
        });

        addToast({
          title: 'Success',
          type: 'success',
          content: 'Password reset link sent.',
        });
      } catch (err) {
        addToast({ title: 'Error', type: 'error', content: err.message });
      }

      setLoading(false);
    },
    [addToast],
  );

  return (
    <Container>
      <Form ref={formRef} onSubmit={handleSubmit}>
        <img id="logo" src={logo} alt="logo" />
        <p id="title">Forgotten Password ?</p>
        <p id="description">Enter your email to reset your password</p>

        <Input type="email" name="email" placeholder="Email" />

        <div id="formbuttons">
          <ButtonRequestPassword
            type="submit"
            loading={loading}
            style={requestButtonSprings}
            disabled={loading}
          >
            Request
          </ButtonRequestPassword>

          <ButtonCancel
            type="button"
            onClick={() => history.push('/')}
            style={cancelButtonSprings}
          >
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

import React, { useEffect, useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';

import { useToast } from '../../hooks/toast';
import * as service from '../../services/api';
import logo from '../../assets/logo-2.png';

import { Container, Form, ButtonSignUp } from './styles';

const ConfirmEmail: React.FC = () => {
  const history = useHistory();
  const { addToast } = useToast();
  const { search } = useLocation();
  const query = new URLSearchParams(search);

  const [confirmingEmail, setConfirmingEmail] = useState(true);

  useEffect(() => {
    const confirmEmail = async (): Promise<void> => {
      const token = query.get('token');

      if (!token) history.push('/');
      else {
        try {
          await service.confirmEmail({ token });
        } catch (err) {
          addToast({ title: 'Error', type: 'error', content: err.message });
          history.push('/');
        }

        setConfirmingEmail(false);
      }
    };

    confirmEmail();
  }, []);

  return (
    <Container>
      <Form onSubmit={e => e.preventDefault()}>
        <img id="logo" src={logo} alt="logo" />

        {confirmingEmail ? (
          <>
            <p id="title">Confirming your email !!</p>
            <p id="description">
              We are finishing your email confirmation. Please wait....
            </p>
          </>
        ) : (
          <>
            <p id="title">Email Confirmed !!</p>
            <p id="description">
              Your email address is confirmed, you can now access you account.
            </p>
          </>
        )}

        <div id="formbuttons">
          <ButtonSignUp
            type="button"
            loading={confirmingEmail}
            disabled={confirmingEmail}
            onClick={() => history.push('/')}
          >
            Sign In
          </ButtonSignUp>
        </div>
      </Form>
    </Container>
  );
};

export default ConfirmEmail;

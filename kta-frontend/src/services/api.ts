import axios from 'axios';

import IAPIError from '../errors/APIError';

const api = axios.create({
  baseURL: 'http://localhost:8080/api',
});

interface SignUpParams {
  fullname: string;
  email: string;
  password: string;
}

export const signUp = async (params: SignUpParams): Promise<void> => {
  try {
    const response = await api.post('authenticate/SignUp', params);
    const { status, message } = response.data;

    if (status !== 200) {
      throw new IAPIError(message);
    }
  } catch (err) {
    if (err instanceof IAPIError) {
      throw err;
    }

    throw new IAPIError(
      'A error has occurred while processing your request. Try again later',
    );
  }
};

interface SignInParams {
  email: string;
  password: string;
}

export const signIn = async (params: SignInParams): Promise<string> => {
  try {
    const response = await api.post('authenticate/SignIn', params);
    const { status } = response.data;

    if (status !== 200) {
      const { message } = response.data;
      throw new IAPIError(message);
    }

    const { data } = response.data;
    return data;
  } catch (err) {
    if (err instanceof IAPIError) {
      throw err;
    }

    throw new IAPIError(
      'A error has occurred while processing your request. Try again later',
    );
  }
};

interface ISendResetPasswordLink {
  redirectUrl: string;
  email: string;
}

export const sendResetPasswordLink = async (
  params: ISendResetPasswordLink,
): Promise<string> => {
  try {
    const response = await api.post(
      'authenticate/SendResetPasswordLink',
      params,
    );

    const { status } = response.data;

    if (status !== 200) {
      const { message } = response.data;
      throw new IAPIError(message);
    }

    const { data } = response.data;
    return data;
  } catch (err) {
    if (err instanceof IAPIError) {
      throw err;
    }

    throw new IAPIError(
      'A error has occurred while processing your request. Try again later',
    );
  }
};

interface IResetPassword {
  email: string;
  password: string;
  token: string;
}

export const resetPassword = async (params: IResetPassword): Promise<void> => {
  try {
    const response = await api.post('authenticate/ResetPassword', params);

    const { status } = response.data;

    if (status !== 200) {
      const { message } = response.data;
      throw new IAPIError(message);
    }
  } catch (err) {
    if (err instanceof IAPIError) {
      throw err;
    }

    throw new IAPIError(
      'A error has occurred while processing your request. Try again later',
    );
  }
};

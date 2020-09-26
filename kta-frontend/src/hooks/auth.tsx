import React, { createContext, useState, useCallback, useContext } from 'react';
import * as service from '../services/api';

interface IAuthState {
  token: string;
}

interface IAuthContext extends IAuthState {
  signIn(
    username: string,
    password: string,
    rememberMe?: boolean,
  ): Promise<void>;

  signOut(): void;
}

const AuthContext = createContext<IAuthContext>({} as IAuthContext);

export const useAuth = (): IAuthContext => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }

  return context;
};

export const AuthProvider: React.FC = ({ children }) => {
  const [authState, setAuthState] = useState<IAuthState>(() => {
    const token = localStorage.getItem('@kta-token');

    if (token) {
      return { token };
    }

    return {} as IAuthState;
  });

  const signIn = useCallback(
    async (email: string, password: string, rememberMe: boolean) => {
      const token = await service.signIn({ email, password });
      if (rememberMe) localStorage.setItem('@kta-token', JSON.stringify(token));
      setAuthState({ token });
    },
    [],
  );

  const signOut = useCallback(() => {
    localStorage.removeItem('@KTApp:user');
    setAuthState({} as IAuthState);
  }, []);

  return (
    <AuthContext.Provider value={{ token: authState.token, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

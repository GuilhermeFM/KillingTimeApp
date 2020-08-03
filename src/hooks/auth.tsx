import React, { createContext, useState, useCallback, useContext } from 'react';
import api from '../services/api';

interface IUser {
  id: number;
  name: string;
  groups: {
    name: string;
    permissions: {
      id: number;
      path: string;
    }[];
  }[];
}

interface IAuthState {
  user: IUser;
}

interface IAuthContext {
  user: IUser;
  signOut(): void;
  signIn(username: string, password: string): Promise<void>;
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
    const user = localStorage.getItem('@Gobarber:user');

    if (user) {
      return { user: JSON.parse(user) };
    }

    return {} as IAuthState;
  });

  const signIn = useCallback(async (username: string, password: string) => {
    const response = await api.get('usuarios', { params: { q: username } });

    const [user] = response.data;

    localStorage.setItem('@Gobarber:user', JSON.stringify(user));

    setAuthState({ user });
  }, []);

  const signOut = useCallback(() => {
    localStorage.removeItem('@Gobarber:permissoes');
    localStorage.removeItem('@Gobarber:token');
  }, []);

  return (
    <AuthContext.Provider value={{ user: authState.user, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

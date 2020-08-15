import React, { createContext, useState, useCallback, useContext } from 'react';
import api from '../services/api';

export interface INav {
  id: number;
  icon: string;
  name: string;
  url: string;
  items: INavItem[];
}

export interface INavItem {
  id: number;
  icon: string;
  name: string;
  url: string;
}

export interface IUser {
  id: number;
  name: string;
  nav: INav[];
  groups: {
    name: string;
    permissions: {
      id: number;
      path: string;
      icon: string;
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
    const user = localStorage.getItem('@KTApp:user');

    if (user) {
      return { user: JSON.parse(user) };
    }

    return {} as IAuthState;
  });

  const signIn = useCallback(async (username: string, password: string) => {
    const response = await api.get('users', { params: { q: username } });

    const [user] = response.data;

    localStorage.setItem('@KTApp:user', JSON.stringify(user));

    setAuthState({ user });
  }, []);

  const signOut = useCallback(() => {
    localStorage.removeItem('@KTApp:user');
    setAuthState({} as IAuthState);
  }, []);

  return (
    <AuthContext.Provider value={{ user: authState.user, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

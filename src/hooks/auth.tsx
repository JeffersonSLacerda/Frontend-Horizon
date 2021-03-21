import React, { createContext, useCallback, useContext, useState } from 'react';
import api from '../services/api';

interface AuthState {
  token: string;
  user: object;
}

interface SignInCredencials {
  email: string;
  password: string;
}

interface AuthData {
  user: object;
  signIn(credentials: SignInCredencials): Promise<void>;
  signOut(): void;
}

const Auth = createContext<AuthData>({} as AuthData);

export const AuthProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<AuthState>(() => {
    const token = localStorage.getItem('@Hosrizon: token');
    const user = localStorage.getItem('@Hosrizon: user');

    if (token && user) {
      return { token, user: JSON.parse(user) };
    }

    return {} as AuthState;
  });

  const signIn = useCallback(async ({ email, password }) => {
    const response = await api.post('sessions', {
      email,
      password,
    });

    const { userWithoutPassword, token } = response.data;

    localStorage.setItem('@Hosrizon: token', token);
    localStorage.setItem(
      '@Hosrizon: user',
      JSON.stringify(userWithoutPassword)
    );

    setData({ token, user: userWithoutPassword });
  }, []);

  const signOut = useCallback(() => {
    localStorage.removeItem('@Hosrizon: token');
    localStorage.removeItem('@Hosrizon: user');

    setData({} as AuthState);
  }, []);

  return (
    <Auth.Provider value={{ user: data.user, signIn, signOut }}>
      {children}
    </Auth.Provider>
  );
};

export function useAuth(): AuthData {
  const context = useContext(Auth);

  if (!context) {
    throw new Error('useAuth must be used with in an AuthProvider');
  }

  return context;
}

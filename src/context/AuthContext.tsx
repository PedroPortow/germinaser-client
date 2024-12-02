'use client';

import React, { createContext, useEffect, useState } from 'react';
import { User } from '@/types/user';
import { useGetCurrentUser } from '@/hooks';
export interface AuthContextType {
  user: User | undefined;
  isAuthenticated: boolean;
  JWT_LOCAL_STORAGE_KEY: string;
  handleSetToken: (token: string) => void
}

const JWT_LOCAL_STORAGE_KEY = 'userToken'

export const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [token, setToken] = useState<string | null>(null)
  
  const { data: user, isLoading } = useGetCurrentUser(token);

  useEffect(() => {
    const storedToken = localStorage.getItem(JWT_LOCAL_STORAGE_KEY);

    setToken(storedToken);
  }, []);

  const handleSetToken = (newToken: string) => {
    localStorage.setItem(JWT_LOCAL_STORAGE_KEY, newToken);
    setToken(newToken);
  }

  const isAuthenticated = !!user && !isLoading;

  return (
    <AuthContext.Provider value={{ user, isAuthenticated, JWT_LOCAL_STORAGE_KEY, handleSetToken }}>
      {children}
    </AuthContext.Provider>
  );
};

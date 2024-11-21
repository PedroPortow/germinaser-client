'use client';

import React, { createContext, useEffect } from 'react';
import { useQuery, QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { getCurrentUser } from '../services/authService';

interface AuthContextType {
  user: any;
  isLoading: boolean;
  isAuthenticated: boolean;
}

export const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  // const { data: user, isLoading } = useQuery(['currentUser'], getCurrentUser, {
  //   retry: false,
  // });

  // const isAuthenticated = !!user;
  const oi = 'string'

  return (
    <AuthContext.Provider value={{ oi }}>
      {children}
    </AuthContext.Provider>
  );
};


import { useContext } from 'react';
import { AuthContext, AuthContextType } from '@/context/AuthContext';

const useAuthContext = (): AuthContextType => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('provider missing');
  }

  return context;
};

export default useAuthContext
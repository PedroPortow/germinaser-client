import { apiCreateUser } from '@/services/user';
import { useMutation } from '@tanstack/react-query';

// TODO: FIX ANY TYPE, 
export const useCreateUser = ({ ...rest }) => {
  const query = useMutation({
    ...rest,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    mutationFn: (params: any) => apiCreateUser(params),
  });

  return { ...query };
};

export default useCreateUser

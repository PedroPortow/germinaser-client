import { apiUpdateUser } from '@/services/user';
import { useMutation } from '@tanstack/react-query';

// TODO: FIX ANY TYPE, 
export const useUpdateUser = ({ ...rest }) => {
  const query = useMutation({
    ...rest,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    mutationFn: async ({ id, params }: { id: number; params: Record<string, any> }) => apiUpdateUser(id, params),
  });

  return { ...query };
};

export default useUpdateUser
